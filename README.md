# Portfolio — Ayinde Farouk Salami

Alternant **Data Engineer / MLOps** · Master IA & Data à SUPINFO
🔗 **[portfolio-farouk.onrender.com](https://portfolio-farouk.onrender.com)**

Site statique en React 19, Vite 8 et Tailwind CSS 4, pré-rendu au build et servi sans aucune ressource tierce.

## Démarrage

```bash
nvm use            # Node 22 (voir .nvmrc)
npm ci
npm run dev        # http://localhost:5173
npm run check      # lint + build de production
npm test           # tests unitaires (node --test)
npm run test:e2e   # tests end-to-end Playwright + audit axe (sur dist/)
npm run lighthouse # Lighthouse CI avec seuils bloquants
npm run preview    # sert dist/ en local
```

## Architecture

```text
src/
├── content/
│   ├── shared.js          # données communes : liens, médias, stacks, dates
│   ├── fr.js / en.js      # tous les textes, par langue (site bilingue : / et /en/)
│   └── index.jsx          # contexte de langue (useContent)
├── components/            # Header, Hero, Profile, Experience, Projects, Skills, Education…
├── lib/icons.jsx          # logos de technos (sprite SVG) + pictogrammes de repli
├── lib/brands-map.js      # nom de techno -> identifiant simple-icons
├── assets/media/          # vidéos de démo réencodées (H.264 720p) + posters WebP
├── entry-server.jsx       # rendu serveur utilisé pour le pré-rendu
└── main.jsx               # hydratation côté client
scripts/
├── generate-icons.mjs     # génère le sprite SVG des logos (prebuild / predev)
└── prerender.mjs          # injecte le HTML pré-rendu, la CSS critique et les preloads de polices
```

**Mettre à jour le contenu** : textes dans `src/content/fr.js` et `src/content/en.js`, données communes dans `src/content/shared.js`.
**Mettre à jour le CV** : remplacer `public/cv/ayinde-farouk-salami-cv.pdf` (FR) ou `ayinde-farouk-salami-cv-en.pdf` (EN), même nom.
**Changer de domaine** : modifier `site.url` dans `src/content/shared.js` (canonical, Open Graph, sitemap et robots suivent).

## Sécurité

- CSP stricte (`script-src 'self'`, aucune origine tierce), `frame-ancestors 'none'`, HSTS, COOP/CORP,
  `Referrer-Policy`, `Permissions-Policy` — définis dans `render.yaml` et dans `docker/`.
- Polices, logos et médias auto-hébergés : aucune requête vers un CDN, aucune fuite d'IP des visiteurs.
- Coordonnées réduites au strict nécessaire sur la page (email, LinkedIn, GitHub).
- `npm audit` dans la CI, Dependabot hebdomadaire (npm, GitHub Actions, Docker).

## Performance

- HTML pré-rendu (contenu visible sans JavaScript, indexable), CSS critique intégrée, polices préchargées.
- Vidéos : 321 Mo → 18 Mo, chargées uniquement au clic (poster WebP ~35 Ko par défaut).
- Assets versionnés servis avec `Cache-Control: immutable` (1 an).
- Animations limitées à `transform`/`opacity`, désactivées si « réduire les animations ».
- Lighthouse (build local) : **100 / 100 / 100 / 100** en desktop, **96 / 100 / 100 / 100** en mobile.

## CI/CD

`.github/workflows/ci.yml` à chaque push et PR :

1. `npm ci` → lint → tests unitaires → build + pré-rendu → vérification du HTML statique → budget de poids →
   `npm audit` → tests end-to-end Playwright (parcours, accessibilité axe, zéro requête tierce, zéro erreur console)
   → Lighthouse CI (performance ≥ 95, accessibilité / bonnes pratiques / SEO = 100, CLS ≤ 0,05)
2. Build de l'image Docker + test de fumée (en-têtes de sécurité, contenu FR/EN, vraie 404)
3. Sur `main` uniquement : déclenchement du déploiement Render (secret `RENDER_DEPLOY_HOOK`),
   attente de la mise en ligne du commit exact (`<meta name="build-commit">`), puis vérification de la production.

Le déploiement est donc entièrement automatique : une PR fusionnée sur `main` part en production
uniquement si toute la chaîne est verte, et le job échoue si la production ne sert pas le bon commit
ou perd un en-tête de sécurité. Déploiement manuel de secours :
`render deploys create srv-d7hb2mm7r5hc73boo5g0 --wait` (CLI Render).

Le service Render est configuré dans le tableau de bord ; `render.yaml` documente cette configuration
(build, Node 22, redirections, en-têtes).

## Docker

```bash
docker build -t portfolio-farouk .
docker run --rm -p 8080:8080 portfolio-farouk   # http://localhost:8080
```

Image multi-stage : build Node 22, puis Nginx non-root (port 8080) avec les mêmes en-têtes qu'en production.
