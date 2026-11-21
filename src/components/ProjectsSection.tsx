import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem, PROJECTS } from '../data/portfolio';
import { formatVisibleTechnologies } from '../utils/portfolioLogic';

interface ProjectsSectionProps {
  onSelectCaseStudy: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectCaseStudy }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative py-24 border-b border-white/[0.06] bg-grid-pattern"
    >
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Selected Projects
          </h2>
          <p className="mt-2.5 text-base text-slate-400">
            A look at the systems and AI-powered products I&apos;ve built from the ground up.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project, idx) => {
            const { visible, overflowCount } = formatVisibleTechnologies(
              project.technologies,
              project.visibleTechCount
            );
            const gridColsClass =
              project.highlights.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="card-surface rounded-2xl p-7 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
                      {project.kicker}
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-50">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-slate-400">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {project.index}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div
                  className={`mt-7 grid grid-cols-1 ${gridColsClass} divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.07] py-5 gap-y-4`}
                >
                  {project.highlights.map((highlight, hIdx) => (
                    <div
                      key={highlight.index}
                      className={hIdx > 0 ? 'pt-4 md:pt-0 md:pl-6' : 'md:pr-6'}
                    >
                      <p className="font-mono text-xs text-slate-500 tabular-nums">
                        {highlight.index}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {visible.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {overflowCount > 0 && (
                    <span className="font-mono text-xs text-slate-400 pl-1 tabular-nums">
                      +{overflowCount}
                    </span>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-5 py-2.5 text-sm font-semibold text-[#050609] transition-all hover:bg-white hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:border-white/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:border-white/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <Github className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
