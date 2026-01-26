import { NextResponse } from "next/server";
import { Resend } from "resend";
import https from "https";

const resend = new Resend(process.env.RESEND_KEY);

const sendTelegramMessage = async (messageText: string) => {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if (!TELEGRAM_TOKEN || !CHAT_ID) {
    console.warn("Telegram token or chat ID not configured");
    return;
  }

  if (!messageText || messageText.trim() === "") {
    console.warn("Message text is empty");
    return;
  }

  const messageToTelegram = JSON.stringify({
    chat_id: CHAT_ID,
    text: messageText,
    parse_mode: "HTML",
  });

  const options = {
    hostname: "api.telegram.org",
    port: 443,
    path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(messageToTelegram),
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { galleryName, selectedImages } = body;

    if (!galleryName || !selectedImages || !Array.isArray(selectedImages) || selectedImages.length === 0) {
      return NextResponse.json(
        { error: "Gallery name and selected images are required" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.humangaze-photography.com";

    const imageUrls = selectedImages.map((img: string) => `${baseUrl}${img}`);
    const imageList = imageUrls.map((url: string) => `- ${url}`).join("\n");

    // Send email using Resend
    if (process.env.RESEND_KEY) {
      try {
        const { error } = await resend.emails.send({
          from: "Human Gaze Photography <noreply@humangaze-photography.com>",
          to: ["nana@humangaze-photography.com"],
          cc: ["djkojb@gmail.com"],
          subject: `Gallery Selection - ${galleryName}`,
          html: `
            <h2>Gallery Selection</h2>
            <p><strong>Gallery:</strong> ${galleryName}</p>
            <p><strong>Selected Images (${selectedImages.length}):</strong></p>
            <ul>
              ${imageUrls.map((url: string) => `<li><a href="${url}">${url}</a></li>`).join("")}
            </ul>
          `,
        });

        if (error) {
          console.error("Resend error:", error);
          throw new Error("Failed to send email");
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
      }
    } else {
      console.log("Gallery selection (no email service configured):", {
        galleryName,
        selectedImages,
        timestamp: new Date().toISOString(),
      });
    }

    // Send Telegram notification
    try {
      const telegramText = `<b>Gallery Selection</b>

<b>Gallery:</b> ${galleryName}
<b>Selected Images (${selectedImages.length}):</b>
${imageList}`;

      await sendTelegramMessage(telegramText);
    } catch (telegramError) {
      console.error("Telegram sending error:", telegramError);
    }

    return NextResponse.json(
      { message: "Selection sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Gallery selection error:", error);
    return NextResponse.json(
      { error: "Failed to process selection" },
      { status: 500 }
    );
  }
}
