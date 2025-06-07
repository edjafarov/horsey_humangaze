"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";

const SliderContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const ImageStrip = styled.div<{
  $translateX: number;
  $isTransitioning: boolean;
}>`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.$translateX}px);
  transition: ${(props) =>
    props.$isTransitioning ? "transform 0.3s ease-out" : "none"};
  will-change: transform;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  pointer-events: none;
  user-select: none;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
  transition: all 0.3s ease;
  z-index: 20;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #666;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.1rem;
  color: #666;
`;

interface ImageSliderProps {
  images?: string[];
}

export default function ImageSlider({ images = [] }: ImageSliderProps) {
  const [imageList] = useState<string[]>(() => {
    if (images.length > 0) {
      return images;
    } else {
      return [
        "/images/Familien-Fotografie-1.jpg",
        "/images/Familien-Fotografie.jpg",
        "/images/family-portrait.jpg",
        "/images/Fotograf-Portraits.jpg",
        "/images/Fotografie-Portraits.jpg",
        "/images/Fotografin-Berlin.jpg",
      ];
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startTranslateX, setStartTranslateX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const currentXRef = useRef(0);

  // Create extended image list for seamless looping
  const extendedImageList = [
    ...imageList.slice(-2), // Last 2 images at the beginning
    ...imageList,
    ...imageList.slice(0, 2), // First 2 images at the end
  ];

  const [imageWidth, setImageWidth] = useState(1000); // Default fallback
  const baseOffset = -2 * imageWidth; // Offset for the prepended images

  // Set proper image width on mount and resize
  useEffect(() => {
    const updateImageWidth = () => {
      setImageWidth(window.innerWidth);
    };

    updateImageWidth(); // Set initial width
    window.addEventListener("resize", updateImageWidth);

    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  // Calculate the correct translateX for a given index
  const getTranslateXForIndex = useCallback(
    (index: number) => {
      return baseOffset - index * imageWidth;
    },
    [baseOffset, imageWidth]
  );

  // Initialize position based on current index
  useEffect(() => {
    if (!isDragging) {
      const newTranslateX = getTranslateXForIndex(currentIndex);
      setTranslateX(newTranslateX);
    }
  }, [currentIndex, imageWidth, baseOffset, isDragging, getTranslateXForIndex]);

  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      const newIndex =
        ((index % imageList.length) + imageList.length) % imageList.length;
      setCurrentIndex(newIndex);

      if (smooth) {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    },
    [imageList.length]
  );

  const nextImage = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevImage = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Drag handlers
  const handleStart = useCallback(
    (clientX: number) => {
      setIsDragging(true);
      setIsTransitioning(false);
      setStartX(clientX);
      setStartTranslateX(translateX);
      currentXRef.current = clientX;
    },
    [translateX]
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;

      const deltaX = clientX - startX;
      const newTranslateX = startTranslateX + deltaX;
      currentXRef.current = clientX;

      setTranslateX(newTranslateX);
    },
    [isDragging, startX, startTranslateX]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);

    // Calculate drag distance using the ref
    const totalDrag = currentXRef.current - startX;
    const threshold = imageWidth * 0.15; // 15% of screen width
    let targetIndex = currentIndex;

    // Determine direction based on total drag
    if (Math.abs(totalDrag) > threshold) {
      if (totalDrag > 0) {
        // Dragged right, go to previous image
        targetIndex = currentIndex - 1;
      } else {
        // Dragged left, go to next image
        targetIndex = currentIndex + 1;
      }
    }

    // Normalize the target index for infinite loop
    let normalizedIndex = targetIndex;
    while (normalizedIndex < 0) normalizedIndex += imageList.length;
    while (normalizedIndex >= imageList.length)
      normalizedIndex -= imageList.length;

    // Snap to the target image with smooth animation
    setIsTransitioning(true);
    setCurrentIndex(normalizedIndex);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [isDragging, startX, imageWidth, currentIndex, imageList.length]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleEnd();
  };

  // Global event listeners for drag
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      handleEnd();
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, startTranslateX, handleMove, handleEnd]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextImage();
      }
      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  // Update position when imageWidth changes
  useEffect(() => {
    if (!isDragging) {
      const newTranslateX = getTranslateXForIndex(currentIndex);
      setTranslateX(newTranslateX);
    }
  }, [imageWidth, currentIndex, isDragging, getTranslateXForIndex]);

  if (imageList.length === 0) {
    return (
      <SliderContainer>
        <LoadingMessage>
          No images found. Please add images to the /public/images folder.
        </LoadingMessage>
      </SliderContainer>
    );
  }

  return (
    <SliderContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ImageStrip
        ref={stripRef}
        $translateX={translateX}
        $isTransitioning={isTransitioning}
      >
        {extendedImageList.map((imageSrc, index) => (
          <ImageWrapper key={`${imageSrc}-${index}`}>
            <StyledImage
              src={imageSrc}
              alt={`Portfolio image ${
                ((((index - 2) % imageList.length) + imageList.length) %
                  imageList.length) +
                1
              }`}
              width={800}
              height={600}
              priority={index === 2 || index === currentIndex + 2} // Prioritize current and first image
              loading={
                index === 2 || index === currentIndex + 2 ? "eager" : "lazy"
              }
            />
          </ImageWrapper>
        ))}
      </ImageStrip>

      <PrevButton onClick={prevImage} style={{ opacity: isDragging ? 0 : 0.7 }}>
        ‹
      </PrevButton>

      <NextButton onClick={nextImage} style={{ opacity: isDragging ? 0 : 0.7 }}>
        ›
      </NextButton>

      {imageList.length > 1 && (
        <ImageCounter>
          {currentIndex + 1} / {imageList.length}
        </ImageCounter>
      )}
    </SliderContainer>
  );
}
