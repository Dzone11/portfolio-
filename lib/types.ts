export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "languages" | "ml-ai" | "tools" | "databases";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
