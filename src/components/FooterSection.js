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
            Vuvuzela Digital Marketing Factory Inc. — Full-Spectrum Digital Marketing &amp; Platform Engineering. Engineering high-converting funnels, scalable paid acquisition, mobile apps, lifecycle video content, digital PR, and strategic campaign infrastructure worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${currentYear} Vuvuzela Digital Marketing Factory Inc. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Services -->
          <div class="footer-nav-col">
            <h4>Our 9 Services</h4>
            <ul class="footer-nav-links">
              <li><a href="#services">PPC (Pay-Per-Click) Adverts</a></li>
              <li><a href="#services">Websites &amp; E-Commerce CRO</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">Online Video &amp; Content Marketing</a></li>
              <li><a href="#services">Digital PR for Individuals</a></li>
              <li><a href="#services">Online Reputation Management (ORM)</a></li>
              <li><a href="#services">Strategic GOTV Campaigns</a></li>
            </ul>
          </div>

          <!-- Column 2: Industries -->
          <div class="footer-nav-col">
            <h4>Specialized Sectors</h4>
            <ul class="footer-nav-links">
              <li><a href="#industries">Civic &amp; Political Campaigns (GOTV)</a></li>
              <li><a href="#industries">E-Commerce &amp; High-Growth DTC</a></li>
              <li><a href="#industries">Private Individuals &amp; PR</a></li>
              <li><a href="#industries">B2B &amp; Professional Services</a></li>
              <li><a href="#industries">Private Healthcare &amp; Clinics</a></li>
              <li><a href="#industries">Luxury Real Estate &amp; Property</a></li>
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
              <li><a href="#services">Our Capabilities</a></li>
            </ul>
          </div>

          <!-- Column 4: Social / Connect -->
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
        <span>Vuvuzela Digital Marketing Factory Inc. — Growth Strategy • Platform Engineering • PR &amp; ORM</span>
        <span>Paid Media • Web &amp; Mobile Engineering • 4K Video • Strategic GOTV Campaigns</span>
      </div>
    </footer>
  `;
}
