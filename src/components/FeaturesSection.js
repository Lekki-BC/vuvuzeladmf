/**
 * FeaturesSection - Light-theme contrast section showcasing the 6 core capabilities
 * with live animated micro-interactions (chat simulator, calendar booking, phone pulses).
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
            <span>What We Deliver</span>
          </div>
          <h2 class="section-title">
            Full-Service Digital Marketing Engineered for Revenue
          </h2>
          <p class="section-subtitle">
            An integrated growth engine unifying high-ROI paid media, custom web development, technical SEO, and automated lead capture pipelines.
          </p>
        </div>

        <!-- 6 Interactive Feature Cards -->
        <div class="features-interactive-grid">
          <!-- Card 1: Performance Paid Advertising -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#dbeafe; color:#1e40af; border-color:#93c5fd;">High Intent: +42%</span>
                <span class="chip-tag">Meta Ads (FB/IG)</span>
                <span class="chip-tag" style="background:#fef3c7; color:#92400e; border-color:#fcd34d;">Google PMax</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag">Omnichannel Retargeting</span>
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac; font-weight: 800;">Avg ROAS: 4.2x</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Performance Paid Advertising</h3>
            <p class="feature-tile-desc">
              Data-driven ad campaigns across Meta, Google Search, YouTube, and TikTok engineered strictly for high return on ad spend (ROAS) and scalable customer acquisition.
            </p>
          </div>

          <!-- Card 2: High-Converting Web Development -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: #1e293b;">
                <span>Conversion Rate Lift</span>
                <span style="color: #10b981;">+64.2%</span>
              </div>
              <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="width: 82%; height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); border-radius: 4px;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 4px;">
                <span>Speed: 0.6s (Lighthouse 99)</span>
                <span>CRO Architecture</span>
              </div>
            </div>
            <h3 class="feature-tile-title">High-Converting Web Engineering</h3>
            <p class="feature-tile-desc">
              Bespoke websites and sales funnels crafted with elite visual design, psychological copywriting, and sub-second load speeds that turn cold visitors into paying buyers.
            </p>
          </div>

          <!-- Card 3: 24/7 Smart Speed-to-Lead Automation -->
          <div class="feature-tile">
            <div class="feature-tile-preview" id="featureChatPreview">
              <div style="position: absolute; top: 10px; right: 12px; display: flex; align-items: center; gap: 4px;">
                <span style="font-size: 0.72rem; color: #10b981; font-weight: 700;">&lt; 60s RESPONSE</span>
              </div>
              <div class="chat-sim-bubble chat-sim-bot" id="chatSimBubbleBot">
                Good evening! How may I assist you?
              </div>
              <div class="chat-sim-bubble chat-sim-user" id="chatSimBubbleUser">
                I'd like to check pricing and availability
              </div>
              <div class="typing-pill" id="chatSimTyping" style="display: none;">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            </div>
            <h3 class="feature-tile-title">Smart Speed-to-Lead Automation</h3>
            <p class="feature-tile-desc">
              Never let paid ad leads slip away. Our automated conversational workflows engage inbound inquiries within seconds across your website and WhatsApp, qualifying buyers 24/7.
            </p>
          </div>

          <!-- Card 4: Automated Pipeline & Calendar Booking -->
          <div class="feature-tile">
            <div class="feature-tile-preview">
              <div class="cal-grid" id="interactiveCalGrid">
                <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                <div class="cal-day">14</div>
                <div class="cal-day active-day" data-day="15">15</div>
                <div class="cal-day" data-day="16">16</div>
                <div class="cal-day" data-day="17">17</div>
                <div class="cal-day" data-day="18">18</div>
                <div class="cal-day" data-day="19">19</div>
                <div class="cal-day" data-day="20">20</div>
              </div>
              <div class="cal-status-pill" id="calStatusMessage">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Slot confirmed for the 15th at 2:00 PM</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Automated Pipeline & Booking</h3>
            <p class="feature-tile-desc">
              Frictionless booking funnels synchronize with team calendars, eliminate back-and-forth emails, and send automated SMS and WhatsApp confirmation reminders.
            </p>
          </div>

          <!-- Card 5: Technical & Local SEO Dominance -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#e0e7ff; color:#3730a3; border-color:#c7d2fe; font-weight:700;">Google Page 1</span>
                <span class="chip-tag">Local Maps 3-Pack</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac;">Organic Clicks: +210%</span>
                <span class="chip-tag">Technical Audit: 99/100</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Technical SEO & Search Dominance</h3>
            <p class="feature-tile-desc">
              Capture compounding organic buyer demand. We engineer technical SEO architectures, authoritative content strategies, and local search dominance that rank you at the top of Google.
            </p>
          </div>

          <!-- Card 6: Multi-Platform CRM & Revenue Attribution -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: center;">
              <div class="chips-row" style="gap: 0.6rem;">
                <span class="chip-tag" style="font-weight: 700;">WhatsApp API</span>
                <span class="chip-tag" style="font-weight: 700;">HubSpot</span>
                <span class="chip-tag" style="font-weight: 700;">Salesforce</span>
                <span class="chip-tag" style="font-weight: 700;">Meta Pixel</span>
                <span class="chip-tag" style="font-weight: 700;">Google Ads</span>
                <span class="chip-tag" style="font-weight: 700;">Zapier</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Omnichannel CRM & Attribution</h3>
            <p class="feature-tile-desc">
              Full transparency over every marketing dollar spent. Seamlessly plugs into your sales stack and CRM with real-time dashboards tracking exact acquisition cost and revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initFeaturesSection() {
  // 1. Chat simulator cycle
  const botBubble = document.getElementById('chatSimBubbleBot');
  const userBubble = document.getElementById('chatSimBubbleUser');
  const typing = document.getElementById('chatSimTyping');

  if (botBubble && userBubble && typing) {
    const dialogueLoops = [
      {
        bot: 'Good evening! How may I assist you?',
        user: "I'd like to check pricing and availability",
      },
      {
        bot: 'We have 3 slots open for this Saturday!',
        user: 'Can I book the 11:00 AM slot?',
      },
      {
        bot: 'Confirmed! A calendar invite has been sent to your email.',
        user: 'Thank you, that was lightning fast!',
      },
    ];

    let loopIdx = 0;
    setInterval(() => {
      typing.style.display = 'inline-flex';
      setTimeout(() => {
        typing.style.display = 'none';
        loopIdx = (loopIdx + 1) % dialogueLoops.length;
        botBubble.textContent = dialogueLoops[loopIdx].bot;
        userBubble.textContent = dialogueLoops[loopIdx].user;
      }, 900);
    }, 4500);
  }

  // 2. Interactive Calendar Day Selector
  const calGrid = document.getElementById('interactiveCalGrid');
  const calStatus = document.getElementById('calStatusMessage');
  if (calGrid && calStatus) {
    calGrid.querySelectorAll('.cal-day').forEach((day) => {
      day.addEventListener('click', () => {
        calGrid.querySelectorAll('.cal-day').forEach((d) => d.classList.remove('active-day'));
        day.classList.add('active-day');
        const dayNum = day.getAttribute('data-day') || day.textContent;
        calStatus.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Slot confirmed for the ${dayNum}th at 2:00 PM</span>
        `;
      });
    });
  }
}
