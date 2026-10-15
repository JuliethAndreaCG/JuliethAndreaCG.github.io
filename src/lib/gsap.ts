/**
 * Centralized GSAP setup.
 *
 * Why this file exists
 * --------------------
 * 1. Register the ScrollTrigger plugin exactly once (per the gsap-react skill,
 *    the registration must happen before any `useGSAP` call that references it).
 * 2. Apply project-wide defaults so every animation in the app shares the
 *    same tasteful timing/easing unless a specific tween overrides it.
 * 3. Suppress the "null target" warning that GSAP emits during dev when
 *    conditional renders briefly produce empty selector matches.
 *
 * Conventions enforced here
 * -------------------------
 * - `ease: 'power2.out'` — smooth deceleration, no overshoot, no bounce.
 *   Right for a professional services site; avoids the playful/elastic feel
 *   that would clash with the psychology brand voice.
 * - `duration: 0.7` — long enough to read as motion, short enough to feel
 *   responsive. Component-level tweens can override this for micro-interactions.
 *
 * Consumers should import `gsap` from this module rather than the upstream
 * package so the plugin registration is always in effect.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: 'power2.out',
  duration: 0.7,
});

// Suppress the "null target" warning. It only fires for conditional renders
// that briefly produce empty selector matches (e.g. dev StrictMode double
// renders); the cost in production is zero but it pollutes the dev console.
gsap.config({ nullTargetWarn: false });

export { gsap, ScrollTrigger };
