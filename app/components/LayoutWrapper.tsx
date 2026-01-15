"use client";

import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f5fd;
`;

const MainContent = styled.main`
  width: 100%;
`;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <MainContent>{children}</MainContent>
    </PageContainer>
  );
}
