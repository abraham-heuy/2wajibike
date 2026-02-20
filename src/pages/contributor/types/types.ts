// pages/contributor/types.ts
export interface Notification {
  id: string;
  type: 'issue' | 'mention' | 'review' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  link?: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  skills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedHours: number;
  points: number;
  claimedBy?: string;
  claimedAt?: string;
  repository: string;
  labels: string[];
}

export interface ContributorData {
  name: string;
  github: string;
  email: string;
  avatar: string;
  score: number;
  breakdown: {
    experience: number;
    education: number;
    skills: number;
    contributions: number;
    total: number;
  };
  skillsCount: number;
  experienceCount: number;
  educationCount: number;
  contributions: number;
  level: number;
  nextLevelScore: number;
  achievements: number;
  skills: Array<{
    name: string;
    level: number;
    years: number;
  }>;
}