// Tests unitaires sans dépendance : node --test.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as simpleIcons from "simple-icons";
import fr from "../../src/content/fr.js";
import en from "../../src/content/en.js";
import {
  categoryIds,
  experienceMeta,
  educationMeta,
  pillarMeta,
  pipelineTools,
  projectMeta,
  projectOrder,
  sectionIds,
  skillItems,
  underTheHoodIcons,
} from "../../src/content/shared.js";
import { brands } from "../../src/lib/brands-map.js";

// Décrit la « forme » d'un objet (types, clés, longueurs de tableaux) pour comparer FR et EN.
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (typeof value === "function") return "function";
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((k) => [k, shape(value[k])]));
  }
  return typeof value;
}

describe("contenu bilingue", () => {
  it("FR et EN ont exactement la même structure", () => {
    assert.deepEqual(shape(en), shape(fr));
  });

  for (const t of [fr, en]) {
    it(`${t.locale} : textes alignés sur les données communes`, () => {
      assert.equal(t.nav.length, sectionIds.length);
      assert.equal(t.hero.stages.length, pipelineTools.length);
      assert.equal(t.profile.pillars.length, pillarMeta.length);
      assert.equal(t.experience.items.length, experienceMeta.length);
      assert.equal(t.education.items.length, educationMeta.length);
      assert.equal(t.skills.groups.length, skillItems.length);
      assert.equal(t.underTheHood.items.length, underTheHoodIcons.length);
      assert.deepEqual(Object.keys(t.projects.categories).sort(), [...categoryIds].sort());
    });

    it(`${t.locale} : chaque projet a un titre, un sous-titre et des points`, () => {
      for (const id of projectOrder) {
        const project = { ...projectMeta[id], ...t.projects.items[id] };
        assert.ok(project.title, `${id} : titre manquant`);
        assert.ok(project.subtitle, `${id} : sous-titre manquant`);
        assert.ok(project.points.length > 0, `${id} : aucun point`);
        assert.ok(categoryIds.includes(project.category), `${id} : catégorie inconnue`);
      }
    });

    it(`${t.locale} : métadonnées SEO présentes et de longueur raisonnable`, () => {
      assert.ok(t.meta.title.length <= 70, "titre trop long");
      assert.ok(t.meta.description.length > 80 && t.meta.description.length <= 260, "description hors limites");
      assert.match(t.cv.file, /^\/cv\/.+\.pdf$/);
    });
  }

  it("chaque langue pointe vers l'autre", () => {
    assert.equal(fr.ui.lang.href, en.meta.path);
    assert.equal(en.ui.lang.href, fr.meta.path);
  });
});

describe("logos", () => {
  it("chaque logo référencé existe dans simple-icons", () => {
    for (const slug of new Set(Object.values(brands))) {
      assert.ok(simpleIcons[`si${slug}`], `si${slug} introuvable`);
    }
  });
});
