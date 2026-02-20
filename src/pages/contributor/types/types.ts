// pages/contributor/types/types.ts
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

// Contributor Profile Types (for onboarding)
export interface ContributorProfile {
  githubId: string;
  githubUsername: string;
  avatarUrl: string;
  name: string;
  email: string;
  bio?: string;
  location?: string;
  website?: string;
  twitter?: string;
  publicRepos?: number;
  followers?: number;
  following?: number;
  joinedYear?: number;
}

export interface ContributorSkill {
  name: string;
  category: 'development' | 'design' | 'writing' | 'community' | 'research' | 'other';
  level: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience: number;
}

export interface ContributorExperience {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  skills: string[];
}

export interface ContributorEducation {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current: boolean;
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

