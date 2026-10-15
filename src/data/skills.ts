import type { Skill } from '../types/skill';

/**
 * Skills data — Julieth Andrea Caicedo
 * Habilidades adaptadas para perfil de psicología clínica y organizacional
 */
export const skills: readonly Skill[] = [
  // Evaluación y Diagnóstico
  { id: 'cie11', name: 'CIE-11', category: 'evaluacion', level: 5, featured: true, icon: 'clipboard' },
  { id: 'pruebas-psico', name: 'Pruebas Psicotécnicas', category: 'evaluacion', level: 5, featured: true, icon: 'document' },
  { id: 'entrevistas', name: 'Entrevistas Clínicas', category: 'evaluacion', level: 5 },
  { id: 'familiogramas', name: 'Familiogramas', category: 'evaluacion', level: 4 },
  { id: 'ecomapas', name: 'Ecomapas', category: 'evaluacion', level: 4 },

  // Intervención Terapéutica
  { id: 'tcc', name: 'TCC', category: 'intervencion', level: 5, featured: true, icon: 'brain' },
  { id: 'intervencion-crisis', name: 'Intervención en Crisis', category: 'intervencion', level: 5, featured: true, icon: 'alert' },
  { id: 'atencion-clinica', name: 'Atención Clínica', category: 'intervencion', level: 5 },
  { id: 'salud-mental', name: 'Salud Mental', category: 'intervencion', level: 5 },

  // Gestión de Talento
  { id: 'seleccion', name: 'Selección de Personal', category: 'talento', level: 5, featured: true, icon: 'users' },
  { id: 'onboarding', name: 'Onboarding', category: 'talento', level: 4 },
  { id: 'riesgo-psicosocial', name: 'Riesgo Psicosocial', category: 'talento', level: 4 },
  { id: 'clima-laboral', name: 'Clima Laboral', category: 'talento', level: 4 },

  // Salud Pública
  { id: 'aps', name: 'Atención Primaria (APS)', category: 'salud-publica', level: 5, featured: true, icon: 'heart' },
  { id: 'caracterizaciones', name: 'Caracterizaciones', category: 'salud-publica', level: 5 },
  { id: 'planes-cuidado', name: 'Planes de Cuidado', category: 'salud-publica', level: 4 },
  { id: 'diagnosticos-sociales', name: 'Diagnósticos Psicosociales', category: 'salud-publica', level: 4 },

  // Herramientas
  { id: 'excel', name: 'Excel', category: 'herramientas', level: 5 },
  { id: 'powerbi', name: 'Power BI', category: 'herramientas', level: 4 },
  { id: 'spss', name: 'SPSS', category: 'herramientas', level: 3 },
  { id: 'kpis', name: 'KPIs e Indicadores', category: 'herramientas', level: 4 },

  // Habilidades Blandas
  { id: 'liderazgo', name: 'Liderazgo', category: 'blandas', level: 5 },
  { id: 'comunicacion', name: 'Comunicación Asertiva', category: 'blandas', level: 5 },
  { id: 'equipo', name: 'Trabajo en Equipo', category: 'blandas', level: 5 },
  { id: 'ingles', name: 'Inglés', category: 'blandas', level: 3 },
] as const;
