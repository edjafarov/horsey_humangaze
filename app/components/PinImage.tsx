"use client";

import { styled } from "styled-components";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSeoImageUrl } from "@/app/hooks/useSeoImageUrl";

const PinButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: 10px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  & > span {
    position: unset !important;
  }
  z-index: 0;
  &:hover img,
  &:hover ${PinButton}, &:focus-within ${PinButton} {
    opacity: 1;
  }
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

const StyledImage = styled(Image)`
  width: 100% !important;
  height: unset !important;
  position: relative !important;
  vertical-align: top;

  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

interface PinImageProps extends ImageProps {
  children?: React.ReactNode;
  description?: string;
}

const PinImage = ({ description, ...imageProps }: PinImageProps) => {
  const pathname = usePathname();
  const hostname = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const url = `${hostname}${pathname}`;

  const originalImageSrc =
    typeof imageProps.src === "string"
      ? imageProps.src
      : "src" in imageProps.src
      ? imageProps.src.src
      : "";
  
  // Get SEO-friendly URL for the image
  const seoImageSrc = useSeoImageUrl(originalImageSrc);
  
  // Use SEO URL for Pinterest sharing
  const fullImageSrc = seoImageSrc.startsWith("http")
    ? seoImageSrc
    : `${hostname}${seoImageSrc}`;
  
  const pinDescription = description || imageProps.alt || "";

  return (
    <Container style={{ width: imageProps.style?.width }}>
      <StyledImage {...imageProps} src={seoImageSrc} />
      <PinButton>
        <Link
          href={`http://pinterest.com/pin/create/button/?url=${url}&media=${fullImageSrc}&description=${encodeURIComponent(pinDescription)}`}
          target="_blank"
        >
          {PinItButton}
        </Link>
      </PinButton>
    </Container>
  );
};

export default PinImage;

const PinItButton = (
  <svg
    width="3em"
    height="3em"
    viewBox="0 0 455.731 455.731"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <rect
        x="0"
        y="0"
        width="455.731"
        height="455.731"
        style={{ fill: "#C9353D" }}
      />
      <path
        style={{ fill: "#FFFFFF" }}
        d="M160.601,382C86.223,350.919,37.807,262.343,68.598,172.382C99.057,83.391,197.589,36.788,286.309,69.734c88.972,33.04,132.978,131.213,98.486,219.22c-35.709,91.112-131.442,123.348-203.22,100.617c5.366-13.253,11.472-26.33,15.945-39.943c4.492-13.672,7.356-27.878,10.725-41.037c2.9,2.44,5.814,5.027,8.866,7.439c15.861,12.535,33.805,13.752,52.605,9.232c19.977-4.803,35.764-16.13,47.455-32.78c19.773-28.16,26.751-60.019,21.972-93.546c-4.942-34.668-25.469-59.756-57.65-72.389c-48.487-19.034-94.453-12.626-134.269,22.259c-30.622,26.83-40.916,72.314-26.187,107.724c5.105,12.274,13.173,21.907,25.379,27.695c6.186,2.933,8.812,1.737,10.602-4.724c0.133-0.481,0.295-0.955,0.471-1.422c3.428-9.04,2.628-16.472-3.473-25.199c-11.118-15.906-9.135-34.319-3.771-51.961c10.172-33.455,40.062-55.777,75.116-56.101c9.39-0.087,19.056,0.718,28.15,2.937c27.049,6.599,44.514,27.518,46.264,55.253c1.404,22.242-2.072,43.849-11.742,64.159c-4.788,10.055-11.107,18.996-20.512,25.325c-8.835,5.945-18.496,8.341-28.979,5.602c-14.443-3.774-22.642-16.95-18.989-31.407c3.786-14.985,8.685-29.69,12.399-44.69c1.57-6.344,2.395-13.234,1.751-19.696c-1.757-17.601-18.387-25.809-33.933-17.216c-10.889,6.019-16.132,16.079-18.564,27.719c-2.505,11.992-1.292,23.811,2.61,35.439c0.784,2.337,0.9,5.224,0.347,7.634c-7.063,30.799-14.617,61.49-21.306,92.369c-1.952,9.011-1.59,18.527-2.239,27.815C160.495,377.839,160.601,379.635,160.601,382z"
      />
    </g>
  </svg>
);