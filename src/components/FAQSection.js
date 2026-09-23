/**
 * FAQSection - Sniro-inspired Interactive Accordion FAQ Section
 * Featuring clean plus/minus toggles, elevated card active states,
 * and seamless Light & Dark theme support.
 */

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'What services does Vuvuzela DMF offer?',
    answer:
      'Vuvuzela DMF delivers end-to-end performance digital marketing: paid advertising across Meta (Facebook & Instagram), Google Search, YouTube, and TikTok; bespoke high-converting web engineering & conversion rate optimization (CRO); technical and local SEO dominance; 24/7 automated speed-to-lead triage (WhatsApp & CRM integrations); and multi-touch revenue attribution.'
  },
  {
    id: 'faq-2',
    question: 'How quickly do we see measurable results and pipeline growth?',
    answer:
      'Paid advertising campaigns on Meta and Google typically start generating qualified leads within the first 7 to 14 days of launch. Bespoke web engineering and CRO funnels are launched within 2 to 4 weeks, while organic technical SEO compounding begins demonstrating strong ranking acceleration within 60 to 90 days.'
  },
  {
    id: 'faq-3',
    question: 'How does Vuvuzela DMF guarantee return on ad spend (ROAS)?',
    answer:
      'Unlike traditional agencies that report on vanity clicks and impressions, our media campaigns are held strictly accountable to closed-revenue and qualified inquiry KPIs. We implement rigorous conversion API tracking, real-time lead validation, and continuous high-velocity creative testing, maintaining an average blended client ROAS of 4.2x.'
  },
  {
    id: 'faq-4',
    question: 'What platforms and web development stacks do you build on?',
    answer:
      'We engineer custom, blazing-fast web platforms using modern web standards: high-performance JavaScript (Vite, Next.js), Shopify, WordPress/WooCommerce, Webflow, and custom headful/headless web architectures. Every build is rigorously engineered for 99+ Google Lighthouse scores, sub-second load times, and psychological CRO conversion paths.'
  },
  {
    id: 'faq-5',
    question: 'Does Vuvuzela DMF provide ongoing support after launch?',
    answer:
      'Yes. We operate long-term growth partnerships with structured retainers covering proactive conversion optimization, weekly performance dashboards, new ad creative iteration, platform security updates, technical monitoring, and priority direct WhatsApp support.'
  },
  {
    id: 'faq-6',
    question: 'How much does a partnership with Vuvuzela cost?',
    answer:
      'Our dedicated growth retainers range between €3,500 and €8,500/month depending on ad spend velocity, market competition, and development requirements. We provide detailed, fixed-price proposals after an initial discovery session so you have absolute transparency before any campaign begins.'
  }
];

export function renderFAQSection() {
  const plusSvg = `
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;

  const minusSvg = `
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;

  return `
    <section class="section-pad faq-section-container" id="faq">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 class="section-title">
            Frequently Asked Questions
          </h2>
          <p class="section-subtitle">
            Everything you need to know about our growth architecture, engineering standards, campaign pricing, and onboarding process.
          </p>
        </div>

        <!-- Sniro-Inspired Accordion Wrapper -->
        <div class="faq-wrapper" id="faqAccordion">
          ${FAQ_DATA.map((item, index) => {
            const isOpen = index === 0;
            return `
              <div class="faq-item ${isOpen ? 'open' : ''}" data-faq-id="${item.id}">
                <button type="button" class="faq-question" aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="${item.id}-answer" id="${item.id}-question">
                  <span class="faq-question-text">${item.question}</span>
                  <div class="faq-toggle" aria-hidden="true">
                    ${isOpen ? minusSvg : plusSvg}
                  </div>
                </button>
                <div class="faq-answer" id="${item.id}-answer" role="region" aria-labelledby="${item.id}-question" style="${isOpen ? 'max-height: 400px;' : 'max-height: 0px;'}">
                  <div class="faq-answer-inner">
                    <p>${item.answer}</p>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Help Banner Below FAQ -->
        <div class="faq-footer-cta">
          <p class="faq-footer-prompt">Have a question not answered here?</p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Ask Our Growth Team</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initFAQSection() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  const plusSvg = `
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;

  const minusSvg = `
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;

  const items = container.querySelectorAll('.faq-item');

  // Ensure initial open item has proper max-height calculated
  const initialOpen = container.querySelector('.faq-item.open');
  if (initialOpen) {
    const ans = initialOpen.querySelector('.faq-answer');
    if (ans) {
      ans.style.maxHeight = ans.scrollHeight + 30 + 'px';
    }
  }

  items.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    questionBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyOpen = item.classList.contains('open');

      if (isCurrentlyOpen) {
        // Close clicked item
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0px';
        toggle.innerHTML = plusSvg;
        return;
      }

      // Close all other items
      items.forEach((other) => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question');
          const otherAns = other.querySelector('.faq-answer');
          const otherTog = other.querySelector('.faq-toggle');

          otherBtn?.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = '0px';
          if (otherTog) otherTog.innerHTML = plusSvg;
        }
      });

      // Open clicked item
      item.classList.add('open');
      questionBtn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      toggle.innerHTML = minusSvg;
    });
  });
}
