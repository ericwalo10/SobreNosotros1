export interface Program {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}