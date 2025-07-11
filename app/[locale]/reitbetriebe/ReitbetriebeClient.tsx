"use client";

import styled from "styled-components";
import PageContent from "@/app/components/PageContent";
import { useTranslations } from "next-intl";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

export default function ReitbetriebeClient() {
  const t = useTranslations("pages.ridingStables");

  return (
    <PageContent>
      <Title>{t("title")}</Title>
      <Text>{t("content")}</Text>
    </PageContent>
  );
}
