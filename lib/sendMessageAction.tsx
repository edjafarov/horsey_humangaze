"use server";

import https from "https";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const sendTelegramMessage = async (messageText: string) => {
  if (!TELEGRAM_TOKEN || !CHAT_ID) {
    console.warn("Telegram token or chat ID not configured");
    return;
  }

  // Ensure message text is not empty
  if (!messageText || messageText.trim() === "") {
    console.warn("Message text is empty");
    return;
  }

  const messageToTelegram = JSON.stringify({
    chat_id: CHAT_ID,
    text: messageText,
    parse_mode: "HTML", // Enable HTML parsing for better formatting
  });

  const options = {
    hostname: "api.telegram.org",
    port: 443,
    path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(messageToTelegram), // More accurate length calculation
    },
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let responseBody = "";

      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        try {
          const response = JSON.parse(responseBody);
          if (response.ok) {
            resolve("Telegram message sent successfully");
          } else {
            console.error("Failed to send Telegram message:", response);
            resolve("Failed to send Telegram message but continuing");
          }
        } catch {
          console.error("Failed to parse Telegram response:", responseBody);
          resolve("Failed to parse Telegram response but continuing");
        }
      });
    });

    req.on("error", (error) => {
      console.error("Telegram request error:", error);
      resolve("Telegram request failed but continuing");
    });

    req.write(messageToTelegram);
    req.end();
  });
};

export const sendContactMessage = async (formData: {
  name?: string;
  email?: string;
  phone?: string;
  message: string;
}) => {
  try {
    // Validate that at least one contact method is provided
    if (!formData.email && !formData.phone) {
      throw new Error("Please provide either an email or phone number");
    }

    // Validate email format if provided
    if (formData.email && !isValidEmail(formData.email)) {
      throw new Error("Please provide a valid email address");
    }

    // Validate phone format if provided
    if (formData.phone && !isValidPhone(formData.phone)) {
      throw new Error("Please provide a valid phone number");
    }

    const messageHtml = `
    <h2>New Contact Form Submission - Horse Photography</h2>
    <p><strong>Name:</strong> ${formData.name || "Not provided"}</p>
    <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
    <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, "<br/>")}</p>
    `;

    // Send email first
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["djkojb@gmail.com", "nana@humangaze-photography.com"],
      subject: `Horse Photography Contact: ${formData.name || "Website Inquiry"}`,
      html: messageHtml,
    });

    if (error) {
      console.error("Email sending error:", error);
      throw new Error("Failed to send email");
    }

    // Try to send Telegram message, but don't fail if it errors
    try {
      const telegramText = `🐴 New Horse Photography Contact


Message:
${formData.message}`;

      await sendTelegramMessage(telegramText);
    } catch (telegramError) {
      console.error("Telegram sending error:", telegramError);
      // Don't throw, just log the error
    }

    return { success: true };
  } catch (error) {
    console.error("Send message error:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to send message"
    );
  }
};

// Validation helper functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Remove spaces, dashes, and parentheses
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  // Check if it contains only numbers and optional + at the start
  const phoneRegex = /^\+?\d{7,15}$/;
  return phoneRegex.test(cleanPhone);
}
