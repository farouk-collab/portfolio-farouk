import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { path: "/", lang: "fr", tagline: "Des données fiables", cv: "/cv/ayinde-farouk-salami-cv.pdf" },
  { path: "/en/", lang: "en", tagline: "Reliable data", cv: "/cv/ayinde-farouk-salami-cv-en.pdf" },
];

// Échoue sur toute erreur console (dont les erreurs d'hydratation) et toute requête vers un autre domaine.
test.beforeEach(async ({ page, baseURL }, testInfo) => {
  const origin = new URL(baseURL).origin;
  testInfo.errors = [];
  page.on("console", (msg) => msg.type() === "error" && testInfo.errors.push(`console: ${msg.text()}`));
  page.on("pageerror", (err) => testInfo.errors.push(`pageerror: ${err.message}`));
  page.on("request", (req) => {
    const url = req.url();
    if (/^https?:/.test(url) && new URL(url).origin !== origin) testInfo.errors.push(`requête tierce : ${url}`);
  });
});

test.afterEach(async ({}, testInfo) => {
  expect(testInfo.errors, testInfo.errors.join("\n")).toEqual([]);
});

for (const p of pages) {
  test.describe(`page ${p.lang}`, () => {
    test("contenu pré-rendu, langue et métadonnées", async ({ page, request }) => {
      const raw = await (await request.get(p.path)).text();
      expect(raw).toContain(p.tagline); // présent dans le HTML, avant tout JavaScript
      await page.goto(p.path);
      await expect(page.locator("html")).toHaveAttribute("lang", p.lang);
      await expect(page.locator("h1")).toContainText("Ayinde Farouk Salami");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`${p.path}$`));
      await expect(page.locator('link[hreflang="fr"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
    });

    test("le CV de la langue est téléchargeable", async ({ page, request }) => {
      await page.goto(p.path);
      await expect(page.locator(`header a[href="${p.cv}"]`)).toHaveAttribute("download", "");
      const res = await request.get(p.cv);
      expect(res.status()).toBe(200);
      expect(res.headers()["content-type"]).toContain("pdf");
    });

    test("aucune violation d'accessibilité (WCAG 2.1 AA)", async ({ page }) => {
      await page.goto(p.path);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
    });
  });
}

test("le filtre des projets affiche la bonne catégorie", async ({ page }) => {
  await page.goto("/");
  const projects = page.locator("#projets article");
  await expect(projects).toHaveCount(7);
  await page.getByRole("button", { name: /^Data & IA/ }).click();
  await expect(projects).toHaveCount(2);
  await expect(page.getByRole("button", { name: /^Data & IA/ })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: /^Tous/ }).click();
  await expect(projects).toHaveCount(7);
});

test("la vidéo n'est chargée qu'au clic", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#projets video")).toHaveCount(0);
  await page.getByRole("button", { name: /SUPCONTENT Music/ }).click();
  const video = page.locator("#projets video");
  await expect(video).toHaveCount(1);
  await expect(video).toHaveAttribute("src", /\/assets\/supcontent-.*\.mp4$/);
});

test("la palette de commandes s'ouvre avec Ctrl+K et navigue", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Control+k");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.getByRole("combobox").fill("contact");
  await page.keyboard.press("Enter");
  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL(/#contact$/);
});

test("le sélecteur de langue mène à la version anglaise", async ({ page }) => {
  await page.goto("/");
  await page.locator('header a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("pas de défilement horizontal en mobile", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  for (const p of pages) {
    await page.goto(p.path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, p.path).toBeLessThanOrEqual(0);
  }
});
