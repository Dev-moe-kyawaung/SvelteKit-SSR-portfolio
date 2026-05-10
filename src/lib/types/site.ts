export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    x: string;
  };
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  stack: string[];
  featured?: boolean;
  href?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};
