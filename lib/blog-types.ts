export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  featured?: boolean;
};
