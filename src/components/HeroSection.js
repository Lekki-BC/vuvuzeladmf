/**
 * HeroSection - Cliste luxury hero section with rotating text and logo marquee
 */
export function renderHeroSection() {
  return `
    <section class="hero-section" id="hero">
      <div class="hero-inner">
        <!-- Status Pill Badge -->
        <div class="pill-badge">
          <span class="pulse-dot"></span>
          <span>AI Automation & Performance Growth Engine</span>
        </div>

        <!-- Main Headline with Rotating Word Badge -->
        <h1 class="hero-headline">
          <span>Elevate your</span>
          <br />
          <div class="hero-headline-subrow">
            <span>Business</span>
            <span class="rotating-word-pill" id="rotatingWordPill">Growth</span>
          </div>
        </h1>

        <!-- Subheading -->
        <p class="hero-lead">
          Vuvuzela DMF helps ambitious businesses save time, capture lost leads, and multiply revenue with smart conversational AI, automated workflows, and precision performance engineering—fully managed for you.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Start Automating</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <a href="#ai-team" class="btn-pill-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>Live Demonstration</span>
          </a>
        </div>

        <!-- Social Proof / Infinite Marquee -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies & ambitious brands</p>
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
  const rotatingPill = document.getElementById('rotatingWordPill');
  if (!rotatingPill) return;

  const words = ['Growth', 'Innovation', 'Efficiency', 'Pipeline', 'Revenue', 'Performance'];
  let index = 0;

  setInterval(() => {
    // Fade out and translate up
    rotatingPill.style.opacity = '0';
    rotatingPill.style.transform = 'translateY(-12px) scale(0.95)';

    setTimeout(() => {
      index = (index + 1) % words.length;
      rotatingPill.textContent = words[index];
      // Reset position below and animate in
      rotatingPill.style.transform = 'translateY(12px) scale(0.95)';
      
      requestAnimationFrame(() => {
        rotatingPill.style.opacity = '1';
        rotatingPill.style.transform = 'translateY(0) scale(1)';
      });
    }, 250);
  }, 2200);
}
