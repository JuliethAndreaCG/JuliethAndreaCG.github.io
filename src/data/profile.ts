/**
 * Profile data — Julieth Andrea Caicedo Goyeneche
 * Página de Psicología | Psicóloga Clínica y Organizacional
 */
export const profile = {
  name: 'Julieth C. Goyeneche',
  fullName: 'Psicóloga Julieth C. Goyeneche',
  initials: 'JCG',
  location: {
    city: 'Ginebra',
    region: 'Valle del Cauca',
    country: 'Colombia',
    remote: true,
  },
  phone: '+57 311 4770585',
  email: 'psico.jcaicedo@gmail.com',
  photoUrl: '/foto.jpg',
  headlineKey: 'hero.headline',
  taglineKey: 'hero.tagline',
  socials: [
    {
      id: 'instagram',
      url: 'https://www.instagram.com/psico.juliethcg/',
      labelKey: 'socials.instagram',
    },
    {
      id: 'facebook',
      url: 'https://www.facebook.com/PsicoJuliethCG/',
      labelKey: 'socials.facebook',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/julieth-andrea-caicedo-goyeneche',
      labelKey: 'socials.linkedin',
    },
    {
      id: 'email',
      url: 'mailto:psico.jcaicedo@gmail.com',
      labelKey: 'socials.email',
    },
    {
      id: 'phone',
      url: 'https://wa.me/573114770585',
      labelKey: 'socials.phone',
    },
  ],
} as const;

export type Profile = typeof profile;
