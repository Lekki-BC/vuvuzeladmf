/**
 * DealershipPage - Dedicated /car-dealerships page
 * Built with Cliste's "Clutch 1.0" automotive architecture
 */

export function renderDealershipPage() {
  return `
    <div class="dealership-page-wrapper">
      <!-- Dealership Hero Header -->
      <section class="hero-section" id="dealership-hero" style="min-height: 85vh; padding-top: 7rem;">
        <div class="hero-inner">
          <div class="pill-badge">
            <span class="pulse-dot"></span>
            <span>Clutch 1.0 By Vuvuzela DMF</span>
          </div>

          <h1 class="hero-headline">
            Never Miss Another Car Buyer Lead
          </h1>

          <div style="margin-bottom: 2rem;">
            <p style="font-size: clamp(1.1rem, 2vw, 1.35rem); color: var(--text-secondary);">
              Dealerships lose over
            </p>
            <div class="dealership-counter-badge" id="dealershipCounter">
              €0K+
            </div>
            <p style="font-size: clamp(1.1rem, 2vw, 1.35rem); color: var(--text-secondary);">
              annually to slow after-hours and weekend response times.
            </p>
          </div>

          <!-- Video Demo Card -->
          <div class="dealership-video-card">
            <div class="play-video-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div style="position: absolute; bottom: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              Click to preview Clutch 1.0 in action
            </div>
          </div>

          <!-- Hero Actions -->
          <div class="hero-actions">
            <button type="button" class="btn-pill-primary trigger-brief-modal">
              <span>Book Dealership Demo</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button type="button" class="btn-pill-secondary trigger-brief-modal">
              <span>Request Response Audit</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Before & After Comparison -->
      <section class="section-pad" id="dealership-before-after">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-red"></span>
              <span>The Showroom Contrast</span>
            </div>
            <h2 class="section-title">Before vs. After Clutch 1.0</h2>
            <p class="section-subtitle">
              How modern automotive retail transforms when every digital touchpoint is managed 24/7.
            </p>
          </div>

          <div class="split-screen-grid">
            <!-- Without AI -->
            <div class="comp-card reality-card">
              <div class="comp-header-badge">
                <span>Traditional Dealership Reality</span>
              </div>
              <ul class="comp-list" style="margin-top: 1rem;">
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Weekend & evening inquiries sit unattended for 12 to 48 hours until Monday morning</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Sales reps spend 60% of their workday answering basic vehicle spec and mileage questions</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Over 70% of potential buyers cross-shop and test drive at competing showrooms that reply first</span>
                </li>
              </ul>
            </div>

            <!-- With Clutch 1.0 -->
            <div class="comp-card solution-card">
              <div class="comp-header-badge">
                <span>With Clutch 1.0 AI Engine</span>
              </div>
              <ul class="comp-list" style="margin-top: 1rem;">
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Inquiries engaged in less than 3 seconds on your website, WhatsApp, and social media</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Auto-qualifies budget, trade-in details, and financing readiness before scheduling</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Test drives booked straight into your sales calendar with automatic SMS confirmation reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Tyre Kickers Filter Section -->
      <section class="section-pad" id="dealership-filters" style="background: rgba(255, 255, 255, 0.02);">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-green"></span>
              <span>Intelligent Lead Triage</span>
            </div>
            <h2 class="section-title">Separate Serious Buyers from Tyre Kickers</h2>
            <p class="section-subtitle">
              Your sales team should only spend their valuable time closing verified, qualified buyers who are ready to purchase.
            </p>
          </div>

          <div class="stats-triad-grid">
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #38bdf8;">100%</div>
              <div class="stat-triad-label">Inquiries verified with contact and vehicle interest</div>
            </div>
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #10b981;">+52%</div>
              <div class="stat-triad-label">Increase in completed showroom test drives</div>
            </div>
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #fbbf24;">4.8x</div>
              <div class="stat-triad-label">Return on advertising spend across Meta & Google</div>
            </div>
          </div>
        </div>
      </section>

      <!-- WhatsApp Showroom Demo -->
      <section class="section-pad" id="dealership-whatsapp">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-green"></span>
              <span>WhatsApp Showroom Integration</span>
            </div>
            <h2 class="section-title">Direct-to-WhatsApp Automotive Funnel</h2>
            <p class="section-subtitle">
              Irish buyers prefer WhatsApp over email forms. Clutch 1.0 connects your ads and inventory directly into WhatsApp conversations that book appointments on the spot.
            </p>
          </div>

          <div style="text-align: center; margin-top: 2rem;">
            <button type="button" class="btn-pill-primary trigger-brief-modal" style="font-size: 1.15rem; padding: 1rem 2.5rem;">
              <span>Deploy Clutch 1.0 for Your Dealership</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initDealershipPage() {
  const counterEl = document.getElementById('dealershipCounter');
  if (!counterEl) return;

  const target = 200;
  let current = 0;
  const duration = 1800;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counterEl.textContent = `€${target}K+`;
      clearInterval(timer);
    } else {
      counterEl.textContent = `€${Math.round(current)}K+`;
    }
  }, stepTime);
}
