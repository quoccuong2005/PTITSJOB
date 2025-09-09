export interface ApiOdooResponse<T> {
  status: string;
  count: number;
  data: T[];
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