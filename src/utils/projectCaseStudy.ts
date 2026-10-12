import type { Project, ProjectDiagram, SystemDesign, OopDesignPattern } from "../data/profile";

// Unknown pattern names remain architectural rather than guessing an OOP classification.
const oopPattern = /\b(strategy|adapter|factory|singleton|dao|facade|builder|template method|observer|provider|interceptor|chain of responsibility)\b/i;
const contextDiagram = /\bcontext\b/i;
const containerDiagram = /\bcontainer\b/i;
const dataModelDiagram = /\ber\b|entity[ -]relationship|document model|database model|data model|schema/i;

export function getProjectCaseStudy(project: Project) {
  const supplied = project.details;
  const systemDesigns: SystemDesign[] = supplied?.systemDesigns?.map(item => ({ ...item })) ??
    (supplied?.designPatterns ?? []).filter(item => !oopPattern.test(item.pattern)).map(item => ({
      title: item.pattern,
      // Legacy "where" includes the mechanism; preserve it without inventing extra text.
      howImplemented: item.where,
      whyUsed: item.why,
    }));
  const oopDesignPatterns: OopDesignPattern[] = supplied?.oopDesignPatterns ??
    (supplied?.designPatterns ?? []).filter(item => oopPattern.test(item.pattern));
  const overviewDiagrams = [...(supplied?.overviewDiagrams ?? [])];
  const dataModelDiagrams = [...(supplied?.dataModelDiagrams ?? [])];
  const unclassifiedDiagrams = [...(supplied?.unclassifiedDiagrams ?? [])];
  const legacyDiagrams = [...(supplied?.diagrams ?? [])];
  if (supplied?.erDiagram && !legacyDiagrams.some(d => d.src === supplied.erDiagram!.src)) {
    legacyDiagrams.push({ title: "ER Diagram", ...supplied.erDiagram });
  }
  const placed = new Set([
    ...overviewDiagrams, ...dataModelDiagrams, ...unclassifiedDiagrams,
    ...systemDesigns.flatMap(item => item.diagram ? [item.diagram] : []),
    ...oopDesignPatterns.flatMap(item => item.diagram ? [item.diagram] : []),
  ].map(d => d.src));
  for (const diagram of legacyDiagrams) {
    if (placed.has(diagram.src)) continue;
    placed.add(diagram.src);
    if (contextDiagram.test(diagram.title)) {
      overviewDiagrams.push({ ...diagram, title: "C4 Context Diagram" });
    } else if (containerDiagram.test(diagram.title)) {
      overviewDiagrams.push({ ...diagram, title: "C4 Container Diagram" });
    } else if (dataModelDiagram.test(diagram.title)) {
      dataModelDiagrams.push(diagram);
    } else if (/^(system architecture|order processing architecture)$/i.test(diagram.title)) {
      overviewDiagrams.push(diagram);
    } else {
      const related = systemDesigns.find(item => !item.diagram &&
        /outbox/i.test(item.title) && /outbox/i.test(diagram.title));
      if (related) related.diagram = diagram;
      else unclassifiedDiagrams.push(diagram);
    }
  }
  const rank = (d: ProjectDiagram) => contextDiagram.test(d.title) ? 0 : containerDiagram.test(d.title) ? 1 : 2;
  overviewDiagrams.sort((a, b) => rank(a) - rank(b));

  return {
    details: {
      ...supplied,
      background: supplied?.background ?? project.description,
      functionalRequirements: supplied?.functionalRequirements ?? project.features.map((feature, index) => ({
        id: `${project.slug}-FR-${index + 1}`, area: project.type,
        requirement: feature, priority: project.status,
      })),
      overviewDiagrams, dataModelDiagrams, systemDesigns, oopDesignPatterns, unclassifiedDiagrams,
    },
  };
}
