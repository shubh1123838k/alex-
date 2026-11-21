import { ArrowUp, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { ProfileIdentity } from '../data/portfolio';

interface FooterProps {
  identity: ProfileIdentity;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

export function Footer({
  identity,
  onNavigate,
  onOpenResume,
  onOpenCustomize,
}: FooterProps) {
  const [prefix, suffix] = identity.brandHandle.includes('.')
    ? [
        identity.brandHandle.slice(0, identity.brandHandle.indexOf('.')),
        identity.brandHandle.slice(identity.brandHandle.indexOf('.')),
      ]
    : [identity.brandHandle, ''];

  return (
    <footer className="bg-[#050609] py-14">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-12 border-b border-white/[0.07]">
          <div className="md:col-span-5">
            <p className="font-mono text-base font-semibold text-slate-100">
              <span className="text-indigo-400 mr-1.5">&gt;</span>
              <span>{prefix}</span>
              {suffix && <span className="text-slate-400 font-normal">{suffix}</span>}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Software Engineer focused on building full-stack applications, solving real problems, and creating reliable user experiences.
            </p>
            <div className="mt-5 inline-flex items-center rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 font-mono text-xs text-slate-300">
              {identity.availabilityLabel}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {['about', 'experience', 'projects', 'skills'].map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(id);
                      }}
                      className="capitalize transition-colors hover:text-white"
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href={identity.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={identity.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${identity.email}`}
                    className="transition-colors hover:text-white"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Resume &amp; Info
              </p>
              <div className="mt-4 space-y-2.5">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-indigo-400/35 hover:bg-white/[0.07] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCustomize}
                  className="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/35 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span>Customize Details</span>
                  <SlidersHorizontal className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} {identity.name}. All rights reserved.
            </p>
            <p className="mt-1 font-mono text-[11px] text-slate-500">
              Designed &amp; built with React + TypeScript
            </p>
          </div>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="inline-flex items-center gap-2 self-start sm:self-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
