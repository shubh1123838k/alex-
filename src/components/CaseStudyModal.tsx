import { ArrowUpRight, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import { ProjectItem } from '../data/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0c12] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              {project.kicker} · {project.subtitle}
            </p>
            <h2 id="case-study-title" className="mt-1.5 text-2xl sm:text-3xl font-bold text-slate-50">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition-colors hover:bg-white/[0.1] hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h3 className="text-sm font-semibold text-white">Problem</h3>
            <p className="mt-1.5 text-slate-300">{project.caseStudy.problem}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Solution</h3>
            <p className="mt-1.5 text-slate-300">{project.caseStudy.solution}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Architecture</h3>
            <p className="mt-1.5 text-slate-300">{project.caseStudy.architecture}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Key features</h3>
            <ul className="mt-2 space-y-2">
              {project.caseStudy.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Challenges</h3>
            <ul className="mt-2 space-y-2">
              {project.caseStudy.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-2.5">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-xs font-semibold text-[#050609] hover:bg-white"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/[0.09]"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
