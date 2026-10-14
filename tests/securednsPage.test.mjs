// Run after npm run build. These checks inspect the generated Astro page.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { parse } from "parse5";

const page = parse(fs.readFileSync(new URL("../dist/projects/securedns/index.html", import.meta.url), "utf8"));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const has = (node, name) => node.attrs?.some(item => item.name === name);
const find = (node, predicate) => [
  ...(predicate(node) ? [node] : []),
  ...(node.childNodes ?? []).flatMap(child => find(child, predicate)),
];
const text = node => ["script", "style"].includes(node.tagName) ? "" : node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join("");
const panel = name => find(page, node => attr(node, "data-case-panel") === name)[0];
const images = node => find(node, item => item.tagName === "img" && has(item, "data-diagram-image"));
const filename = node => attr(node, "src").split("/").pop();

test("SecureDNS keeps three linked tabs and uses descriptive overview diagrams", () => {
  const tabs = find(page, node => has(node, "data-case-tab"));
  assert.deepEqual(tabs.map(node => attr(node, "data-case-tab")), ["overview", "requirements", "architecture"]);
  for (const tab of tabs) {
    const target = panel(attr(tab, "data-case-tab"));
    assert.equal(attr(target, "id"), attr(tab, "aria-controls"));
    assert.equal(attr(target, "aria-labelledby"), attr(tab, "id"));
  }
  assert.deepEqual(images(panel("overview")).map(filename), ["dns-request-flow.png", "full-communication.png"]);
  assert.ok(!text(panel("overview")).includes("C4"), "DNS flow diagrams must not be presented as C4 views");
  assert.equal(find(panel("requirements"), node => node.tagName === "li").length, 7);
});

test("sniffing and tampering evidence renders as responsive pairs with captions and usable viewers", () => {
  const architecture = panel("architecture");
  const pairs = find(architecture, node => has(node, "data-evidence-comparison"));
  assert.equal(pairs.length, 2);
  const expected = [
    ["sniffing-insecure.png", "sniffing-secure.png"],
    ["tampering-insecure.png", "tampering-secure.png"],
  ];
  pairs.forEach((pair, index) => {
    assert.ok(attr(pair, "class").includes("md:grid-cols-2"));
    assert.deepEqual(images(pair).map(filename), expected[index]);
    assert.equal(find(pair, node => node.tagName === "dialog").length, 2);
    const captions = find(pair, node => node.tagName === "figcaption");
    assert.equal(captions.length, 2);
    assert.ok(captions.every(node => text(node).trim().length > 50));
  });
  assert.deepEqual(images(architecture).map(filename), [...expected.flat(), "flood-protection.png"]);
  assert.ok(text(architecture).includes("Scope & Limitations"));
  assert.ok(text(architecture).includes("does not isolate a separate signature-failure test"));
});

test("all evidence assets resolve, have alternative text, and use unique viewer IDs", () => {
  const displayed = images(page);
  assert.equal(displayed.length, 7, "Each supplied diagram/evidence image should appear once outside its fullscreen copy");
  for (const image of displayed) {
    assert.ok(attr(image, "alt")?.trim());
    const src = decodeURI(attr(image, "src"));
    const relative = src.slice(src.indexOf("/projects/securedns/") + 1);
    assert.ok(fs.existsSync(new URL("../public/" + relative, import.meta.url)), src);
  }
  const ids = find(page, node => has(node, "id")).map(node => attr(node, "id"));
  assert.equal(new Set(ids).size, ids.length);
});
