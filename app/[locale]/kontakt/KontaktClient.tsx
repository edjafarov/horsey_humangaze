"use client";

import styled from "styled-components";
import PageContent from "@/app/components/PageContent";
import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { sendContactMessage } from "@/lib/sendMessageAction";
import { useFormValidation, validators } from "@/lib/useFormValidation";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    order: 2;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    order: 1;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ $hasError?: boolean; $isValid?: boolean }>`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid
    ${(props) =>
      props.$hasError ? "#ff6b6b" : props.$isValid ? "#51cf66" : "#ddd"};
  border-radius: 4px;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#666")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? "rgba(255, 107, 107, 0.1)"
          : "rgba(102, 102, 102, 0.1)"};
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea<{ $hasError?: boolean; $isValid?: boolean }>`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid
    ${(props) =>
      props.$hasError ? "#ff6b6b" : props.$isValid ? "#51cf66" : "#ddd"};
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  width: 100%;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#666")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? "rgba(255, 107, 107, 0.1)"
          : "rgba(102, 102, 102, 0.1)"};
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const ValidationIcon = styled.span<{ $isValid?: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #555;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: -0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: "⚠️";
    font-size: 0.75rem;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "✓";
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const ContactInfo = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ContactDetail = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactLabel = styled.span`
  font-weight: 500;
  color: #555;
  margin-right: 0.5rem;
`;

const InfoLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const CharacterCount = styled.span<{ $isNearLimit?: boolean }>`
  font-size: 0.75rem;
  color: ${(props) => (props.$isNearLimit ? "#ff6b6b" : "#666")};
  text-align: right;
  margin-top: -0.25rem;
`;

export default function KontaktClient() {
  const t = useTranslations("pages.contact");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Custom validation rules
  const validationRules = {
    name: {
      maxLength: 100,
      custom: (value: string) => {
        if (value && !/^[a-zA-ZäöüÄÖÜß\s\-\.]+$/.test(value)) {
          return t("validation.invalidName");
        }
        return undefined;
      },
    },
    email: {
      custom: (value: string) => {
        if (value && !validators.email(value)) {
          return t("validation.invalidEmail");
        }
        return undefined;
      },
    },
    phone: {
      custom: (value: string) => {
        if (value && !validators.phone(value)) {
          return t("validation.invalidPhone");
        }
        return undefined;
      },
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      custom: (value: string) => {
        if (!value.trim()) {
          return t("validation.messageRequired");
        }
        if (value.trim().length < 10) {
          return t("validation.messageTooShort");
        }
        return undefined;
      },
    },
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    validateForm,
    resetForm,
    getFieldProps,
    getFieldError,
    setErrors,
  } = useFormValidation(
    { name: "", email: "", phone: "", message: "" },
    validationRules
  );

  // Custom validation for at least one contact method
  const validateContactMethod = useCallback(() => {
    if (!values.email && !values.phone) {
      setErrors((prev) => ({
        ...prev,
        contact: t("validation.contactRequired"),
      }));
      return false;
    }
    return true;
  }, [values.email, values.phone, setErrors, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const isFormValid = validateForm();
    const hasContactMethod = validateContactMethod();

    if (!isFormValid || !hasContactMethod) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await sendContactMessage(values);
      setSubmitSuccess(true);
      resetForm();
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : t("validation.submitError")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if field is valid (for showing checkmark)
  const isFieldValid = (fieldName: keyof typeof values) => {
    return !!(touched[fieldName] && !errors[fieldName] && values[fieldName]);
  };

  return (
    <PageContent>
      <Title>{t("title")}</Title>

      <Container>
        <LeftColumn>
          <Text>{t("content")}</Text>

          <ContactInfo>
            <ContactInfoTitle>{t("directContactTitle")}</ContactInfoTitle>
            <ContactDetail>
              <ContactLabel>{t("directEmail")}:</ContactLabel>
              <InfoLink href="mailto:nana@humangaze-photography.com">
                nana@humangaze-photography.com
              </InfoLink>
            </ContactDetail>
            <ContactDetail>
              <ContactLabel>{t("directPhone")}:</ContactLabel>
              <InfoLink href="tel:+4915757876828">+49 157 57876828</InfoLink>
            </ContactDetail>
          </ContactInfo>

          <ContactInfo>
            <ContactInfoTitle>{t("locationTitle")}</ContactInfoTitle>
            <ContactDetail>
              Human Gaze Photography
              <br />
              Nataliya Kulykova
              <br />
              Parallelstraße 29A
              <br />
              12209 Berlin
            </ContactDetail>
          </ContactInfo>
        </LeftColumn>

        <RightColumn>
          <FormTitle>{t("formTitle")}</FormTitle>

          {submitSuccess && (
            <SuccessMessage>{t("successMessage")}</SuccessMessage>
          )}

          {submitError && (
            <ErrorMessage style={{ marginBottom: "1rem" }}>
              {submitError}
            </ErrorMessage>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Label htmlFor="name">
                {t("form.name")} ({t("form.optional")})
              </Label>
              <InputWrapper>
                <Input
                  {...getFieldProps("name")}
                  type="text"
                  id="name"
                  disabled={isSubmitting}
                  $hasError={!!getFieldError("name")}
                  $isValid={isFieldValid("name")}
                  maxLength={100}
                />
                {isFieldValid("name") && (
                  <ValidationIcon $isValid>✓</ValidationIcon>
                )}
              </InputWrapper>
              {getFieldError("name") && (
                <ErrorMessage id="name-error">
                  {getFieldError("name")}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="email">{t("form.email")} *</Label>
                <InputWrapper>
                  <Input
                    {...getFieldProps("email")}
                    type="email"
                    id="email"
                    disabled={isSubmitting}
                    $hasError={!!getFieldError("email")}
                    $isValid={isFieldValid("email")}
                    placeholder={t("form.emailPlaceholder")}
                  />
                  {isFieldValid("email") && (
                    <ValidationIcon $isValid>✓</ValidationIcon>
                  )}
                </InputWrapper>
                {getFieldError("email") && (
                  <ErrorMessage id="email-error">
                    {getFieldError("email")}
                  </ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">{t("form.phone")} *</Label>
                <InputWrapper>
                  <Input
                    {...getFieldProps("phone")}
                    type="tel"
                    id="phone"
                    disabled={isSubmitting}
                    $hasError={!!getFieldError("phone")}
                    $isValid={isFieldValid("phone")}
                    placeholder={t("form.phonePlaceholder")}
                  />
                  {isFieldValid("phone") && (
                    <ValidationIcon $isValid>✓</ValidationIcon>
                  )}
                </InputWrapper>
                {getFieldError("phone") && (
                  <ErrorMessage id="phone-error">
                    {getFieldError("phone")}
                  </ErrorMessage>
                )}
              </FormGroup>
            </FormRow>

            {errors.contact && (
              <ErrorMessage style={{ marginTop: "-1rem" }}>
                {errors.contact}
              </ErrorMessage>
            )}

            <FormGroup>
              <Label htmlFor="message">{t("form.message")} *</Label>
              <TextArea
                {...getFieldProps("message")}
                id="message"
                disabled={isSubmitting}
                $hasError={!!getFieldError("message")}
                $isValid={isFieldValid("message")}
                placeholder={t("form.messagePlaceholder")}
                maxLength={1000}
              />
              <CharacterCount $isNearLimit={values.message.length > 900}>
                {values.message.length}/1000
              </CharacterCount>
              {getFieldError("message") && (
                <ErrorMessage id="message-error">
                  {getFieldError("message")}
                </ErrorMessage>
              )}
            </FormGroup>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("form.sending") : t("form.submit")}
            </Button>
          </Form>
        </RightColumn>
      </Container>
    </PageContent>
  );
}
