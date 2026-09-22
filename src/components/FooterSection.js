/**
 * FooterSection - Global luxury dark footer
 */
export function renderFooterSection() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="global-footer">
      <div class="footer-inner-grid">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <div class="nav-logo-link" style="align-self: flex-start;">
            <div class="nav-logo-text">
              <span>VUVUZELA</span><span class="nav-brand-accent">DMF</span>
            </div>
          </div>
          <p class="footer-brand-desc">
            Digital Marketing Factory & AI Automation Engine. Engineering high-velocity revenue pipelines for ambitious businesses worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${currentYear} Vuvuzela DMF. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Product -->
          <div class="footer-nav-col">
            <h4>Product</h4>
            <ul class="footer-nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#ai-team">Industry AI</a></li>
              <li><a href="#roi-calculator">ROI Calculator</a></li>
              <li><a href="/car-dealerships" data-route="/car-dealerships">Car Dealerships</a></li>
            </ul>
          </div>

          <!-- Column 2: Solutions -->
          <div class="footer-nav-col">
            <h4>Solutions</h4>
            <ul class="footer-nav-links">
              <li><a href="#ai-team">Automotive Showrooms</a></li>
              <li><a href="#ai-team">Barbers & Salons</a></li>
              <li><a href="#ai-team">Dentists & Clinics</a></li>
              <li><a href="#ai-team">Restaurants & Dining</a></li>
            </ul>
          </div>

          <!-- Column 3: Resources -->
          <div class="footer-nav-col">
            <h4>Resources</h4>
            <ul class="footer-nav-links">
              <li><a href="#testimonials">Case Studies</a></li>
              <li><a href="#problem-solution">Response Diagnostic</a></li>
              <li><a href="#contact">Schedule Demo</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>

          <!-- Column 4: Social -->
          <div class="footer-nav-col">
            <h4>Connect</h4>
            <ul class="footer-nav-links">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener">X (Twitter)</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <span>Designed & Engineered with Cliste Architecture</span>
        <span>Enterprise Conversational AI & Performance Marketing</span>
      </div>
    </footer>
  `;
}
