import { CheckCircle2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ProfileIdentity } from '../data/portfolio';
import { ContactFormInput, sanitizePhoneHref, validateContactForm } from '../utils/portfolioLogic';

interface ContactSectionProps {
  identity: ProfileIdentity;
}

export function ContactSection({ identity }: ContactSectionProps) {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormInput | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedRecord({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 border-b border-white/[0.06] bg-grid-pattern">
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 [text-wrap:balance]">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            I&apos;m open to software engineering opportunities, internships, collaborations, and interesting technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="card-surface rounded-2xl p-7 sm:p-8 lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
                Get in touch
              </p>
              <h3 className="mt-2.5 text-2xl font-bold text-slate-50">Let&apos;s connect.</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                Have an opportunity, project idea, or simply want to connect? You can reach me through any of the channels below.
              </p>

              <div className="mt-7 space-y-3.5">
                <a
                  href={`mailto:${identity.email}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-indigo-400/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100 truncate">
                      {identity.email}
                    </p>
                  </div>
                </a>

                <a
                  href={sanitizePhoneHref(identity.phone)}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-indigo-400/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Phone
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100 tabular-nums">
                      {identity.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Find me online
              </p>
              <div className="mt-3 flex items-center gap-3">
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
          </div>

          <div className="card-surface rounded-2xl p-7 sm:p-8 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Send a message
            </p>
            <h3 className="mt-2.5 text-2xl font-bold text-slate-50">
              Tell me about your project.
            </h3>

            {submittedRecord ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-6 text-slate-200"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-base font-semibold text-white">Message prepared</h4>
                    <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                      Thanks, <span className="font-medium text-white">{submittedRecord.name}</span>. Your message from{' '}
                      <span className="font-mono text-indigo-200">{submittedRecord.email}</span> has been recorded locally for{' '}
                      <span className="font-medium text-white">{identity.name}</span>.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white hover:bg-white/[0.12] cursor-pointer"
                      >
                        Send Another Message
                      </button>
                      <a
                        href={`mailto:${identity.email}?subject=${encodeURIComponent(
                          `Portfolio Inquiry from ${submittedRecord.name}`
                        )}&body=${encodeURIComponent(submittedRecord.message)}`}
                        className="rounded-lg bg-slate-50 px-4 py-2 text-xs font-semibold text-[#050609] hover:bg-white"
                      >
                        Open in Email App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full rounded-xl border border-white/10 bg-[#070910] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-white/10 bg-[#070910] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Tell me about the opportunity or project..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070910] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-6 py-3.5 text-sm font-semibold text-[#050609] transition-all hover:bg-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
