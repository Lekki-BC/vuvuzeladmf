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
            <div class="feature-tile-preview" style="justify-content: center; align-items: center; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #4f46e5, #06b6d4); display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1.2rem; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
                  V
                </div>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.85rem; font-weight: 800; color: #0f172a; letter-spacing: 0.05em;">BRAND IDENTITY</span>
                  <span style="font-size: 0.72rem; color: #64748b;">Vector • Letterheads • Guidelines</span>
                </div>
              </div>
              <div class="chips-row" style="margin-top: 4px;">
                <span class="chip-tag" style="background:#f1f5f9; color:#334155; font-size: 0.7rem;">Vector SVGs</span>
                <span class="chip-tag" style="background:#e0e7ff; color:#3730a3; font-size: 0.7rem;">Print Collateral</span>
                <span class="chip-tag" style="background:#fef3c7; color:#92400e; font-size: 0.7rem;">Social Assets</span>
              </div>
            </div>
            <h3 class="feature-tile-title">1. Eye-Catching Logos &amp; Brand Identity</h3>
            <p class="feature-tile-desc">
              Memorable visual identities and bespoke logos tailored for your corporate letterheads, websites, packaging, and digital collateral that anchor instant brand trust.
            </p>
          </div>

          <!-- 2. Everyday & E-Commerce Websites (CRO, CTR, SEO) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-preview" style="gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: #1e293b;">
                <span>Agile CRO &amp; CTR Funnel</span>
                <span style="color: #10b981;">+64.2% Conversion Lift</span>
              </div>
              <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="width: 82%; height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); border-radius: 4px;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 4px;">
                <span>Speed: 0.6s (Lighthouse 99)</span>
                <span>Organic SEO Architecture</span>
              </div>
            </div>
            <h3 class="feature-tile-title">2. Websites &amp; E-Commerce Funnels</h3>
            <p class="feature-tile-desc">
              High-performance everyday corporate websites and e-commerce stores with built-in CTA funnels, high Click-Through Rates (CTR), agile Conversion Rate Optimization (CRO), and robust SEO.
            </p>
          </div>

          <!-- 3. Online Video & Content Marketing Practitioners -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-preview" style="justify-content: center; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.04); padding: 6px 10px; border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444; display: inline-block;"></span>
                  <span style="font-size: 0.75rem; font-weight: 700; color: #1e293b;">Lifecycle Video Studio</span>
                </div>
                <span style="font-size: 0.7rem; font-weight: 700; background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px;">4K Short-Form</span>
              </div>
              <div class="chips-row" style="gap: 4px;">
                <span class="chip-tag" style="font-size: 0.68rem;">YouTube</span>
                <span class="chip-tag" style="font-size: 0.68rem;">TikTok</span>
                <span class="chip-tag" style="font-size: 0.68rem;">Instagram Reels</span>
                <span class="chip-tag" style="font-size: 0.68rem;">Meta / Google</span>
              </div>
            </div>
            <h3 class="feature-tile-title">3. Online Video &amp; Content Marketing</h3>
            <p class="feature-tile-desc">
              Your preferred lifecycle content managers. Professional in-house scriptwriters craft your message, while our video production team breathes life into high-retention video assets for YouTube, TikTok, Instagram, Facebook, and Google Ads.
            </p>
          </div>

          <!-- 4. PPC (Pay-Per-Click) Adverts & Scalable Acquisition -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#dbeafe; color:#1e40af; border-color:#93c5fd;">High Intent: +42%</span>
                <span class="chip-tag">Google Ads Search</span>
                <span class="chip-tag" style="background:#fef3c7; color:#92400e; border-color:#fcd34d;">Meta PMax</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag">Budget-Paced Scaling</span>
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac; font-weight: 800;">Avg ROAS: 4.2x</span>
              </div>
            </div>
            <h3 class="feature-tile-title">4. PPC (Pay-Per-Click) Advertising</h3>
            <p class="feature-tile-desc">
              Data-backed ad campaigns tailored to your budget velocity and urgency. We advertise your goods and services across Google Ads and Meta Ads with the necessary CTA funnel to help your brand scale with absolute ease.
            </p>
          </div>

          <!-- 5. Digital Public Relations (PR) for Private Individuals -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-preview" style="justify-content: center; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.76rem; font-weight: 800; color: #1e293b;">EXECUTIVE AUTHORITY</span>
                <span style="font-size: 0.72rem; color: #3b82f6; font-weight: 700; display: inline-flex; align-items: center; gap: 2px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Verified Press
                </span>
              </div>
              <div class="chips-row" style="gap: 4px;">
                <span class="chip-tag" style="background:#f8fafc; color:#334155; font-size: 0.7rem;">Thought Leadership</span>
                <span class="chip-tag" style="background:#f0fdf4; color:#166534; font-size: 0.7rem;">Media Syndication</span>
              </div>
              <div style="font-size: 0.72rem; color: #64748b;">Top-tier digital placements &amp; personal brand prestige</div>
            </div>
            <h3 class="feature-tile-title">5. Digital PR for Private Individuals</h3>
            <p class="feature-tile-desc">
              Strategic public relations and personal brand engineering for founders, executives, and high-profile individuals seeking authoritative media features, thought leadership syndication, and elevated digital standing.
            </p>
          </div>

          <!-- 6. Social Media Marketing (SMM) & Brand Awareness -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-preview" style="justify-content: center; gap: 6px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 700; color: #1e293b;">
                <span>Audience Reach &amp; Virality</span>
                <span style="color: #6366f1;">+248% Engagement</span>
              </div>
              <div class="chips-row" style="gap: 4px; margin-top: 4px;">
                <span class="chip-tag" style="font-size: 0.7rem;">Target Discovery</span>
                <span class="chip-tag" style="font-size: 0.7rem;">Custom SMM Tools</span>
                <span class="chip-tag" style="background:#ecfdf5; color:#065f46; font-size: 0.7rem; font-weight: 700;">High ROI</span>
              </div>
              <div style="font-size: 0.72rem; color: #64748b; margin-top: 4px;">Proprietary multi-platform scheduling &amp; community nurturing</div>
            </div>
            <h3 class="feature-tile-title">6. Social Media Marketing (SMM)</h3>
            <p class="feature-tile-desc">
              Harness in-house solutions and custom tools to pinpoint your ideal audience, build undeniable brand awareness, and elevate organic visibility that funnels directly into sustainable ROI.
            </p>
          </div>

          <!-- 7. Online Reputation Management (ORM) & Brand Defense -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-preview" style="justify-content: center; gap: 6px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.75rem; font-weight: 800; color: #991b1b; display: inline-flex; align-items: center; gap: 4px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444; display: inline-block;"></span>
                  DEFENSE SYSTEM
                </span>
                <span style="font-size: 0.72rem; color: #166534; font-weight: 700; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">99.4% Sentiment Restored</span>
              </div>
              <div style="font-size: 0.74rem; color: #334155; font-weight: 600; margin-top: 4px;">
                Fake Product &amp; Negative Review Suppression
              </div>
              <div class="chips-row" style="gap: 4px;">
                <span class="chip-tag" style="font-size: 0.7rem;">Search De-indexing</span>
                <span class="chip-tag" style="font-size: 0.7rem;">Brand Redeeming Tools</span>
              </div>
            </div>
            <h3 class="feature-tile-title">7. Online Reputation Management</h3>
            <p class="feature-tile-desc">
              Fake products and negative reviews pop up constantly across the spectrum. We proactively restore and defend online brand perceptions through our proprietary online redeeming and search-suppression tools.
            </p>
          </div>

          <!-- 8. Mobile Application Development (iOS & Android) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-preview" style="justify-content: center; gap: 6px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.76rem; font-weight: 800; color: #1e293b;">NATIVE &amp; CROSS-PLATFORM</span>
                <span style="font-size: 0.72rem; color: #f59e0b; font-weight: 700;">★ 4.9 App Rating</span>
              </div>
              <div class="chips-row" style="gap: 4px; margin-top: 4px;">
                <span class="chip-tag" style="background:#e0f2fe; color:#0369a1; font-size: 0.7rem; font-weight: 700;">Apple iOS</span>
                <span class="chip-tag" style="background:#dcfce7; color:#15803d; font-size: 0.7rem; font-weight: 700;">Google Android</span>
                <span class="chip-tag" style="font-size: 0.7rem;">Flutter / React Native</span>
              </div>
              <div style="font-size: 0.72rem; color: #64748b; margin-top: 4px;">Bespoke UI/UX • Scheduled Test &amp; Release Management</div>
            </div>
            <h3 class="feature-tile-title">8. Mobile Application Development</h3>
            <p class="feature-tile-desc">
              We design and build powerful, user-friendly mobile applications that engage customers and streamline business operations. Delivering native, hybrid, and cross-platform solutions across iOS and Android with scheduled test &amp; release management.
            </p>
          </div>

          <!-- 9. Strategic Digital Campaign Practitioners (Political, GOTV & Mobilization) -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-preview" style="justify-content: center; gap: 6px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.76rem; font-weight: 800; color: #1e293b;">GOTV &amp; VOTER MOBILIZATION</span>
                <span style="font-size: 0.7rem; color: #10b981; font-weight: 700; background: #d1fae5; padding: 2px 6px; border-radius: 4px;">WhatsApp API 98% Open</span>
              </div>
              <div class="chips-row" style="gap: 4px; margin-top: 4px;">
                <span class="chip-tag" style="font-size: 0.7rem;">Constituent CRM</span>
                <span class="chip-tag" style="font-size: 0.7rem;">Online Media Blitz</span>
                <span class="chip-tag" style="background:#ede9fe; color:#5b21b6; font-size: 0.7rem; font-weight: 700;">Precision Targeting</span>
              </div>
              <div style="font-size: 0.72rem; color: #64748b; margin-top: 4px;">Structured online framework to build awareness, persuade &amp; mobilize</div>
            </div>
            <h3 class="feature-tile-title">9. Strategic Digital Campaigns (GOTV)</h3>
            <p class="feature-tile-desc">
              Specialized campaign practitioners for your GOTV (Get Out To Vote) strategy, civic mobilization, campaign websites, and Constituent Relationship Management systems. We execute targeted online media blitzes and integrated WhatsApp API multi-channel outreach.
            </p>
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
