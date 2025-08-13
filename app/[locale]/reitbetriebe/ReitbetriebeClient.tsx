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

const Text = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;

  p {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 2rem 0;
    padding-left: 0;
    list-style: none;
  }

  li {
    margin-bottom: 1.2rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: #333;
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function ReitbetriebeClient() {
  const t = useTranslations("pages.ridingStables");

  return (
    <PageContent>
      <Title>{t("title")}</Title>
      <Text dangerouslySetInnerHTML={{ __html: t.raw("content") }} />
    </PageContent>
  );
}
