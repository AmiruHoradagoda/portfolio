// Run after npm run build to validate the generated case study.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { parse } from "parse5";

const page = parse(fs.readFileSync(new URL("../dist/projects/service-finder-mobile/index.html", import.meta.url), "utf8"));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const has = (node, name) => node.attrs?.some(item => item.name === name);
const find = (node, predicate) => [
  ...(predicate(node) ? [node] : []),
  ...(node.childNodes ?? []).flatMap(child => find(child, predicate)),
];
const text = node => ["script", "style"].includes(node.tagName) ? "" : node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join("");
const panel = name => find(page, node => attr(node, "data-case-panel") === name)[0];
const images = node => find(node, item => item.tagName === "img" && has(item, "data-diagram-image"));

test("Service Finder retains three accessible tabs and seven implemented requirements", () => {
  const tabs = find(page, node => has(node, "data-case-tab"));
  assert.deepEqual(tabs.map(node => attr(node, "data-case-tab")), ["overview", "requirements", "architecture"]);
  for (const tab of tabs) {
    const target = panel(attr(tab, "data-case-tab"));
    assert.equal(attr(target, "id"), attr(tab, "aria-controls"));
    assert.equal(attr(target, "aria-labelledby"), attr(tab, "id"));
  }
  assert.equal(find(panel("requirements"), node => node.tagName === "li").length, 7);
  assert.ok(text(panel("overview")).includes("team project"));
  assert.ok(text(panel("overview")).includes("Container / Service View"));
  assert.ok(!text(page).includes("booking-oriented"));
});

test("only the supplied Service Finder diagrams appear in their intended tabs with working viewer controls", () => {
  assert.equal(images(page).length, 3);
  assert.ok(attr(images(panel("overview"))[0], "src").endsWith("/projects/service-finder/c4/context_diagram_c1.png"));
  assert.ok(attr(images(panel("overview"))[1], "src").endsWith("/projects/service-finder/c4/container_diagram_c2.png"));
  assert.ok(attr(images(panel("architecture"))[0], "src").endsWith("/projects/service-finder/archi&design/document_model.png"));
  assert.ok(!text(page).includes("<Figure"), "No unnecessary diagram placeholders");
  for (const image of images(page)) {
    const src = decodeURI(attr(image, "src"));
    assert.ok(!src.includes("securedns"));
    assert.ok(attr(image, "alt")?.trim());
    const relative = src.slice(src.indexOf("/projects/service-finder/") + 1);
    assert.ok(fs.existsSync(new URL("../public/" + relative, import.meta.url)), src);
  }
  for (const viewer of find(page, node => has(node, "data-diagram-viewer"))) {
    assert.equal(find(viewer, node => has(node, "data-zoom-in")).length, 2);
    assert.equal(find(viewer, node => has(node, "data-diagram-open")).length, 1);
    assert.equal(find(viewer, node => node.tagName === "dialog").length, 1);
    assert.ok(find(viewer, node => node.tagName === "figcaption" && !attr(node, "class")?.includes("hidden")).every(node => text(node).trim().length > 50));
  }
});

test("Service Finder omits evidence and limitations sections while retaining accurate design notes", () => {
  assert.equal(find(panel("architecture"), node => has(node, "data-source-references")).length, 0);
  const architecture = text(panel("architecture"));
  assert.ok(!architecture.includes("Implementation Evidence"));
  assert.ok(!architecture.includes("Scope & Limitations"));
  for (const phrase of ["does not call notifyListeners", "not change the Firebase Authentication email"]) {
    assert.ok(architecture.includes(phrase), phrase);
  }
  const ids = find(page, node => has(node, "id")).map(node => attr(node, "id"));
  assert.equal(new Set(ids).size, ids.length);
});
