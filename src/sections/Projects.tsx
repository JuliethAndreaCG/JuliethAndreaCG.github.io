import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { videos, projects } from '../data/projects';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Blob, FloatingCircles } from '../components/Decorations';

export function Projects(): JSX.Element {
  const { t } = useTranslation();

  // Si no hay contenido, mostrar mensaje vacío
  if (videos.length === 0 && projects.length === 0) {
    return (
      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <Blob className="left-1/4 top-0 h-80 w-80 -translate-x-1/2" color="purple" />
        <Blob className="right-1/4 bottom-0 h-64 w-64 translate-x-1/2" color="fuchsia" />
        <FloatingCircles />
        
        <Container>
          <div className="relative">
            <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" />
            
            <div className="rounded-2xl border border-purple-100 bg-white p-12 text-center shadow-soft-lg">
              <div className="mx-auto mb-6 inline-flex">
                <div className="absolute -inset-4 animate-pulse-soft rounded-full bg-purple-100" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100">
                  <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-slate-600">{t('projects.empty')}</p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Blob className="left-0 top-0 h-64 w-64 -translate-x-1/2" color="purple" />
      <Blob className="right-0 bottom-0 h-64 w-64 translate-x-1/2" color="fuchsia" />
      <FloatingCircles />
      
      <Container>
        <div className="relative">
          <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" reveal />
          
          {/* Videos Grid */}
          {videos.length > 0 && (
            <div data-reveal className="mb-12">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Videos
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                {videos.map((video) => (
                  <article
                    key={video.id}
                    className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-soft transition-all hover:shadow-soft-lg"
                  >
                    {/* Video thumbnail con imagen de portada */}
                    <a
                      href={video.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block aspect-video w-full overflow-hidden"
                    >
                      {/* Imagen de portada */}
                      <img
                        src={video.thumbnailUrl}
                        alt={t(video.titleKey)}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay con play button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                          <svg className="ml-1 h-10 w-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Badge de Facebook */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#1877F2] px-3 py-1 text-xs font-medium text-white shadow-md">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        {t('buttons.watchOnFacebook')}
                      </div>
                    </a>
                    
                    {/* Info del video */}
                    <div className="p-6">
                      <h4 className="mb-2 text-lg font-semibold text-slate-900">
                        {t(video.titleKey)}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t(video.descriptionKey)}
                      </p>
                      <a
                        href={video.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
                      >
                        {t('buttons.watchFullVideo')}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
          
          {/* Projects/Artículos Grid */}
          {projects.length > 0 && (
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Artículos y Recursos
              </h3>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <li key={project.id}>
                    <article className="flex h-full flex-col rounded-xl border border-purple-100 bg-white p-6 shadow-sm transition-all hover:shadow-soft-lg hover:-translate-y-1">
                      <h4 className="mb-2 text-xl font-semibold text-slate-900">
                        {t(project.titleKey)}
                      </h4>
                      <p className="mb-4 flex-grow text-sm text-slate-600">
                        {t(project.descriptionKey)}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-slate-700 underline-offset-2 hover:underline"
                          >
                            {t('projects.viewRepo')} →
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-purple-600 underline-offset-2 hover:underline"
                          >
                            {t('projects.viewLive')} →
                          </a>
                        )}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
