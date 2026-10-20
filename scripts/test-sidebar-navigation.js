import assert from "node:assert/strict";
import { test } from "node:test";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";

const server = await createServer({
  configFile: false,
  optimizeDeps: { noDiscovery: true, include: [] },
  resolve: {
    alias: { "@": fileURLToPath(new URL("../src", import.meta.url)) },
  },
  server: { middlewareMode: true, watch: null },
});
try {
  const {
    tutorials,
    sections,
    learningJourney,
    getCurriculumNavGroups,
    getTutorialSidebarByPath,
    getTutorialNavigationByPath,
  } = await server.ssrLoadModule("/src/data/tutorials.js");

  await test("all non-project lessons share the roadmap stages and menu", () => {
    const groups = getCurriculumNavGroups();
    assert.deepEqual(
      groups.map((group) => group.id),
      learningJourney.map((stage) => stage.id),
    );
    const items = groups.flatMap((group) => group.items);
    assert.equal(new Set(items.map((item) => item.path)).size, items.length);
    for (const tutorial of tutorials.filter((item) => !item.project)) {
      assert.deepEqual(
        getTutorialSidebarByPath(`/tutorials/${tutorial.slug}`).groups,
        groups,
      );
      if (!tutorial.hiddenFromCurriculum || tutorial.showInSectionNav) {
        assert.ok(
          items.some((item) => item.path === `/tutorials/${tutorial.slug}`),
          tutorial.slug,
        );
      }
    }
    for (const section of sections.filter((section) =>
      learningJourney.some((stage) => stage.sectionIds?.includes(section.id)),
    )) {
      assert.ok(
        items.some((item) => item.path === `/tutorials/${section.slug}`),
        section.slug,
      );
    }
    assert.ok(!items.some((item) => item.path.includes("black-swan-bistro")));
  });

  await test("Previous/Next follows exactly the navigable curriculum menu", () => {
    const items = getCurriculumNavGroups()
      .flatMap((group) => group.items)
      .filter((item) => !item.comingSoon);
    items.forEach((item, index) => {
      const navigation = getTutorialNavigationByPath(`${item.path}/`);
      assert.equal(navigation.prev?.path, items[index - 1]?.path);
      assert.equal(navigation.next?.path, items[index + 1]?.path);
    });
    assert.deepEqual(getTutorialNavigationByPath("/tutorials/unknown"), {
      prev: null,
      next: null,
    });
  });

  await test("Bistro overview and every part share all ten project steps, including 4B", () => {
    const menu = getTutorialSidebarByPath("/projects/black-swan-bistro/");
    assert.equal(menu.project, true);
    const items = menu.groups[0].items;
    assert.equal(items.length, 11);
    assert.equal(items[0].path, "/projects/black-swan-bistro");
    assert.match(items[5].path, /part-4b/);
    items
      .slice(1)
      .filter((item) => !item.comingSoon)
      .forEach((item, index, parts) => {
        assert.deepEqual(getTutorialSidebarByPath(item.path), menu);
        const navigation = getTutorialNavigationByPath(item.path);
        assert.equal(navigation.prev?.path, parts[index - 1]?.path);
        assert.equal(navigation.next?.path, parts[index + 1]?.path);
      });
  });
} finally {
  await server.close();
}
