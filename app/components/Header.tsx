"use client";

import styled from "styled-components";
import { useState } from "react";
import Menu from "./Menu";
import dynamic from "next/dynamic";
import { useTranslations } from 'next-intl';

const ImageSlider = dynamic(() => import("./ImageSlider"), {
  ssr: false,
  loading: () => {
    const LoadingComponent = () => {
      const t = useTranslations('header');
      return <LoadingContainer>{t('loading')}</LoadingContainer>;
    };
    return <LoadingComponent />;
  },
});

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #f3f5fd;
  flex-shrink: 0;
  height: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem 4rem 0 2rem;
  }
`;

const SliderSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  min-height: 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #333;
  margin: 0;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: -2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 2rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.3s;
    transform-origin: center;
    position: relative;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translateY(13px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translateY(-13px);
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <TitleSection>
          <Title>
            {t('title')}
            <Subtitle>{t('subtitle')}</Subtitle>
          </Title>
          <HamburgerButton
            className={isMenuOpen ? "open" : ""}
            onClick={toggleMenu}
            type="button"
            aria-label={t('toggleMenu')}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </TitleSection>
        <SliderSection>
          <ImageSlider />
        </SliderSection>
      </HeaderContainer>
      <MobileMenuWrapper>
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </MobileMenuWrapper>
    </>
  );
}
