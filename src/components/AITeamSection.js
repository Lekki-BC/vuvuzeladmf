/**
 * AITeamSection - Specialized Industry Growth Playbooks
 * Demonstrating how Vuvuzela DMF builds custom acquisition funnels for high-ticket industries
 */

const INDUSTRY_DATA = {
  ecommerce: {
    badge: 'E-Commerce & High-Growth DTC',
    title: 'Scale E-Commerce Revenue & Blended ROAS',
    desc: 'High-ROI Meta, TikTok, and Google Performance Max campaigns paired with conversion-rate-optimized product pages, abandoned cart WhatsApp recovery, and high-LTV email retention flows.',
    quote: '"Vuvuzela scaled our DTC brand from $35k to $140k/month in 90 days. Their ad creative testing and checkout CRO doubled our blended return on ad spend to 4.6x."',
    author: '— Julian Vance, E-Commerce Brand Founder',
    agentName: 'Chloe — VIP Concierge AI',
    agentPhone: 'Store Support & VIP Concierge Active',
    prompts: ['Best Sellers', 'Discount Code', 'Track My Order', 'Bundle Offers'],
    initialMessages: [
      { sender: 'customer', text: 'Hey, I saw your Instagram ad for the Winter Collection. Do you have a bundle discount?' },
      { sender: 'ai', text: 'Hey there! Yes, our 3-piece Winter Bundle is currently 25% off with free express shipping. Would you like the direct checkout link?' },
      { sender: 'customer', text: 'Yes please, and does it include a 30-day return guarantee?' },
      { sender: 'ai', text: "100%! We provide 30-day no-questions-asked free exchanges and returns. Here is your VIP checkout link: [Claim Bundle Discount]." }
    ],
    responses: {
      'Best Sellers': 'Our top-ranked item this week is the Apex All-Weather Parka with over 450 verified 5-star customer reviews!',
      'Discount Code': 'Use promo code VUVUZELA15 at checkout to receive 15% off your first order today.',
      'Track My Order': 'Please share your 6-digit order number or the email address used during purchase and I will fetch live courier tracking.',
      'Bundle Offers': 'Our Ultimate Essentials Bundle saves you 30% versus purchasing individual items and includes priority dispatch.'
    }
  },
  b2b: {
    badge: 'B2B & Professional Services',
    title: 'Predictable Pipeline for High-Ticket B2B & Consultancies',
    desc: 'Target corporate decision-makers with precision Google Search & LinkedIn funnels, authoritative case study landing pages, and automated qualification that delivers calendar-ready sales consultations.',
    quote: '"We used to rely on sporadic referrals. Vuvuzela built a predictable inbound engine that adds 15 to 20 qualified corporate strategy consultations to our calendar every month."',
    author: '— Marco Rossi, Managing Partner',
    agentName: 'Marcus — B2B Strategy Intake',
    agentPhone: 'Corporate Consulting Pipeline Active',
    prompts: ['Book Consultation', 'Service Retainers', 'Case Studies', 'Corporate Audit'],
    initialMessages: [
      { sender: 'customer', text: 'We are looking to overhaul our digital acquisition and need to know your agency retainer tiers.' },
      { sender: 'ai', text: 'Welcome! Our dedicated growth partnerships range from €3,500 to €8,500/month depending on ad spend velocity and engineering scope.' },
      { sender: 'customer', text: 'Can we schedule a 20-minute strategic discovery call this week?' },
      { sender: 'ai', text: "Certainly. I have Wednesday at 2:00 PM or Thursday at 10:30 AM open with our Growth Director. Which slot works best for your team?" }
    ],
    responses: {
      'Book Consultation': 'I have reserved a 20-minute discovery session for your team. A calendar invite with Google Meet coordinates is on its way.',
      'Service Retainers': 'Our retainers cover full-funnel management: Paid Ads (Meta/Google), CRO web engineering, creative testing, and 24/7 lead automation.',
      'Case Studies': 'We recently scaled an e-commerce brand to 4.6x ROAS and a B2B firm to €180k monthly recurring revenue. Would you like our breakdown PDF?',
      'Corporate Audit': 'Our free growth audit evaluates your current ad accounts, tracking architecture, and conversion drop-offs with an actionable 90-day roadmap.'
    }
  },
  clinics: {
    badge: 'Private Clinics & Healthcare',
    title: 'High-Value Patient Inbound & Local Dominance',
    desc: 'Capture high-ticket private patient inquiries with local Google search dominance, credible medical landing pages, and 24/7 patient intake triage across web and WhatsApp.',
    quote: '"Patients booking high-ticket cosmetic dental treatments jumped 80%. Their local Google ad campaigns and rapid WhatsApp triage completely filled our treatment rooms."',
    author: '— Dr. Sarah O\'Connor, Clinic Director',
    agentName: 'Aria — Clinical Intake Concierge',
    agentPhone: 'Patient Help Line Active',
    prompts: ['Emergency Slot', 'Dental Implants Info', 'Insurance Check', 'Teeth Whitening Cost'],
    initialMessages: [
      { sender: 'customer', text: 'I saw your clinic on Google Search. Do you have an emergency appointment open tomorrow morning?' },
      { sender: 'ai', text: 'Hello! Yes, we hold emergency triage slots every morning at 8:30 AM and 9:15 AM. Are you experiencing severe pain?' },
      { sender: 'customer', text: 'Moderate pain from a cracked molar. 8:30 AM would be a lifesaver.' },
      { sender: 'ai', text: "I have reserved the 8:30 AM emergency slot for you with Dr. O'Connor. Our front desk has sent an SMS confirmation with parking details." }
    ],
    responses: {
      'Emergency Slot': 'We have emergency walk-in availability reserved every morning. I can book you for 8:30 AM right now.',
      'Dental Implants Info': 'Our premium dental implant consultations include full 3D CBCT scans and treatment financing options from €89/month.',
      'Insurance Check': 'We accept VHI, Laya, Irish Life Health, and PRSI dental benefit claims directly at our front desk.',
      'Teeth Whitening Cost': 'Our Philips Zoom professional whitening package is €295, including take-home maintenance trays.'
    }
  },
  realestate: {
    badge: 'Real Estate & Luxury Property',
    title: 'High-Ticket Investor & Buyer Acquisition',
    desc: 'Precision Meta and Google Search campaigns, bespoke single-development landing pages, and 24/7 WhatsApp investor triage that qualifies budgets and schedules private viewings.',
    quote: '"Vuvuzela generated over €4.2M in qualified buyer pipeline for our luxury residential developments within 60 days of ad launch."',
    author: '— James Wilson, Principal Broker',
    agentName: 'Liam — Luxury Property Concierge',
    agentPhone: 'Property Acquisition Line Active',
    prompts: ['Penthouse Listings', 'Schedule Viewing', 'Investment Returns', 'Project Brochure'],
    initialMessages: [
      { sender: 'customer', text: "Hi, I saw your ad for the Waterfront Residences. Are there 3-bedroom penthouses available?" },
      { sender: 'ai', text: 'Good day! Yes, we have two 3-bedroom corner penthouses remaining with panoramic ocean views and private rooftop terraces.' },
      { sender: 'customer', text: 'Can I schedule a private walkthrough this Friday?' },
      { sender: 'ai', text: "Certainly! I have 11:30 AM or 3:00 PM open this Friday. Would 11:30 AM suit your schedule? I will also dispatch the architectural brochure to your WhatsApp." }
    ],
    responses: {
      'Penthouse Listings': 'We have 2 corner penthouses starting at €1.45M with bespoke Italian kitchens, smart automation, and private underground parking.',
      'Schedule Viewing': "You're scheduled for Friday at 11:30 AM! Our development director will welcome you at the private presentation lounge.",
      'Investment Returns': 'Projected rental yields on this development sit between 7.2% and 8.4% annually, with full turnkey tenancy management provided.',
      'Project Brochure': 'The high-resolution architectural plans and specification brochure have been sent to your contact number.'
    }
  }
};

export function renderAITeamSection() {
  const defaultKey = 'ecommerce';
  const data = INDUSTRY_DATA[defaultKey];

  return `
    <section class="section-pad" id="industries">
      <span id="ai-team" style="position: absolute; top: -100px;"></span>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            
            <span>Specialized Growth Playbooks</span>
          </div>
          <h2 class="section-title" id="indSectionTitle">
            ${data.title}
          </h2>
          <p class="section-subtitle" id="indSectionDesc">
            ${data.desc}
          </p>
        </div>

        <!-- Industry Selector Tabs -->
        <div class="industry-tabs-wrap">
          <button type="button" class="ind-tab-btn active" data-industry="ecommerce">E-Commerce & DTC</button>
          <button type="button" class="ind-tab-btn" data-industry="b2b">B2B & Professional</button>
          <button type="button" class="ind-tab-btn" data-industry="clinics">Clinics & Health</button>
          <button type="button" class="ind-tab-btn" data-industry="realestate">Real Estate & Property</button>
        </div>

        <!-- Split Screen Layout: Left Information, Right Interactive Chat Device -->
        <div class="ind-interactive-layout">
          <!-- Left Column -->
          <div class="ind-info-pane">
            <div class="pill-badge" id="indBadgeText" style="align-self: flex-start; margin-bottom: 0;">
              ${data.badge}
            </div>

            <h3 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
              This is how your marketing turns traffic into paying clients.
            </h3>

            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
              While competing agencies stop at generating empty clicks, Vuvuzela DMF captures every high-intent lead in real time, pre-qualifying buying intent and booking appointments straight into your sales pipeline.
            </p>

            <div class="ind-quote-card" id="indQuoteBox">
              <p id="indQuoteText">${data.quote}</p>
              <div class="ind-quote-author" id="indQuoteAuthor">${data.author}</div>
            </div>

            <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
              <button type="button" class="btn-pill-primary trigger-brief-modal">
                <span>Claim Free Growth Audit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Right Column: Interactive Chat Device -->
          <div class="ind-chat-device">
            <!-- Header -->
            <div class="chat-device-header">
              <div class="chat-agent-info">
                <div class="agent-avatar-circle" id="chatAgentAvatar">AI</div>
                <div>
                  <div class="agent-name" id="chatAgentName">${data.agentName}</div>
                  <div class="agent-status-label">
                    <span id="chatAgentPhone">${data.agentPhone}</span>
                  </div>
                </div>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">24/7 LIVE</span>
            </div>

            <!-- Messages Window -->
            <div class="chat-messages-scroll" id="chatMessagesScroll">
              ${data.initialMessages
      .map(
        (m) => `
                <div class="chat-msg ${m.sender === 'customer' ? 'customer-msg' : 'ai-msg'}">
                  ${m.text}
                </div>
              `
      )
      .join('')}
            </div>

            <!-- Quick Action Prompts Bar -->
            <div class="chat-prompts-bar" id="chatPromptsBar">
              ${data.prompts
      .map(
        (p) => `
                <button type="button" class="chat-prompt-pill" data-prompt="${p}">${p}</button>
              `
      )
      .join('')}
            </div>

            <!-- Chat Input Bar -->
            <form class="chat-input-row" id="chatDemoForm">
              <input type="text" class="chat-input-field" id="chatDemoInput" placeholder="Type a message or select a prompt..." autocomplete="off" />
              <button type="submit" class="chat-send-btn" aria-label="Send message">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initAITeamSection() {
  let currentKey = 'ecommerce';
  const tabBtns = document.querySelectorAll('.ind-tab-btn');
  const sectionTitle = document.getElementById('indSectionTitle');
  const sectionDesc = document.getElementById('indSectionDesc');
  const badgeText = document.getElementById('indBadgeText');
  const quoteText = document.getElementById('indQuoteText');
  const quoteAuthor = document.getElementById('indQuoteAuthor');
  const chatAgentName = document.getElementById('chatAgentName');
  const chatAgentPhone = document.getElementById('chatAgentPhone');
  const chatMessagesScroll = document.getElementById('chatMessagesScroll');
  const chatPromptsBar = document.getElementById('chatPromptsBar');
  const chatDemoForm = document.getElementById('chatDemoForm');
  const chatDemoInput = document.getElementById('chatDemoInput');

  if (!tabBtns.length || !chatMessagesScroll) return;

  function loadIndustry(key) {
    const data = INDUSTRY_DATA[key];
    if (!data) return;
    currentKey = key;

    if (sectionTitle) sectionTitle.textContent = data.title;
    if (sectionDesc) sectionDesc.textContent = data.desc;
    if (badgeText) badgeText.textContent = data.badge;
    if (quoteText) quoteText.textContent = data.quote;
    if (quoteAuthor) quoteAuthor.textContent = data.author;
    if (chatAgentName) chatAgentName.textContent = data.agentName;
    if (chatAgentPhone) chatAgentPhone.textContent = data.agentPhone;

    // Reload messages
    chatMessagesScroll.innerHTML = data.initialMessages
      .map(
        (m) => `
      <div class="chat-msg ${m.sender === 'customer' ? 'customer-msg' : 'ai-msg'}">
        ${m.text}
      </div>
    `
      )
      .join('');
    chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;

    // Reload prompts
    if (chatPromptsBar) {
      chatPromptsBar.innerHTML = data.prompts
        .map(
          (p) => `
        <button type="button" class="chat-prompt-pill" data-prompt="${p}">${p}</button>
      `
        )
        .join('');
      attachPromptListeners();
    }
  }

  function attachPromptListeners() {
    chatPromptsBar?.querySelectorAll('.chat-prompt-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const promptKey = pill.getAttribute('data-prompt');
        sendUserMessage(promptKey);
      });
    });
  }

  function sendUserMessage(text) {
    if (!text || !text.trim()) return;

    // Append customer message
    const custEl = document.createElement('div');
    custEl.className = 'chat-msg customer-msg';
    custEl.textContent = text;
    chatMessagesScroll.appendChild(custEl);
    chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;

    // Generate response
    const currentData = INDUSTRY_DATA[currentKey];
    const replyText =
      currentData.responses[text] ||
      `Thank you for asking! Our specialized ${currentData.badge} growth team will be delighted to audit your marketing.`;

    setTimeout(() => {
      const aiEl = document.createElement('div');
      aiEl.className = 'chat-msg ai-msg';
      aiEl.textContent = replyText;
      chatMessagesScroll.appendChild(aiEl);
      chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;
    }, 450);
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const ind = btn.getAttribute('data-industry');
      loadIndustry(ind);
    });
  });

  chatDemoForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!chatDemoInput) return;
    const val = chatDemoInput.value.trim();
    if (val) {
      sendUserMessage(val);
      chatDemoInput.value = '';
    }
  });

  attachPromptListeners();
}
