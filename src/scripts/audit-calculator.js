/**
 * VUVUZELA DIGITAL MARKETING FACTORY
 * Growth & Website Audit Diagnostic Calculator
 * Inspired by SharkAgency's Website-Check with industrial precision
 */

export function initAuditCalculator() {
  const slider = document.getElementById('adSpendSlider');
  const readout = document.getElementById('adSpendReadout');
  const bottleneckPills = document.querySelectorAll('.bottleneck-pill');
  const leakageVal = document.getElementById('kpiLeakage');
  const projectedRoasVal = document.getElementById('kpiProjectedRoas');
  const recoveredRevVal = document.getElementById('kpiRecoveredRev');
  const auditForm = document.getElementById('diagnosticAuditForm');
  const auditFeedback = document.getElementById('auditFeedback');

  if (!slider || !readout) return;

  let currentSpend = parseInt(slider.value, 10) || 15000;
  let currentMultiplier = 1.35; // Default bottleneck: Paid Ads Efficiency

  // Format currency
  const formatUSD = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  };

  function updateCalculations() {
    readout.textContent = formatUSD(currentSpend) + '/mo';

    // Calculation models based on standard ecom/lead-gen industry baselines:
    // Estimated leakage: 18% to 32% of ad budget or lost conversion opportunity
    const leakage = Math.round(currentSpend * 0.24 * currentMultiplier);

    // Projected ROAS multiplier
    const projectedRoas = (2.2 * currentMultiplier).toFixed(1) + 'x';

    // Estimated recovered monthly pipeline / top-line revenue lift
    const recoveredRevenue = Math.round(currentSpend * (1.8 + currentMultiplier * 0.9));

    if (leakageVal) leakageVal.textContent = '-' + formatUSD(leakage);
    if (projectedRoasVal) projectedRoasVal.textContent = projectedRoas;
    if (recoveredRevVal) recoveredRevVal.textContent = '+' + formatUSD(recoveredRevenue);
  }

  slider.addEventListener('input', (e) => {
    currentSpend = parseInt(e.target.value, 10);
    updateCalculations();
  });

  bottleneckPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      bottleneckPills.forEach((p) => p.classList.remove('selected'));
      pill.classList.add('selected');
      currentMultiplier = parseFloat(pill.getAttribute('data-multiplier')) || 1.25;
      updateCalculations();
    });
  });

  // Handle lead form submission
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('auditEmailInput');
      if (emailInput && emailInput.value) {
        if (auditFeedback) {
          auditFeedback.style.display = 'block';
          auditFeedback.innerHTML = `
            <div style="padding: 0.85rem; background: var(--color-accent-emerald-bg); border: 1px solid var(--color-accent-emerald); color: var(--color-accent-emerald); font-family: var(--font-mono); font-size: 0.82rem; margin-top: 0.75rem; border-radius: var(--radius-xs);">
              [ PROTOCOL INITIALIZED ]: Comprehensive factory diagnostic queued for <strong>${emailInput.value}</strong>. Our senior growth engineer will dispatch the telemetry brief within 4 business hours.
            </div>
          `;
        }
        emailInput.value = '';
      }
    });
  }

  // Initial calculation
  updateCalculations();
}
