export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  year: string;
  icon: string;
  imageAlt: string;
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
