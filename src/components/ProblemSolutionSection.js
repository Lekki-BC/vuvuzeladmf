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
            <span>The Problem Every Business Faces</span>
          </div>
          <h2 class="section-title">
            <span style="color: var(--accent-red);">60-70%</span> of Your Leads Are Slipping Away
          </h2>
          <p class="section-subtitle">
            While your team is busy delivering services or off-duty, prospects inquire online and bounce to competitors who reply first. Here is how we fix it.
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
              <span>The Reality</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">4+ Hours</div>
              <div class="comp-stat-desc">
                Average business response time. But 78% of customers buy from the vendor who replies first.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Staff miss high-value inquiries during evenings, weekends, and peak operational hours</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Busy serving existing clients while inbound website and social leads go cold</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Thousands in monthly advertising spend wasted driving traffic to slow, unresponsive contact forms</span>
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
              <span>Our Solution</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">24/7 Sub-Second</div>
              <div class="comp-stat-desc">
                Intelligent conversational agents engage immediately, qualify intent, and book appointments automatically.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Instantly answers buyer questions, recommends products, and schedules showroom visits</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Full two-way synchronization with your CRM, Google Calendar, and email pipelines</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Omnichannel capture across Website, WhatsApp Business, Instagram DM, and Voice concierge</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 3 Stat Metrics -->
        <div class="stats-triad-grid">
          <div class="stat-triad-card">
            <div class="stat-triad-num">€500+</div>
            <div class="stat-triad-label">Average value lost per missed buyer inquiry</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">78%</div>
            <div class="stat-triad-label">Of consumers select the first responder</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">24/7</div>
            <div class="stat-triad-label">Automated throughput—our AI never sleeps</div>
          </div>
        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner">
          <h3>Stop Losing Qualified Customers Today</h3>
          <p>
            Get a tailored response-time audit and revenue diagnostic to discover exactly how many sales opportunities your business is leaving on the table.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Revenue Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}
