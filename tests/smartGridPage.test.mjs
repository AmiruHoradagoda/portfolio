// Run after the production build; verify the rendered image placement and viewers.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { parse } from "parse5";

const page = parse(fs.readFileSync(new URL("../dist/projects/smart-grid-data-platform/index.html", import.meta.url), "utf8"));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const has = (node, name) => node.attrs?.some(item => item.name === name);
const find = (node, predicate) => [
  ...(predicate(node) ? [node] : []),
  ...(node.childNodes ?? []).flatMap(child => find(child, predicate)),
];
const text = node => node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join("");
const images = node => find(node, item => has(item, "data-diagram-image"));
const filenames = node => images(node).map(image => decodeURI(attr(image, "src").split("/").pop()));
const panel = name => find(page, node => attr(node, "data-case-panel") === name)[0];

test("Smart Grid places all eight images once within the existing three tabs", () => {
  assert.deepEqual(find(page, node => has(node, "data-case-tab")).map(node => attr(node, "data-case-tab")), ["overview", "requirements", "architecture"]);
  assert.deepEqual(filenames(panel("overview")), ["c4-context-c1.png", "c4-container-c2.png"]);
  assert.equal(find(panel("requirements"), node => node.tagName === "li").length, 10);
  const architecture = panel("architecture");
  assert.deepEqual(find(architecture, node => node.tagName === "h4").filter(node => !has(node.parentNode, "data-diagram-viewer")).map(text), ["Data Pipeline Architecture", "Data Model / ER Design", "Main System Designs", "Demonstrated Results"]);
  assert.deepEqual(filenames(architecture), ["lambda-style-hybrid-architecture.png", "postgresql-data-model.png", "spark-structured-streaming-flow.png", "energy-monitoring-dashboard.png", "daily-billing-summary.png", "daily-billing-details.png"]);
  assert.equal(new Set(images(page).map(image => attr(image, "src"))).size, 8);
  assert.ok(!text(architecture).includes("<Figure"));
});

test("Smart Grid assets have captions, alt text, and individual expand/zoom viewers", () => {
  const viewers = find(page, node => has(node, "data-diagram-viewer"));
  assert.equal(viewers.length, 8);
  for (const viewer of viewers) {
    const image = images(viewer)[0];
    const src = decodeURI(attr(image, "src"));
    const relative = src.slice(src.indexOf("/projects/") + 1);
    assert.ok(fs.existsSync(new URL("../public/" + relative, import.meta.url)), src);
    assert.ok(fs.existsSync(new URL("../dist/" + relative, import.meta.url)), src);
    assert.ok(attr(image, "alt")?.trim());
    assert.ok(text(find(viewer, node => node.tagName === "figcaption")[0]).trim());
    assert.equal(find(viewer, node => has(node, "data-diagram-open")).length, 1);
    assert.equal(find(viewer, node => node.tagName === "dialog").length, 1);
    assert.equal(find(viewer, node => has(node, "data-zoom-in")).length, 2);
  }
  const ids = find(page, node => has(node, "id")).map(node => attr(node, "id"));
  assert.equal(new Set(ids).size, ids.length);
});

test("billing screenshots share a responsive comparison and source corrections remain visible", () => {
  const pairs = find(panel("architecture"), node => has(node, "data-evidence-comparison"));
  assert.equal(pairs.length, 1);
  assert.ok(attr(pairs[0], "class").includes("md:grid-cols-2"));
  assert.deepEqual(filenames(pairs[0]), ["daily-billing-summary.png", "daily-billing-details.png"]);
  assert.ok(text(panel("architecture")).includes("zone writes are append-only"));
  assert.ok(text(panel("overview")).includes("both generators run locally"));
});
