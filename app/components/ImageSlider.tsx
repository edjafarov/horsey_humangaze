"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import { allSliderImagesBilingual, getLocalizedMetadata } from "../data/bilingualImageMetadata";
import { useParams } from "next/navigation";
import { useSeoImageUrl } from "../hooks/useSeoImageUrl";

const TRANSITION_DURATION = 300;
const DRAG_THRESHOLD = 0.15;
const BREAKPOINT_MOBILE = 768;

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 10%;
  max-width: none;
  aspect-ratio: 3 / 2;
  position: relative;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    max-width: 100%;
    aspect-ratio: 3 / 2;
    margin: 0;
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
    props.$isTransitioning
      ? `transform ${TRANSITION_DURATION}ms ease-out`
      : "none"};
  will-change: transform;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f5fd;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
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
  transition: all ${TRANSITION_DURATION}ms ease;
  z-index: 100;
  opacity: 0.7;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.95);
  }

  &:focus-visible {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
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
  background: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 12px;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.1rem;
  color: #666;
`;

interface DragState {
  isDragging: boolean;
  startX: number;
  startTranslateX: number;
  currentX: number;
}

// Separate component to use the hook properly
function SliderImage({ image, priority, loading }: { 
  image: { src: string; alt: string; title: string; }, 
  priority: boolean, 
  loading: "eager" | "lazy" 
}) {
  const seoUrl = useSeoImageUrl(image.src);
  return (
    <StyledImage
      src={seoUrl}
      alt={image.alt}
      title={image.title}
      fill
      priority={priority}
      loading={loading}
    />
  );
}

export default function ImageSlider() {
  const params = useParams();
  const locale = params.locale as 'de' | 'en';
  const imageList = useMemo(() => getLocalizedMetadata(allSliderImagesBilingual, locale), [locale]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    startTranslateX: 0,
    currentX: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(900);

  useEffect(() => {
    const updateImageWidth = () => {
      if (containerRef.current) {
        setImageWidth(containerRef.current.offsetWidth);
      } else {
        setImageWidth(Math.min(window.innerWidth, 900));
      }
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  const extendedImageList = useMemo(
    () => [...imageList.slice(-1), ...imageList, ...imageList.slice(0, 1)],
    [imageList]
  );

  const getTranslateXForIndex = useCallback(
    (index: number) => -(index + 1) * imageWidth,
    [imageWidth]
  );

  useEffect(() => {
    if (!dragState.isDragging) {
      setTranslateX(getTranslateXForIndex(currentIndex));
    }
  }, [currentIndex, imageWidth, dragState.isDragging, getTranslateXForIndex]);

  const normalizeIndex = useCallback(
    (index: number) =>
      ((index % imageList.length) + imageList.length) % imageList.length,
    [imageList.length]
  );

  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      const newIndex = normalizeIndex(index);
      setCurrentIndex(newIndex);

      if (smooth) {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      }
    },
    [normalizeIndex]
  );

  const nextImage = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevImage = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleStart = useCallback(
    (clientX: number) => {
      setDragState({
        isDragging: true,
        startX: clientX,
        startTranslateX: translateX,
        currentX: clientX,
      });
      setIsTransitioning(false);
    },
    [translateX]
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!dragState.isDragging) return;

      const deltaX = clientX - dragState.startX;
      const newTranslateX = dragState.startTranslateX + deltaX;

      setDragState((prev) => ({ ...prev, currentX: clientX }));
      setTranslateX(newTranslateX);
    },
    [dragState.isDragging, dragState.startX, dragState.startTranslateX]
  );

  const handleEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    const totalDrag = dragState.currentX - dragState.startX;
    const threshold = imageWidth * DRAG_THRESHOLD;
    let targetIndex = currentIndex;

    if (Math.abs(totalDrag) > threshold) {
      targetIndex = totalDrag > 0 ? currentIndex - 1 : currentIndex + 1;
    }

    setDragState((prev) => ({ ...prev, isDragging: false }));
    goToSlide(targetIndex);
  }, [dragState, imageWidth, currentIndex, goToSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    if (!dragState.isDragging) return;

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
  }, [dragState.isDragging, handleMove, handleEnd]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        containerRef.current === document.activeElement ||
        document.activeElement?.closest("[data-slider-container]")
      ) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          nextImage();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          prevImage();
        } else if (e.key === "Home") {
          e.preventDefault();
          goToSlide(0);
        } else if (e.key === "End") {
          e.preventDefault();
          goToSlide(imageList.length - 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, goToSlide, imageList.length]);

  if (imageList.length === 0) {
    return (
      <SliderContainer role="region" aria-label="Image gallery">
        <LoadingMessage>
          No images found. Please add images to the /public/images folder.
        </LoadingMessage>
      </SliderContainer>
    );
  }

  return (
    <SliderContainer
      ref={containerRef}
      role="region"
      aria-label="Image gallery"
      aria-live="polite"
      tabIndex={0}
      data-slider-container
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ImageStrip
        $translateX={translateX}
        $isTransitioning={isTransitioning}
        role="group"
        aria-label={`Image ${currentIndex + 1} of ${imageList.length}`}
      >
        {extendedImageList.map((image, index) => (
          <ImageWrapper key={`${image.src}-${index}`} role="img">
            <SliderImage
              image={image}
              priority={index === currentIndex + 1}
              loading={index === currentIndex + 1 ? "eager" : "lazy"}
            />
          </ImageWrapper>
        ))}
      </ImageStrip>

      <PrevButton
        onClick={prevImage}
        disabled={imageList.length <= 1}
        aria-label="Previous image"
        style={{ opacity: dragState.isDragging ? 0 : 0.7 }}
      >
        ‹
      </PrevButton>

      <NextButton
        onClick={nextImage}
        disabled={imageList.length <= 1}
        aria-label="Next image"
        style={{ opacity: dragState.isDragging ? 0 : 0.7 }}
      >
        ›
      </NextButton>

      {imageList.length > 1 && (
        <ImageCounter aria-live="polite">
          {currentIndex + 1} / {imageList.length}
        </ImageCounter>
      )}
    </SliderContainer>
  );
}
