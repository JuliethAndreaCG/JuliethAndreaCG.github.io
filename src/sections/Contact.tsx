import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks } from '../components/SocialLinks';
import { Blob, FloatingCircles } from '../components/Decorations';

/**
 * Contact section — simple and clean with SocialLinks
 */
export function Contact(): JSX.Element {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('mljgadko');

  if (state.succeeded) {
    return (
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <Blob className="left-1/4 top-0 h-64 w-64 -translate-x-1/2" color="purple" />
        <Blob className="right-1/4 bottom-0 h-48 w-48 translate-x-1/2" color="fuchsia" />
        <FloatingCircles />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-medium text-green-700">{t('contact.formSuccess')}</p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

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
        <div className="relative mx-auto max-w-4xl">
          {/* Section header */}
          <div className="text-center">
            {/* Decorative icon */}
            <div className="relative mx-auto mb-6 inline-flex">
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
          </div>

          {/* Two column layout */}
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Left column - Social links and schedule */}
            <div className="space-y-8">
              {/* Social links */}
              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-soft">
                <SocialLinks />
              </div>

              {/* Schedule */}
              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-soft">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('contact.schedule')}
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="flex-1">{t('contact.scheduleHours.weekdays')}</span>
                    <span className="font-medium text-slate-900">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="flex-1">{t('contact.scheduleHours.weekend')}</span>
                    <span className="font-medium text-slate-900">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <span className="flex-1">{t('contact.closed')}</span>
                    <span className="font-medium text-slate-400">-</span>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="flex flex-col items-center gap-4 text-center text-sm text-slate-500">
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

            {/* Right column - Contact form */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-soft">
              <h3 className="mb-6 text-lg font-semibold text-slate-900">
                {t('contact.formTitle')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    {t('contact.formName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-500" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    {t('contact.formEmail')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-500" />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    {t('contact.formPhone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    {t('contact.formMessage')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t('contact.formMessagePlaceholder')}
                    className="mt-1 block w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-500" />
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="remember" className="text-sm text-slate-600">
                    {t('contact.formRememberMe')}
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 font-medium text-white shadow-md transition hover:from-purple-700 hover:to-purple-800 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      {t('contact.formSending')}
                    </span>
                  ) : (
                    t('contact.formSubmit')
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
