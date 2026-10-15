# PsicoJuliethCG — Esencia&Mental

Sitio profesional bilingüe (ES/EN) de **Julieth Andrea Caicedo Goyeneche**, psicóloga clínica y organizacional, publicado en GitHub Pages en [juliethandreacg.github.io](https://juliethandreacg.github.io).

## Stack

- **React 18** con TypeScript estricto (`strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`).
- **Vite 5** como bundler y dev server.
- **Tailwind CSS 3** con paleta custom (neutros `ink-*` + acento morado `accent-*`).
- **react-i18next** para internacionalización (ES/EN), con persistencia en `localStorage`.
- **GitHub Actions** para CI/CD a GitHub Pages (`actions/deploy-pages@v4`).
- Tipografía: Playfair Display (títulos) + Lora (cuerpo).

## Estructura del proyecto

```
JuliethAndreaCG.github.io/
├── .github/workflows/deploy.yml    # CI/CD a GitHub Pages
├── public/
│   ├── .nojekyll                   # No procesar con Jekyll
│   ├── 404.html                    # SPA fallback (marca PsicoJuliethCG)
│   ├── politica-de-privacidad.html # Ley 1581/2012 Colombia
│   ├── robots.txt                  # Sitemap + allow rules
│   ├── sitemap.xml                 # URL + secciones (#about, #faq, #resources…)
│   ├── sw.js                       # Service Worker (PWA, cache v2)
│   ├── manifest.json               # PWA manifest
│   ├── favicon.svg
│   ├── foto.jpg
│   ├── og-banner.jpg               # 1200x630 Open Graph
│   └── icon-192x192.png / icon-512x512.png
├── src/
│   ├── components/                 # Button, Card, Header, LanguageSwitcher…
│   ├── sections/                   # Hero, About, Skills, Approach, Experience, FAQ, Resources, Contact, Footer
│   ├── data/                       # profile, experience, projects, skills
│   ├── hooks/                      # useActiveSection, useHtmlLangSync
│   ├── i18n/                       # Configuración i18n + locales ES/EN
│   ├── types/                      # Project, Skill, SocialLink
│   ├── App.tsx                     # Composición principal
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tailwind directives + animaciones
├── index.html                      # Meta SEO + JSON-LD (Person, ProfessionalService, WebSite, FAQPage, LocalBusiness)
├── tailwind.config.js              # Paleta accent/ink + tipografía Playfair/Lora
├── tsconfig.json                   # Strict mode + project references
├── vite.config.ts                  # base: '/'
└── package.json
```

## SEO y GEO

La landing incluye los elementos clave para posicionamiento en buscadores tradicionales y en motores generativos (GEO):

- **Schema.org JSON-LD** cuádruple: `Person`, `ProfessionalService`, `WebSite` con `SearchAction`, `FAQPage` y `LocalBusiness` (con geo-coordenadas y horarios de atención).
- **Open Graph + Twitter Cards** completas con `og:image:alt` y `og:locale:alternate`.
- **Sitemap XML** con `hreflang` ES/EN y secciones con `#anchor`.
- **robots.txt** con `Crawl-delay: 1` y referencia al sitemap.
- **Service Worker** para PWA (cache-first para shell, network-first para el resto).
- **GSC verificado** (`google-site-verification`).
- **Google Analytics 4** (`G-KRCK3YNG5J`).
- **Página legal** de política de privacidad conforme a Ley 1581/2012 (Habeas Data).
- **i18n ES/EN** con persistencia del idioma del usuario.

## Desarrollo local

Requisitos: Node.js 20+ y npm.

```bash
# Instalar dependencias
npm install

# Levantar el dev server (http://localhost:5173)
npm run dev

# Typecheck (sin generar output)
npx tsc --noEmit

# Build de producción (genera dist/)
npm run build

# Preview del build de producción
npm run preview
```

## Deploy

El deploy es automático vía GitHub Actions en cada push a `main`. El workflow hace typecheck, build, y publica el resultado en GitHub Pages.

### Setup inicial (una sola vez)

1. Ir a **Settings → Pages** del repositorio.
2. En **Source**, dejar **"Deploy from a branch"**.
3. En **Branch**, elegir **`gh-pages`** y folder **`/ (root)`** (no `main`).
4. Guardar.

El workflow `Deploy to GitHub Pages` buildea con Vite y pushea el contenido de `dist/` a la rama `gh-pages` mediante `peaceiris/actions-gh-pages`. GitHub Pages sirve esa rama, así que cada push a `main` regenera el sitio.

> Si en el futuro querés migrar al flujo oficial `actions/deploy-pages` (más simple, sin la rama `gh-pages` intermedia), cambiá Source a "GitHub Actions" y reemplazá el step de peaceiris por `actions/deploy-pages@v4`. El workflow actual está pensado para que funcione con cualquier dropdown de Pages sin requerirte tocar YAML después.

### Flujo normal

```bash
git checkout main
git pull
git checkout -b feat/mi-cambio
# ... hacer cambios ...
git add .
git commit -m "feat: descripción del cambio"
git push -u origin feat/mi-cambio
# Abrir PR en GitHub
# Después del merge a main, el workflow publica automáticamente
```

El sitio se actualiza en [juliethandreacg.github.io](https://juliethandreacg.github.io) ~30 segundos después del merge.

## Internacionalización

- Locales en `src/i18n/locales/{en,es}.json`.
- Idioma por defecto: inglés (cambia a español en `src/i18n/index.ts` → `fallbackLng: 'es'` si lo prefieres).
- El selector en el header persiste la elección en `localStorage` bajo la key `i18nextLng`.
- El atributo `<html lang>` se actualiza automáticamente al cambiar idioma.
- Para agregar un nuevo idioma: crear el JSON correspondiente en `src/i18n/locales/`, agregar el código al type union `SupportedLanguage` en `src/i18n/index.ts`, y agregar el botón en `LanguageSwitcher.tsx`.

## Personalización

- **Contenido**: editar `src/i18n/locales/{en,es}.json` (copy) y `src/data/{profile,experience,skills,projects}.ts` (datos).
- **Paleta**: `tailwind.config.js` → `theme.extend.colors` (`accent-*` para el color principal morado, `ink-*` para neutros).
- **Tipografía**: cambiar `theme.extend.fontFamily` en `tailwind.config.js` y los `<link>` de Google Fonts en `index.html`.
- **Favicon**: reemplazar `public/favicon.svg`.

## Verificación manual

Después de cada cambio importante, verificar:

- [ ] El sitio carga en `https://juliethandreacg.github.io` sin errores.
- [ ] Toggle ES/EN cambia todo el copy y persiste al recargar.
- [ ] Navegación interna (anchor links + scroll suave) funciona.
- [ ] Botón "Back to top" aparece al scrollear > 600px.
- [ ] Lighthouse (Performance, Accessibility, Best Practices, SEO) ≥ 90.
- [ ] Sin errores en DevTools console.
- [ ] Sin 404s en DevTools Network.
- [ ] Validador de Schema Markup sin errores: [schema.org validator](https://validator.schema.org/).
- [ ] Rich Results Test: [Google Search Console](https://search.google.com/test/rich-results).
- [ ] Responsive en 375×667 (iPhone SE), 768×1024 (iPad), 1440×900 (desktop).

## Licencia

MIT — ver `LICENSE` si está presente, o agregar si querés.
