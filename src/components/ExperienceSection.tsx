import { ArrowUpRight, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 border-b border-white/[0.06] bg-grid-pattern"
    >
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Experience
          </h2>
          <p className="mt-2.5 text-base text-slate-400">
            Where I&apos;ve applied what I&apos;ve learned in real-world environments.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-10">
          <div
            className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/80 via-indigo-500/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="relative card-surface rounded-2xl p-6 sm:p-8"
              >
                <span
                  className="absolute -left-[22px] sm:-left-[34px] top-9 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-400 bg-[#050609] shadow-[0_0_12px_rgba(129,140,248,0.65)]"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-white/[0.07] pb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                      <Briefcase className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-50">{exp.role}</h3>
                        <span className="font-mono text-xs uppercase tracking-[0.12em] text-indigo-300">
                          · {exp.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-indigo-300">{exp.company}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-300 self-start whitespace-nowrap shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Responsibilities &amp; Impact
                  </p>
                  <ul className="mt-4 space-y-3">
                    {exp.responsibilities.map((item) => (
                      <li key={item.slice(0, 24)} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.07] pt-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2.5">
                      Technologies
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 self-end sm:self-center">
                    Experience
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
