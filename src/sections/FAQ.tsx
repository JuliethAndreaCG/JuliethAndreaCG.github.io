import { useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Blob, FloatingCircles } from '../components/Decorations';

const FAQ_ITEMS = [0, 1, 2, 3] as const;

function FAQItem({ index }: { index: (typeof FAQ_ITEMS)[number] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(true); // Abiertos por defecto
  const { t } = useTranslation();
  const questionKey = `faq.items.${index}.question`;
  const answerKey = `faq.items.${index}.answer`;

  return (
    <div className="group border-b border-purple-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-purple-600"
      >
        <span className="font-medium text-slate-900 group-hover:text-purple-600 pr-4">
          {t(questionKey)}
        </span>
        <span className={`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          isOpen 
            ? 'rotate-180 bg-purple-600 text-white shadow-md' 
            : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
        }`}>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={[
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0',
        ].join(' ')}
      >
        <p className="leading-relaxed text-slate-600">
          {t(answerKey)}
        </p>
      </div>
    </div>
  );
}

export function FAQ(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-purple-50/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <Blob className="left-0 top-1/4 h-72 w-72 -translate-x-1/2" color="purple" />
      <Blob className="right-0 bottom-0 h-64 w-64 translate-x-1/2" color="indigo" />
      <FloatingCircles />
      
      {/* Top decorative line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 opacity-30" />

      <Container>
        <div className="relative mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="absolute h-12 w-12 animate-pulse-soft rounded-full bg-purple-200 opacity-50" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>
          
          {/* FAQ Container - más ancho */}
          <div className="rounded-2xl border border-purple-100 bg-white px-8 py-6 shadow-soft-lg">
            {FAQ_ITEMS.map((index) => (
              <FAQItem key={index} index={index} />
            ))}
          </div>
          
          {/* Decorative bottom element */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="h-1 w-1 animate-float rounded-full bg-purple-400" />
              <span className="h-1 w-1 animate-float rounded-full bg-purple-400" style={{ animationDelay: '0.3s' }} />
              <span className="h-1 w-1 animate-float rounded-full bg-purple-400" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
