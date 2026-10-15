import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';
import { Blob, FloatingCircles } from '../components/Decorations';

/**
 * Contact section — simple and clean with SocialLinks
 */
export function Contact(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <Blob className="left-1/4 top-0 h-64 w-64 -translate-x-1/2" color="purple" />
      <Blob className="right-1/4 bottom-0 h-48 w-48 translate-x-1/2" color="fuchsia" />
      <FloatingCircles />
      
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          {/* Decorative icon */}
          <div className="relative mx-auto mb-6 inline-flex">
            {/* Animated ring */}
            <div className="absolute -inset-4 animate-ring-pulse rounded-full bg-purple-200 opacity-50" />
            <div className="absolute -inset-2 animate-pulse-soft rounded-full bg-purple-100 opacity-30" />
            
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-soft">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
          
          <SectionHeading
            titleKey="contact.title"
            subtitleKey="contact.subtitle"
            align="center"
          />
          
          {/* Social links */}
          <div className="mb-8">
            <SocialLinks />
          </div>
          
          {/* Additional info */}
          <div className="flex flex-col items-center gap-4 text-sm text-slate-500">
            <p>{t('contact.responseTime')}</p>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span>{t('contact.privacyNote')}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
