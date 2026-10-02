/**
 * GlassmorphismNav - Floating glass pill navigation bar
 * Handles scroll auto-hide/reveal, mobile drawer, theme switcher, and section scrolling
 */

import { syncThemeToggleButtons, getCurrentTheme } from '../scripts/theme.js';

export function renderGlassmorphismNav() {
  return `
    <nav class="glass-nav-container navbar-visible" id="glassNav" aria-label="Main Navigation">
      <div class="glass-nav-bar">
        <!-- Brand Logo (Bespoke Geometric Deep-Blue 'V' Mark + Wordmark) -->
        <a href="/" class="nav-logo-link" data-route="/" aria-label="Vuvuzela DMF Home">
          <div class="nav-logo-mark" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navVDeepBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1e1b4b" />
                  <stop offset="45%" stop-color="#1e3a8a" />
                  <stop offset="100%" stop-color="#0f172a" />
                </linearGradient>
                <linearGradient id="navVCobalt" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="60%" stop-color="#2563eb" />
                  <stop offset="100%" stop-color="#1d4ed8" />
                </linearGradient>
                <linearGradient id="navVCyanGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#06b6d4" />
                  <stop offset="100%" stop-color="#38bdf8" />
                </linearGradient>
                <linearGradient id="navVShield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0b1120" />
                  <stop offset="100%" stop-color="#020617" />
                </linearGradient>
              </defs>
              <rect width="48" height="48" rx="13" fill="url(#navVShield)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.2" />
              <circle cx="24" cy="24" r="14" fill="#2563eb" opacity="0.25" />
              <path d="M10 12 L19 12 L24 38 L17.5 38 Z" fill="url(#navVDeepBlue)" />
              <path d="M38 12 L29 12 L24 38 L30.5 38 Z" fill="url(#navVCobalt)" />
              <path d="M19 12 L24 26 L29 12 L24 18 Z" fill="url(#navVCyanGlow)" />
              <circle cx="24" cy="37" r="1.8" fill="#38bdf8" />
            </svg>
          </div>
          <div class="nav-logo-text">
            <span>VUVUZELA</span><span class="nav-brand-accent">DMF</span>
          </div>
        </a>

        <!-- Desktop Navigation Items -->
        <div class="nav-menu-desktop">
          <a href="#services" class="nav-link-item">Services</a>
          <a href="#problem-solution" class="nav-link-item">Our Engine</a>
          <a href="#industries" class="nav-link-item">Industries</a>
          <a href="#case-studies" class="nav-link-item">Case Studies</a>
          <a href="#roi-calculator" class="nav-link-item">Growth ROI</a>
          <a href="#faq" class="nav-link-item">FAQ</a>
        </div>

        <!-- Desktop Actions: Theme Toggle + Free Growth Audit -->
        <div class="nav-actions-desktop">
          <!-- Theme Switch Button -->
          <button type="button" class="theme-toggle-btn nav-theme-toggle" aria-label="Toggle light/dark theme" title="Toggle theme">
            <svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <button type="button" class="nav-cta-btn trigger-brief-modal" aria-label="Claim Free Growth Audit">
            <span>Free Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Nav Actions (Theme Switch + Hamburger Button) -->
        <div class="nav-mobile-actions">
          <button type="button" class="theme-toggle-btn mobile-quick-theme-toggle" aria-label="Toggle light/dark theme" title="Toggle theme">
            <svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
            <svg class="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    <div class="mobile-nav-menu" id="mobileNavMenu" role="dialog" aria-modal="true">
      <a href="#services" class="mobile-nav-item">Services</a>
      <a href="#problem-solution" class="mobile-nav-item">Our Engine</a>
      <a href="#industries" class="mobile-nav-item">Industries</a>
      <a href="#case-studies" class="mobile-nav-item">Case Studies</a>
      <a href="#roi-calculator" class="mobile-nav-item">Growth ROI</a>
      <a href="#faq" class="mobile-nav-item">FAQ</a>

      <div class="mobile-theme-row">
        <span class="mobile-theme-label">Theme Mode</span>
        <button type="button" class="theme-toggle-btn mobile-menu-theme-btn" aria-label="Toggle theme">
          <svg class="theme-icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg class="theme-icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span class="theme-toggle-label">Dark Mode</span>
        </button>
      </div>

      <button type="button" class="mobile-nav-cta trigger-brief-modal">
        <span>Free Growth Audit</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `;
}

export function initGlassmorphismNav() {
  const navContainer = document.getElementById('glassNav');
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  const backdrop = document.getElementById('mobileNavBackdrop');

  if (!navContainer) return;

  // Synchronize theme toggle icons to current active theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  syncThemeToggleButtons(currentTheme);

  // Auto-hide on scroll down, reveal on scroll up
  let lastScrollY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          // Scrolling down - hide
          navContainer.classList.add('navbar-hidden');
          navContainer.classList.remove('navbar-visible');
        } else if (lastScrollY - currentScrollY > 6) {
          // Scrolling up - reveal
          navContainer.classList.remove('navbar-hidden');
          navContainer.classList.add('navbar-visible');
        }
      } else {
        // Always reveal at the top
        navContainer.classList.remove('navbar-hidden');
        navContainer.classList.add('navbar-visible');
      }

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );

  // Mobile menu open / close
  const openMenu = () => {
    mobileMenu?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop?.addEventListener('click', closeMenu);

  // Close menu on navigation click (except theme toggle)
  mobileMenu?.querySelectorAll('a, .mobile-nav-cta').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
