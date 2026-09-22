/**
 * VUVUZELA DIGITAL MARKETING FACTORY
 * Interactive Project Configurator & Scope Builder
 * Inspired by Sniro's modular service scoping
 */

export function initProjectConfigurator() {
  const servicePills = document.querySelectorAll('.service-choice-pill');
  const scalePills = document.querySelectorAll('.scale-choice-pill');
  const timelinePills = document.querySelectorAll('.timeline-choice-pill');
  const estimateDisplay = document.getElementById('configEstimateRange');
  const selectedServicesCount = document.getElementById('selectedServicesCount');
  const configForm = document.getElementById('factoryConfiguratorForm');
  const configFeedback = document.getElementById('configFeedback');

  let selectedServices = new Set(['performance-media', 'web-engineering']);
  let selectedScale = 1; // 1 = Emerging ($5k-$20k), 2 = Growth ($20k-$50k), 3 = Enterprise ($50k+)
  let selectedTimeline = '4-6 weeks';

  const baseServicePrices = {
    'web-engineering': 4500,
    'performance-media': 3500,
    'brand-identity': 3000,
    'technical-seo': 2500,
    'funnel-automation': 2800,
    'creative-production': 3200
  };

  function updateEstimate() {
    let totalBase = 0;
    selectedServices.forEach((serviceId) => {
      totalBase += baseServicePrices[serviceId] || 2500;
    });

    if (selectedServices.size === 0) {
      if (estimateDisplay) estimateDisplay.textContent = 'Select minimum 1 service';
      if (selectedServicesCount) selectedServicesCount.textContent = '0 lines configured';
      return;
    }

    const multiplier = selectedScale === 1 ? 1.0 : selectedScale === 2 ? 1.45 : 2.1;
    const minEstimate = Math.round((totalBase * multiplier * 0.9) / 500) * 500;
    const maxEstimate = Math.round((totalBase * multiplier * 1.25) / 500) * 500;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });

    if (estimateDisplay) {
      estimateDisplay.textContent = `${formatter.format(minEstimate)} – ${formatter.format(maxEstimate)}`;
    }

    if (selectedServicesCount) {
      selectedServicesCount.textContent = `${selectedServices.size} production line${selectedServices.size > 1 ? 's' : ''} active`;
    }
  }

  // Service Pills (Multi-select)
  servicePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const serviceId = pill.getAttribute('data-service');
      if (selectedServices.has(serviceId)) {
        selectedServices.delete(serviceId);
        pill.classList.remove('active');
      } else {
        selectedServices.add(serviceId);
        pill.classList.add('active');
      }
      updateEstimate();
    });
  });

  // Scale Pills (Single-select)
  scalePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      scalePills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedScale = parseInt(pill.getAttribute('data-scale'), 10) || 1;
      updateEstimate();
    });
  });

  // Timeline Pills (Single-select)
  timelinePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      timelinePills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedTimeline = pill.getAttribute('data-timeline') || '4-6 weeks';
    });
  });

  // Brief Submission
  if (configForm) {
    configForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const companyName = document.getElementById('briefCompanyInput')?.value || 'Your Brand';
      const email = document.getElementById('briefEmailInput')?.value || '';

      if (email && configFeedback) {
        configFeedback.style.display = 'block';
        configFeedback.innerHTML = `
          <div style="padding: 1rem; background: var(--color-accent-emerald-bg); border: 1px solid var(--color-accent-emerald); color: var(--color-accent-emerald); font-family: var(--font-mono); font-size: 0.85rem; margin-top: 1rem; border-radius: var(--radius-xs);">
            [ PRODUCTION SPECIFICATION RECEIVED ]: Brief for <strong>${companyName}</strong> (${selectedServices.size} lines) logged into Factory Queue. Confirmation and NDA sent to <strong>${email}</strong>. Target kick-off: ${selectedTimeline}.
          </div>
        `;
        configForm.reset();
      }
    });
  }

  // Initialize
  updateEstimate();
}
