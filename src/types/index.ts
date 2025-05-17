export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface AboutBox {
  id: number;
  title: string;
  items: {
    name: string;
    date?: string;
    description?: string;
  }[];
}