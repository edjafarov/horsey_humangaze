"use client";

import styled from "styled-components";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';

interface MenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MenuContainer = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  min-width: 300px;
  align-items: flex-end;

  @media (max-width: 1024px) {
    min-width: 200px;
    padding: 1.5rem;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 250px;
    background-color: #f3f5fd;
    z-index: 1000;
    transition: right 0.3s ease;
    padding: 6rem 2rem 2rem;
    box-shadow: ${(props) =>
      props.$isOpen ? "-2px 0 10px rgba(0,0,0,0.1)" : "none"};
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItem = styled(Link)`
  font-size: 1.6rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ExternalLink = styled.a`
  font-size: 1.6rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const LanguageLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? '#333' : '#999'};
  text-decoration: none;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
`;

export default function Menu({ isOpen = false, onClose }: MenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navigation');

  const handleClose = () => {
    if (onClose) onClose();
  };

  // Get the current path without the locale prefix
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'de') {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  };

  const currentPath = getPathWithoutLocale();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    handleClose();

    // Navigate first
    router.push(href);

    // Then scroll to the element after navigation completes
    setTimeout(() => {
      if (href.includes("#")) {
        const id = href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleClose} />

      <MenuContainer $isOpen={isOpen}>
        <MenuItem
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavigation(e, "/")
          }
        >
          {t('home')}
        </MenuItem>
        <MenuItem
          href="/portfolio#top"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavigation(e, "/portfolio#top")
          }
        >
          {t('portfolio')}
        </MenuItem>
        <MenuItem
          href="/preis#top"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavigation(e, "/preis#top")
          }
        >
          {t('price')}
        </MenuItem>
        <MenuItem
          href="/reitbetriebe#top"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavigation(e, "/reitbetriebe#top")
          }
        >
          {t('ridingStables')}
        </MenuItem>
        <MenuItem
          href="/kontakt#top"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleNavigation(e, "/kontakt#top")
          }
        >
          {t('contact')}
        </MenuItem>
        <ExternalLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
        >
          Instagram
        </ExternalLink>
        <LanguageSwitcher>
          <LanguageLink 
            href={currentPath} 
            $active={locale === 'de'}
            onClick={handleClose}
          >
            DE
          </LanguageLink>
          <span style={{ color: '#ccc' }}>|</span>
          <LanguageLink 
            href={`/en${currentPath}`} 
            $active={locale === 'en'}
            onClick={handleClose}
          >
            EN
          </LanguageLink>
        </LanguageSwitcher>
      </MenuContainer>
    </>
  );
}
