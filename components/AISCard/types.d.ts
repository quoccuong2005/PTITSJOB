export type CourseStatus = "not_started" | "in_progress" | "completed";

export interface CourseProgress {
  percent: number;
  completedLessons?: number;
  totalLessons?: number;
}

export interface Organization {
  name: string;
  logoUrl: string;
}

export interface CourseProgramCardProps {
  variant: "course" | "program";
  id: string;
  title: string;
  href: string;
  imageUrl: string;

  org?: Organization;
  durationMinutes?: number;
  certificateType?: string;
  status?: CourseStatus;
  progress?: CourseProgress;
  isAI?: boolean; 
  
  leadOrg?: Organization;
  teachingOrgs?: Organization[];
  description?: string;
  category?: string; 
  
  tracking?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (id: string, variant: "course" | "program") => void;
}