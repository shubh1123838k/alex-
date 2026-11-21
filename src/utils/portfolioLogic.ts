import {
  DEFAULT_IDENTITY,
  HeroMetric,
  ProfileIdentity,
  SkillDomain,
} from '../data/portfolio';

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizePhoneHref(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned ? `tel:${cleaned}` : '#contact';
}

export function mergeProfileIdentity(
  partial: Partial<ProfileIdentity> | null | undefined,
  base: ProfileIdentity = DEFAULT_IDENTITY
): ProfileIdentity {
  if (!partial) return { ...base };
  return {
    ...base,
    name: partial.name?.trim() || base.name,
    brandHandle: partial.brandHandle?.trim() || base.brandHandle,
    availabilityLabel: partial.availabilityLabel?.trim() || base.availabilityLabel,
    heroSummary: partial.heroSummary?.trim() || base.heroSummary,
    email: partial.email?.trim() || base.email,
    phone: partial.phone?.trim() || base.phone,
    githubUrl: partial.githubUrl?.trim() || base.githubUrl,
    linkedinUrl: partial.linkedinUrl?.trim() || base.linkedinUrl,
    university: partial.university?.trim() || base.university,
    degree: partial.degree?.trim() || base.degree,
    cgpa: partial.cgpa?.trim() || base.cgpa,
    cgpaScaleNote: partial.cgpaScaleNote?.trim() || base.cgpaScaleNote,
    graduationYear: partial.graduationYear?.trim() || base.graduationYear,
    graduationLabel: partial.graduationLabel?.trim() || base.graduationLabel,
    location: partial.location?.trim() || base.location,
    roles: Array.isArray(partial.roles) && partial.roles.length > 0 ? partial.roles : base.roles,
  };
}

export function buildHeroMetrics(identity: ProfileIdentity): HeroMetric[] {
  return [
    { label: 'CGPA', value: identity.cgpa, sublabel: 'B.Tech CSE' },
    { label: 'ENGINEERING', value: 'Full Stack', sublabel: 'React + FastAPI' },
    { label: 'FOCUS', value: 'AI / GenAI', sublabel: 'Gemini + AI Agents' },
    { label: 'GRADUATION', value: identity.graduationYear, sublabel: 'Expected' },
  ];
}

export function computeSkillTotals(domains: SkillDomain[]): {
  domainCount: number;
  technologyCount: number;
} {
  return {
    domainCount: domains.length,
    technologyCount: domains.reduce((sum, domain) => sum + domain.technologies.length, 0),
  };
}

export function formatVisibleTechnologies(technologies: string[], visibleCount: number): {
  visible: string[];
  overflowCount: number;
} {
  const safeCount = Math.max(0, visibleCount);
  return {
    visible: technologies.slice(0, safeCount),
    overflowCount: Math.max(0, technologies.length - safeCount),
  };
}
