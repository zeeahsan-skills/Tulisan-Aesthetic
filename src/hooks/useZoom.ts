'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tulisan_font_zoom';
const DEFAULT_ZOOM = 100;
const MIN_ZOOM = 50;
const MAX_ZOOM = 200;

export interface UseZoomReturn {
  zoom: number;
  setZoom: (value: number) => void;
  resetZoom: () => void;
  isMounted: boolean;
}

export function useZoom(): UseZoomReturn {
  const [zoom, setZoomState] = useState<number>(DEFAULT_ZOOM);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Restore saved zoom from localStorage on mount (hydration-safe)
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= MIN_ZOOM && parsed <= MAX_ZOOM) {
          setZoomState(parsed);
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  const setZoom = useCallback((value: number) => {
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(value)));
    setZoomState(clamped);
    try {
      localStorage.setItem(STORAGE_KEY, clamped.toString());
    } catch {
      // Ignore localStorage write errors
    }
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(DEFAULT_ZOOM);
  }, [setZoom]);

  return {
    zoom: isMounted ? zoom : DEFAULT_ZOOM,
    setZoom,
    resetZoom,
    isMounted,
  };
}
