/**
 * GlassmorphismNav - Floating glass pill navigation bar
 * Handles scroll auto-hide/reveal, mobile drawer, WhatsApp direct link, and section scrolling
 */
export function renderGlassmorphismNav() {
  return `
    <nav class="glass-nav-container navbar-visible" id="glassNav" aria-label="Main Navigation">
      <div class="glass-nav-bar">
        <!-- Brand Logo (Pure Typography without added icon mark) -->
        <a href="/" class="nav-logo-link" data-route="/" aria-label="Vuvuzela DMF Home">
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
        </div>

        <!-- Desktop Actions: Direct WhatsApp & Free Growth Audit -->
        <div class="nav-actions-desktop">

          <button type="button" class="nav-cta-btn trigger-brief-modal" aria-label="Claim Free Growth Audit">
            <span>Free Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
          <svg class="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
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
      <a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services" target="_blank" rel="noopener noreferrer" class="mobile-nav-whatsapp">
        <svg class="whatsapp-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.19 0-.41.07-.63.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.56 4.07 3.59.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01z"/>
        </svg>
        <span>Chat on WhatsApp</span>
      </a>

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

  // Close menu on navigation click
  mobileMenu?.querySelectorAll('a, button').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
