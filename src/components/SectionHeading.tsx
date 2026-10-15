import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

type SectionHeadingProps = {
  /** i18n key for the heading text (e.g. `'about.title'`). */
  titleKey: string;
  /** Optional i18n key for the muted subtitle rendered below the title. */
  subtitleKey?: string;
  align?: 'left' | 'center';
  /**
   * When true, the heading block is marked with `data-reveal` so the
   * global ScrollTrigger batch in `App.tsx` fades it up on scroll.
   * Defaults to false to keep the API explicit.
   */
  reveal?: boolean;
};

export function SectionHeading({
  titleKey,
  subtitleKey,
  align = 'left',
  reveal = false,
}: SectionHeadingProps): JSX.Element {
  const { t } = useTranslation();
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div
      data-reveal={reveal ? '' : undefined}
      className={`mb-8 max-w-2xl ${alignment}`}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p className="mt-2 text-base text-slate-600 sm:text-lg">
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}