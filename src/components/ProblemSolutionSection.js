/**
 * ProblemSolutionSection - "The Problem Every Business Faces"
 * Side-by-side comparison of manual delays vs 24/7 AI automation
 */
export function renderProblemSolutionSection() {
  return `
    <section class="section-pad" id="problem-solution">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-red"></span>
            <span>The Marketing Reality Check</span>
          </div>
          <h2 class="section-title">
            Stop Burning Ad Spend on <span style="color: var(--accent-red);">Leaky Funnels</span>
          </h2>
          <p class="section-subtitle">
            Most agencies sell vanity clicks while businesses bleed cash on low ROAS, slow-loading pages, and uncontacted leads. Here is how Vuvuzela DMF engineers predictable, profitable customer acquisition.
          </p>
        </div>

        <!-- Two Column Comparison -->
        <div class="comparison-cards-grid">
          <!-- The Reality (Problem Card) -->
          <div class="comp-card reality-card">
            <div class="comp-header-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>The Broken Agency Model</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">68% Wasted</div>
              <div class="comp-stat-desc">
                Average ad spend leakage caused by unqualified traffic, slow landing pages, and sluggish lead follow-up.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Expensive Meta & Google campaigns optimized for vanity clicks with zero closed-revenue accountability</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Outdated, slow-loading websites that lose 80%+ of visitors before they ever reach an inquiry form</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Inbound leads wait hours or days for a reply, bouncing straight to competitors who respond first</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Disjointed freelancers and agencies pointing fingers with no unified ownership of your pipeline</span>
              </li>
            </ul>
          </div>

          <!-- Our Solution Card -->
          <div class="comp-card solution-card">
            <div class="comp-header-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>The Vuvuzela Growth Engine</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">4.2x Avg ROAS</div>
              <div class="comp-stat-desc">
                Full-funnel marketing architecture unifying high-converting web engineering, targeted media, and instant automation.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Precision paid acquisition on Meta & Google focused strictly on high-intent buyer segments</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Bespoke landing pages engineered with modern conversion rate optimization (CRO) principles</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Instant speed-to-lead automation qualifying and booking prospects in under 60 seconds on WhatsApp & CRM</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Transparent live dashboards tracking cost per lead, qualified pipeline value, and return on investment</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 3 Stat Metrics -->
        <div class="stats-triad-grid">
          <div class="stat-triad-card">
            <div class="stat-triad-num">4.2x</div>
            <div class="stat-triad-label">Average return on advertising spend (ROAS)</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">&lt; 60s</div>
            <div class="stat-triad-label">Instant lead response time on WhatsApp & web</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">+185%</div>
            <div class="stat-triad-label">Average 90-day qualified customer pipeline growth</div>
          </div>
        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner">
          <h3>Uncover Your Hidden Revenue Opportunities</h3>
          <p>
            Get a tailored digital marketing and conversion audit to discover exactly where your ad spend is leaking and how to scale predictable revenue.
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
