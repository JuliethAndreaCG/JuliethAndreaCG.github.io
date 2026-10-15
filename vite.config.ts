import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// PsicoJuliethCG - Esencia&Mental.
// This site is served at the ROOT of the personal domain
// (https://juliethandreacg.github.io/), NOT under a /<repo>/ subpath.
// Therefore the Vite base must be '/'.
// If you fork this and the site ends up under a project page
// (username.github.io/repo-name/), change this to '/repo-name/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
