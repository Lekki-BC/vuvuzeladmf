/**
 * BriefModal - Interactive demo booking and revenue audit modal
 */
export function renderBriefModal() {
  return `
    <div class="modal-overlay" id="briefModalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-content-card">
        <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">×</button>
        
        <div class="pill-badge" style="margin-bottom: 1rem;">
          <span class="pulse-dot dot-green"></span>
          <span>Zero-Obligation Growth Diagnostic</span>
        </div>

        <h3 id="modalTitle" style="font-size: 1.65rem; font-weight: 800; color: #ffffff; line-height: 1.25;">
          Claim Your Free Digital Marketing &amp; Growth Audit
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem; line-height: 1.5;">
          Our senior growth team will analyze your paid ad campaigns, evaluate your website conversion funnel, identify ad spend leakage, and deliver a tailored 90-day scaling roadmap.
        </p>

        <form class="modal-form" id="briefModalForm">
          <div class="form-group">
            <label for="inputFullName">Your Name</label>
            <input type="text" id="inputFullName" class="form-input" placeholder="e.g. Michael Rodriguez" required />
          </div>

          <div class="form-group">
            <label for="inputWorkEmail">Work Email</label>
            <input type="email" id="inputWorkEmail" class="form-input" placeholder="michael@company.com" required />
          </div>

          <div class="form-group">
            <label for="inputWebsite">Business Website or Brand URL</label>
            <input type="text" id="inputWebsite" class="form-input" placeholder="https://yourbrand.com" required />
          </div>

          <div class="form-group">
            <label for="inputSector">Primary Industry</label>
            <select id="inputSector" class="calc-type-select" style="background: rgba(255,255,255,0.06); width: 100%;">
              <option value="ecommerce" selected>E-Commerce & DTC Brand</option>
              <option value="b2b">B2B & Professional Services</option>
              <option value="clinics">Private Healthcare & Clinic</option>
              <option value="realestate">Real Estate & Property</option>
              <option value="saas">SaaS & Technology</option>
              <option value="other">Other Growth Business</option>
            </select>
          </div>

          <div class="form-group">
            <label for="inputGrowthGoal">Primary Growth Objective</label>
            <select id="inputGrowthGoal" class="calc-type-select" style="background: rgba(255,255,255,0.06); width: 100%;">
              <option value="paid-media">Scale Paid Ads & Maximize ROAS (Meta & Google)</option>
              <option value="web-cro">Rebuild High-Converting Website & Sales Funnel</option>
              <option value="seo">Dominate Google Search (Technical & Local SEO)</option>
              <option value="automation">Automate 24/7 WhatsApp & Lead Qualification</option>
              <option value="full-funnel" selected>Full-Funnel Digital Marketing Transformation</option>
            </select>
          </div>

          <button type="submit" class="btn-pill-primary" style="width: 100%; justify-content: center; margin-top: 0.5rem; padding: 0.9rem;">
            <span>Schedule Free Growth Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>

        <div id="modalSuccessState" style="display: none; text-align: center; padding: 2rem 1rem;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h4 style="font-size: 1.4rem; font-weight: 700; color: #ffffff; margin-bottom: 0.5rem;">Audit Request Confirmed!</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">
            Our solutions engineering team will prepare your custom conversational prototype and contact you within 15 minutes.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function initBriefModal() {
  const modalOverlay = document.getElementById('briefModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalForm = document.getElementById('briefModalForm');
  const successState = document.getElementById('modalSuccessState');

  const openModal = () => {
    modalOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target?.closest('.trigger-brief-modal')) {
      e.preventDefault();
      openModal();
    }
  });

  closeBtn?.addEventListener('click', closeModal);

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('open')) {
      closeModal();
    }
  });

  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (modalForm && successState) {
      modalForm.style.display = 'none';
      successState.style.display = 'block';
    }
  });
}
