/**
 * CTASection - High impact radial glow banner
 */
export function renderCTASection() {
  return `
    <section class="cta-banner-section" id="contact">
      <div class="container">
        <div class="cta-glow-card">
          <h2 class="cta-headline">
            Ready to transform your business's <em>customer engagement</em>?
          </h2>
          <p class="cta-subline">
            Join hundreds of forward-thinking businesses leveraging autonomous AI workflows to capture more leads, eliminate missed inquiries, and accelerate closed revenue.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal" style="padding: 1rem 2.5rem; font-size: 1.15rem;">
            <span>Get Your Demo Today</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}
