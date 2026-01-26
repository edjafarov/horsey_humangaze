'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GalleryGrid.module.css';

interface GalleryGridProps {
  images: string[];
  galleryName: string;
  locale: string;
}

export default function GalleryGrid({ images, galleryName, locale }: GalleryGridProps) {
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleImage = (imagePath: string) => {
    setSelectedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imagePath)) {
        newSet.delete(imagePath);
      } else {
        newSet.add(imagePath);
      }
      return newSet;
    });
  };

  const handleSend = async () => {
    if (selectedImages.size === 0) return;

    setSending(true);
    setError(null);

    try {
      const response = await fetch('/api/gallery-selection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          galleryName,
          selectedImages: Array.from(selectedImages),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send selection');
      }

      setSent(true);
      setSelectedImages(new Set());
    } catch {
      setError(locale === 'de'
        ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
        : 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const translations = {
    de: {
      selected: 'ausgewählt',
      send: 'Auswahl senden',
      sending: 'Wird gesendet...',
      sent: 'Auswahl gesendet!',
    },
    en: {
      selected: 'selected',
      send: 'Send selection',
      sending: 'Sending...',
      sent: 'Selection sent!',
    },
  };

  const t = translations[locale as 'de' | 'en'] || translations.en;

  return (
    <>
      <div className={styles.grid}>
        {images.map((imagePath) => (
          <button
            key={imagePath}
            type="button"
            className={`${styles.imageContainer} ${selectedImages.has(imagePath) ? styles.selected : ''}`}
            onClick={() => toggleImage(imagePath)}
          >
            <Image
              src={imagePath}
              alt=""
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
            {selectedImages.has(imagePath) && (
              <div className={styles.checkmark}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {selectedImages.size > 0 && (
        <div className={styles.bottomBar}>
          <span className={styles.count}>
            {selectedImages.size} {t.selected}
          </span>
          <button
            type="button"
            className={styles.sendButton}
            onClick={handleSend}
            disabled={sending}
          >
            {sending ? t.sending : t.send}
          </button>
        </div>
      )}

      {sent && (
        <div className={styles.successMessage}>
          {t.sent}
        </div>
      )}

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </>
  );
}
