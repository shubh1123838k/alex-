import {
  ArrowUpRight,
  Cloud,
  Database,
  Layers,
  Puzzle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_CAPABILITIES, ABOUT_PARAGRAPHS, AboutCapability } from '../data/portfolio';

function CapabilityIcon({ iconKey }: { iconKey: AboutCapability['iconKey'] }) {
  const cls = 'h-4 w-4 text-indigo-300';
  switch (iconKey) {
    case 'layers':
      return <Layers className={cls} />;
    case 'shield':
      return <ShieldCheck className={cls} />;
    case 'database':
      return <Database className={cls} />;
    case 'sparkles':
      return <Sparkles className={cls} />;
    case 'cloud':
      return <Cloud className={cls} />;
    case 'puzzle':
      return <Puzzle className={cls} />;
  }
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 border-b border-white/[0.06] bg-grid-pattern">
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            About Me
          </h2>
          <p className="mt-2.5 text-base text-slate-400">
            I enjoy turning ideas into reliable, usable software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="card-surface rounded-2xl p-7 sm:p-9 lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-indigo-300">
                  About
                </span>
                <span className="text-xs font-medium text-slate-400">Software Engineering</span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-slate-50 leading-snug [text-wrap:balance]">
                Building across the stack,{' '}
                <span className="text-accent-gradient">one problem at a time.</span>
              </h3>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-300">
                {ABOUT_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Currently focused on</p>
                  <p className="text-sm font-semibold text-slate-100">
                    Full-stack systems &amp; AI-powered applications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {ABOUT_CAPABILITIES.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="card-surface rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                  <CapabilityIcon iconKey={cap.iconKey} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">{cap.title}</h4>
                  <p className="mt-0.5 text-xs text-slate-400">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
