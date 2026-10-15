/**
 * Skill grouping + per-skill metadata for Julieth Caicedo's psychology profile.
 */
export type SkillCategory =
  | 'evaluacion'
  | 'intervencion'
  | 'talento'
  | 'salud-publica'
  | 'herramientas'
  | 'blandas';

export type SkillIconName =
  | 'clipboard'
  | 'document'
  | 'brain'
  | 'alert'
  | 'users'
  | 'heart';

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
  /** Whether this skill is rendered prominently with an icon and larger typography. */
  featured?: boolean;
  /** Icon identifier; only used when `featured: true`. */
  icon?: SkillIconName;
};
