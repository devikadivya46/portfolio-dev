import {
  SkillCategory,
  ProjectItem,
  AchievementItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  PortfolioDocumentItem,
  ExtracurricularItem,
  LanguageItem,
  SocialLink,
  JourneyMilestone
} from "./types";
import nptelThumb from "./assets/images/cert-previews/nptel-java.png";
import astrixThumb from "./assets/images/cert-previews/astrix-2026.png";
import aiToolsThumb from "./assets/images/cert-previews/generative-ai-tools.png";
import skillcraftThumb from "./assets/images/cert-previews/skillcraft-offer-letter.png";
import futureInternsThumb from "./assets/images/cert-previews/future-interns-offer-letter.png";
import anvesanaThumb from "./assets/images/cert-previews/anvesana-onboard.png";
import aiSessionThumb from "./assets/images/cert-previews/ai-expert-session.png";
import ideaWorkshopThumb from "./assets/images/cert-previews/idea-gen-workshop.png";
import blindBotThumb from "./assets/images/cert-previews/blind-bot-battle.png";
import cyberCadetThumb from "./assets/images/cert-previews/cyber-cadet.png";
import excelrThumb from "./assets/images/cert-previews/excelr-iot.png";
import infosysThumb from "./assets/images/cert-previews/python-infosys-1.png";

export const MOTIF_BG_DECO = "https://lh3.googleusercontent.com/aida-public/AB6AXuBeLxEl-O9wbY0dUk_FpZgnFVxhwlWnYAaymt5-r4Diz7fw-ynGSNLkwCUCRPn9cMCsNxXHox0PTkizsbAVcgy7Lh-BHu9y-pXC7qQf7zooQSK95XaU6zqmBtK-WccAS4gciRKt5SopsbdZ8cNg4wdHiZdjr4IxZpkFITwO5OHepVnyBAPMrqBCqBP_Qj9G54CgsE7CQsqwi9o2aYm1zGaqtuLse_Zi2OggHYmWXe0j09FDWWzZmstpl_hg6PsMQYr6Owiqn8-7dX4";
export const CELESTIAL_DOODLE_RECURRING = "https://lh3.googleusercontent.com/aida/ADBb0uiUMkm7ex_ojNd6C0M7xJKdHQG7a7yyZJP6h-gDJvu7xJSw7QULMX3BT2GhFusIUBx6qN7XUaVcPxS6wxr2FEmZDvUwwLgSv0GZO19ilGkIfLMKLUdBksWcGNCbmfTrhlh9T-RV7kt3npB4nNWMKKIkv-Oe8LcQZ7q2UfZCSCqNiY5cYwr8PeaLmQ7K3BW7TTMxyOPrAefhR2D8SyJ5-1uEsrQuvYAlXVfO02lwY7wCvIxFXuFiXh4l_Q";

export const HERO_ASTRONAUT = "https://lh3.googleusercontent.com/aida/ADBb0uhaPTc-WY0QM8UymBkWoIzs0nQMZ-HonDsdVgmyFRMOhrjJ6aU2ZPzTTQu3o9Y6t5XykGez1uKH905bNIsMOK-snZo5UJruyDxSMl1iesYYvZ4lYlsOEtAWhI4auhLExzN4hNoWftXgdq0O3tOuv3THfrLkryVM441tocBYfo8X9DEvIKOfnC7_0k9DR5OCSW3l78UbIxajPJmGIXQlDPPd9iB-_jrpYbAEdXb7gbaRXTmjrJG2bxmizQ";
export const PORTFOLIO_DOODLE_HEADER = "https://lh3.googleusercontent.com/aida-public/AB6AXuDdJeTKxLjWjhui15X-o2m9vZcKGM9aSubA7mS8B7Z2UYl9rEVtps1xRGJgrLvXU2ZGz4TKbohgYAZ2svqQFnomsx0FgbatPwpHW6Zmm4N0i4KbghFpqLO6li0Lshn8VghiFvKP6MxGI52xoTt1YsySMkF-ASeFbqX65UzI9N3e8GcdcNvc7rfgk2GTQOb0uVKFhAqCRhQdYEmilnOk9I6eCyQqDbQO8DqXEtGCWtFBR8qvSGf0jPBNFcOZETtOKxb3kj2oQgwq764";

export const ACHIEVEMENTS_CHAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBIARevmM7RAx5l3FHaj-ktTnLq8zw6BPvHH3yu8VZ7v71FsVDE0uBe0JXazwbfpl3YPSwLtwAOzrenlBFDv3XiqTSsHdrEfqcvuAnhj-GVnYU_cDsK-ryS7frmLBxQGVob4KKnXzoqZO-OuCwYGm4Id0f5VnvwX34rqK3JJZIT1p6gFsA8HRfL9xhIlLMa-uLQy-tWZAyy4dtK_gyHreDqWavtAzNN4CU0-AvjGNymQtAEMjXFZQwA7oAh0FdDNf7j9LFtWRXhnV0";
export const CONTACT_TALKING_CHARS = "https://lh3.googleusercontent.com/aida-public/AB6AXuCsJWkM4bR7AVceESTpNOoNttQ5J3kC9WQ4VcgQsRHU3DWJ2szbbJgfD7uLcy0PfS3uCwg_sd_a2FLsFBM9jF2JNoyBgz62W67H0hTKzJKY5FQjcFLgCwCCAdMFvucqTtDRmjoCpU-bTl5y4T1WsmjAzJC5TcrMuCXzXD_9im6mQoZoZJtfN_dAZUxbStxYC9Rt8vOvHN_pe4-NgKK_W4SfgNBgFZAdGuwiJYUt2H3sbCRzHAbrRcY-IdMQjga77oFsyMSSPtBvqyg";

export const SOCIAL_INSTAGRAM = "https://lh3.googleusercontent.com/aida-public/AB6AXuDj1SSESxShdrxK8kh-aytKsNs31fnF5qb1oieE4M3b3463OQL7Fi5tcMVp2xNXWaRB3xV0FL6UkO8wniAkH2qbwDCur8KrakjbomVN92LzMG7io3EIHo6Z9DSf2Hi-Kf1vpetg3uWiA1hDM6FpIYavMfESTFtqq6VhndnhWdWYNJqBcTjGy8_tmQLtIBUNx3OhFQ5FSl6NxIc42PsedtX5fOxeraMqG9GDyPvgYSeX5HFp4w09cE4gz2hSEkzN7stcuD0pPSmFZJA";
export const SOCIAL_LINKEDIN = "https://lh3.googleusercontent.com/aida-public/AB6AXuBfChzQF-wAB7ygNT7nsaUOseGCB0tfyLBmQyDvhDvj3htfTIecJkn65sO2P-q2JWI6DCmGwiICzoYn3afRk9B8XobAUGgvhy0pzQcbG_T7FD_UfN70kebP_Haqi62FQiwBSCmxtMe8YFTiouwF-U7qOXj-Nl9WCeBtbrEN4JqfxIfZM3lvL3aDFBem35LL8GUHMOfHr65bvkOkI3d4cAZwbVw6djF5OlBe1ajy6hEYLigVTWqjfYzXnbvpuHHIMAfQtWbKwKb-rZs";
export const SOCIAL_GITHUB = "https://lh3.googleusercontent.com/aida-public/AB6AXuAaSnrauH3iWQMFhOWX1zc5K18zv38uLUXgjerkWelg31lhILuBcpOuONgm9eXJvps6pt989BOsgkykZc-aZgXzYgEXdQpi4L-wCob6k8kfzVN2GcBTHUz-yGN4w9y3piQ-JRDGNhMiS2HdWiR4kl0pbmzyLBrE-LtF0ggQspA9dvST5Gd0ns_Y5SGrXrxIixK6BjxlxelCaLP7ZI8xfydRvRO2R0XrR2LnZwp3Etw5t5YtDwD2Oaf1CO6oLTPdKM6x2bY96RP3v2A";

export const RESUME_PDF = "/documents/devika-resume-2026.pdf";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    iconName: "code",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    iconName: "database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "Postman", "VS Code", "Vercel", "REST APIs"],
  },
  {
    title: "Soft Skills",
    iconName: "groups",
    skills: ["Communication", "Leadership", "Event Coordination", "Team Collaboration"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "clenorx",
    title: "ClenorX Foundation",
    category: "Financial Literacy NGO Platform",
    tagline: "Live platform serving 500+ students & SHGs in rural Karnataka — deployed on Vercel with zero downtime.",
    description: "Designed and built a full-stack NGO platform empowering children and SHGs in rural Karnataka with financial literacy education.",
    bullets: [
      "Designed and built a full-stack NGO platform empowering children and SHGs in rural Karnataka with financial literacy education, featuring volunteer registration, donation portal, and contact system.",
      "Deployed live on Vercel with mobile-responsive design, reaching an estimated 500+ students and SHG members across Tier-3 cities in Karnataka."
    ],
    tradeoffs: [
      "Chose Vercel static hosting over AWS to eliminate DevOps overhead entirely, trading infrastructure control for zero-config deployment velocity on a volunteer-run NGO budget.",
      "Opted for static generation over SSR to minimise hosting costs on mostly-static NGO content, accepting a content freshness window in exchange for free-tier performance."
    ],
    year: "2025",
    icon: "language",
    imageAlt: "Financial literacy education platform",
    previewUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    demoUrl: "https://clenorx-foundation-1.vercel.app",
    doodleUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkvbKc-uVxrbqYp-FHUxUmaZc4-RZtjWWZOEf5h68Ms-8rDBSUBqi803VM6y4yS5YcZGq2tDP6Udu-VmHErMoXjtw5eYsNSz78cjTLyc0M0TKpFzpm72j55Ea1Y2IS0qsuH6MJtIcgzBzGyzvBqFZuFH73d1sun1RBSVEuMdDxU47v9Sx3vv_0hJEjUl_Kzv5rNsMaAib8iV6Q3fkJv436duwqnnu-Mi8crbr57BXGkXR9kABGAlRnnUlypyPT1IvtzbNItCcJn7U",
    positionClass: "-top-12 -left-12 w-32 h-32",
    githubRepo: "devikadivya46/clenorx-foundation-1",
    fallbackStats: {
      stars: 12,
      forks: 4,
      languages: { "TypeScript": 65, "CSS": 20, "HTML": 15 }
    }
  },
  {
    id: "anvesync",
    title: "Anvesync",
    category: "Workforce Management Platform",
    tagline: "Role-based HR platform for attendance, leave management & admin analytics — built end-to-end with Next.js + Prisma + PostgreSQL.",
    description: "Built a full-stack HR platform with employee records, location-aware attendance, leave management, and admin analytics.",
    bullets: [
      "Built a full-stack HR platform featuring employee records, location-aware attendance, leave management, and admin analytics dashboards with role-based access control (Admin / Manager / Employee).",
      "Implemented secure Next.js API routes backed by Prisma ORM and PostgreSQL, enabling scalable multi-role data access for HR teams."
    ],
    tradeoffs: [
      "Chose PostgreSQL over MongoDB for relational HR data to enforce ACID compliance across multi-role transactions, accepting schema migration complexity as the data model evolves.",
      "Used Prisma ORM for end-to-end type-safety across all DB calls, accepting a slight runtime overhead versus raw parameterised SQL in exchange for compile-time query validation."
    ],
    year: "2026",
    icon: "hub",
    imageAlt: "HR platform team collaboration",
    previewUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "PostgreSQL"],
    doodleUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fAK4iXs0iHF_b7S6urdqPq2hkUSmdX5_cbjzpu6WPbcHb48CfibcxAhIo0U02hZ19Oe8WcAyHpptFt8EtlstBAsDbj1KiblvwF2n5heo--4G0GVH4Bh4CI_yawKHiBUjK8MzQ7lzw0ealiBHTWzFW7MgU_e4oxNlcgtC1w_mwVuf1BJNo_UKXRWU4tB4MtGVG-iZoYPa2b9SVuRP1cxbW_PmqCCOlVOa6A02eX7aP6yRpUL-oZvCeEbfqN8bQXH8ihOsNwslVxA",
    positionClass: "-bottom-16 -right-16 w-40 h-40",
    githubRepo: "devikadivya46/anvesync",
    fallbackStats: {
      stars: 8,
      forks: 2,
      languages: { "TypeScript": 72, "CSS": 18, "HTML": 10 }
    }
  },
  {
    id: "agentvisionx",
    title: "AgentVisionX",
    category: "AI Agent Orchestration Platform",
    tagline: "Multi-agent AI orchestration achieving sub-200ms task dispatch latency — WebSocket-powered live dashboard.",
    description: "A next-generation multi-agent coordination system with real-time computer vision pipelines, autonomous task planning, and live dashboard monitoring for enterprise AI workflows.",
    bullets: [
      "Architected a multi-agent orchestration layer supporting concurrent vision-pipeline tasks with real-time WebSocket streaming to a live monitoring dashboard, achieving sub-200ms task dispatch latency.",
      "Implemented priority-aware task queuing, fallback routing, and per-agent health telemetry to sustain 99.9% task completion rates across distributed agent workloads."
    ],
    tradeoffs: [
      "Chose persistent WebSocket streams over REST polling for sub-100ms agent-to-dashboard latency, accepting increased server-side connection state and horizontal scaling complexity.",
      "Enforced TypeScript strict mode end-to-end across all agent contract boundaries, accepting verbose generic constraints in exchange for zero runtime type surprises on agent payloads."
    ],
    year: "2025",
    icon: "smart_toy",
    imageAlt: "AI technology and automation",
    previewUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    githubRepo: "devikadivya46/agentvisionx",
    fallbackStats: {
      stars: 15,
      forks: 6,
      languages: { "TypeScript": 78, "CSS": 14, "JavaScript": 8 }
    }
  },
];

export const achievements: AchievementItem[] = [
  {
    id: "winner-ideathon",
    title: "Winner — IDEATHON",
    rank: "1st Place",
    description: "Secured 1st place for innovative problem-solving and product ideation at a competitive event.",
    iconName: "emoji_events"
  },
  {
    id: "code-begin-contest",
    title: "4th Place — Code Begin",
    rank: "Rank 4",
    description: "Ranked 4th in a competitive coding event among highly skilled undergraduate participants.",
    iconName: "terminal"
  },
  {
    id: "pitch-your-idea-prize",
    title: "Prize — Pitch Your Idea",
    rank: "Awardee",
    description: "Recognised for an impactful business pitch in an inter-college challenge.",
    iconName: "lightbulb"
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "future-intern",
    role: "Full Stack Web Developer Intern",
    companyName: "Future Intern",
    duration: "May 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Developed and deployed responsive web applications using React.js and Node.js, building reusable UI components and MongoDB-backed REST APIs across multiple client projects.",
      "Contributed to Git-based version control workflows, maintained clean component architecture, and participated in code reviews."
    ],
    logoInitials: "FI",
    documentHref: docPath("DEVIKA S.N Offer Letter.pdf")
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "PES Institute of Technology and Management, Shivamogga",
    duration: "Aug 2024 – Jun 2028",
    score: "CGPA: 8.20 / 10",
    details: "VTU Affiliated undergraduate degree with focus on algorithm paradigms, standard compilers, and application environments."
  },
  {
    degree: "Class XII (State Board)",
    institution: "HKS PU College",
    duration: "Mar 2023",
    score: "89%",
    details: "Pre-University studies focusing on Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    degree: "Class X (State Board)",
    institution: "Rotary English School",
    duration: "Mar 2021",
    score: "96%",
    details: "High school completion with high distinction across science, mathematics, and English."
  }
];

export const portfolioDocuments: PortfolioDocumentItem[] = [
  {
    title: "NPTEL Elite — Programming in Java",
    href: docPath("NPTEL26CS36S86550020804471536.pdf"),
    category: "Certification · IIT Kharagpur · 92%"
  },
  {
    title: "Generative AI Tools Workshop",
    href: docPath("Devika S.n_Generative AI Tools.pdf"),
    category: "Certification · Skill Nation · Feb 2026"
  },
  {
    title: "Cyber Cadet — Cyber Safety & Hygiene Assessment",
    href: docPath("cybcadet_002882_DevikaSN (1).pdf"),
    category: "Certification · ISEA / MeitY · 90%"
  },
  {
    title: "Internet of Things (IoT) — 30h Live Training",
    href: docPath("EXCELR-113276-Devika S N (1) (1).pdf"),
    category: "Certification · ExcelR EdTech · Apr 2025"
  },
  {
    title: "ASTRIX 2026 — Certificate of Appreciation",
    href: docPath("ASTRIX_2026_Certificate_Devika_S_N.pdf"),
    category: "Achievement · ASTRA Club · PESITM"
  },
  {
    title: "SkillCraft Technology — Internship Offer Letter",
    href: docPath("Offer Letter.pdf"),
    category: "Internship · Prompt Engineering · Dec 2025"
  },
  {
    title: "Future Interns — Internship Offer Letter",
    href: docPath("DEVIKA S.N Offer Letter.pdf"),
    category: "Internship · Full Stack Web Dev · Aug–Sep 2025"
  },
  {
    title: "Anvesana Campus Ambassador — Onboard Letter",
    href: docPath("Devika.pdf"),
    category: "Extracurricular · Anvesana TBI · Aug 2025"
  },
  {
    title: "Blind Bot Battle — Certificate of Participation",
    href: docPath("Certificate 15.pdf"),
    category: "Event · IEEE JNNCE · Anveshana 2025"
  },
  {
    title: "Anvesana AI Expert Session — Participation",
    href: docPath("Devika S.N.pdf"),
    category: "Event · Anvesana Forum · Oct 2025"
  },
  {
    title: "Idea Generation Workshop — Participation",
    href: docPath("Devika S.N (1).pdf"),
    category: "Workshop · Anvesana Forum · Oct 2025"
  },
  {
    title: "Python Fundamentals Part 1 — Infosys Springboard",
    href: docPath("1-ee608d4d-767e-4452-8398-7298fd0cd36f.pdf"),
    category: "Certification · Infosys Springboard · Jan 2025"
  },
  {
    title: "Python Fundamentals Part 2 — Infosys Springboard",
    href: docPath("1-d1a6064e-9730-4e49-b912-a84dc0ae9422.pdf"),
    category: "Certification · Infosys Springboard · Jan 2025"
  },
  {
    title: "Basics of Python — Infosys Springboard",
    href: docPath("1-2e20f76c-512b-47d6-8a15-252baa63010b.pdf"),
    category: "Certification · Infosys Springboard · Nov 2024"
  }
];

function docPath(fileName: string) {
  return `/documents/${fileName}`;
}

export const certifications: CertificationItem[] = [
  {
    title: "NPTEL Elite Gold — Programming in Python",
    issuer: "NPTEL · IIT Madras",
    link: docPath("NPTEL26CS36S86550020804471536.pdf")
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank"
  },
  {
    title: "Python Foundation Certificate",
    issuer: "Infosys Springboard"
  }
];

export const extracurriculars: ExtracurricularItem[] = [
  {
    role: "Campus Mantri",
    organization: "GeeksforGeeks",
    duration: "Present",
    description: "Serve as an official student representative for GeeksforGeeks on campus, promoting coding culture and driving platform engagement among peers. Organise coding contests, workshops, and awareness sessions to encourage participation in DSA and competitive programming."
  },
  {
    role: "Campus Ambassador",
    organization: "Anvesana Innovation & Entrepreneurial Forum",
    duration: "Aug 2025 – Present",
    description: "Organised 4+ technical events and workshops with 30+ student participants."
  },
  {
    role: "Core Member",
    organization: "ASTRA Club",
    duration: "Present",
    description: "Coordinated coding sessions, project development, and peer mentorship programmes."
  }
];

export const languages: LanguageItem[] = [
  { name: "English", proficiency: "Fluent", percentage: 95 },
  { name: "Kannada", proficiency: "Native", percentage: 100 },
  { name: "Hindi", proficiency: "Conversational", percentage: 75 }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "nptel-java",
    title: "NPTEL Elite — Programming in Java",
    organization: "IIT Kharagpur · NPTEL",
    date: "Jan – Apr 2026",
    type: "certification",
    badge: "92%",
    icon: "workspace_premium",
    imageSrc: nptelThumb,
    imageAlt: "Certificate preview for NPTEL programming in Java",
    linkHref: docPath("NPTEL26CS36S86550020804471536.pdf")
  },
  {
    id: "astrix-2026",
    title: "ASTRIX 2026 — Appreciation Certificate",
    organization: "ASTRA Club · PESITM",
    date: "May 2–3, 2026",
    type: "achievement",
    badge: "Appreciation",
    icon: "rocket_launch",
    imageSrc: astrixThumb,
    imageAlt: "Certificate preview for ASTRIX 2026 appreciation",
    linkHref: docPath("ASTRIX_2026_Certificate_Devika_S_N.pdf")
  },
  {
    id: "gen-ai-tools",
    title: "Generative AI Tools Workshop",
    organization: "Skill Nation",
    date: "Feb 8, 2026",
    type: "certification",
    icon: "auto_awesome",
    imageSrc: aiToolsThumb,
    imageAlt: "Certificate preview for Generative AI Tools workshop",
    linkHref: docPath("Devika S.n_Generative AI Tools.pdf")
  },
  {
    id: "skillcraft-intern",
    title: "Prompt Engineering Intern",
    organization: "SkillCraft Technology",
    date: "Dec 2025",
    type: "internship",
    icon: "psychology",
    imageSrc: skillcraftThumb,
    imageAlt: "Certificate preview for SkillCraft Technology internship",
    linkHref: docPath("Offer Letter.pdf")
  },
  {
    id: "future-interns-intern",
    title: "Full Stack Web Dev Intern",
    organization: "Future Interns",
    date: "Aug – Sep 2025",
    type: "internship",
    icon: "code",
    imageSrc: futureInternsThumb,
    imageAlt: "Certificate preview for Future Interns internship",
    linkHref: docPath("DEVIKA S.N Offer Letter.pdf")
  },
  {
    id: "campus-ambassador",
    title: "Campus Ambassador",
    organization: "Anvesana Innovation & Entrepreneurial Forum",
    date: "Aug 2025 – Present",
    type: "achievement",
    icon: "stars",
    imageSrc: anvesanaThumb,
    imageAlt: "Certificate preview for campus ambassador milestone",
    linkHref: docPath("Devika.pdf")
  },
  {
    id: "ai-expert-session",
    title: "Beyond Algorithms — AI Expert Session",
    organization: "Anvesana Forum · Mr. Guru Nadiger, CPTO",
    date: "Oct 16, 2025",
    type: "event",
    icon: "lightbulb",
    imageSrc: aiSessionThumb,
    imageAlt: "Certificate preview for AI expert session",
    linkHref: docPath("Devika S.N.pdf")
  },
  {
    id: "idea-gen-workshop",
    title: "Idea Generation Workshop",
    organization: "Anvesana Forum · PESITM",
    date: "Oct 17, 2025",
    type: "event",
    icon: "emoji_objects",
    imageSrc: ideaWorkshopThumb,
    imageAlt: "Certificate preview for idea generation workshop",
    linkHref: docPath("Devika S.N (1).pdf")
  },
  {
    id: "blind-bot-battle",
    title: "Blind Bot Battle — Anveshana 2025",
    organization: "IEEE JNNCE",
    date: "2025",
    type: "event",
    icon: "smart_toy",
    imageSrc: blindBotThumb,
    imageAlt: "Certificate preview for Blind Bot Battle participation",
    linkHref: docPath("Certificate 15.pdf")
  },
  {
    id: "cyber-cadet",
    title: "Cyber Cadet — Cyber Safety Assessment",
    organization: "ISEA / MeitY · Govt. of India",
    date: "Apr 5, 2025",
    type: "certification",
    badge: "90%",
    icon: "security",
    imageSrc: cyberCadetThumb,
    imageAlt: "Certificate preview for Cyber Cadet assessment",
    linkHref: docPath("cybcadet_002882_DevikaSN (1).pdf")
  },
  {
    id: "iot-training",
    title: "Internet of Things (IoT) — 30h Live Training",
    organization: "ExcelR EdTech",
    date: "Mar – Apr 2025",
    type: "certification",
    icon: "device_hub",
    imageSrc: excelrThumb,
    imageAlt: "Certificate preview for IoT training",
    linkHref: docPath("EXCELR-113276-Devika S N (1) (1).pdf")
  },
  {
    id: "python-infosys",
    title: "Python Foundation (Parts 1, 2 & Basics)",
    organization: "Infosys Springboard",
    date: "Nov 2024 – Jan 2025",
    type: "certification",
    icon: "terminal",
    imageSrc: infosysThumb,
    imageAlt: "Certificate preview for Python foundation learning",
    linkHref: docPath("1-ee608d4d-767e-4452-8398-7298fd0cd36f.pdf")
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    iconSrc: SOCIAL_LINKEDIN,
    url: "https://linkedin.com/in/devika-sn-50784a338",
  },
  {
    name: "GitHub",
    iconSrc: SOCIAL_GITHUB,
    url: "https://github.com/devikadivya46",
  },
  {
    name: "Instagram",
    iconSrc: SOCIAL_INSTAGRAM,
    url: "https://instagram.com",
  },
];
