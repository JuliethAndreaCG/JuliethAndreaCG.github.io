/**
 * Projects/Resources data — Julieth Andrea Caicedo
 * Incluye videos de Facebook y otros recursos
 */
export type VideoItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  facebookUrl: string;
  thumbnailUrl: string;
};

// Videos de Facebook de Julieth
export const videos: readonly VideoItem[] = [
  {
    id: 'video-1',
    titleKey: 'videos.desconectar.title',
    descriptionKey: 'videos.desconectar.description',
    facebookUrl: 'https://www.facebook.com/share/v/1c9nTxyss7/',
    thumbnailUrl: '/videos.png',
  },
  {
    id: 'video-2',
    titleKey: 'videos.regulacionEmocional.title',
    descriptionKey: 'videos.regulacionEmocional.description',
    facebookUrl: 'https://www.facebook.com/share/v/1939iG8ZPL/',
    thumbnailUrl: '/videos.png',
  },
  {
    id: 'video-3',
    titleKey: 'videos.terapia.title',
    descriptionKey: 'videos.terapia.description',
    facebookUrl: 'https://www.facebook.com/share/v/1BuhoCM8rj/',
    thumbnailUrl: '/videos.png',
  },
  {
    id: 'video-4',
    titleKey: 'videos.heridasInfancia.title',
    descriptionKey: 'videos.heridasInfancia.description',
    facebookUrl: 'https://www.facebook.com/share/p/18muKFHwup/',
    thumbnailUrl: '/terapia-ayuda.png',
  },
  // Agregar más videos aquí:
];

export type ProjectItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: readonly ProjectItem[] = [
  // TODO: Agregar recursos o artículos en el futuro
];
