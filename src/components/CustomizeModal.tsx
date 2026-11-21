import { RotateCcw, Save, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { ProfileIdentity } from '../data/portfolio';

interface CustomizeModalProps {
  open: boolean;
  identity: ProfileIdentity;
  onSave: (updated: ProfileIdentity) => void;
  onReset: () => void;
  onClose: () => void;
}

export function CustomizeModal({
  open,
  identity,
  onSave,
  onReset,
  onClose,
}: CustomizeModalProps) {
  const [draft, setDraft] = useState<ProfileIdentity>(identity);

  useEffect(() => {
    if (open) setDraft(identity);
  }, [open, identity]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(draft);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="customize-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b0d14] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
              Personalize Portfolio
            </p>
            <h2 id="customize-modal-title" className="mt-1 text-xl font-bold text-slate-50">
              Update Name, Phone, Email &amp; Details
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close customize modal"
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:bg-white/[0.1] hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="custom-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name
              </label>
              <input
                id="custom-name"
                type="text"
                value={draft.name}
                onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="custom-handle" className="block text-xs font-medium text-slate-300 mb-1.5">
                Brand Handle
              </label>
              <input
                id="custom-handle"
                type="text"
                value={draft.brandHandle}
                onChange={(e) => setDraft((prev) => ({ ...prev, brandHandle: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="custom-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                id="custom-email"
                type="email"
                value={draft.email}
                onChange={(e) => setDraft((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="custom-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                Phone Number
              </label>
              <input
                id="custom-phone"
                type="tel"
                value={draft.phone}
                onChange={(e) => setDraft((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="custom-github" className="block text-xs font-medium text-slate-300 mb-1.5">
                GitHub URL
              </label>
              <input
                id="custom-github"
                type="url"
                value={draft.githubUrl}
                onChange={(e) => setDraft((prev) => ({ ...prev, githubUrl: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="custom-linkedin" className="block text-xs font-medium text-slate-300 mb-1.5">
                LinkedIn URL
              </label>
              <input
                id="custom-linkedin"
                type="url"
                value={draft.linkedinUrl}
                onChange={(e) => setDraft((prev) => ({ ...prev, linkedinUrl: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="custom-university" className="block text-xs font-medium text-slate-300 mb-1.5">
                University / Institute
              </label>
              <input
                id="custom-university"
                type="text"
                value={draft.university}
                onChange={(e) => setDraft((prev) => ({ ...prev, university: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="custom-cgpa" className="block text-xs font-medium text-slate-300 mb-1.5">
                CGPA
              </label>
              <input
                id="custom-cgpa"
                type="text"
                value={draft.cgpa}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    cgpa: e.target.value,
                    cgpaScaleNote: `CGPA ${e.target.value} / 10 (through 6th semester)`,
                  }))
                }
                className="w-full rounded-xl border border-white/10 bg-[#070910] px-3.5 py-2.5 text-sm text-slate-100 focus:border-indigo-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-white/[0.08] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset to Dummy Data</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-white/[0.06] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-5 py-2.5 text-xs font-semibold text-[#050609] hover:bg-white cursor-pointer"
              >
                <Save className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Save Details</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
