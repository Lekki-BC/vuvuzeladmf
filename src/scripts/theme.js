/**
 * Theme Manager for Vuvuzela DMF
 * Manages Light (default) & Dark themes with localStorage persistence and reactive events
 */

const STORAGE_KEY = 'vuvuzela_theme';

export function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  // Default is Light theme as requested
  return 'light';
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || getPreferredTheme();
}

export function applyTheme(theme) {
  const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', normalizedTheme);
  localStorage.setItem(STORAGE_KEY, normalizedTheme);

  // Synchronize all theme toggle buttons on the page
  syncThemeToggleButtons(normalizedTheme);

  // Dispatch custom event for background canvas and dynamic components
  window.dispatchEvent(
    new CustomEvent('themechange', {
      detail: { theme: normalizedTheme }
    })
  );

  return normalizedTheme;
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  return applyTheme(newTheme);
}

export function syncThemeToggleButtons(theme) {
  const isDark = theme === 'dark';
  const buttons = document.querySelectorAll('.theme-toggle-btn');

  buttons.forEach((btn) => {
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');

    const iconSun = btn.querySelector('.theme-icon-sun');
    const iconMoon = btn.querySelector('.theme-icon-moon');
    const labelSpan = btn.querySelector('.theme-toggle-label');

    if (iconSun && iconMoon) {
      if (isDark) {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
      } else {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
      }
    }

    if (labelSpan) {
      labelSpan.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
  });
}

export function initTheme() {
  const activeTheme = getPreferredTheme();
  applyTheme(activeTheme);

  // Bind to any existing or future theme toggle button
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.theme-toggle-btn');
    if (toggleBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    }
  });
}
