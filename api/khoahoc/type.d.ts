export interface ApiOdooResponse<T> {
  status: string;
  count: number;
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  has_next: boolean;
  has_prev: boolean;
  limit: number;
  next_page: number | null;
  page: number;
  prev_page: number | null;
  total_count: number;
  total_pages: number;
}

export interface Course {
  id: string;
  name: string;
  duration: number;
  description: string;
  image_url: string;
  tags: Tag[];
  topics: Topic[];
  providers: Provider[];
  course_url: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Topic {
  id: number;
  name: string;
  image_url: string;
}

export interface Provider {
  id: number;
  name: string;
  image_url: string;
}