import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Blob, FloatingCircles } from '../components/Decorations';

const TOPICS = [
  { key: 'anxiety', icon: 'leaf' },
  { key: 'mood', icon: 'mood' },
  { key: 'evaluation', icon: 'clipboard' },
  { key: 'community', icon: 'community' },
  { key: 'talent', icon: 'talent' },
  { key: 'crisis', icon: 'crisis' },
] as const;

const TopicIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    leaf: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716 6.273M15 19.128c.18-.64.288-1.315.288-2 0-4.142-5.365-7.5-12-7.5C5.365 9.628 0 13.986 0 18.128c0 .685.108 1.36.288 2m15-3.128c.18-.64.288-1.315.288-2 0-4.142-5.365-7.5-12-7.5S1.365 11.986 1.365 16.128c0 .685.108 1.36.288 2" />
      </svg>
    ),
    mood: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    clipboard: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    community: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    talent: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    crisis: (
      <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  };
  return icons[name] || icons.leaf;
};

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
        <SectionHeading titleKey="approach.title" subtitleKey="approach.subtitle" reveal />
        
        <p data-reveal className="mb-12 max-w-5xl text-lg text-slate-600">
          {t('approach.description')}
        </p>

        {/* Modalities */}
        <div data-reveal className="mb-16">
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-purple-600">
            {t('approach.modalities.title')}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {MODALITIES.map((mod) => (
              <div
                key={mod}
                className="rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] hover:-translate-y-1"
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
        <div data-reveal>
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-purple-600">
            {t('approach.topics.title')}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <div
                key={topic.key}
                className="flex items-start gap-3 rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)] hover:-translate-y-0.5"
              >
                <TopicIcon name={topic.icon} />
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
