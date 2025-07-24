import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES';


// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/React-Portfolio/' : '/',
  plugins: [react(), tailwindcss(),],
});
