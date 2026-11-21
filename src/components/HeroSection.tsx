import { ArrowDown, ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { CODE_CARD_LINES, ProfileIdentity } from '../data/portfolio';
import { buildHeroMetrics } from '../utils/portfolioLogic';

interface HeroSectionProps {
  identity: ProfileIdentity;
  onExploreWork: () => void;
  onScrollAbout: () => void;
  onOpenResume: () => void;
}

export function HeroSection({
  identity,
  onExploreWork,
  onScrollAbout,
  onOpenResume,
}: HeroSectionProps) {
  const metrics = buildHeroMetrics(identity);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-grid-pattern"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6 pt-16 pb-12 sm:pt-20 lg:pt-24 lg:pb-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300/90 mb-5">
              {identity.availabilityLabel}
            </p>

            <h1 className="text-[clamp(2.75rem,5.4vw,5.1rem)] font-extrabold tracking-tight leading-[1.04] text-slate-50">
              Hi, I&apos;m{' '}
              <span className="block text-accent-gradient">{identity.name}.</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg font-medium text-slate-300">
              {identity.roles.map((role, idx) => (
                <span key={role} className="inline-flex items-center gap-3">
                  <span className={idx === 0 ? 'text-white font-semibold' : 'text-slate-400'}>
                    {role}
                  </span>
                  {idx < identity.roles.length - 1 && (
                    <span className="text-indigo-400/70" aria-hidden="true">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              {identity.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center gap-2.5 rounded-xl bg-slate-50 px-6 py-3 text-sm font-semibold text-[#050609] shadow-lg shadow-indigo-950/20 transition-all hover:bg-white hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.14] bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:border-white/25 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <FileText className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>View Resume</span>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={identity.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-indigo-400/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={identity.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-indigo-400/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="card-surface overflow-hidden rounded-2xl shadow-2xl shadow-indigo-950/30">
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                  <span className="ml-2 font-mono text-xs text-slate-400">stack.ts</span>
                </div>
                <span className="font-mono text-xs text-emerald-400/90">ready</span>
              </div>

              <div className="p-5 sm:p-6 font-mono text-sm leading-7 text-slate-300">
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-slate-100">developer</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-slate-400">{'{'}</span>
                </div>
                {CODE_CARD_LINES.map((line) => (
                  <div key={line.key} className="pl-5">
                    <span className="text-indigo-300">{line.key}</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300/90">{line.value}</span>
                    <span className="text-slate-500">,</span>
                  </div>
                ))}
                <div className="flex items-center gap-1">
                  <span className="text-slate-400">{'};'}</span>
                  <span
                    className="inline-block h-4 w-2 bg-indigo-400/80 ml-1"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-5 py-3 font-mono text-xs text-slate-500">
                <span>React / Python / AI</span>
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="px-6 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-slate-100 tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{metric.sublabel}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onScrollAbout}
            aria-label="Scroll to about section"
            className="group inline-flex flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-indigo-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md px-3 py-1"
          >
            <span>Explore</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
