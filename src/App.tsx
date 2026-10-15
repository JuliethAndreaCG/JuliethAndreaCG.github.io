import { useRef, type JSX } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from './lib/gsap';
import { Header } from './components/Header';
import { SkipLink } from './components/SkipLink';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Approach } from './sections/Approach';
import { Experience } from './sections/Experience';
import { FAQ } from './sections/FAQ';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

/**
 * Site root composition (WU-9 + PR 8a):
 * - `<SkipLink />` first so keyboard users get it before any other control.
 * - `<Header />` provides sticky nav + LanguageSwitcher + brand mark.
 * - `<main id="main">` is the skip-link target and the ARIA `main` landmark.
 * - Sections render in document order so the IntersectionObserver in
 *   `useActiveSection` tracks scroll progress naturally.
 *   PR 8a adds `<Experience />` between Skills and Projects.
 * - `<Footer />` is outside `<main>` (it's a `contentinfo` landmark, not
 *   primary content).
 * - `<BackToTop />` floats over everything once the user has scrolled.
 *
 * Motion
 * ------
 * A single `useGSAP` block at the App scope batches all `[data-reveal]`
 * elements so they fade up as they enter the viewport. Using `matchMedia`
 * we disable the motion entirely when the user prefers reduced motion,
 * which is a hard requirement for accessibility (WCAG 2.3.3).
 */
function App(): JSX.Element {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Reduced motion: skip animation, just make sure everything is visible.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-reveal]', { opacity: 1, clearProps: 'opacity' });
      });

      // Normal: staggered fade-up on scroll.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        ScrollTrigger.batch('[data-reveal]', {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: { each: 0.08, from: 'start' },
                clearProps: 'transform',
              }
            );
          },
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" ref={mainRef} role="main">
        <Hero />
        <About />
        <Skills />
        <Approach />
        <Experience />
        <FAQ />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
