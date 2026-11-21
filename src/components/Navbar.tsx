import { FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_ITEMS } from '../data/portfolio';

interface NavbarProps {
  brandHandle: string;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export function Navbar({
  brandHandle,
  activeSection,
  onNavigate,
  onOpenResume,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prefix, suffix] = brandHandle.includes('.')
    ? [brandHandle.slice(0, brandHandle.indexOf('.')), brandHandle.slice(brandHandle.indexOf('.'))]
    : [brandHandle, ''];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#050609]/80 backdrop-blur-xl">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-[1220px] items-center justify-between gap-6 px-6 py-4"
      >
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-mono text-sm font-semibold tracking-tight text-slate-100 whitespace-nowrap shrink-0 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md px-1 py-0.5 cursor-pointer"
          aria-label="Scroll to top"
        >
          <span className="text-indigo-400 mr-1.5">&gt;</span>
          <span>{prefix}</span>
          {suffix && <span className="text-slate-400 font-normal">{suffix}</span>}
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? 'bg-white/[0.08] text-white border border-white/[0.12]'
                      : 'text-slate-400 hover:text-slate-100 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/[0.1] hover:border-indigo-400/40 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <FileText className="h-4 w-4 text-indigo-300" aria-hidden="true" />
            <span>View Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-200 hover:bg-white/[0.08] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/[0.07] bg-[#07090f] px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-indigo-500/15 text-indigo-200 border border-indigo-400/25'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/[0.1] cursor-pointer"
          >
            <FileText className="h-4 w-4 text-indigo-300" aria-hidden="true" />
            <span>View Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
