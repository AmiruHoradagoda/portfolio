export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
    };

export type ProjectDemoVideo = {
  type: "youtube" | "google-drive";
  id: string;
  title: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  subtitle?: string;
  categories?: string[];
  cardStack?: string[];
  description: string;
  stack: string[];
  stackGroups?: { title: string; items: string[] }[];
  features: string[];
  challenges: string[];
  links: {
    label: string;
    href: string;
  }[];
  accent?: string;
  media: ProjectMedia[];
  demoVideo?: ProjectDemoVideo;
  demoNote?: string;
  details?: Partial<ProjectDetails>;
};

export type TableRequirement = {
  id: string;
  area: string;
  requirement: string;
  priority: string;
};

export type QualityAttribute = {
  attribute: string;
  scenario: string;
  response: string;
};

export type DesignPattern = {
  pattern: string;
  where: string;
  why: string;
};

export type ProjectDiagram = {
  title: string;
  src: string;
  alt: string;
  section?: "overview" | "challenges" | "architecture" | "decisions";
};

export type SystemDesign = {
  title: string;
  whereImplemented?: string;
  howImplemented?: string;
  content?: string;
  whyUsed?: string;
  diagram?: ProjectDiagram;
  diagramPlaceholder?: string;
};

export type OopDesignPattern = {
  pattern: string;
  where?: string;
  why?: string;
  howImplemented?: string;
  diagram?: ProjectDiagram;
  diagramPlaceholder?: string;
};

export type ChallengeSolution = {
  title?: string;
  problem: string;
  solution: string;
};

export type ProjectDetails = {
  background: string;
  architectureHeadings?: {
    dataModel: string;
    systemDesigns: string;
    oopDesignPatterns: string;
  };
  overviewDiagrams?: ProjectDiagram[];
  overviewSections?: {
    id: string;
    heading: string;
    content?: string;
    diagrams: ProjectDiagram[];
    placeholder?: string;
  }[];
  sourceReferences?: { label: string; href: string; description: string }[];
  evidence?: {
    title: string;
    introduction: string;
    diagrams: ProjectDiagram[];
    result: string;
  }[];
  limitations?: string;
  dataModelDiagrams?: ProjectDiagram[];
  dataModelDescription?: string;
  dataModelPlaceholders?: string[];
  systemDesigns?: SystemDesign[];
  oopDesignPatterns?: OopDesignPattern[];
  unclassifiedDiagrams?: ProjectDiagram[];
  overviewHeading?: string;
  qualityHeading?: string;
  challengeSolutions?: ChallengeSolution[];
  showSupportingRequirements?: boolean;
  engineeringRequirements?: string[];
  eventFlow?: string[];
  eventSchema?: { field: string; type: string; description: string }[];
  tradeOffs?: string[];
  functionalRequirements: TableRequirement[];
  qualityAttributes?: QualityAttribute[];
  designPatterns?: DesignPattern[];
  diagrams?: ProjectDiagram[];
  erDiagram?: {
    src: string;
    alt: string;
  };
};
