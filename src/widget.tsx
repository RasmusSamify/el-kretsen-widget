import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import cssText from './styles.css?inline';

const MOUNT_ID = 'el-kretsen-widget-root';

function mount() {
  if (document.getElementById(MOUNT_ID)) return;

  const host = document.createElement('div');
  host.id = MOUNT_ID;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = cssText;
  shadow.appendChild(style);

  const fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700&display=swap';
  document.head.appendChild(fonts);

  const appRoot = document.createElement('div');
  shadow.appendChild(appRoot);

  createRoot(appRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
