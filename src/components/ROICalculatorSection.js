/**
 * ROICalculatorSection - Interactive real-time ROI estimation engine
 * with reactive range sliders and dynamic KPI projections
 */

export function renderROICalculatorSection() {
  return `
    <section class="roi-calc-section" id="roi-calculator">
      <div class="container">
        <!-- Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-green"></span>
            <span>Performance ROI Diagnostic</span>
          </div>
          <h2 class="section-title">
            Calculate Your Marketing Revenue Potential
          </h2>
          <p class="section-subtitle">
            Adjust your monthly traffic, current conversion baseline, and average customer order value to see how Vuvuzela DMF's full-funnel marketing multiplies your pipeline.
          </p>
        </div>

        <!-- Interactive Layout Grid -->
        <div class="roi-layout-grid">
          <!-- Left Sliders Column -->
          <div class="calc-sliders-col">
            <!-- Business Type -->
            <div class="calc-field-group">
              <label class="calc-field-header" for="businessSectorSelect">
                <span>Select Your Business Model</span>
              </label>
              <select class="calc-type-select" id="businessSectorSelect">
                <option value="ecommerce" selected>E-Commerce & DTC Brands (€85 avg order)</option>
                <option value="b2b">B2B & Professional Services (€1,500 avg retainer)</option>
                <option value="clinics">Private Clinics & Health (€250 avg patient)</option>
                <option value="realestate">Real Estate & Property (€3,500 avg deal)</option>
                <option value="saas">SaaS & Technology Subscriptions (€150 avg MRR)</option>
              </select>
            </div>

            <!-- Monthly Visitors Slider -->
            <div class="calc-field-group">
              <div class="calc-field-header">
                <span>Monthly Inbound Visitors</span>
                <span class="calc-field-val" id="valVisitors">10,000</span>
              </div>
              <input type="range" class="custom-slider" id="sliderVisitors" min="1000" max="100000" step="1000" value="10000" />
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
                <span>1,000</span>
                <span>100,000</span>
              </div>
            </div>

            <!-- Current Conversion Rate Slider -->
            <div class="calc-field-group">
              <div class="calc-field-header">
                <span>Current Website Conversion Rate</span>
                <span class="calc-field-val" id="valConversion">2.0%</span>
              </div>
              <input type="range" class="custom-slider" id="sliderConversion" min="0.5" max="8.0" step="0.1" value="2.0" />
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
                <span>0.5%</span>
                <span>8.0%</span>
              </div>
            </div>

            <!-- Average Order Value Slider -->
            <div class="calc-field-group">
              <div class="calc-field-header">
                <span>Average Deal / Order Value</span>
                <span class="calc-field-val" id="valOrder">€85</span>
              </div>
              <input type="range" class="custom-slider" id="sliderOrder" min="25" max="5000" step="25" value="85" />
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
                <span>€25</span>
                <span>€5,000</span>
              </div>
            </div>
          </div>

          <!-- Right Results KPI Column -->
          <div class="calc-results-col">
            <div class="kpi-row-card">
              <div class="kpi-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>Additional Leads / Month</span>
              </div>
              <div class="kpi-value" id="kpiLeads">+70</div>
            </div>

            <div class="kpi-row-card">
              <div class="kpi-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <span>Additional Monthly Revenue</span>
              </div>
              <div class="kpi-value" id="kpiMonthlyRev" style="color: var(--accent-green);">+€5,950</div>
            </div>

            <div class="kpi-row-card">
              <div class="kpi-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
                <span>Revenue Increase Lift</span>
              </div>
              <div class="kpi-value" id="kpiLift">+35.0%</div>
            </div>

            <div class="kpi-row-card">
              <div class="kpi-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Response Speed</span>
              </div>
              <div class="kpi-value" style="color: #38bdf8;">80% Faster</div>
            </div>

            <!-- Big Annual Box -->
            <div class="annual-roi-box">
              <div class="annual-roi-label">Projected Annual Revenue Increase</div>
              <div class="annual-roi-number" id="kpiAnnualRev">€71,400</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
                Based on 24/7 sub-second inquiry response benchmarks across our client base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initROICalculatorSection() {
  const selectSector = document.getElementById('businessSectorSelect');
  const sliderVisitors = document.getElementById('sliderVisitors');
  const sliderConversion = document.getElementById('sliderConversion');
  const sliderOrder = document.getElementById('sliderOrder');

  const valVisitors = document.getElementById('valVisitors');
  const valConversion = document.getElementById('valConversion');
  const valOrder = document.getElementById('valOrder');

  const kpiLeads = document.getElementById('kpiLeads');
  const kpiMonthlyRev = document.getElementById('kpiMonthlyRev');
  const kpiLift = document.getElementById('kpiLift');
  const kpiAnnualRev = document.getElementById('kpiAnnualRev');

  if (!sliderVisitors || !sliderConversion || !sliderOrder) return;

  const sectorPresets = {
    ecommerce: { order: 85, min: 25, max: 1000 },
    b2b: { order: 1500, min: 300, max: 5000 },
    clinics: { order: 250, min: 50, max: 2000 },
    realestate: { order: 3500, min: 500, max: 10000 },
    saas: { order: 150, min: 30, max: 2500 },
  };

  function recalculate() {
    const visitors = parseInt(sliderVisitors.value, 10);
    const convRate = parseFloat(sliderConversion.value);
    const orderVal = parseInt(sliderOrder.value, 10);

    // Update labels
    valVisitors.textContent = Number(visitors).toLocaleString();
    valConversion.textContent = `${convRate.toFixed(1)}%`;
    valOrder.textContent = `€${Number(orderVal).toLocaleString()}`;

    // Calculation: baseline leads vs 35% AI lift
    const currentMonthlyLeads = (visitors * (convRate / 100));
    const currentRevenue = currentMonthlyLeads * orderVal;

    const liftPercent = 35.0; // conservative AI response uplift
    const additionalLeadsVal = Math.round(currentMonthlyLeads * (liftPercent / 100));
    const additionalMonthlyRevenueVal = Math.round(additionalLeadsVal * orderVal);
    const annualRevenueVal = additionalMonthlyRevenueVal * 12;

    kpiLeads.textContent = `+${additionalLeadsVal.toLocaleString()}`;
    kpiMonthlyRev.textContent = `+€${additionalMonthlyRevenueVal.toLocaleString()}`;
    kpiLift.textContent = `+${liftPercent.toFixed(1)}%`;
    kpiAnnualRev.textContent = `€${annualRevenueVal.toLocaleString()}`;
  }

  selectSector?.addEventListener('change', () => {
    const preset = sectorPresets[selectSector.value];
    if (preset) {
      sliderOrder.min = preset.min;
      sliderOrder.max = preset.max;
      sliderOrder.value = preset.order;
      recalculate();
    }
  });

  sliderVisitors.addEventListener('input', recalculate);
  sliderConversion.addEventListener('input', recalculate);
  sliderOrder.addEventListener('input', recalculate);

  recalculate();
}
