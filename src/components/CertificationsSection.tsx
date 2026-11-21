import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, ProfileIdentity } from '../data/portfolio';

interface CertificationsSectionProps {
  identity: ProfileIdentity;
}

export function CertificationsSection({ identity }: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="relative py-24 border-b border-white/[0.06] bg-grid-pattern"
    >
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
            Certifications
          </h2>
          <p className="mt-2.5 text-base text-slate-400">
            Credentials and learning milestones that support my technical foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="card-surface rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {cert.index}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-100">{cert.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-indigo-300">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.07] pt-4 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                <span>{cert.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-8 card-surface rounded-2xl p-7 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.07] pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-indigo-300">
                  Education
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-50">
                  {identity.university}
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-300 self-start sm:self-center whitespace-nowrap shrink-0">
              {identity.graduationLabel}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Degree
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-200">{identity.degree}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Academic Performance
              </p>
              <p className="mt-1.5 text-sm font-medium text-slate-200 tabular-nums">
                {identity.cgpaScaleNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
