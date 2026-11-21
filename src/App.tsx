import { MotionConfig } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CustomizeModal } from './components/CustomizeModal';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsSection } from './components/SkillsSection';
import {
  DEFAULT_IDENTITY,
  NAV_ITEMS,
  ProfileIdentity,
  ProjectItem,
} from './data/portfolio';
import { mergeProfileIdentity } from './utils/portfolioLogic';

const STORAGE_KEY = 'portfolio_custom_identity_v1';

function loadStoredIdentity(): ProfileIdentity {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_IDENTITY;
    return mergeProfileIdentity(JSON.parse(raw) as Partial<ProfileIdentity>);
  } catch {
    return DEFAULT_IDENTITY;
  }
}

export default function App() {
  const [identity, setIdentity] = useState<ProfileIdentity>(() => loadStoredIdentity());
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    document.title = `${identity.name} | Software Engineer & Full Stack Developer`;
  }, [identity.name]);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSaveIdentity = (updated: ProfileIdentity) => {
    const normalized = mergeProfileIdentity(updated);
    setIdentity(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } catch {
      // Ignore storage quota issues
    }
  };

  const handleResetIdentity = () => {
    setIdentity(DEFAULT_IDENTITY);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage quota issues
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050609] text-slate-100">
        <Navbar
          brandHandle={identity.brandHandle}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onOpenResume={() => setResumeOpen(true)}
        />

        <main>
          <HeroSection
            identity={identity}
            onExploreWork={() => scrollToSection('projects')}
            onScrollAbout={() => scrollToSection('about')}
            onOpenResume={() => setResumeOpen(true)}
          />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection onSelectCaseStudy={setSelectedProject} />
          <SkillsSection />
          <CertificationsSection identity={identity} />
          <ContactSection identity={identity} />
        </main>

        <Footer
          identity={identity}
          onNavigate={scrollToSection}
          onOpenResume={() => setResumeOpen(true)}
          onOpenCustomize={() => setCustomizeOpen(true)}
        />

        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          open={resumeOpen}
          identity={identity}
          onClose={() => setResumeOpen(false)}
        />

        <CustomizeModal
          open={customizeOpen}
          identity={identity}
          onSave={handleSaveIdentity}
          onReset={handleResetIdentity}
          onClose={() => setCustomizeOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
