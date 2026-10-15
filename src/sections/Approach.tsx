import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Blob, FloatingCircles } from '../components/Decorations';

const TOPICS = [
  { key: 'anxiety', icon: '🌿' },
  { key: 'mood', icon: '💙' },
  { key: 'evaluation', icon: '📋' },
  { key: 'community', icon: '👥' },
  { key: 'talent', icon: '🎯' },
  { key: 'crisis', icon: '🆘' },
] as const;

const MODALITIES = ['individual', 'assessment', 'coaching'] as const;

export function Approach(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/30 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Blob className="-left-20 top-0 h-96 w-96" color="purple" />
      <Blob className="-right-20 bottom-0 h-80 w-80" color="violet" />
      <FloatingCircles />
      <Container>
        <SectionHeading titleKey="approach.title" subtitleKey="approach.subtitle" />
        
        <p className="mb-12 max-w-5xl text-lg text-slate-600">
          {t('approach.description')}
        </p>

        {/* Modalities */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-purple-600">
            {t('approach.modalities.title')}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MODALITIES.map((mod) => (
              <div
                key={mod}
                className="rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                  <svg
                    className="h-7 w-7 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {mod === 'individual' && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    )}
                    {mod === 'assessment' && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    )}
                    {mod === 'coaching' && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    )}
                  </svg>
                </div>
                <h4 className="mb-2 font-semibold text-slate-900">
                  {t(`approach.modalities.${mod}`)}
                </h4>
                <p className="text-sm text-slate-600">
                  {t(`approach.modalities.${mod}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div>
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-purple-600">
            {t('approach.topics.title')}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <div
                key={topic.key}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
              >
                <span className="text-2xl" role="img" aria-hidden="true">
                  {topic.icon}
                </span>
                <div>
                  <h4 className="font-medium text-slate-900">
                    {t(`approach.topics.${topic.key}.name`)}
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    {t(`approach.topics.${topic.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
