/**
 * FeaturesSection - 9 Core Capabilities of Vuvuzela Digital Marketing Factory Inc.
 * Featuring category filtering, interactive micro-previews, and high-impact visual design.
 */
export function renderFeaturesSection() {
  return `
    <section class="light-features-section" id="services">
      <span id="features" style="position: absolute; top: -100px;"></span>
      <div class="light-dot-grid"></div>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Our 9 Core Capabilities</span>
          </div>
          <h2 class="section-title">
            Full-Spectrum Digital Marketing &amp; Platform Engineering
          </h2>
          <p class="section-subtitle">
            Without much ado, here is our full suite of bespoke services engineered to expand your reach, elevate brand credibility, and scale predictable revenue.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="industry-tabs-wrap" id="servicesFilterTabs" style="margin-bottom: 2.5rem; justify-content: center;">
          <button type="button" class="ind-tab-btn active" data-filter="all">All 9 Services</button>
          <button type="button" class="ind-tab-btn" data-filter="media">Paid Media &amp; Content</button>
          <button type="button" class="ind-tab-btn" data-filter="engineering">Web &amp; Mobile Apps</button>
          <button type="button" class="ind-tab-btn" data-filter="strategic">PR, ORM &amp; Campaigns</button>
        </div>

        <!-- 9 Interactive Feature Cards Grid -->
        <div class="features-interactive-grid" id="servicesGrid">

          <!-- 1. Eye-Catching Logos & Brand Identity -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-brand-identity.jpg" alt="Eye-Catching Logos & Brand Identity" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Architecture</span>
                <span class="feature-tile-stat-badge">Vector • Guidelines</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">1. Eye-Catching Logos &amp; Brand Identity</h3>
              <p class="feature-tile-desc">
                Memorable visual identities and bespoke logos tailored for your corporate letterheads, websites, packaging, and digital collateral that anchor instant brand trust.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Vector SVGs</span>
                <span class="chip-tag">Print Collateral</span>
                <span class="chip-tag">Social Assets</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Branding</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 2. Everyday & E-Commerce Websites (CRO, CTR, SEO) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-web-ecommerce.jpg" alt="Websites & E-Commerce Funnels" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Web Engineering</span>
                <span class="feature-tile-stat-badge">+64.2% Conversion Lift</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">2. Websites &amp; E-Commerce Funnels</h3>
              <p class="feature-tile-desc">
                High-performance everyday corporate websites and e-commerce stores with built-in CTA funnels, high Click-Through Rates (CTR), agile Conversion Rate Optimization (CRO), and robust SEO.
              </p>
              <div class="chips-row">
                <span class="chip-tag">0.6s Page Speed</span>
                <span class="chip-tag">Shopify &amp; Next.js</span>
                <span class="chip-tag">Lighthouse 99</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Web Engineering</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 3. Online Video & Content Marketing Practitioners -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-video-production.jpg" alt="Online Video & Content Marketing" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Lifecycle Video Studio</span>
                <span class="feature-tile-stat-badge">4K Short-Form &amp; Ads</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">3. Online Video &amp; Content Marketing</h3>
              <p class="feature-tile-desc">
                Your preferred lifecycle content managers. Professional in-house scriptwriters craft your message, while our video production team breathes life into high-retention video assets for YouTube, TikTok, Instagram, Facebook, and Google Ads.
              </p>
              <div class="chips-row">
                <span class="chip-tag">YouTube &amp; TikTok</span>
                <span class="chip-tag">Instagram Reels</span>
                <span class="chip-tag">Creative Direction</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Video Studio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 4. PPC (Pay-Per-Click) Adverts & Scalable Acquisition -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-ppc-ads.jpg" alt="PPC Advertising & Scalable Acquisition" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Performance Media</span>
                <span class="feature-tile-stat-badge highlight-stat">Avg 4.2x ROAS</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">4. PPC (Pay-Per-Click) Advertising</h3>
              <p class="feature-tile-desc">
                Data-backed ad campaigns tailored to your budget velocity and urgency. We advertise your goods and services across Google Ads and Meta Ads with the necessary CTA funnel to help your brand scale with absolute ease.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Google Search Ads</span>
                <span class="chip-tag">Meta Advantage+</span>
                <span class="chip-tag">High-Intent Funnels</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Paid Ads</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 5. Digital Public Relations (PR) for Private Individuals -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-digital-pr.jpg" alt="Digital Public Relations for Private Individuals" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Executive Prestige</span>
                <span class="feature-tile-stat-badge">Tier-1 Press</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">5. Digital PR for Private Individuals</h3>
              <p class="feature-tile-desc">
                Strategic public relations and personal brand engineering for founders, executives, and high-profile individuals seeking authoritative media features, thought leadership syndication, and elevated digital standing.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Verified Press</span>
                <span class="chip-tag">Thought Leadership</span>
                <span class="chip-tag">Executive Profiles</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital PR</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 6. Social Media Marketing (SMM) & Brand Awareness -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-social-media.jpg" alt="Social Media Marketing SMM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Audience Growth</span>
                <span class="feature-tile-stat-badge">+248% Engagement</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">6. Social Media Marketing (SMM)</h3>
              <p class="feature-tile-desc">
                Harness in-house solutions and custom tools to pinpoint your ideal audience, build undeniable brand awareness, and elevate organic visibility that funnels directly into sustainable ROI.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Target Discovery</span>
                <span class="chip-tag">Multi-Platform SMM</span>
                <span class="chip-tag">Community Viral Growth</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for SMM</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 7. Online Reputation Management (ORM) & Brand Defense -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-reputation-orm.jpg" alt="Online Reputation Management ORM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Defense</span>
                <span class="feature-tile-stat-badge">99.4% Sentiment Restored</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">7. Online Reputation Management</h3>
              <p class="feature-tile-desc">
                Fake products and negative reviews pop up constantly across the spectrum. We proactively restore and defend online brand perceptions through our proprietary online redeeming and search-suppression tools.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Review Defense</span>
                <span class="chip-tag">Search Suppression</span>
                <span class="chip-tag">Counterfeit Takedown</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Brand Defense</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 8. Mobile Application Development (iOS & Android) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-mobile-apps.jpg" alt="Mobile Application Development" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Mobile Engineering</span>
                <span class="feature-tile-stat-badge">★ 4.9 App Store Rating</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">8. Mobile Application Development</h3>
              <p class="feature-tile-desc">
                We design and build powerful, user-friendly mobile applications that engage customers and streamline business operations. Delivering native, hybrid, and cross-platform solutions across iOS and Android with scheduled test &amp; release management.
              </p>
              <div class="chips-row">
                <span class="chip-tag">iOS &amp; Android</span>
                <span class="chip-tag">React Native / Flutter</span>
                <span class="chip-tag">Biometric &amp; Real-Time</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Mobile Apps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 9. Strategic Digital Campaign Practitioners (Political, GOTV & Mobilization) -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-campaigns-gotv.jpg" alt="Strategic Digital Campaigns GOTV" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Civic Mobilization</span>
                <span class="feature-tile-stat-badge">WhatsApp API 98% Open</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">9. Strategic Digital Campaigns (GOTV)</h3>
              <p class="feature-tile-desc">
                Specialized campaign practitioners for your GOTV (Get Out To Vote) strategy, civic mobilization, campaign websites, and Constituent Relationship Management systems. We execute targeted online media blitzes and integrated WhatsApp API multi-channel outreach.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Constituent CRM</span>
                <span class="chip-tag">WhatsApp Broadcasting</span>
                <span class="chip-tag">Precision Media Blitz</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital Campaigns</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner" style="margin-top: 3.5rem;">
          <h3>Ready to Deploy a Winning Digital Strategy?</h3>
          <p>
            Whether you need high-converting websites, 4K video content, mobile app development, or a strategic GOTV digital campaign, our factory delivers far beyond expectations.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Growth Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initFeaturesSection() {
  // Category Filter Functionality
  const filterBtns = document.querySelectorAll('#servicesFilterTabs .ind-tab-btn');
  const serviceCards = document.querySelectorAll('#servicesGrid .feature-tile');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
