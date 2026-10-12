/**
 * AITeamSection - Specialized Industry Growth Playbooks
 * Demonstrating how Vuvuzela DMF builds custom acquisition funnels for high-ticket industries
 */

const INDUSTRY_DATA = {
  ecommerce: {
    badge: 'E-Commerce & High-Growth DTC',
    image: '/images/industry-ecommerce.jpg',
    title: 'Scale E-Commerce Revenue & Blended ROAS',
    desc: 'High-ROI Meta, TikTok, and Google Performance Max campaigns paired with conversion-rate-optimized product pages, automated abandoned cart WhatsApp recovery, and dedicated human sales support.',
    quote: '"Vuvuzela scaled our fashion DTC brand from ₦6.5M to ₦28.4M/month in 90 days. Their ad creative testing and checkout CRO doubled our blended return on ad spend to 4.4x."',
    author: '— Amina Bello, Founder & Creative Director, KariStore DTC',
    agentName: 'Chloe — VIP Concierge + Human Handoff',
    agentPhone: 'Lagos/Abuja VIP Line • Human Strategist on Duty',
    prompts: ['Best Sellers', 'Discount Code', 'Track My Order', 'Speak to Human'],
    initialMessages: [
      { sender: 'customer', text: 'Hey, I saw your Instagram ad for the new collection. Do you have a bundle discount for deliveries to Abuja?' },
      { sender: 'ai', text: 'Hey there! Yes, our 3-piece Luxury Bundle is currently 25% off with free express dispatch to Lagos and Abuja. Would you like the VIP checkout link?' },
      { sender: 'customer', text: 'Yes please, and what happens if I need to change my sizing after delivery?' },
      { sender: 'ai', text: "100% covered! We provide 7-day hassle-free doorstep size exchanges across Nigeria. Here is your VIP checkout link: [Claim Bundle Discount]." }
    ],
    responses: {
      'Best Sellers': 'Our top-selling item this week is the Heritage Embroidered Set with over 320 verified 5-star customer reviews across Lagos and Abuja!',
      'Discount Code': 'Use promo code VUVUZELA15 at checkout to receive 15% off your first order today with free express delivery.',
      'Track My Order': 'Please share your 6-digit order number or WhatsApp phone number and our logistics desk will fetch live GIG/FeZ tracking immediately.',
      'Speak to Human': 'Connecting you immediately! Senior Account Representative Tunde has joined this WhatsApp session to handle your request.'
    }
  },
  b2b: {
    badge: 'B2B & Professional Services',
    image: '/images/industry-b2b.jpg',
    title: 'Predictable Inbound Pipeline for High-Ticket B2B & Consultancies',
    desc: 'Target corporate decision-makers with precision Google Search & LinkedIn funnels, authoritative case study landing pages, and hybrid qualification that delivers calendar-ready C-suite consultations.',
    quote: '"We used to rely on sporadic referrals. Vuvuzela built a predictable inbound engine that closed ₦145M in new corporate advisory retainers within 120 days."',
    author: '— Folake Adeyemi, Senior Partner, Nexus Advisory',
    agentName: 'Marcus — B2B Strategy Intake',
    agentPhone: 'Corporate Consulting Pipeline Active • Strategist Online',
    prompts: ['Book Consultation', 'Service Retainers', 'Case Studies', 'Speak to Director'],
    initialMessages: [
      { sender: 'customer', text: 'We are looking to overhaul our digital acquisition and need to know your agency retainer tiers for Nigerian domestic operations.' },
      { sender: 'ai', text: 'Welcome! Our dedicated growth partnerships range from ₦5,500,000 to ₦13,500,000/month (or $3,500 to $8,500 USD) depending on ad spend velocity and engineering scope.' },
      { sender: 'customer', text: 'Can we schedule a 20-minute strategic discovery call this week?' },
      { sender: 'ai', text: "Certainly. I have Wednesday at 2:00 PM or Thursday at 10:30 AM open with our Growth Director. Which slot works best for your team?" }
    ],
    responses: {
      'Book Consultation': 'I have reserved a 20-minute discovery session for your executive team. A calendar invite with Google Meet coordinates is on its way.',
      'Service Retainers': 'Our retainers cover full-funnel management: High-ROI Meta/Google Paid Ads, CRO web engineering, 4K creative testing, and 24/7 lead automation.',
      'Case Studies': 'We recently scaled an e-commerce brand to 4.4x ROAS and closed ₦380M in luxury real estate transactions. Would you like our breakdown PDF?',
      'Speak to Director': 'Understood. Direct line dispatched: Senior Growth Partner Joseph is stepping into this chat right now.'
    }
  },
  clinics: {
    badge: 'Private Clinics & Healthcare',
    image: '/images/industry-clinics.jpg',
    title: 'High-Value Patient Inbound & Local Dominance',
    desc: 'Capture high-ticket private patient inquiries with local Google search dominance, credible medical landing pages, and 24/7 patient intake triage across web and WhatsApp.',
    quote: '"Patients booking high-ticket cosmetic dental treatments jumped 80%. Their local Google ad campaigns and rapid WhatsApp triage completely filled our treatment rooms in Victoria Island."',
    author: '— Dr. Emeka Nnamani, Medical Director, Apex Medicare Clinics',
    agentName: 'Aria — Clinical Intake Concierge',
    agentPhone: 'VI & Ikoyi Patient Help Line Active',
    prompts: ['Emergency Slot', 'Dental Implants Info', 'Consultation Fee', 'Speak to Reception'],
    initialMessages: [
      { sender: 'customer', text: 'I saw your clinic on Google Search in Victoria Island. Do you have an appointment open tomorrow morning?' },
      { sender: 'ai', text: 'Hello! Yes, we hold priority consultations every morning at 9:00 AM and 10:30 AM at our Victoria Island clinic. Are you experiencing severe dental discomfort?' },
      { sender: 'customer', text: 'Moderate pain from a cracked molar. 9:00 AM would be ideal.' },
      { sender: 'ai', text: "I have reserved the 9:00 AM emergency consultation slot for you with Dr. Nnamani. Our clinic desk has sent an SMS confirmation with private parking coordinates." }
    ],
    responses: {
      'Emergency Slot': 'We have priority walk-in availability reserved every morning in Victoria Island. I can secure you for 9:00 AM right now.',
      'Dental Implants Info': 'Our premium dental implant consultations include full 3D CBCT diagnostic scans and treatment plans from ₦450,000 with installment options.',
      'Consultation Fee': 'Specialist diagnostic review is ₦35,000, which is fully credited toward your treatment plan if scheduled during your visit.',
      'Speak to Reception': 'Handing you over to our Chief Clinical Concierge Nurse Blessing now. One moment please.'
    }
  },
  realestate: {
    badge: 'Real Estate & Luxury Property',
    image: '/images/industry-realestate.jpg',
    title: 'High-Ticket Investor & Buyer Acquisition',
    desc: 'Precision Meta and Google Search campaigns, bespoke single-development landing pages, and 24/7 WhatsApp investor triage that qualifies budgets and schedules private viewings in Lekki, Ikoyi, and Abuja.',
    quote: '"Vuvuzela generated over ₦380M in verified closed buyer transactions for our luxury residential developments within 180 days of ad launch."',
    author: '— Babajide Adeleke, Managing Director, PrimeHaven Properties',
    agentName: 'Liam — Luxury Property Concierge',
    agentPhone: 'Lekki & Ikoyi Acquisition Line Active',
    prompts: ['Penthouse Listings', 'Schedule Viewing', 'Rental Yields', 'Speak to Broker'],
    initialMessages: [
      { sender: 'customer', text: "Hi, I saw your ad for the Lekki Waterfront Residences. Are there 3-bedroom penthouses available for diaspora buyers?" },
      { sender: 'ai', text: 'Good day! Yes, we have two 3-bedroom corner penthouses remaining with panoramic lagoon views, private elevators, and automated smart homes starting from ₦285M.' },
      { sender: 'customer', text: 'Can I schedule a private walkthrough this Friday or a live video walkthrough for my team in London?' },
      { sender: 'ai', text: "Certainly! I have 11:30 AM or 3:00 PM open this Friday. Would 11:30 AM suit your schedule? I will also dispatch the high-res architectural brochure to your WhatsApp." }
    ],
    responses: {
      'Penthouse Listings': 'We have 2 corner penthouses starting at ₦285M with bespoke Italian kitchens, smart automation, and private underground parking.',
      'Schedule Viewing': "You're scheduled for Friday at 11:30 AM! Our development director Babajide will welcome you at the private presentation suite.",
      'Rental Yields': 'Projected rental yields on this development sit between 9.5% and 12.4% annually, with full turnkey diaspora tenancy management provided.',
      'Speak to Broker': 'Connecting you immediately to Senior Property Consultant Tola on our direct line: +234 701 196 1582.'
    }
  },
  gotv: {
    badge: 'Political, Civic & GOTV Campaigns',
    image: '/images/service-campaigns-gotv.jpg',
    title: 'Strategic Voter Mobilization & Constituent Engagement',
    desc: 'Battle-tested online mobilization frameworks, optimized campaign portals, targeted media blitzes, and high-capacity WhatsApp API broadcasting engineered to persuade voters and mobilize communities.',
    quote: '"Vuvuzela\'s GOTV digital campaign infrastructure reached over 350,000 constituents with a 98% WhatsApp open rate, swinging turnout by +18.4% on election day."',
    author: '— Hon. K. Adeleke, Campaign Director General',
    agentName: 'Ayo — Campaign Mobilization Hub',
    agentPhone: 'Official WhatsApp Mobilization Line Active',
    prompts: ['Polling Unit Locator', 'Volunteer Sign-up', 'Policy Manifesto', 'Speak to Coordinator'],
    initialMessages: [
      { sender: 'customer', text: "Hello, where is my designated polling unit for Ward 4 and how can I join the volunteer team?" },
      { sender: 'ai', text: 'Welcome! Your Ward 4 polling station is Community Hall Center. Would you like the GPS directions dispatched to your phone?' },
      { sender: 'customer', text: 'Yes, and I would love to sign up for canvassing this weekend.' },
      { sender: 'ai', text: "Fantastic! You've been registered as an active Ward 4 Field Volunteer. You'll receive our campaign briefing kit and WhatsApp group invite immediately." }
    ],
    responses: {
      'Polling Unit Locator': 'Please reply with your voter registration card number or district name and we will display your exact polling station coordinates.',
      'Volunteer Sign-up': 'Thank you for standing up for progress! Our field coordinator will connect with you in 10 minutes with your local canvassing schedule.',
      'Policy Manifesto': 'Our 5-pillar civic agenda (Jobs, Infrastructure, Education, Healthcare, and Transparency) has been sent to your WhatsApp.',
      'Speak to Coordinator': 'Routing your request to the Ward 4 Field Mobilization Director now.'
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
          <button type="button" class="ind-tab-btn active" data-industry="ecommerce">E-Commerce &amp; DTC</button>
          <button type="button" class="ind-tab-btn" data-industry="b2b">B2B &amp; Professional</button>
          <button type="button" class="ind-tab-btn" data-industry="clinics">Clinics &amp; Health</button>
          <button type="button" class="ind-tab-btn" data-industry="realestate">Real Estate &amp; Property</button>
          <button type="button" class="ind-tab-btn" data-industry="gotv">Civic &amp; GOTV Campaigns</button>
        </div>

        <!-- Split Screen Layout: Left Information, Right Interactive Chat Device -->
        <div class="ind-interactive-layout">
          <!-- Left Column -->
          <div class="ind-info-pane">
            <div class="pill-badge" id="indBadgeText" style="align-self: flex-start; margin-bottom: 0;">
              ${data.badge}
            </div>

            <!-- Contextual Industry Visual Banner -->
            <div class="ind-preview-media">
              <img id="indIndustryImg" src="${data.image}" alt="${data.badge}" class="ind-industry-img" loading="lazy" />
              <div class="ind-preview-tag">
                <span class="pulse-dot dot-green"></span>
                <span id="indTagLabel">${data.badge} Pipeline</span>
              </div>
            </div>

            <h3 style="font-size: 1.85rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
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
  const indIndustryImg = document.getElementById('indIndustryImg');
  const indTagLabel = document.getElementById('indTagLabel');
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
    if (indIndustryImg) {
      indIndustryImg.src = data.image;
      indIndustryImg.alt = data.badge;
    }
    if (indTagLabel) {
      indTagLabel.textContent = `${data.badge} Pipeline`;
    }

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
