export type PortfolioProfile = {
  name: string;
  program: string;
  status?: string;
  field: string;
  course: string;
  year: number;
  photo?: string;
  introduction?: string;
  quote?: string;
  sectionNote?: string;
  description?: string;
};

export type InstitutionKind = "lptk" | "ppl";

export type Institution = {
  id: string;
  kind: InstitutionKind;
  name: string;
  description?: string;
  address?: string;
  image?: string;
  url?: string;
};

export type Topic = {
  id: string;
  number: number;
  slug: string;
  title: string;
  shortDescription?: string;
  worksheets: LearningWorksheet[];
};

export type LearningWorksheet = {
  id: string;
  code: string;
  slug: string;
  title: string;
  explanation?: string;
  context?: string;
  outcome?: string;
  keyPoints?: string[];
  documentUrl?: string;
  documentLabel?: string;
};

export type Infographic = {
  id: string;
  title: string;
  description: string;
  format?: string;
  url?: string;
  thumbnail?: string;
  author?: string;
  year?: number;
};

export type FinalReport = {
  id: string;
  title: string;
  description: string;
  format?: string;
  url?: string;
  downloadable?: boolean;
  author?: string;
  year?: number;
};

export type ReflectionSection = {
  id: string;
  title: string;
  content: string;
  documentUrl?: string;
};
