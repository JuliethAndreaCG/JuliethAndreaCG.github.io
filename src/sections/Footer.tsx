import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';

/**
 * Footer section:
 * - Marca, ubicación y copyright.
 * - Disclaimer de salud mental (T08 — riesgo YMYL).
 * - Enlaces legales: Política de privacidad + Ética/confidencialidad.
 * - Atribución "built with / deployed on".
 */
export function Footer(): JSX.Element {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="flex flex-col gap-4 text-sm text-slate-500">
          <p className="text-center text-xs italic text-slate-500 sm:text-left">
            {t('footer.disclaimer')}
          </p>

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>{t('footer.copyright', { year })}</p>
            <nav aria-label="legal" className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href="/politica-de-privacidad.html"
                className="underline decoration-slate-300 underline-offset-2 hover:text-slate-700"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="/politica-de-privacidad.html#confidencialidad"
                className="underline decoration-slate-300 underline-offset-2 hover:text-slate-700"
              >
                {t('footer.ethics')}
              </a>
            </nav>
          </div>

          <p className="text-center text-xs text-slate-400 sm:text-right">
            {t('footer.builtWith')} · {t('footer.deployedOn')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
