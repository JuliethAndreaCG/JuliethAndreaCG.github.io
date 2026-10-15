import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Blob, FloatingCircles } from '../components/Decorations';
import { profile } from '../data/profile';

type Highlight = {
  valueKey: string;
  labelKey: string;
  icon: string;
};

const HIGHLIGHTS: readonly Highlight[] = [
  { valueKey: 'about.highlights.years', labelKey: 'about.highlights.yearsLabel', icon: 'clock' },
  { valueKey: 'about.highlights.families', labelKey: 'about.highlights.familiesLabel', icon: 'family' },
  { valueKey: 'about.highlights.candidates', labelKey: 'about.highlights.candidatesLabel', icon: 'target' },
  { valueKey: 'about.highlights.patients', labelKey: 'about.highlights.patientsLabel', icon: 'heart' },
];

const HighlightIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    clock: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    family: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    target: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    heart: (
      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  };
  return icons[name] || icons.clock;
};

export function About(): JSX.Element {
  const { t } = useTranslation();
  
  // Get WhatsApp URL with custom message
  const whatsappSocial = profile.socials.find((s) => s.id === 'phone');
  const whatsappUrl = whatsappSocial?.url || 'https://wa.me/573114770585?text=Hola%20Julieth%2C%20te%20contacto%20desde%20tu%20sitio%20web.%20Me%20gustar%C3%ADa%20agendar%20una%20cita.';

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <Blob className="left-0 top-0 h-72 w-72 -translate-x-1/2" color="purple" />
      <Blob className="right-0 bottom-1/4 h-64 w-64 translate-x-1/2" color="indigo" />
      <FloatingCircles />
      
      {/* Top decorative line */}
      <div className="absolute left-0 top-16 h-1 w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-30" />
      
      <Container>
        <div className="relative">
          <SectionHeading titleKey="about.title" subtitleKey="about.lead" />
          
          <div className="max-w-5xl">
            <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t('about.body')}
            </p>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t('about.population')}
            </p>
            <p className="mb-8 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t('about.ai')}
            </p>
            
            {/* WhatsApp Button - Blanco con borde morado */}
            <div className="mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-purple-100 bg-white px-8 py-4 text-base font-semibold text-purple-600 shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{t('buttons.contactWhatsApp')}</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Highlight cards with enhanced styling */}
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, index) => (
              <div
                key={h.valueKey}
                className="group relative overflow-hidden rounded-xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative top accent */}
                
                
                {/* Icon */}
                <div className="mb-3">
                  <HighlightIcon name={h.icon} />
                </div>
                
                {/* Value */}
                <dd className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  {t(h.valueKey)}
                </dd>
                
                {/* Label */}
                <dt className="mt-1 text-sm font-medium text-slate-500">
                  {t(h.labelKey)}
                </dt>
              </div>
            ))}
          </dl>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300" />
              <svg className="h-4 w-4 animate-float-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </div>

          {/* Marco regulatorio y fuentes (R02 — citation density) */}
          <aside
            aria-labelledby="about-references-heading"
            className="mt-10 rounded-lg border border-purple-100 bg-purple-50/40 p-5"
          >
            <h3
              id="about-references-heading"
              className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-700"
            >
              {t('about.referencesTitle')}
            </h3>
            <p className="mb-3 text-sm text-slate-600">
              {t('about.referencesBody')}
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  className="text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
                  href="https://www.minsalud.gov.co/salud/publica/SMental/Paginas/Lineamientos.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.refMinsalud')}
                </a>
              </li>
              <li>
                <a
                  className="text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
                  href="https://www.who.int/es/news-room/fact-sheets/detail/mental-disorders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.refOMS')}
                </a>
              </li>
              <li>
                <a
                  className="text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
                  href="https://www.apa.org/topics/cognitive-behavioral-therapy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.refAPA')}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
