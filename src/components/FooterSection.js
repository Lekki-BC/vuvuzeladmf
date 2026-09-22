/**
 * FooterSection - Global luxury dark footer for Vuvuzela Digital Marketing Agency
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
            Full-Service Digital Marketing Agency & Performance Growth Engine. Engineering high-converting funnels, scalable paid acquisition, and automated revenue pipelines for ambitious businesses worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${currentYear} Vuvuzela DMF. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Services -->
          <div class="footer-nav-col">
            <h4>Services</h4>
            <ul class="footer-nav-links">
              <li><a href="#services">Paid Advertising (Meta & Google)</a></li>
              <li><a href="#services">High-Converting Web Dev</a></li>
              <li><a href="#services">Technical & Local SEO</a></li>
              <li><a href="#services">Speed-to-Lead Automation</a></li>
              <li><a href="#services">Conversion Rate Optimization</a></li>
            </ul>
          </div>

          <!-- Column 2: Industries -->
          <div class="footer-nav-col">
            <h4>Industries</h4>
            <ul class="footer-nav-links">
              <li><a href="/car-dealerships" data-route="/car-dealerships">Car Dealerships</a></li>
              <li><a href="#industries">E-Commerce & DTC</a></li>
              <li><a href="#industries">Private Clinics & Health</a></li>
              <li><a href="#industries">B2B & Professional</a></li>
              <li><a href="#industries">High-Ticket Retail</a></li>
            </ul>
          </div>

          <!-- Column 3: Growth Hub -->
          <div class="footer-nav-col">
            <h4>Growth Hub</h4>
            <ul class="footer-nav-links">
              <li><a href="#case-studies">Client Case Studies</a></li>
              <li><a href="#problem-solution">The Growth Engine</a></li>
              <li><a href="#roi-calculator">Marketing ROI Calculator</a></li>
              <li><a href="#" class="trigger-brief-modal">Claim Free Growth Audit</a></li>
              <li><a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services" target="_blank" rel="noopener">WhatsApp Direct Line</a></li>
            </ul>
          </div>

          <!-- Column 4: Social / Connect -->
          <div class="footer-nav-col">
            <h4>Connect</h4>
            <ul class="footer-nav-links">
              <li><a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF" target="_blank" rel="noopener">WhatsApp Support</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener">X (Twitter)</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <span>VUVUZELA DMF — Digital Marketing Agency & Performance Engine</span>
        <span>Paid Media • Web Engineering • SEO • 24/7 Lead Automation</span>
      </div>
    </footer>
  `;
}
