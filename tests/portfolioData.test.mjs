import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { projects } from "../src/data/index.ts";

test("project slugs are unique, valid route segments", () => {
  assert.ok(projects.length > 0);
  assert.equal(new Set(projects.map(project => project.slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  }
});

test("every project module is registered exactly once", async () => {
  const directory = new URL("../src/data/projects/", import.meta.url);
  const files = fs.readdirSync(directory).filter(file => file.endsWith(".ts") && file !== "index.ts");
  const definitions = [];
  for (const file of files) {
    const module = await import(new URL(file, directory).href);
    const exports = Object.values(module);
    assert.equal(exports.length, 1, `${file} should export one project`);
    const project = exports[0];
    assert.ok(project && typeof project.slug === "string", `${file} must export project data`);
    assert.equal(projects.filter(registered => registered === project).length, 1, `${file} must be registered exactly once`);
    definitions.push(project);
  }
  assert.equal(definitions.length, projects.length, "The registry must contain only project modules");
});
