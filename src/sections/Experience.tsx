import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Decorations';

export function Experience(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <Blob className="right-0 top-1/4 h-80 w-80 translate-x-1/2" color="purple" />
      <Blob className="left-0 bottom-0 h-64 w-64 -translate-x-1/2" color="indigo" />
      
      <Container>
        <div className="relative">
          <SectionHeading titleKey="experience.title" subtitleKey="experience.subtitle" reveal />
          
          <div data-reveal className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
              >
                {/* Header */}
                <header className="mb-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-sm text-slate-500">{item.company}</p>
                    </div>
                  </div>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {t(item.periodKey)}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      {t(item.sectorKey)}
                    </span>
                  </div>
                </header>
                
                {/* Location */}
                <p className="mb-4 flex items-center gap-1 text-xs text-slate-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {t(item.locationKey)}
                </p>
                
                {/* Highlights */}
                <ul className="mb-4 space-y-2">
                  {item.highlights.slice(0, 3).map((highlightKey) => (
                    <li key={highlightKey} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed">{t(highlightKey)}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Stack */}
                <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                  <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  <span className="text-xs text-slate-500">{t(item.stackKey)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
