/**
 * ROICalculatorSection - Interactive real-time ROI estimation engine
 * Internal Location-Based Pricing Algorithm:
 * - Detects live location via IP address, device timezone, and browser geolocation indicators.
 * - For users in Nigeria: automatically sets currency to Naira (₦ NGN) with Nigerian market benchmarks.
 * - For users outside Nigeria: automatically sets currency to US Dollars ($ USD) with global market benchmarks.
 * - 100% automated internal algorithm without requiring manual user toggling.
 */

export function renderROICalculatorSection() {
  return `
    <section class="roi-calc-section" id="roi-calculator">
      <div class="container">
        <!-- Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Performance ROI Diagnostic</span>
          </div>
          <h2 class="section-title">
            Calculate Your Marketing Revenue Potential
          </h2>
          <p class="section-subtitle">
            Adjust your monthly traffic, current conversion baseline, and average customer order value to see how Vuvuzela Digital Marketing Factory Inc. multiplies your pipeline.
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
                <!-- Dynamically populated based on internal location algorithm -->
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
                <span class="calc-field-val" id="valOrder">$85</span>
              </div>
              <input type="range" class="custom-slider" id="sliderOrder" min="25" max="5000" step="25" value="85" />
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
                <span id="sliderOrderMinLabel">$25</span>
                <span id="sliderOrderMaxLabel">$5,000</span>
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
                <span>Additional Qualified Inquiries / Month</span>
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
              <div class="kpi-value" id="kpiMonthlyRev" style="color: var(--accent-green);">+$5,950</div>
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
                <span>Lead Response Speed</span>
              </div>
              <div class="kpi-value" style="color: #38bdf8;">&lt; 60s (Instant)</div>
            </div>

            <!-- Big Annual Box -->
            <div class="annual-roi-box">
              <div class="annual-roi-label">Projected Annual Revenue Increase</div>
              <div class="annual-roi-number" id="kpiAnnualRev">$71,400</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
                Calculated on automated multi-touch conversion funnels and WhatsApp API speed-to-lead benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Currency configurations with authentic market pricing
const CURRENCY_CONFIGS = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    presets: {
      ecommerce: {
        label: 'E-Commerce & DTC Brands (₦85,000 avg order)',
        order: 85000,
        min: 10000,
        max: 500000,
        step: 5000,
      },
      b2b: {
        label: 'B2B & Professional Services (₦1,500,000 avg retainer)',
        order: 1500000,
        min: 250000,
        max: 10000000,
        step: 50000,
      },
      clinics: {
        label: 'Private Healthcare & Clinics (₦250,000 avg patient)',
        order: 250000,
        min: 50000,
        max: 3000000,
        step: 25000,
      },
      realestate: {
        label: 'Real Estate & Property (₦5,000,000 avg commission/deal)',
        order: 5000000,
        min: 500000,
        max: 25000000,
        step: 100000,
      },
      saas: {
        label: 'SaaS & Tech Subscriptions (₦150,000 avg MRR)',
        order: 150000,
        min: 25000,
        max: 2000000,
        step: 10000,
      },
    },
  },
  USD: {
    code: 'USD',
    symbol: '$',
    presets: {
      ecommerce: {
        label: 'E-Commerce & DTC Brands ($85 avg order)',
        order: 85,
        min: 25,
        max: 1000,
        step: 5,
      },
      b2b: {
        label: 'B2B & Professional Services ($1,500 avg retainer)',
        order: 1500,
        min: 300,
        max: 5000,
        step: 50,
      },
      clinics: {
        label: 'Private Healthcare & Clinics ($250 avg patient)',
        order: 250,
        min: 50,
        max: 2000,
        step: 25,
      },
      realestate: {
        label: 'Real Estate & Property ($3,500 avg deal)',
        order: 3500,
        min: 500,
        max: 10000,
        step: 100,
      },
      saas: {
        label: 'SaaS & Tech Subscriptions ($150 avg MRR)',
        order: 150,
        min: 30,
        max: 2500,
        step: 25,
      },
    },
  },
};

/**
 * Fast Client-Side Geo Detection Algorithm:
 * 1. Checks device timezone (Africa/Lagos)
 * 2. Checks browser locale (en-NG, yo-NG, ig-NG, ha-NG)
 * 3. Fallback to USD
 */
function detectHeuristicCurrency() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.toLowerCase().includes('lagos') || tz.toLowerCase().includes('nigeria')) {
      return 'NGN';
    }

    const languages = navigator.languages || [navigator.language || ''];
    const isNgLocale = languages.some((l) => l && l.toLowerCase().includes('-ng'));
    if (isNgLocale) {
      return 'NGN';
    }
  } catch (e) {
    // Silent fallback
  }

  return 'USD';
}

export function initROICalculatorSection() {
  const selectSector = document.getElementById('businessSectorSelect');
  const sliderVisitors = document.getElementById('sliderVisitors');
  const sliderConversion = document.getElementById('sliderConversion');
  const sliderOrder = document.getElementById('sliderOrder');

  const valVisitors = document.getElementById('valVisitors');
  const valConversion = document.getElementById('valConversion');
  const valOrder = document.getElementById('valOrder');
  const sliderOrderMinLabel = document.getElementById('sliderOrderMinLabel');
  const sliderOrderMaxLabel = document.getElementById('sliderOrderMaxLabel');

  const kpiLeads = document.getElementById('kpiLeads');
  const kpiMonthlyRev = document.getElementById('kpiMonthlyRev');
  const kpiLift = document.getElementById('kpiLift');
  const kpiAnnualRev = document.getElementById('kpiAnnualRev');

  if (!sliderVisitors || !sliderConversion || !sliderOrder || !selectSector) return;

  // Active currency resolved internally
  let activeCurrency = detectHeuristicCurrency();

  // Populate sector dropdown based on active currency
  function populateSectorDropdown(selectedKey = 'ecommerce') {
    const conf = CURRENCY_CONFIGS[activeCurrency];
    selectSector.innerHTML = Object.entries(conf.presets)
      .map(
        ([key, data]) => `
          <option value="${key}" ${key === selectedKey ? 'selected' : ''}>
            ${data.label}
          </option>
        `
      )
      .join('');
  }

  function applyCurrencyState() {
    const conf = CURRENCY_CONFIGS[activeCurrency];
    const currentKey = selectSector.value || 'ecommerce';
    populateSectorDropdown(currentKey);

    const preset = conf.presets[currentKey] || conf.presets.ecommerce;
    sliderOrder.min = preset.min;
    sliderOrder.max = preset.max;
    sliderOrder.step = preset.step;
    sliderOrder.value = preset.order;

    if (sliderOrderMinLabel) sliderOrderMinLabel.textContent = `${conf.symbol}${Number(preset.min).toLocaleString()}`;
    if (sliderOrderMaxLabel) sliderOrderMaxLabel.textContent = `${conf.symbol}${Number(preset.max).toLocaleString()}`;

    recalculate();
  }

  function recalculate() {
    const conf = CURRENCY_CONFIGS[activeCurrency];
    const visitors = parseInt(sliderVisitors.value, 10);
    const convRate = parseFloat(sliderConversion.value);
    const orderVal = parseInt(sliderOrder.value, 10);

    // Update slider readouts
    valVisitors.textContent = Number(visitors).toLocaleString();
    valConversion.textContent = `${convRate.toFixed(1)}%`;
    valOrder.textContent = `${conf.symbol}${Number(orderVal).toLocaleString()}`;

    // Calculation logic: 35% conversion funnel lift
    const currentMonthlyLeads = visitors * (convRate / 100);
    const liftPercent = 35.0;
    const additionalLeadsVal = Math.round(currentMonthlyLeads * (liftPercent / 100));
    const additionalMonthlyRevenueVal = Math.round(additionalLeadsVal * orderVal);
    const annualRevenueVal = additionalMonthlyRevenueVal * 12;

    kpiLeads.textContent = `+${additionalLeadsVal.toLocaleString()}`;
    kpiMonthlyRev.textContent = `+${conf.symbol}${additionalMonthlyRevenueVal.toLocaleString()}`;
    kpiLift.textContent = `+${liftPercent.toFixed(1)}%`;
    kpiAnnualRev.textContent = `${conf.symbol}${annualRevenueVal.toLocaleString()}`;
  }

  // Event Listeners for interactive sliders
  selectSector.addEventListener('change', () => {
    const conf = CURRENCY_CONFIGS[activeCurrency];
    const preset = conf.presets[selectSector.value];
    if (preset) {
      sliderOrder.min = preset.min;
      sliderOrder.max = preset.max;
      sliderOrder.step = preset.step;
      sliderOrder.value = preset.order;
      if (sliderOrderMinLabel) sliderOrderMinLabel.textContent = `${conf.symbol}${Number(preset.min).toLocaleString()}`;
      if (sliderOrderMaxLabel) sliderOrderMaxLabel.textContent = `${conf.symbol}${Number(preset.max).toLocaleString()}`;
      recalculate();
    }
  });

  sliderVisitors.addEventListener('input', recalculate);
  sliderConversion.addEventListener('input', recalculate);
  sliderOrder.addEventListener('input', recalculate);

  // Initialize UI immediately with fast heuristic
  applyCurrencyState();

  // Internal live IP location check:
  // Verifies country via fast IP lookup and switches currency seamlessly if needed
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  fetch('https://api.country.is/', { signal: controller.signal })
    .then((res) => res.json())
    .then((data) => {
      clearTimeout(timeoutId);
      if (data && data.country) {
        const ipCurrency = data.country === 'NG' ? 'NGN' : 'USD';
        if (ipCurrency !== activeCurrency) {
          activeCurrency = ipCurrency;
          applyCurrencyState();
        }
      }
    })
    .catch(() => {
      // Fallback IP provider
      fetch('https://ipapi.co/json/', { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.country_code) {
            const ipCurrency = data.country_code === 'NG' ? 'NGN' : 'USD';
            if (ipCurrency !== activeCurrency) {
              activeCurrency = ipCurrency;
              applyCurrencyState();
            }
          }
        })
        .catch(() => {
          // Silent fallback to timezone / locale heuristic already active
        });
    });
}
