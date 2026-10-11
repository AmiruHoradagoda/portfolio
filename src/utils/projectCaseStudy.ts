import type { Project, ProjectDetails, ProjectDiagram } from "../data/profile";

export function getProjectCaseStudy(project: Project) {
  const supplied = project.details;
  const details: ProjectDetails = {
    ...supplied,
    background: supplied?.background ?? project.description,
    functionalRequirements: supplied?.functionalRequirements ?? project.features.map((feature, index) => ({
      id: `${project.slug}-FR-${index + 1}`,
      area: project.type,
      requirement: feature,
      priority: project.status,
    })),
    qualityAttributes: supplied?.qualityAttributes ?? [],
    designPatterns: supplied?.designPatterns ?? [],
  };

  const challenges = details.challengeSolutions ?? details.qualityAttributes.map((item) => ({
    title: item.attribute,
    problem: item.scenario,
    solution: item.response,
  }));

  const diagrams: ProjectDiagram[] = details.diagrams ?? (details.erDiagram ? [{
    title: "ER Diagram",
    src: details.erDiagram.src,
    alt: details.erDiagram.alt,
  }] : []);

  const diagramsBySection: Record<NonNullable<ProjectDiagram["section"]>, ProjectDiagram[]> = {
    overview: [], challenges: [], architecture: [], decisions: [],
  };
  for (const diagram of diagrams) {
    diagramsBySection[diagram.section ?? "architecture"].push(diagram);
  }

  return { details, challenges, diagramsBySection };
}
