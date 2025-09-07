export interface Organization {
  name: string;
  logoUrl: string;
}

export interface Rating {
  score: number;
  reviewCount: number;
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface CourseInfo {
  id: string;
  title: string;
  href: string;
  imageUrl: string;
  org: Organization;
  certificateType: string;
  isAI?: boolean;
  durationMinutes?: number;
}

export interface KnowledgeModule {
  id: string;
  name: string;
  org: Organization;
  rating: Rating;
  coursesRemaining: number;
  totalCourses: number;
  skills: Skill[];
  courses: CourseInfo[];
  certificateUrl?: string;
}

export interface KnowledgeModulesProps {
  title?: string;
  description?: string;
  modules?: KnowledgeModule[];
  onModuleClick?: (moduleId: string) => void;
  onCourseClick?: (courseId: string) => void;
}

export interface TeachingOrg {
  name: string;
  logoUrl: string;
}

export interface ProgramDetail {
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  teachingOrgs: TeachingOrg[];
  requiredSkills: string[];
  achievableSkills: string[];
}
