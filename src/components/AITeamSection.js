/**
 * AITeamSection - Interactive industry solutions showcase with live interactive chat widget
 */

const INDUSTRY_DATA = {
  automotive: {
    badge: 'Car Dealerships & Showrooms',
    title: 'See AI Handle Real Car Sales & Test Drives',
    desc: 'Watch how our AI conversational agent answers vehicle spec inquiries, checks showroom inventory, pre-qualifies trade-ins, and books test drives 24/7.',
    quote: '"We went from missing 70% of after-hours car inquiries to capturing every single lead. Our test drive bookings increased 50% in the first month alone."',
    author: '— Mike Rodriguez, Dealership Principal',
    agentName: 'Michael - AI Sales Specialist',
    agentPhone: 'Showroom WhatsApp Active',
    prompts: ['Available Sedans', 'Book Test Drive', 'Financing Rates', 'Trade-in Estimate'],
    initialMessages: [
      { sender: 'customer', text: "Hi! I'm interested in the 2024 Premium Sedan in stock. What's the pricing?" },
      { sender: 'ai', text: 'Hello! The 2024 Premium Sedan starts at €42,500. We currently have black, slate grey, and pearl white available on our showroom floor.' },
      { sender: 'customer', text: 'Can I schedule a test drive for this Thursday?' },
      { sender: 'ai', text: "Absolutely! I have 11:00 AM or 3:30 PM open this Thursday. All test drives are free and include a full vehicle walkthrough. Would 11:00 AM suit you?" }
    ],
    responses: {
      'Available Sedans': 'We have 3 Executive Trim Sedans and 2 Sport Models ready for immediate delivery with 0% APR options.',
      'Book Test Drive': "You're booked for Thursday at 11:00 AM! Please bring your driver's license. We will have the vehicle washed and ready at the showroom entrance.",
      'Financing Rates': 'Our current promotional financing starts from 2.9% APR for 36 months, with €0 down-payment programs for qualified buyers.',
      'Trade-in Estimate': 'I can generate a valuation in 60 seconds! What is your current car’s year, make, model, and approximate mileage?'
    }
  },
  salons: {
    badge: 'Barbershops & Luxury Salons',
    title: 'Fill Every Chair Without Answering Phone Calls',
    desc: 'Never pause client cuts or styling appointments to manage booking calls. The AI coordinates stylist calendars, confirms cancellations, and fills empty slots.',
    quote: '"Our stylists no longer lose time picking up phones while holding scissors. Our weekend schedule is fully booked 2 weeks in advance now."',
    author: '— Julian Vance, Master Barber & Salon Owner',
    agentName: 'Chloe - Salon Concierge',
    agentPhone: 'Salon Booking Line Active',
    prompts: ['Saturday Slots', 'Hair Color Consultation', 'Cancel or Reschedule', 'VIP Membership'],
    initialMessages: [
      { sender: 'customer', text: 'Hey, do you have any openings for a skin fade and beard trim this Saturday?' },
      { sender: 'ai', text: 'Hey there! Yes, we have 1:30 PM and 4:15 PM open with senior stylist Marcus this Saturday.' },
      { sender: 'customer', text: 'Put me down for 1:30 PM please!' },
      { sender: 'ai', text: "You're all set for 1:30 PM Saturday with Marcus! An SMS confirmation has been sent with directions and easy parking tips." }
    ],
    responses: {
      'Saturday Slots': 'Saturday has slots at 10:00 AM, 1:30 PM, and 4:15 PM with our master stylists. Which time works best for you?',
      'Hair Color Consultation': 'Color consultations are complimentary! We can book a 15-minute patch test and consultation anytime Tuesday through Thursday.',
      'Cancel or Reschedule': 'No problem at all. Let me know your preferred new date and time and I will update your calendar invite instantly.',
      'VIP Membership': 'Our VIP Grooming Club includes 2 cuts per month, beard sculpt, and priority holiday bookings for €65/mo.'
    }
  },
  clinics: {
    badge: 'Dentists, Physios & Private Clinics',
    title: 'Intelligent Patient Onboarding & Triage',
    desc: 'Provide immediate, reassuring patient intake 24/7. Handle emergency inquiries, check insurance compatibility, and book specialist consultations.',
    quote: '"Patients with urgent dental pain book at 11 PM and arrive the next morning. Our new patient acquisition jumped 80% without extra administrative overhead."',
    author: '— Dr. Sarah O\'Connor, Clinic Director',
    agentName: 'Aria - Clinical Intake AI',
    agentPhone: 'Patient Help Line Active',
    prompts: ['Emergency Appointment', 'Dental Implants Info', 'Insurance Check', 'Teeth Whitening Cost'],
    initialMessages: [
      { sender: 'customer', text: 'I broke a tooth while eating dinner, can I see a dentist tomorrow morning?' },
      { sender: 'ai', text: 'I am so sorry to hear that. We hold emergency triage slots every morning at 8:30 AM and 9:15 AM. Are you experiencing severe pain?' },
      { sender: 'customer', text: 'Yes, moderate pain. 8:30 AM would be a lifesaver.' },
      { sender: 'ai', text: "I have reserved the 8:30 AM emergency slot for you with Dr. O'Connor. Please avoid hot/cold drinks tonight, and our clinic doors open at 8:15 AM." }
    ],
    responses: {
      'Emergency Appointment': 'We have emergency walk-in availability reserved every morning. I can book you for 8:30 AM right now.',
      'Dental Implants Info': 'Our premium dental implant consultations include full 3D CBCT scans and treatment financing options from €89/month.',
      'Insurance Check': 'We accept VHI, Laya, Irish Life Health, and PRSI dental benefit claims directly at our front desk.',
      'Teeth Whitening Cost': 'Our Philips Zoom professional whitening package is €295, including take-home maintenance trays.'
    }
  },
  restaurants: {
    badge: 'Fine Dining & Hospitality',
    title: 'Automate Table Reservations & Group Bookings',
    desc: 'Capture private dining inquiries, manage dietary restrictions, and confirm party reservations instantly across your website and WhatsApp.',
    quote: '"We used to lose high-ticket weekend corporate reservations during kitchen prep. Cliste captured €34,000 in private event bookings in our first quarter."',
    author: '— Marco Rossi, General Manager',
    agentName: 'Elena - Guest Host AI',
    agentPhone: 'VIP Reservations Active',
    prompts: ['Table for 4 Friday', 'Private Event Room', 'Tasting Menu', 'Dietary Accommodations'],
    initialMessages: [
      { sender: 'customer', text: 'Do you have a table for 4 this Friday at 7:30 PM?' },
      { sender: 'ai', text: 'Good evening! We have an intimate booth available in our main dining room at 7:45 PM this Friday.' },
      { sender: 'customer', text: 'That works! Is there an anniversary special?' },
      { sender: 'ai', text: 'Happy Anniversary! I have marked your booking for 7:45 PM and notified our sommelier to prepare complimentary prosecco upon your arrival.' }
    ],
    responses: {
      'Table for 4 Friday': 'Table confirmed for Friday at 7:45 PM! A calendar invite and menu preview have been dispatched to your phone.',
      'Private Event Room': 'Our Mezzanine private dining room seats up to 28 guests with dedicated bar service. Would you like our corporate events brochure?',
      'Tasting Menu': 'Our 7-course seasonal tasting menu by Chef Alain features optional biodynamic wine pairings for €115 per guest.',
      'Dietary Accommodations': 'Our culinary team caters expertly to gluten-free, vegan, celiac, and nut-allergy requirements with advance notice.'
    }
  }
};

export function renderAITeamSection() {
  const defaultKey = 'automotive';
  const data = INDUSTRY_DATA[defaultKey];

  return `
    <section class="section-pad" id="ai-team">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-green"></span>
            <span>Tailored Industry Solutions</span>
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
          <button type="button" class="ind-tab-btn active" data-industry="automotive">Car Dealerships</button>
          <button type="button" class="ind-tab-btn" data-industry="salons">Barbers & Salons</button>
          <button type="button" class="ind-tab-btn" data-industry="clinics">Dentists & Clinics</button>
          <button type="button" class="ind-tab-btn" data-industry="restaurants">Restaurants & Dining</button>
        </div>

        <!-- Split Screen Layout: Left Information, Right Interactive Chat Device -->
        <div class="ind-interactive-layout">
          <!-- Left Column -->
          <div class="ind-info-pane">
            <div class="pill-badge" id="indBadgeText" style="align-self: flex-start; margin-bottom: 0;">
              ${data.badge}
            </div>

            <h3 style="font-size: 2rem; font-weight: 800; color: #ffffff; line-height: 1.25;">
              This is what your buyers experience in real time.
            </h3>

            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
              While your competitors miss calls and allow hot website leads to slip away, your AI concierge delivers instantaneous, personalized consultation, qualifying buyer intent and securing bookings on autopilot.
            </p>

            <div class="ind-quote-card" id="indQuoteBox">
              <p id="indQuoteText">${data.quote}</p>
              <div class="ind-quote-author" id="indQuoteAuthor">${data.author}</div>
            </div>

            <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
              <button type="button" class="btn-pill-primary trigger-brief-modal">
                <span>Deploy For My Business</span>
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
                    <span class="pulse-dot dot-green" style="width: 5px; height: 5px;"></span>
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
  let currentKey = 'automotive';
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
  const chatForm = document.getElementById('chatDemoForm');
  const chatInput = document.getElementById('chatDemoInput');

  function renderMessages(messages) {
    if (!chatMessagesScroll) return;
    chatMessagesScroll.innerHTML = messages
      .map(
        (m) => `
      <div class="chat-msg ${m.sender === 'customer' ? 'customer-msg' : 'ai-msg'}">
        ${m.text}
      </div>
    `
      )
      .join('');
    chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;
  }

  function renderPrompts(prompts) {
    if (!chatPromptsBar) return;
    chatPromptsBar.innerHTML = prompts
      .map(
        (p) => `
      <button type="button" class="chat-prompt-pill" data-prompt="${p}">${p}</button>
    `
      )
      .join('');

    // Attach click listeners to new pills
    chatPromptsBar.querySelectorAll('.chat-prompt-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-prompt');
        if (text) handleUserMessage(text);
      });
    });
  }

  function switchIndustry(key) {
    currentKey = key;
    const item = INDUSTRY_DATA[key];
    if (!item) return;

    tabBtns.forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-industry') === key);
    });

    if (sectionTitle) sectionTitle.textContent = item.title;
    if (sectionDesc) sectionDesc.textContent = item.desc;
    if (badgeText) badgeText.textContent = item.badge;
    if (quoteText) quoteText.textContent = item.quote;
    if (quoteAuthor) quoteAuthor.textContent = item.author;
    if (chatAgentName) chatAgentName.textContent = item.agentName;
    if (chatAgentPhone) chatAgentPhone.textContent = item.agentPhone;

    renderMessages(item.initialMessages);
    renderPrompts(item.prompts);
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-industry');
      if (key) switchIndustry(key);
    });
  });

  function handleUserMessage(text) {
    if (!text.trim() || !chatMessagesScroll) return;

    // Append customer message
    const custEl = document.createElement('div');
    custEl.className = 'chat-msg customer-msg';
    custEl.textContent = text;
    chatMessagesScroll.appendChild(custEl);
    chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;

    // Show typing pill
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-msg ai-msg typing-pill';
    typingEl.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    chatMessagesScroll.appendChild(typingEl);
    chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;

    // Lookup response or fallback
    const currentData = INDUSTRY_DATA[currentKey];
    let reply = currentData.responses[text];
    if (!reply) {
      reply = `Thank you for asking about "${text}". Our AI system has logged this inquiry and can immediately schedule your appointment or transfer you to our live team!`;
    }

    setTimeout(() => {
      typingEl.remove();
      const aiEl = document.createElement('div');
      aiEl.className = 'chat-msg ai-msg';
      aiEl.textContent = reply;
      chatMessagesScroll.appendChild(aiEl);
      chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;
    }, 700);
  }

  // Handle form submission
  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (chatInput && chatInput.value) {
      handleUserMessage(chatInput.value);
      chatInput.value = '';
    }
  });

  // Attach to initial prompt pills
  chatPromptsBar?.querySelectorAll('.chat-prompt-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-prompt');
      if (text) handleUserMessage(text);
    });
  });
}
