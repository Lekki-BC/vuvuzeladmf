/**
 * FeaturesSection - Re-engineered offer architecture
 * 1. Leads with the 3 Core Hero Growth Engines (What Vuvuzela DMF wins at most)
 * 2. Followed by 6 Supporting Creative & Strategic Capabilities
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
            <span>Specialized Offer Architecture</span>
          </div>
          <h2 class="section-title">
            Where We Win Most: Our 3 Dominant Revenue Engines
          </h2>
          <p class="section-subtitle">
            Ambitious brands don't need disjointed tactical favors. They need a predictable revenue pipeline. We focus relentlessly on three high-impact growth pillars — supported by our complete creative and strategic infrastructure.
          </p>
        </div>

        <!-- 3 Core Hero Revenue Engines (Dominant Pillars) -->
        <div class="features-interactive-grid" style="margin-bottom: 4rem;">

          <!-- Engine 1: PPC & Performance Media -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(99, 102, 241, 0.4); box-shadow: 0 10px 30px rgba(99, 102, 241, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-ppc-ads.jpg" alt="Performance Paid Advertising Engine" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(99, 102, 241, 0.85); color: #fff;">Pillar 01 • Media</span>
                <span class="feature-tile-stat-badge highlight-stat">Avg 4.4x Blended ROAS</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--brand-accent, #6366f1); letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">High-ROI Paid Advertising (Meta &amp; Google)</h3>
              <p class="feature-tile-desc">
                High-intent customer acquisition across Meta Advantage+ (Facebook &amp; Instagram), Google Search, and YouTube. Continuous creative testing, conversion API tracking, and strict accountability to closed-revenue and qualified leads in Naira and USD.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Meta Advantage+</span>
                <span class="chip-tag">Google Search Ads</span>
                <span class="chip-tag">Conversion API</span>
                <span class="chip-tag">High-Intent Funnels</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Scale Paid Media</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Engine 2: High-Converting Websites & E-Commerce CRO -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(16, 185, 129, 0.4); box-shadow: 0 10px 30px rgba(16, 185, 129, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-web-ecommerce.jpg" alt="High-Converting Web & E-Commerce" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(16, 185, 129, 0.85); color: #fff;">Pillar 02 • Web</span>
                <span class="feature-tile-stat-badge">+64.2% Conversion Lift</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: #10b981; letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">Websites &amp; E-Commerce Conversion Engineering</h3>
              <p class="feature-tile-desc">
                Sub-second everyday corporate platforms and Shopify stores engineered with built-in CTA psychological funnels, high Click-Through Rates (CTR), agile Conversion Rate Optimization (CRO), and Google Lighthouse 99+ architecture.
              </p>
              <div class="chips-row">
                <span class="chip-tag">0.6s Page Speed</span>
                <span class="chip-tag">Shopify &amp; Next.js</span>
                <span class="chip-tag">Lighthouse 99</span>
                <span class="chip-tag">Frictionless Checkout</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Engineer Your Web Platform</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Engine 3: 24/7 Revenue Automation & Hybrid Speed-to-Lead -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(245, 158, 11, 0.4); box-shadow: 0 10px 30px rgba(245, 158, 11, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-campaigns-gotv.jpg" alt="Revenue Automation & Speed to Lead" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(245, 158, 11, 0.85); color: #fff;">Pillar 03 • Automation</span>
                <span class="feature-tile-stat-badge highlight-stat">&lt;45s AI + Human Escalation</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: #f59e0b; letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">24/7 Revenue Automation &amp; Speed-to-Lead Triage</h3>
              <p class="feature-tile-desc">
                Over 80% of sales go to the vendor who responds first. We deploy automated WhatsApp API lead qualification combined with seamless live human strategist escalation within 5 minutes, ensuring high-ticket leads convert and complaints never fester.
              </p>
              <div class="chips-row">
                <span class="chip-tag">WhatsApp API</span>
                <span class="chip-tag">Instant Triage</span>
                <span class="chip-tag">Live Human Handoff</span>
                <span class="chip-tag">Multi-Touch CRM</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Deploy Speed-to-Lead</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Section Sub-Header: Supporting Capabilities -->
        <div class="section-header-center" style="margin-top: 2rem; margin-bottom: 2rem;">
          <div class="pill-badge" style="background: rgba(148, 163, 184, 0.12); color: var(--text-secondary); border-color: rgba(148, 163, 184, 0.25);">
            <span>Supporting Creative &amp; Strategic Infrastructure</span>
          </div>
          <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-top: 0.5rem; margin-bottom: 0.5rem;">
            Specialized Tactical Disciplines
          </h3>
          <p class="section-subtitle" style="font-size: 0.95rem; max-width: 680px; margin: 0 auto;">
            Our growth engines are reinforced by in-house design, 4K production, reputation defense, and civic campaign frameworks.
          </p>
        </div>

        <!-- Category Filter Tabs for Supporting Services -->
        <div class="industry-tabs-wrap" id="servicesFilterTabs" style="margin-bottom: 2.5rem; justify-content: center;">
          <button type="button" class="ind-tab-btn active" data-filter="all">All 6 Disciplines</button>
          <button type="button" class="ind-tab-btn" data-filter="creative">Brand &amp; Video</button>
          <button type="button" class="ind-tab-btn" data-filter="tech">Mobile Apps</button>
          <button type="button" class="ind-tab-btn" data-filter="strategic">PR, ORM &amp; Campaigns</button>
        </div>

        <!-- Supporting Feature Cards Grid -->
        <div class="features-interactive-grid" id="servicesGrid">

          <!-- 4. Eye-Catching Logos & Brand Identity -->
          <div class="feature-tile" data-category="creative">
            <div class="feature-tile-media">
              <img src="/images/service-brand-identity.jpg" alt="Eye-Catching Logos & Brand Identity" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Architecture</span>
                <span class="feature-tile-stat-badge">Vector • Guidelines</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">4. Brand Identity &amp; Logo Architecture</h3>
              <p class="feature-tile-desc">
                Memorable visual identities and bespoke corporate logos tailored for your letterheads, packaging, digital collateral, and brand style guides that anchor immediate authority.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Vector SVGs</span>
                <span class="chip-tag">Design Systems</span>
                <span class="chip-tag">Collateral</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Branding</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 5. Online Video & Content Marketing Practitioners -->
          <div class="feature-tile" data-category="creative">
            <div class="feature-tile-media">
              <img src="/images/service-video-production.jpg" alt="Online Video & Content Marketing" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Lifecycle Video Studio</span>
                <span class="feature-tile-stat-badge">4K Short-Form &amp; Ads</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">5. Lifecycle Video &amp; Short-Form Content</h3>
              <p class="feature-tile-desc">
                In-house scriptwriters and video production specialists creating high-retention 4K video assets and viral hooks for YouTube, TikTok, Instagram Reels, and high-CTR paid ad creatives.
              </p>
              <div class="chips-row">
                <span class="chip-tag">TikTok &amp; Reels</span>
                <span class="chip-tag">YouTube Shorts</span>
                <span class="chip-tag">Creative Direction</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Video Studio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 6. Mobile Application Development (iOS & Android) -->
          <div class="feature-tile" data-category="tech">
            <div class="feature-tile-media">
              <img src="/images/service-mobile-apps.jpg" alt="Mobile Application Development" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Mobile Engineering</span>
                <span class="feature-tile-stat-badge">★ 4.9 App Store Rating</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">6. Mobile Application Engineering</h3>
              <p class="feature-tile-desc">
                We design and build powerful, user-friendly mobile applications that engage customers and streamline business operations across iOS and Android with scheduled test and release management.
              </p>
              <div class="chips-row">
                <span class="chip-tag">iOS &amp; Android</span>
                <span class="chip-tag">React Native / Flutter</span>
                <span class="chip-tag">Biometric Auth</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Mobile Apps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 7. Digital Public Relations (PR) for Private Individuals -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-digital-pr.jpg" alt="Digital Public Relations for Private Individuals" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Executive Prestige</span>
                <span class="feature-tile-stat-badge">Tier-1 Press Placements</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">7. Digital PR for Executives &amp; Founders</h3>
              <p class="feature-tile-desc">
                Strategic public relations and executive personal brand engineering for founders, executives, and high-profile individuals seeking authoritative media features, thought leadership, and elevated digital standing.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Tier-1 Press</span>
                <span class="chip-tag">Thought Leadership</span>
                <span class="chip-tag">Executive Profiles</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital PR</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 8. Online Reputation Management (ORM) & Brand Defense -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-reputation-orm.jpg" alt="Online Reputation Management ORM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Defense</span>
                <span class="feature-tile-stat-badge">99.4% Sentiment Restored</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">8. Online Reputation Management &amp; Defense</h3>
              <p class="feature-tile-desc">
                Counterfeit suppression, negative review containment, and brand perception defense. We deploy proprietary search-suppression tools and proactive reputation frameworks to safeguard market equity.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Review Defense</span>
                <span class="chip-tag">Search Suppression</span>
                <span class="chip-tag">Counterfeit Takedowns</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Brand Defense</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 9. Strategic Digital Campaign Practitioners (Political, GOTV & Mobilization) -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-social-media.jpg" alt="Strategic Digital Campaigns GOTV" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Civic Mobilization</span>
                <span class="feature-tile-stat-badge">WhatsApp API 98% Open</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">9. Strategic Civic &amp; GOTV Campaigns</h3>
              <p class="feature-tile-desc">
                Battle-tested campaign practitioners for voter mobilization (Get Out To Vote), civic education, campaign portals, Constituent Relationship Management, and high-capacity WhatsApp API broadcasting.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Constituent CRM</span>
                <span class="chip-tag">WhatsApp Broadcasting</span>
                <span class="chip-tag">Precision Media Blitz</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Campaigns</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner" style="margin-top: 3.5rem;">
          <h3>Ready to Deploy a Dominant Growth Strategy?</h3>
          <p>
            Whether scaling high-ROI ad spend, engineering a bespoke web platform, or deploying automated lead triage, our factory delivers far beyond expectations.
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
  // Category Filter Functionality for supporting services
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
