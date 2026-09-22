/**
 * CTASection - High impact radial glow banner for Vuvuzela Digital Marketing Agency
 */
export function renderCTASection() {
  return `
    <section class="cta-banner-section" id="contact">
      <div class="container">
        <div class="cta-glow-card">
          <h2 class="cta-headline">
            Ready to scale your business with a <em>predictable revenue engine</em>?
          </h2>
          <p class="cta-subline">
            Partner with Vuvuzela DMF. Let our full-service digital marketing agency engineer your high-converting funnels, scale your paid acquisition, and automate your lead pipeline.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; align-items: center; margin-top: 0.5rem;">
            <button type="button" class="btn-pill-primary trigger-brief-modal" style="padding: 1rem 2.5rem; font-size: 1.15rem;">
              <span>Claim Free Growth Audit</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <a href="#services" class="btn-pill-secondary" style="padding: 0.95rem 1.8rem; font-size: 1.05rem;">
              <span>Explore All Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
