'use client';

import React from 'react';
import { ZoomIn, RotateCcw } from 'lucide-react';

export interface ZoomSliderProps {
  zoom: number;
  onChange: (zoom: number) => void;
  onReset: () => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  ariaLabel?: string;
}

export function ZoomSlider({
  zoom,
  onChange,
  onReset,
  min = 50,
  max = 200,
  step = 1,
  className = '',
  ariaLabel = 'Font preview zoom',
}: ZoomSliderProps) {
  // Calculate percentage fill of the range track: 50..200 range has span of 150
  const fillPercent = Math.min(100, Math.max(0, ((zoom - min) / (max - min)) * 100));

  return (
    <div
      className={`w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-purple-900/40 shadow-lg shadow-purple-500/5 transition-all ${className}`}
    >
      {/* Header: Label, Percentage Display & Reset Button */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-500/10 dark:bg-pink-500/10 text-purple-600 dark:text-pink-400">
            <ZoomIn className="w-4 h-4" />
          </div>
          <label htmlFor="zoom-range-input" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
            Ukuran Preview Font
          </label>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Percentage Badge */}
          <span className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/60 font-mono text-xs sm:text-sm font-extrabold text-purple-700 dark:text-pink-300">
            {zoom}%
          </span>

          {/* Reset Button */}
          <button
            type="button"
            onClick={onReset}
            disabled={zoom === 100}
            title="Reset ke 100%"
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
              zoom !== 100
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 cursor-pointer'
                : 'bg-slate-100/50 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 border border-slate-200/40 dark:border-slate-800/40 cursor-not-allowed opacity-60'
            }`}
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Slider Track Area */}
      <div className="relative pt-1 pb-1">
        {/* Custom Input Range */}
        <div className="relative flex items-center h-7 sm:h-8">
          <input
            id="zoom-range-input"
            type="range"
            min={min}
            max={max}
            step={step}
            value={zoom}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-label={ariaLabel}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={zoom}
            aria-valuetext={`${zoom}%`}
            style={{
              background: `linear-gradient(to right, #9333ea 0%, #ec4899 ${fillPercent}%, var(--track-bg, #e2e8f0) ${fillPercent}%, var(--track-bg, #e2e8f0) 100%)`,
            }}
            className="zoom-slider-range w-full cursor-pointer h-2.5 rounded-lg appearance-none touch-pan-x focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-shadow"
          />
        </div>

        {/* Labels below slider: 50%, 100% (default indicator), 200% */}
        <div className="relative w-full text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 select-none flex items-center justify-between">
          <span className="cursor-pointer hover:text-purple-600 dark:hover:text-pink-400" onClick={() => onChange(min)}>
            {min}%
          </span>

          {/* 100% Default indicator (placed precisely at 33.33% position) */}
          <button
            type="button"
            onClick={() => onChange(100)}
            className={`absolute left-[33.333%] -translate-x-1/2 flex flex-col items-center hover:text-purple-600 dark:hover:text-pink-400 transition-colors ${
              zoom === 100 ? 'text-purple-600 dark:text-pink-400 font-bold' : ''
            }`}
          >
            <span className="w-1 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mb-0.5" />
            <span>100%</span>
          </button>

          <span className="cursor-pointer hover:text-purple-600 dark:hover:text-pink-400" onClick={() => onChange(max)}>
            {max}%
          </span>
        </div>
      </div>
    </div>
  );
}
