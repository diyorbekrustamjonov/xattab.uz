export type ProfileType = {
  id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  location: string;
  resumeURL: string;
};

export type JobType = {
  id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  description: string;
  googlePlay: string;
  appStore: string;
  webApp: string;
  github: string;
  screenshots: string[];
};

export type PostType = {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  canonicalLink?: string;
  date?: string;
  coverImage: {
    image: string;
    alt: string | null;
  };
  tags: string[];
  author: {
    name: string;
    photo: {
      image: string;
      alt: string;
    };
    twitterUrl: string;
  };
  body: string;
  featured: boolean;
  isPublished: boolean;
};

export type SkillProps = {
  name: string;
  icon: React.ElementType;
  color: string;
}
