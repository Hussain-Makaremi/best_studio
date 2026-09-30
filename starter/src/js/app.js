/*
  Single JS entry (bundled by esbuild -> static/assets/js/app.js).
  Alpine CSP build: NO inline expressions in HTML, logic lives in Alpine.data() here.
  This keeps the site compatible with a strict Content-Security-Policy (script-src 'self').
*/
import Alpine from '@alpinejs/csp';
import { siteNav } from './components/site-nav.js';
import { disclosure } from './components/disclosure.js';

Alpine.data('siteNav', siteNav);
Alpine.data('disclosure', disclosure);

window.Alpine = Alpine;
Alpine.start();
