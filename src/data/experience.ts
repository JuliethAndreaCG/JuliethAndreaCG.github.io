/**
 * Experience data — Julieth Andrea Caicedo
 * Experiencias unificadas con enfoque clínico y organizacional
 */
export type ExperienceItem = {
  id: string;
  titleKey: string;
  company: string;
  periodKey: string;
  sectorKey: string;
  locationKey: string;
  highlights: readonly string[];
  stackKey: string;
};

export const experience: readonly ExperienceItem[] = [
  {
    id: 'hospital-rosario',
    titleKey: 'experience.hospitalRosario.title',
    company: 'Hospital del Rosario - Ministerio de Salud',
    periodKey: 'experience.hospitalRosario.period',
    sectorKey: 'experience.hospitalRosario.sector',
    locationKey: 'experience.hospitalRosario.location',
    highlights: [
      'experience.hospitalRosario.highlights.0',
      'experience.hospitalRosario.highlights.1',
      'experience.hospitalRosario.highlights.2',
      'experience.hospitalRosario.highlights.3',
    ],
    stackKey: 'experience.hospitalRosario.stack',
  },
  {
    id: 'proing',
    titleKey: 'experience.proing.title',
    company: 'PROING S.A.',
    periodKey: 'experience.proing.period',
    sectorKey: 'experience.proing.sector',
    locationKey: 'experience.proing.location',
    highlights: [
      'experience.proing.highlights.0',
      'experience.proing.highlights.1',
      'experience.proing.highlights.2',
      'experience.proing.highlights.3',
    ],
    stackKey: 'experience.proing.stack',
  },
  {
    id: 'cap-upb',
    titleKey: 'experience.capUpb.title',
    company: 'Centro de Atención Psicológica - CAP UPB',
    periodKey: 'experience.capUpb.period',
    sectorKey: 'experience.capUpb.sector',
    locationKey: 'experience.capUpb.location',
    highlights: [
      'experience.capUpb.highlights.0',
      'experience.capUpb.highlights.1',
      'experience.capUpb.highlights.2',
      'experience.capUpb.highlights.3',
    ],
    stackKey: 'experience.capUpb.stack',
  },
] as const;
