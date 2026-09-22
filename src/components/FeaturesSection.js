/**
 * FeaturesSection - Light-theme contrast section showcasing the 6 core capabilities
 * with live animated micro-interactions (chat simulator, calendar booking, phone pulses).
 */
export function renderFeaturesSection() {
  return `
    <section class="light-features-section" id="features">
      <div class="light-dot-grid"></div>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-green"></span>
            <span>What We Deliver</span>
          </div>
          <h2 class="section-title">
            Your Growth Engine Never Sleeps
          </h2>
          <p class="section-subtitle">
            An enterprise-grade suite of AI assistants and automated revenue pipelines engineered to capture, nurture, and close leads 24/7.
          </p>
        </div>

        <!-- 6 Interactive Feature Cards -->
        <div class="features-interactive-grid">
          <!-- Card 1: 24/7 AI Chat Support -->
          <div class="feature-tile">
            <div class="feature-tile-preview" id="featureChatPreview">
              <div style="position: absolute; top: 10px; right: 12px; display: flex; align-items: center; gap: 4px;">
                <span class="pulse-dot dot-green" style="width: 6px; height: 6px;"></span>
                <span style="font-size: 0.72rem; color: #10b981; font-weight: 700;">24/7 ONLINE</span>
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
            <h3 class="feature-tile-title">24/7 AI Conversational Agent</h3>
            <p class="feature-tile-desc">
              Context-aware neural assistants that handle inquiries, recommend specific inventory or packages, and capture buyer contact details instantly.
            </p>
          </div>

          <!-- Card 2: AI Phone Receptionist -->
          <div class="feature-tile">
            <div class="feature-tile-preview">
              <div class="phone-sim-center">
                <div class="phone-ring-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div style="text-align: left;">
                  <div style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">Inbound Voice AI</div>
                  <div style="font-size: 0.75rem; color: #64748b;">Active Calls Handled: <strong style="color: #10b981;">18 today</strong></div>
                  <div style="font-size: 0.72rem; color: #94a3b8;">Zero Wait Time</div>
                </div>
              </div>
            </div>
            <h3 class="feature-tile-title">AI Phone Receptionist</h3>
            <p class="feature-tile-desc">
              Natural human-sounding voice concierge answers after-hours phone calls, books appointments, and logs voice notes directly to your staff dashboard.
            </p>
          </div>

          <!-- Card 3: Smart Appointment Booking -->
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
            <h3 class="feature-tile-title">Smart Appointment Scheduling</h3>
            <p class="feature-tile-desc">
              Autonomous scheduling eliminates back-and-forth emails. Synchronizes with team calendars, prevents double-booking, and sends automated SMS reminders.
            </p>
          </div>

          <!-- Card 4: Precision Ad & Audience Targeting -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#dbeafe; color:#1e40af; border-color:#93c5fd;">High Intent: +42%</span>
                <span class="chip-tag">Automotive / SUV</span>
                <span class="chip-tag" style="background:#fef3c7; color:#92400e; border-color:#fcd34d;">Lookalike 1%</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag">WhatsApp Retargeting</span>
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac;">ROAS: 4.8x</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Precision Paid Acquisition</h3>
            <p class="feature-tile-desc">
              Algorithmic ad campaigns across Meta and Google that direct high-intent traffic straight into hyper-converting conversational funnels.
            </p>
          </div>

          <!-- Card 5: Real-Time Performance Analytics -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: #1e293b;">
                <span>Lead Conversion Rate</span>
                <span style="color: #10b981;">+64.2%</span>
              </div>
              <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="width: 78%; height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); border-radius: 4px;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 4px;">
                <span>Speed: Sub-second</span>
                <span>Audit Score: 98/100</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Real-Time Performance Analytics</h3>
            <p class="feature-tile-desc">
              Live intelligence dashboards track response speeds, conversation drop-offs, lead volume, and attributed pipeline revenue in transparent detail.
            </p>
          </div>

          <!-- Card 6: Multi-Platform CRM Integration -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: center;">
              <div class="chips-row" style="gap: 0.6rem;">
                <span class="chip-tag" style="font-weight: 700;">WhatsApp</span>
                <span class="chip-tag" style="font-weight: 700;">HubSpot</span>
                <span class="chip-tag" style="font-weight: 700;">Salesforce</span>
                <span class="chip-tag" style="font-weight: 700;">Google Ads</span>
                <span class="chip-tag" style="font-weight: 700;">Zapier</span>
                <span class="chip-tag" style="font-weight: 700;">Custom Webhooks</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Omnichannel Integration</h3>
            <p class="feature-tile-desc">
              Plugs seamlessly into your existing software stack. Leads flow straight to your sales team's phones and CRM without changing how you operate.
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
