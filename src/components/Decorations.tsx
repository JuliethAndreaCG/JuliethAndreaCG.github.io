import type { JSX } from 'react';

interface WaveSeparatorProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

/**
 * Decorative wave separator between sections
 */
export function WaveSeparator({ 
  fromColor, 
  toColor, 
  flip = false 
}: WaveSeparatorProps): JSX.Element {
  return (
    <div className={`absolute left-0 w-full overflow-hidden ${flip ? 'top-0 rotate-180' : 'bottom-0'}`} style={{ height: '60px' }}>
      <svg
        className="absolute inset-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60L0 0C0 0 120 40 240 30C360 20 480 0 600 0C720 0 840 20 960 25C1080 30 1200 30 1320 25L1440 20L1440 60Z"
          fill={fromColor}
        />
        <path
          d="M0 60L0 20C0 20 120 25 240 30C360 35 480 45 600 45C720 45 840 35 960 30C1080 25 1200 15 1320 10L1440 5L1440 60Z"
          fill={toColor}
          fillOpacity="0.5"
        />
      </svg>
    </div>
  );
}

/**
 * Floating decorative circles
 */
export function FloatingCircles(): JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-10 top-1/4 h-2 w-2 animate-float rounded-full bg-purple-300 opacity-40" />
      <div className="absolute right-20 top-1/3 h-3 w-3 animate-float-slow rounded-full bg-purple-200 opacity-30" />
      <div className="absolute left-1/3 bottom-1/4 h-2 w-2 animate-float-medium rounded-full bg-purple-400 opacity-25" />
      <div className="absolute right-1/4 bottom-1/3 h-1.5 w-1.5 animate-float rounded-full bg-purple-300 opacity-35" />
    </div>
  );
}

/**
 * Decorative blob shape
 */
export function Blob({ 
  className = '', 
  color = 'purple' 
}: { 
  className?: string; 
  color?: string;
}): JSX.Element {
  const colorClasses = {
    purple: 'bg-purple-200',
    indigo: 'bg-indigo-200',
    violet: 'bg-violet-200',
    fuchsia: 'bg-fuchsia-200',
  };
  
  return (
    <div className={`absolute rounded-full blur-3xl ${colorClasses[color as keyof typeof colorClasses] || colorClasses.purple} opacity-20 ${className}`} />
  );
}

/**
 * Corner decorative element
 */
export function CornerDecoration({ 
  position = 'top-right' 
}: { 
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}): JSX.Element {
  const positions = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };
  
  return (
    <div className={`absolute ${positions[position]} pointer-events-none opacity-10`} aria-hidden="true">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <circle cx="200" cy="0" r="150" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="0" r="100" stroke="#a855f7" strokeWidth="1" />
        <circle cx="200" cy="0" r="50" fill="#a855f7" fillOpacity="0.1" />
      </svg>
    </div>
  );
}
