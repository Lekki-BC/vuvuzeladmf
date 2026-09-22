/**
 * VUVUZELA DIGITAL MARKETING FACTORY
 * Theme Manager (Light Mode Default with Dark Mode Switcher)
 */

export function initThemeManager() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeToggleIcon');
  const themeLabel = document.getElementById('themeToggleLabel');

  // Default to light mode unless explicitly set to dark in localStorage
  const savedTheme = localStorage.getItem('vuvuzela-theme') || 'light';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vuvuzela-theme', theme);

    if (themeIcon && themeLabel) {
      if (theme === 'dark') {
        themeIcon.textContent = '☼';
        themeLabel.textContent = 'Light';
        themeToggleBtn?.setAttribute('aria-label', 'Switch to Light Theme');
      } else {
        themeIcon.textContent = '☾';
        themeLabel.textContent = 'Dark';
        themeToggleBtn?.setAttribute('aria-label', 'Switch to Dark Theme');
      }
    }
  }

  // Initial application
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
}
