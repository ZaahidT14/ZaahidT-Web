// Astro config: tells Astro how to build the site.
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Your live URL. Update this once Vercel gives you the address.
  site: 'https://zaahidtinwala.vercel.app',
  build: {
    // Outputs notes/itcc-bluenergy.html instead of notes/itcc-bluenergy/index.html,
    // so the relative links between pages work everywhere.
    format: 'file',
    // Put the CSS directly in each page: one fewer file to load.
    inlineStylesheets: 'always',
    // Folder for bundled scripts (the slide viewer). Named 'assets' instead of the default '_astro'.
    assets: 'assets',
  },
});
