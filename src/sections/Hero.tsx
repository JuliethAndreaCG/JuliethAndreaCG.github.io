import type { JSX, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

/**
 * Enhanced decorative floating shapes for the hero background
 */
function DecorativeShapes(): JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large blob - top right */}
      <div className="absolute -right-20 -top-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-purple-200 opacity-40 blur-3xl" />
      
      {/* Medium blob - bottom left */}
      <div className="absolute -bottom-32 -left-32 h-96 w-96 animate-float-medium rounded-full bg-purple-300 opacity-30 blur-3xl" />
      
      {/* Extra blob - center right */}
      <div className="absolute right-1/4 top-1/2 h-64 w-64 animate-float-slow rounded-full bg-indigo-200 opacity-20 blur-3xl" style={{ animationDelay: '1s' }} />
      
      {/* Floating rings */}
      <div className="absolute right-1/4 top-1/4 animate-pulse-soft">
        <div className="h-32 w-32 rounded-full border border-purple-300 border-opacity-30" />
        <div className="absolute inset-4 rounded-full border border-purple-400 border-opacity-20" />
      </div>
      
      {/* Small circles - various animations */}
      <div className="absolute left-1/4 top-20 h-4 w-4 animate-float rounded-full bg-purple-400 opacity-50">
        <div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-purple-400 opacity-30" />
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 h-3 w-3 animate-float-slow rounded-full bg-purple-500 opacity-40" style={{ animationDelay: '0.5s' }} />
      
      <div className="absolute right-1/3 top-1/3 h-2 w-2 animate-float-medium rounded-full bg-indigo-400 opacity-40" style={{ animationDelay: '1s' }} />
      
      <div className="absolute left-1/3 bottom-1/4 h-5 w-5 animate-float-slow rounded-full bg-purple-300 opacity-30" style={{ animationDelay: '2s' }} />
      
      {/* Decorative dots pattern - top right */}
      <div className="absolute right-20 top-1/4 grid grid-cols-4 gap-3 opacity-25">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i} 
            className="h-2 w-2 rounded-full bg-purple-400" 
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      
      {/* Decorative dots - bottom left */}
      <div className="absolute bottom-1/4 left-10 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="h-1.5 w-1.5 rounded-full bg-indigo-400" 
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      
      {/* Animated wave line at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-15"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="url(#heroGradient)"
        />
        <defs>
          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating geometric shapes */}
      <div className="absolute right-1/3 top-1/2 animate-float opacity-20" style={{ animationDelay: '0.8s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="5" y="5" width="30" height="30" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" transform="rotate(15 20 20)" />
        </svg>
      </div>
      
      <div className="absolute left-1/4 bottom-1/3 animate-float-slow opacity-15" style={{ animationDelay: '1.5s' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" stroke="#c084fc" strokeWidth="1" />
          <circle cx="15" cy="15" r="6" stroke="#a855f7" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

export function Hero(): JSX.Element {
  const { t } = useTranslation();

  const handleScrollTo =
    (id: string) =>
    (e: MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <DecorativeShapes />
      
      <Container>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-8 sm:flex-row sm:items-center">
          {/* Photo with decorative ring */}
          <div className="relative flex-shrink-0">
            {/* Animated ring */}
            <div className="absolute -inset-6 animate-pulse-soft rounded-full bg-gradient-to-br from-purple-300 via-purple-200 to-indigo-200 opacity-40 blur-md" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-200 to-purple-100 opacity-50 blur-sm" />
            
            <img
              src={profile.photoUrl}
              alt={t('about.photoAlt')}
              width={160}
              height={160}
              loading="eager"
              className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-xl"
            />
            
            {/* Decorative badge with brain icon */}
            <div className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg ring-4 ring-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="mb-2 animate-fade-in text-sm font-medium uppercase tracking-widest text-purple-600">
              {t('hero.greeting')}
            </p>
            <h1
              id="hero-heading"
              className="mb-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {profile.fullName}
            </h1>
            <p className="mb-4 text-xl font-semibold text-purple-600 sm:text-2xl">
              {t(profile.headlineKey)}
            </p>
            <p className="mb-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              {t(profile.taglineKey)}
            </p>
            
            {/* CTA Buttons with WhatsApp */}
            <div className="flex flex-wrap gap-4">
              <a href="#approach" onClick={handleScrollTo('approach')}>
                <Button variant="primary" size="lg">
                  {t('hero.ctaPrimary')}
                </Button>
              </a>
              <a href="#contact" onClick={handleScrollTo('contact')}>
                <Button variant="secondary" size="lg">
                  {t('hero.ctaSecondary')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
