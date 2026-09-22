/**
 * Router - Client-side SPA router with smooth page transitions
 * Handles anchor scroll offsets and clean digital marketing agency views
 */

import { renderGlassmorphismNav, initGlassmorphismNav } from './GlassmorphismNav.js';
import { renderHeroSection, initHeroSection } from './HeroSection.js';
import { renderProblemSolutionSection } from './ProblemSolutionSection.js';
import { renderFeaturesSection, initFeaturesSection } from './FeaturesSection.js';
import { renderAITeamSection, initAITeamSection } from './AITeamSection.js';
import { renderTestimonialsSection } from './TestimonialsSection.js';
import { renderROICalculatorSection, initROICalculatorSection } from './ROICalculatorSection.js';
import { renderCTASection } from './CTASection.js';
import { renderFooterSection } from './FooterSection.js';

export class AppRouter {
  constructor(rootContainerId = 'appRoot') {
    this.rootContainer = document.getElementById(rootContainerId);
    this.transitionOverlay = document.getElementById('pageTransitionOverlay');
    this.currentPath = this.normalizePath(window.location.pathname);
  }

  normalizePath(path) {
    return '/';
  }

  init() {
    // Intercept internal link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Check if it's an external link or has target="_blank"
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') {
        return;
      }

      // Check if it's an in-page hash anchor
      if (href.startsWith('#')) {
        e.preventDefault();
        this.scrollToAnchor(href);
        return;
      }

      // Check if it has data-route or is a relative internal path
      const targetRoute = link.getAttribute('data-route') || href;
      const normalizedTarget = this.normalizePath(targetRoute);

      if (normalizedTarget !== this.currentPath) {
        e.preventDefault();
        this.navigateTo(normalizedTarget);
      } else if (href.includes('#')) {
        // Same page with hash
        e.preventDefault();
        const hash = href.substring(href.indexOf('#'));
        this.scrollToAnchor(hash);
      }
    });

    // Listen for browser Back/Forward navigation
    window.addEventListener('popstate', () => {
      this.renderRoute('/', false);
    });

    // Initial render
    this.renderRoute('/', false);

    // If initial URL has a hash, scroll to it after rendering
    if (window.location.hash) {
      setTimeout(() => {
        this.scrollToAnchor(window.location.hash);
      }, 200);
    }
  }

  navigateTo(newPath) {
    if (this.isNavigating) return;
    this.isNavigating = true;

    // Trigger page transition fade out
    if (this.transitionOverlay) {
      this.transitionOverlay.classList.add('is-active');
    }

    setTimeout(() => {
      window.history.pushState({}, '', '/');
      this.renderRoute('/', true);

      // Scroll to top
      window.scrollTo(0, 0);

      // Fade in
      setTimeout(() => {
        if (this.transitionOverlay) {
          this.transitionOverlay.classList.remove('is-active');
        }
        this.isNavigating = false;
      }, 100);
    }, 220);
  }

  renderRoute(path, isNav) {
    if (!this.rootContainer) return;

    let pageHtml = '';

    // Render Navigation
    pageHtml += renderGlassmorphismNav('/');

    // Render Digital Marketing Agency Page
    document.title = 'VUVUZELA DMF — Digital Marketing Agency & Performance Growth Engine';
    pageHtml += renderHeroSection();
    pageHtml += renderProblemSolutionSection();
    pageHtml += renderFeaturesSection();
    pageHtml += renderAITeamSection();
    pageHtml += renderTestimonialsSection();
    pageHtml += renderROICalculatorSection();
    pageHtml += renderCTASection();
    pageHtml += renderFooterSection();

    this.rootContainer.innerHTML = pageHtml;

    // Initialize components for the active view
    initGlassmorphismNav();
    initHeroSection();
    initFeaturesSection();
    initAITeamSection();
    initROICalculatorSection();
  }

  scrollToAnchor(hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth',
      });
    }
  }
}
