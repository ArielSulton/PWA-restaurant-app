import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';
import LazyLoader from './utils/lazy-load';
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  LazyLoader.init();
});