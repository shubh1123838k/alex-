import { Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import {
  CERTIFICATIONS,
  EXPERIENCES,
  ProfileIdentity,
  PROJECTS,
  SKILL_DOMAINS,
} from '../data/portfolio';

interface ResumeModalProps {
  open: boolean;
  identity: ProfileIdentity;
  onClose: () => void;
}

export function ResumeModal({ open, identity, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b0d14] p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <h2 id="resume-modal-title" className="text-2xl font-bold text-slate-50">
              {identity.name}
            </h2>
            <p className="mt-1 text-xs font-mono text-indigo-300">
              {identity.roles.join(' · ')}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {identity.email} · {identity.phone} · {identity.location}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-xs font-semibold text-[#050609] hover:bg-white cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:bg-white/[0.1] hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-6 text-sm text-slate-300">
          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Education
            </h3>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-semibold text-slate-100">{identity.university}</p>
                <p className="text-xs text-slate-400">{identity.degree}</p>
              </div>
              <div className="text-right text-xs text-slate-400">
                <p>{identity.graduationLabel}</p>
                <p className="tabular-nums text-slate-200">{identity.cgpaScaleNote}</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Experience
            </h3>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="mt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-slate-100">
                    {exp.role} — <span className="text-indigo-300">{exp.company}</span>
                  </p>
                  <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-300">
                  {exp.responsibilities.map((item) => (
                    <li key={item.slice(0, 20)} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Projects
            </h3>
            <div className="mt-2 space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <p className="font-semibold text-slate-100">
                    {proj.title}{' '}
                    <span className="font-normal text-xs text-slate-400">· {proj.subtitle}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Technical Skills
            </h3>
            <div className="mt-2 space-y-1.5 text-xs">
              {SKILL_DOMAINS.map((domain) => (
                <p key={domain.id}>
                  <span className="font-semibold text-slate-100">{domain.title}: </span>
                  <span className="text-slate-300">{domain.technologies.join(', ')}</span>
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Certifications
            </h3>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.id}>
                  {cert.title} — <span className="text-slate-400">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
