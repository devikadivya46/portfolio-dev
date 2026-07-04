export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  bullets: string[];
  tradeoffs?: string[];
  year: string;
  icon: string;
  imageAlt: string;
  previewUrl?: string;
  techStack: string[];
  demoUrl?: string;
  doodleUrl?: string;
  positionClass?: string;
  githubRepo?: string;
  fallbackStats?: {
    stars: number;
    forks: number;
    languages: { [key: string]: number };
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  rank: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyName: string;
  duration: string;
  location: string;
  bullets: string[];
  logoInitials: string;
  documentHref?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  link?: string;
}

export interface PortfolioDocumentItem {
  title: string;
  href: string;
  category: string;
}

export interface ExtracurricularItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  percentage: number; // For nice progress bars
}

export interface SocialLink {
  name: string;
  iconSrc: string;
  url: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: "internship" | "certification" | "event" | "achievement";
  badge?: string;
  icon: string;
  imageSrc?: string;
  imageAlt?: string;
  linkHref?: string;
}
