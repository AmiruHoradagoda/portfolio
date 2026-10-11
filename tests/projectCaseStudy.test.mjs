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

test("legacy quality scenarios become challenge/response pairs without losing requirements", () => {
  const requirement = { id: "R1", area: "Inventory", requirement: "Avoid overselling", priority: "High" };
  const result = getProjectCaseStudy({ ...project, details: {
    functionalRequirements: [requirement], engineeringRequirements: ["Allow recovery"],
    qualityAttributes: [{ attribute: "Consistency", scenario: "Concurrent buyers", response: "Atomic reservation" }],
  } });
  assert.deepEqual(result.challenges, [{ title: "Consistency", problem: "Concurrent buyers", solution: "Atomic reservation" }]);
  assert.deepEqual(result.details.functionalRequirements, [requirement]);
  assert.deepEqual(result.details.engineeringRequirements, ["Allow recovery"]);
});

test("explicit challenge solutions take precedence over legacy quality data", () => {
  const explicit = [{ title: "Recovery", problem: "Worker crash", solution: "Recover stale work" }];
  const result = getProjectCaseStudy({ ...project, details: {
    challengeSolutions: explicit,
    qualityAttributes: [{ attribute: "Legacy", scenario: "Old problem", response: "Old response" }],
  } });
  assert.deepEqual(result.challenges, explicit);
});

test("requirement-only and feature-only projects do not receive invented solutions or trade-offs", () => {
  const result = getProjectCaseStudy(project);
  assert.equal(result.details.background, project.description);
  assert.equal(result.details.functionalRequirements[0].requirement, project.features[0]);
  assert.deepEqual(result.challenges, []);
  assert.deepEqual(result.details.designPatterns, []);
  assert.equal(result.details.tradeOffs, undefined);
  assert.deepEqual(Object.values(result.diagramsBySection).flat(), []);
});

test("diagram placement supports every tab, defaults legacy entries, and preserves captions/order", () => {
  const diagram = { title: "Legacy", src: "legacy.svg", alt: "Legacy architecture" };
  const assigned = ["overview", "challenges", "architecture", "decisions"].map(section => ({
    title: section, src: section + ".svg", alt: section, section, caption: "Context for " + section,
  }));
  const result = getProjectCaseStudy({ ...project, details: { diagrams: [diagram, ...assigned] } });
  assert.deepEqual(result.diagramsBySection.architecture, [diagram, assigned[2]]);
  for (const section of ["overview", "challenges", "decisions"]) {
    assert.deepEqual(result.diagramsBySection[section], assigned.filter(d => d.section === section));
  }
});

test("legacy ER diagrams fall back to Architecture & Design", () => {
  const result = getProjectCaseStudy({ ...project, details: { erDiagram: { src: "er.png", alt: "Owned entities" } } });
  assert.deepEqual(result.diagramsBySection.architecture, [{ title: "ER Diagram", src: "er.png", alt: "Owned entities" }]);
});

test("empty optional collections stay empty while event flow/schema and trade-offs survive mapping", () => {
  const supplied = { functionalRequirements: [], qualityAttributes: [], designPatterns: [], diagrams: [],
    eventFlow: ["Publish", "Consume"], eventSchema: [{ field: "id", type: "string", description: "Event ID" }],
    tradeOffs: ["In-memory aggregation is not durable"],
  };
  const result = getProjectCaseStudy({ ...project, details: supplied });
  assert.deepEqual(result.details.functionalRequirements, []);
  assert.deepEqual(result.details.eventFlow, supplied.eventFlow);
  assert.deepEqual(result.details.eventSchema, supplied.eventSchema);
  assert.deepEqual(result.details.tradeOffs, supplied.tradeOffs);
});
