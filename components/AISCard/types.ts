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


interface BaseCardProps {
  id: string;
  title: string;
  href: string;
  imageUrl: string;
  tracking?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (id: string, variant: "course" | "program") => void;
}


export interface CourseCardProps extends BaseCardProps {
  variant: "course";
  org: Organization;
  durationMinutes?: number;
  certificateType?: string;
  status?: CourseStatus;
  progress?: CourseProgress;
  isAI?: boolean;
}


export interface ProgramCardProps extends BaseCardProps {
  variant: "program";
  leadOrg?: Organization;
  teachingOrgs?: Organization[];
  description?: string;
  category?: string;
}


export type CourseProgramCardProps = CourseCardProps | ProgramCardProps;

export const isCourseCard = (props: CourseProgramCardProps): props is CourseCardProps => {
  return props.variant === "course";
};

export const isProgramCard = (props: CourseProgramCardProps): props is ProgramCardProps => {
  return props.variant === "program";
};