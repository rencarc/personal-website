export interface IEducation {
  degree: string;
  major: string;
  school: string;
  duration: string;
  achievements: string[];
}

export interface IMe {
  name: string;
  facts: string[];
  subtitle: string;
  tagline: string;
  bigHeading: {
    black: string;
    blue: string;
  };
  about: string;
  location: string;
  image: string;
  education: IEducation[];
  experience: IExperience[];
  projects: IProject[];
  skills: Record<string, ISkill[]>;
  social: ISocial[];
  contact: {
    email: string;
  };
} 