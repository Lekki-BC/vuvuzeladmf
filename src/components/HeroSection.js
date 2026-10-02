/**
 * HeroSection - Cliste luxury hero section with rotating text and logo marquee
 */
export function renderHeroSection() {
  return `
    <section class="hero-section" id="hero">
      <div class="hero-inner">
        <!-- Split Hero Grid -->
        <div class="hero-split-grid">
          <!-- Left Column: High-Conversion Copy & CTAs -->
          <div class="hero-copy-col">
            <!-- Main Headline with Rotating Word Badge -->
            <h1 class="hero-headline">
              Accelerate your
              <br />
              <div class="hero-headline-subrow">
                <span>Business</span>
                <span class="rotating-word-pill" id="rotatingWordPill">Revenue</span>
              </div>
            </h1>

            <!-- Subheading -->
            <p class="hero-lead">
              The Internet is here to stay, and smartphones now account for over 80% of retail visits. At <strong>Vuvuzela Digital Marketing Factory Inc.</strong>, we blend bespoke creative direction with data-driven strategy across high-converting web engineering, precision PPC, lifecycle video content, mobile apps, and strategic campaigns to engineer predictable revenue pipelines far beyond expectations.
            </p>

            <!-- CTA Buttons -->
            <div class="hero-actions">
              <button type="button" class="btn-pill-primary trigger-brief-modal">
                <span>Claim Free Growth Audit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <a href="#services" class="btn-pill-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                <span>Explore 9 Services</span>
              </a>
            </div>

            <!-- Social Proof Avatar Stack & Ratings -->
            <div class="hero-trust-proof">
              <div class="hero-avatar-stack">
                <img src="/images/avatar-mike.jpg" alt="Client Mike Rodriguez" class="hero-avatar-img" />
                <img src="/images/avatar-sarah.jpg" alt="Client Sarah Chen" class="hero-avatar-img" />
                <img src="/images/avatar-michael.jpg" alt="Client Michael Torres" class="hero-avatar-img" />
                <img src="/images/avatar-david.jpg" alt="Client David Kim" class="hero-avatar-img" />
                <span class="hero-avatar-extra">+50</span>
              </div>
              <div class="hero-trust-text">
                <div class="hero-stars">★★★★★ <span class="hero-rating-num">4.9/5 Rating</span></div>
                <div class="hero-trust-sub">Trusted by 50+ growth brands • Average 4.2x ROAS</div>
              </div>
            </div>

            <!-- Quick Conversion Checklist -->
            <div class="hero-checklist">
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                7-14 Day Lead Velocity
              </span>
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Zero Vanity Metrics
              </span>
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                24/7 WhatsApp Triage
              </span>
            </div>
          </div>

          <!-- Right Column: Interactive Marketing Command Center Mockup -->
          <div class="hero-visual-col">
            <div class="hero-visual-container" id="heroVisualContainer">
              <div class="hero-ambient-glow" aria-hidden="true"></div>

              <div class="hero-visual-card" id="heroVisualCard">
                <!-- macOS Chrome Header -->
                <div class="hero-visual-chrome">
                  <div class="hero-chrome-dots">
                    <span class="chrome-dot dot-red"></span>
                    <span class="chrome-dot dot-amber"></span>
                    <span class="chrome-dot dot-emerald"></span>
                  </div>
                  <div class="hero-chrome-title">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    <span>vuvuzela.growth.engine/live-telemetry</span>
                  </div>
                  <div class="hero-chrome-live-tag">
                    <span class="pulse-dot dot-green"></span>
                    <span>LIVE STREAM</span>
                  </div>
                </div>

                <!-- Main Visual Image Wrap -->
                <div class="hero-image-wrap">
                  <img
                    src="/images/hero-dashboard.jpg"
                    alt="Vuvuzela Digital Marketing Factory Inc. Growth Command Center"
                    class="hero-dashboard-image"
                    loading="eager"
                  />
                  <div class="hero-image-glare"></div>
                </div>

                <!-- Floating Interactive Pill 1: Speed to Lead -->
                <div class="hero-floating-pill pill-speed">
                  <div class="pill-icon-box whatsapp-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Speed-to-Lead Triage</span>
                    <span class="pill-stat">0:45s Instant Follow-up</span>
                  </div>
                </div>

                <!-- Floating Interactive Pill 2: ROAS Multiplier -->
                <div class="hero-floating-pill pill-roas">
                  <div class="pill-icon-box roas-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Average ROAS</span>
                    <span class="pill-stat highlight-green">4.2x (+340% YoY)</span>
                  </div>
                </div>

                <!-- Floating Interactive Pill 3: Core Web Vitals -->
                <div class="hero-floating-pill pill-vitals">
                  <div class="pill-icon-box vitals-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Web Performance</span>
                    <span class="pill-stat">99 Lighthouse • 0.35s LCP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof / Infinite Marquee -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies, ambitious brands &amp; industry leaders</p>
          <div class="trust-marquee-track">
            <!-- First Set -->
            <div class="trust-marquee-item">TechCorp</div>
            <div class="trust-marquee-item">InnovateLab</div>
            <div class="trust-marquee-item">FutureScale</div>
            <div class="trust-marquee-item">AutoFlow</div>
            <div class="trust-marquee-item">eScale Digital</div>
            <div class="trust-marquee-item">DataFlow UK</div>
            <div class="trust-marquee-item">Apex Automations</div>
            <div class="trust-marquee-item">Vanguard Growth</div>
            <!-- Duplicated for Infinite Smooth Loop -->
            <div class="trust-marquee-item">TechCorp</div>
            <div class="trust-marquee-item">InnovateLab</div>
            <div class="trust-marquee-item">FutureScale</div>
            <div class="trust-marquee-item">AutoFlow</div>
            <div class="trust-marquee-item">eScale Digital</div>
            <div class="trust-marquee-item">DataFlow UK</div>
            <div class="trust-marquee-item">Apex Automations</div>
            <div class="trust-marquee-item">Vanguard Growth</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroSection() {
  // 1. Rotating Word Pill
  const rotatingPill = document.getElementById('rotatingWordPill');
  if (rotatingPill) {
    const words = ['Revenue', 'ROAS', 'Pipeline', 'Acquisition', 'Conversion', 'Growth'];
    let index = 0;

    setInterval(() => {
      rotatingPill.style.opacity = '0';
      rotatingPill.style.transform = 'translateY(-12px) scale(0.95)';

      setTimeout(() => {
        index = (index + 1) % words.length;
        rotatingPill.textContent = words[index];
        rotatingPill.style.transform = 'translateY(12px) scale(0.95)';

        requestAnimationFrame(() => {
          rotatingPill.style.opacity = '1';
          rotatingPill.style.transform = 'translateY(0) scale(1)';
        });
      }, 250);
    }, 2200);
  }

  // 2. 3D Subtle Parallax Tilt on Hero Visual Container
  const container = document.getElementById('heroVisualContainer');
  const card = document.getElementById('heroVisualCard');

  if (container && card && window.matchMedia('(pointer: fine)').matches) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}
