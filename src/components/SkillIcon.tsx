import type { JSX } from 'react';
import type { SkillIconName } from '../types/skill';

type IconProps = { name: SkillIconName };

/**
 * Icon paths for featured skills in Julieth's psychology profile.
 * Using simple inline SVG paths for clinical/organizational icons.
 */
const ICON_DATA: Record<SkillIconName, { path: string; hex: string; title: string }> = {
  clipboard: { 
    path: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', 
    hex: '3b82f6',
    title: 'Evaluación y Diagnóstico'
  },
  document: { 
    path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z', 
    hex: '6366f1',
    title: 'Documentación'
  },
  brain: { 
    path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', 
    hex: 'ec4899',
    title: 'Terapia Cognitivo-Conductual'
  },
  alert: { 
    path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', 
    hex: 'f59e0b',
    title: 'Intervención en Crisis'
  },
  users: { 
    path: 'M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z', 
    hex: '10b981',
    title: 'Selección de Personal'
  },
  heart: { 
    path: 'M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z', 
    hex: 'ef4444',
    title: 'Salud Pública'
  },
};

/**
 * Renders the SVG icon for a featured skill.
 */
export function SkillIcon({ name }: IconProps): JSX.Element {
  const icon = ICON_DATA[name];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      style={{ color: `#${icon.hex}` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
