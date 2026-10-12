import test from "node:test";
import assert from "node:assert/strict";
import { getProjectCaseStudy } from "../src/utils/projectCaseStudy.ts";

const project = {
  slug: "compatibility-fixture", title: "Compatibility fixture", year: "2026",
  type: "Software", status: "In progress", role: "Developer",
  summary: "Summary", description: "Background", stack: [],
  features: ["Preserve feature-only projects"], challenges: ["Unanswered challenge"],
  media: [], links: [],
};
const diagram = title => ({ title, src: title + ".png", alt: title + " original alt", caption: "Original caption" });

test("requirements and legacy content survive unchanged; feature fallback does not invent copy", () => {
  const requirement = { id: "R1", area: "Inventory", requirement: "Avoid overselling", priority: "High" };
  const legacy = { functionalRequirements: [requirement], qualityAttributes: [{ attribute: "Consistency", scenario: "Concurrent buyers", response: "Atomic reservation" }], tradeOffs: ["Existing trade-off"] };
  const { details } = getProjectCaseStudy({ ...project, details: legacy });
  assert.deepEqual(details.functionalRequirements, [requirement]);
  assert.deepEqual(details.qualityAttributes, legacy.qualityAttributes);
  assert.deepEqual(details.tradeOffs, legacy.tradeOffs);
  const fallback = getProjectCaseStudy(project).details;
  assert.equal(fallback.background, project.description);
  assert.equal(fallback.functionalRequirements[0].requirement, project.features[0]);
  assert.deepEqual(fallback.systemDesigns, []);
  assert.deepEqual(fallback.oopDesignPatterns, []);
});

test("C4 views sort context before container, data models separate, ambiguous diagrams survive", () => {
  const diagrams = ["C4 Container Diagram", "Document Model", "Context Diagram", "C4 Component Diagram", "Reliable Booking Flow", "Host Onboarding & Authorization"].map(diagram);
  const { details } = getProjectCaseStudy({ ...project, details: { diagrams } });
  assert.deepEqual(details.overviewDiagrams.map(d => d.title), ["C4 Context Diagram", "C4 Container Diagram"]);
  assert.equal(details.overviewDiagrams[0].src, diagrams[2].src);
  assert.equal(details.overviewDiagrams[0].alt, diagrams[2].alt);
  assert.deepEqual(details.dataModelDiagrams, [diagrams[1]]);
  assert.deepEqual(details.unclassifiedDiagrams, diagrams.slice(3));
});

test("multiple service data models and legacy ER coexist without duplicate assets", () => {
  const auth = diagram("Auth Service ER Diagram"), booking = diagram("Booking Service Database Model");
  const { details } = getProjectCaseStudy({ ...project, details: { diagrams: [auth, booking], erDiagram: auth } });
  assert.deepEqual(details.dataModelDiagrams, [auth, booking]);
  assert.equal(getProjectCaseStudy({ ...project, details: { erDiagram: auth } }).details.dataModelDiagrams[0].src, auth.src);
});

test("architectural and OOP patterns preserve exact wording without inventing implementation text", () => {
  const entries = ["Transactional Outbox", "Strategy Pattern", "Chain of Responsibility Pattern", "Unknown Pattern"].map(pattern => ({ pattern, where: "Original where " + pattern, why: "Original why " + pattern }));
  const outbox = diagram("Outbox & Failure Recovery");
  const { details } = getProjectCaseStudy({ ...project, details: { designPatterns: entries, diagrams: [outbox] } });
  assert.deepEqual(details.systemDesigns.map(d => d.title), ["Transactional Outbox", "Unknown Pattern"]);
  assert.equal(details.systemDesigns[0].howImplemented, entries[0].where);
  assert.equal(details.systemDesigns[0].whyUsed, entries[0].why);
  assert.equal(details.systemDesigns[0].whereImplemented, undefined);
  assert.deepEqual(details.systemDesigns[0].diagram, outbox);
  assert.deepEqual(details.oopDesignPatterns, entries.slice(1, 3));
  assert.equal(details.oopDesignPatterns[0].howImplemented, undefined);
});

test("new optional collections take precedence, explicit diagram associations are preserved", () => {
  const overview = diagram("C4 Container Diagram"), er = diagram("ER Diagram"), flow = diagram("Flow");
  const supplied = {
    functionalRequirements: [], overviewDiagrams: [overview], dataModelDiagrams: [er],
    systemDesigns: [{ title: "Explicit", whereImplemented: "Location", howImplemented: "Mechanism", whyUsed: "Reason", diagram: flow }],
    oopDesignPatterns: [], designPatterns: [{ pattern: "Strategy", where: "Legacy", why: "Legacy" }],
    diagrams: [overview, er, flow],
  };
  const { details } = getProjectCaseStudy({ ...project, details: supplied });
  assert.deepEqual(details.systemDesigns, supplied.systemDesigns);
  assert.deepEqual(details.oopDesignPatterns, []);
  assert.deepEqual(details.functionalRequirements, []);
  assert.deepEqual(details.overviewDiagrams, [overview]);
  assert.deepEqual(details.dataModelDiagrams, [er]);
  assert.deepEqual(details.unclassifiedDiagrams, []);
  assert.equal(supplied.systemDesigns[0].diagram, flow);
});

test("high-level existing architecture is displayed without claiming it is a C4 view", () => {
  const view = diagram("System Architecture");
  const { details } = getProjectCaseStudy({ ...project, details: { diagrams: [view], eventFlow: ["Original step"], eventSchema: [{ field: "id", type: "string", description: "Original description" }] } });
  assert.deepEqual(details.overviewDiagrams, [view]);
  assert.deepEqual(details.eventFlow, ["Original step"]);
  assert.equal(details.eventSchema[0].description, "Original description");
});
