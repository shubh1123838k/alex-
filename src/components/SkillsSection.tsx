import { Code2, Cpu, Database, Layout, Server, Sparkles, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { CORE_STACK_STRIP, SKILL_DOMAINS, SkillDomain } from '../data/portfolio';
import { computeSkillTotals } from '../utils/portfolioLogic';

function DomainIcon({ iconKey }: { iconKey: SkillDomain['iconKey'] }) {
  const cls = 'h-4 w-4 text-indigo-300';
  switch (iconKey) {
    case 'code':
      return <Code2 className={cls} />;
    case 'layout':
      return <Layout className={cls} />;
    case 'server':
      return <Server className={cls} />;
    case 'database':
      return <Database className={cls} />;
    case 'sparkles':
      return <Sparkles className={cls} />;
    case 'wrench':
      return <Wrench className={cls} />;
    case 'cpu':
      return <Cpu className={cls} />;
  }
}

export function SkillsSection() {
  const { domainCount, technologyCount } = computeSkillTotals(SKILL_DOMAINS);

  return (
    <section id="skills" className="relative py-24 border-b border-white/[0.06] bg-grid-pattern">
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Technical Stack
          </h2>
          <p className="mt-2.5 text-base text-slate-400">
            Technologies I use to design, build, secure, and deploy modern software.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="card-surface rounded-2xl p-7 sm:p-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Developer Toolkit
            </p>
            <h3 className="mt-2.5 text-2xl sm:text-3xl font-bold tracking-tight text-slate-50">
              Building across the <span className="text-accent-gradient">full stack.</span>
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
              From frontend interfaces and backend APIs to databases, authentication, AI integrations, and cloud deployment.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 min-w-[120px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Domains
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-50 tabular-nums">{domainCount}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 min-w-[130px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Technologies
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-50 tabular-nums">{technologyCount}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="card-surface rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                    <DomainIcon iconKey={domain.iconKey} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{domain.title}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 tabular-nums">
                      {domain.technologies.length} technologies
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-500 tabular-nums">
                  {domain.index}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {domain.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.09] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/35 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 pr-4 border-r border-white/10">
            Stack
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
            {CORE_STACK_STRIP.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
