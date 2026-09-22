(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function M(a="auroraCanvas"){const t=document.getElementById(a);if(!t)return;const s=t.getContext("2d");if(!s)return;let e=t.width=window.innerWidth,i=t.height=window.innerHeight;const o=()=>{e=t.width=window.innerWidth,i=t.height=window.innerHeight};window.addEventListener("resize",o,{passive:!0});let n=0;function d(){n+=.003,s.clearRect(0,0,e,i),s.fillStyle="#09090b",s.fillRect(0,0,e,i);const b=e*.4+Math.sin(n*.7)*(e*.15),c=i*.25+Math.cos(n*.9)*(i*.1),m=Math.max(e,i)*.45,g=s.createRadialGradient(b,c,0,b,c,m);g.addColorStop(0,"rgba(56, 189, 248, 0.16)"),g.addColorStop(.5,"rgba(30, 58, 138, 0.08)"),g.addColorStop(1,"rgba(9, 9, 11, 0)"),s.fillStyle=g,s.fillRect(0,0,e,i);const v=e*.65+Math.cos(n*.8)*(e*.2),h=i*.35+Math.sin(n*.6)*(i*.12),w=Math.max(e,i)*.5,f=s.createRadialGradient(v,h,0,v,h,w);f.addColorStop(0,"rgba(99, 102, 241, 0.14)"),f.addColorStop(.5,"rgba(15, 23, 42, 0.06)"),f.addColorStop(1,"rgba(9, 9, 11, 0)"),s.fillStyle=f,s.fillRect(0,0,e,i);const y=e*.5+Math.sin(n*.5)*(e*.25),l=i*.65+Math.cos(n*.7)*(i*.15),r=Math.max(e,i)*.4,u=s.createRadialGradient(y,l,0,y,l,r);u.addColorStop(0,"rgba(16, 185, 129, 0.08)"),u.addColorStop(.5,"rgba(15, 23, 42, 0.04)"),u.addColorStop(1,"rgba(9, 9, 11, 0)"),s.fillStyle=u,s.fillRect(0,0,e,i),requestAnimationFrame(d)}d()}function B(){return`
    <div class="modal-overlay" id="briefModalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-content-card">
        <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">×</button>
        
        <div class="pill-badge" style="margin-bottom: 1rem;">
          <span class="pulse-dot dot-green"></span>
          <span>Zero-Commitment Diagnostic</span>
        </div>

        <h3 id="modalTitle" style="font-size: 1.65rem; font-weight: 800; color: #ffffff; line-height: 1.25;">
          Get Your Free Response-Time & AI Audit
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem; line-height: 1.5;">
          We will test your current lead response speed, analyze missed buyer inquiries, and demonstrate a live working AI agent for your business.
        </p>

        <form class="modal-form" id="briefModalForm">
          <div class="form-group">
            <label for="inputFullName">Your Name</label>
            <input type="text" id="inputFullName" class="form-input" placeholder="e.g. Michael Rodriguez" required />
          </div>

          <div class="form-group">
            <label for="inputWorkEmail">Work Email</label>
            <input type="email" id="inputWorkEmail" class="form-input" placeholder="michael@dealership.com" required />
          </div>

          <div class="form-group">
            <label for="inputWebsite">Business Website / Company Name</label>
            <input type="text" id="inputWebsite" class="form-input" placeholder="https://yourbusiness.com" required />
          </div>

          <div class="form-group">
            <label for="inputSector">Primary Industry</label>
            <select id="inputSector" class="calc-type-select" style="background: rgba(255,255,255,0.06); width: 100%;">
              <option value="automotive">Car Dealership / Automotive</option>
              <option value="ecommerce">E-Commerce & Retail</option>
              <option value="clinics">Private Clinic / Healthcare</option>
              <option value="salons">Barbershop & Salon</option>
              <option value="realestate">Real Estate</option>
              <option value="other">Other High-Ticket Business</option>
            </select>
          </div>

          <button type="submit" class="btn-pill-primary" style="width: 100%; justify-content: center; margin-top: 0.5rem; padding: 0.9rem;">
            <span>Schedule Live Diagnostic</span>
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
  `}function E(){const a=document.getElementById("briefModalOverlay"),t=document.getElementById("modalCloseBtn"),s=document.getElementById("briefModalForm"),e=document.getElementById("modalSuccessState"),i=()=>{a==null||a.classList.add("open"),document.body.style.overflow="hidden"},o=()=>{a==null||a.classList.remove("open"),document.body.style.overflow=""};document.addEventListener("click",n=>{const d=n.target;d!=null&&d.closest(".trigger-brief-modal")&&(n.preventDefault(),i())}),t==null||t.addEventListener("click",o),a==null||a.addEventListener("click",n=>{n.target===a&&o()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(a!=null&&a.classList.contains("open"))&&o()}),s==null||s.addEventListener("submit",n=>{n.preventDefault(),s&&e&&(s.style.display="none",e.style.display="block")})}function T(){return`
    <div class="whatsapp-float-widget" id="whatsappFloatWidget">
      <a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
         target="_blank"
         rel="noopener noreferrer"
         class="whatsapp-float-link"
         aria-label="Directly contact Vuvuzela DMF on WhatsApp">
        <svg class="whatsapp-icon-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.19 0-.41.07-.63.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.56 4.07 3.59.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01z"/>
        </svg>
        <span class="whatsapp-float-text">Chat with Us</span>
        <span class="whatsapp-ping" aria-hidden="true"></span>
      </a>
    </div>
  `}function L(a="/"){const t=a==="/car-dealerships";return`
    <nav class="glass-nav-container navbar-visible" id="glassNav" aria-label="Main Navigation">
      <div class="glass-nav-bar">
        <!-- Brand Logo (Pure Typography without added icon mark) -->
        <a href="/" class="nav-logo-link" data-route="/" aria-label="Vuvuzela DMF Home">
          <div class="nav-logo-text">
            <span>VUVUZELA</span><span class="nav-brand-accent">DMF</span>
          </div>
        </a>

        <!-- Desktop Navigation Items -->
        <div class="nav-menu-desktop">
          ${t?`
            <a href="/" class="nav-link-item" data-route="/">Home</a>
            <a href="#dealership-before-after" class="nav-link-item">Before & After</a>
            <a href="#dealership-filters" class="nav-link-item">Lead Filter</a>
            <a href="#dealership-whatsapp" class="nav-link-item">WhatsApp AI</a>
            <a href="/car-dealerships" class="nav-link-item active" data-route="/car-dealerships">Car Dealerships</a>
          `:`
            <a href="#features" class="nav-link-item">Features</a>
            <a href="#ai-team" class="nav-link-item">Solutions</a>
            <a href="#testimonials" class="nav-link-item">Case Studies</a>
            <a href="#roi-calculator" class="nav-link-item">ROI Calculator</a>
            <a href="/car-dealerships" class="nav-link-item" data-route="/car-dealerships">Car Dealerships</a>
          `}
        </div>

        <!-- Desktop Actions: Direct WhatsApp & Get Started -->
        <div class="nav-actions-desktop">
          <a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer" class="nav-whatsapp-btn" aria-label="Contact us directly on WhatsApp">
            <svg class="whatsapp-icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.19 0-.41.07-.63.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.56 4.07 3.59.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <button type="button" class="nav-cta-btn trigger-brief-modal" aria-label="Get Started">
            <span>Get Started</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
          <svg class="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    <div class="mobile-nav-menu" id="mobileNavMenu" role="dialog" aria-modal="true">
      ${t?`
        <a href="/" class="mobile-nav-item" data-route="/">Home</a>
        <a href="#dealership-before-after" class="mobile-nav-item">Before & After</a>
        <a href="#dealership-filters" class="mobile-nav-item">Lead Filter</a>
        <a href="#dealership-whatsapp" class="mobile-nav-item">WhatsApp AI</a>
        <a href="/car-dealerships" class="mobile-nav-item active" data-route="/car-dealerships">Car Dealerships</a>
      `:`
        <a href="#features" class="mobile-nav-item">Features</a>
        <a href="#ai-team" class="mobile-nav-item">Solutions</a>
        <a href="#testimonials" class="mobile-nav-item">Case Studies</a>
        <a href="#roi-calculator" class="mobile-nav-item">ROI Calculator</a>
        <a href="/car-dealerships" class="mobile-nav-item" data-route="/car-dealerships">Car Dealerships</a>
      `}
      <a href="https://wa.me/?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer" class="mobile-nav-whatsapp">
        <svg class="whatsapp-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.19 0-.41.07-.63.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.56 4.07 3.59.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01z"/>
        </svg>
        <span>Chat on WhatsApp</span>
      </a>

      <button type="button" class="mobile-nav-cta trigger-brief-modal">
        <span>Get Started</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `}function D(){const a=document.getElementById("glassNav"),t=document.getElementById("mobileNavToggle"),s=document.getElementById("mobileNavMenu"),e=document.getElementById("mobileNavBackdrop");if(!a)return;let i=window.scrollY;window.addEventListener("scroll",()=>{const d=window.scrollY;d>60?d>i&&d-i>6?(a.classList.add("navbar-hidden"),a.classList.remove("navbar-visible")):i-d>6&&(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")):(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")),i=d},{passive:!0});const o=()=>{s==null||s.classList.add("open"),e==null||e.classList.add("open"),document.body.style.overflow="hidden"},n=()=>{s==null||s.classList.remove("open"),e==null||e.classList.remove("open"),document.body.style.overflow=""};t==null||t.addEventListener("click",()=>{s!=null&&s.classList.contains("open")?n():o()}),e==null||e.addEventListener("click",n),s==null||s.querySelectorAll("a, button").forEach(d=>{d.addEventListener("click",n)})}function P(){return`
    <section class="hero-section" id="hero">
      <div class="hero-inner">
        <!-- Status Pill Badge -->
        <div class="pill-badge">
          <span class="pulse-dot"></span>
          <span>AI Automation & Performance Growth Engine</span>
        </div>

        <!-- Main Headline with Rotating Word Badge -->
        <h1 class="hero-headline">
          <span>Elevate your</span>
          <br />
          <div class="hero-headline-subrow">
            <span>Business</span>
            <span class="rotating-word-pill" id="rotatingWordPill">Growth</span>
          </div>
        </h1>

        <!-- Subheading -->
        <p class="hero-lead">
          Vuvuzela DMF helps ambitious businesses save time, capture lost leads, and multiply revenue with smart conversational AI, automated workflows, and precision performance engineering—fully managed for you.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Start Automating</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <a href="#ai-team" class="btn-pill-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>Live Demonstration</span>
          </a>
        </div>

        <!-- Social Proof / Infinite Marquee -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies & ambitious brands</p>
          <div class="trust-marquee-track">
            <!-- First Set -->
            <div class="trust-marquee-item">TechCorp</div>
            <div class="trust-marquee-item">InnovateLab</div>
            <div class="trust-marquee-item">FutureScale</div>
            <div class="trust-marquee-item">AutoFlow</div>
            <div class="trust-marquee-item">eScale Digital</div>
            <div class="trust-marquee-item">DataFlow UK</div>
            <div class="trust-marquee-item">Apex Automations</div>
            <div class="trust-marquee-item">Vanguard Growth</div>
            <!-- Duplicated for Infinite Smooth Loop -->
            <div class="trust-marquee-item">TechCorp</div>
            <div class="trust-marquee-item">InnovateLab</div>
            <div class="trust-marquee-item">FutureScale</div>
            <div class="trust-marquee-item">AutoFlow</div>
            <div class="trust-marquee-item">eScale Digital</div>
            <div class="trust-marquee-item">DataFlow UK</div>
            <div class="trust-marquee-item">Apex Automations</div>
            <div class="trust-marquee-item">Vanguard Growth</div>
          </div>
        </div>
      </div>
    </section>
  `}function R(){const a=document.getElementById("rotatingWordPill");if(!a)return;const t=["Growth","Innovation","Efficiency","Pipeline","Revenue","Performance"];let s=0;setInterval(()=>{a.style.opacity="0",a.style.transform="translateY(-12px) scale(0.95)",setTimeout(()=>{s=(s+1)%t.length,a.textContent=t[s],a.style.transform="translateY(12px) scale(0.95)",requestAnimationFrame(()=>{a.style.opacity="1",a.style.transform="translateY(0) scale(1)"})},250)},2200)}function q(){return`
    <section class="section-pad" id="problem-solution">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-red"></span>
            <span>The Problem Every Business Faces</span>
          </div>
          <h2 class="section-title">
            <span style="color: var(--accent-red);">60-70%</span> of Your Leads Are Slipping Away
          </h2>
          <p class="section-subtitle">
            While your team is busy delivering services or off-duty, prospects inquire online and bounce to competitors who reply first. Here is how we fix it.
          </p>
        </div>

        <!-- Two Column Comparison -->
        <div class="comparison-cards-grid">
          <!-- The Reality (Problem Card) -->
          <div class="comp-card reality-card">
            <div class="comp-header-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>The Reality</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">4+ Hours</div>
              <div class="comp-stat-desc">
                Average business response time. But 78% of customers buy from the vendor who replies first.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Staff miss high-value inquiries during evenings, weekends, and peak operational hours</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Busy serving existing clients while inbound website and social leads go cold</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Thousands in monthly advertising spend wasted driving traffic to slow, unresponsive contact forms</span>
              </li>
            </ul>
          </div>

          <!-- Our Solution Card -->
          <div class="comp-card solution-card">
            <div class="comp-header-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Our Solution</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">24/7 Sub-Second</div>
              <div class="comp-stat-desc">
                Intelligent conversational agents engage immediately, qualify intent, and book appointments automatically.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Instantly answers buyer questions, recommends products, and schedules showroom visits</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Full two-way synchronization with your CRM, Google Calendar, and email pipelines</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Omnichannel capture across Website, WhatsApp Business, Instagram DM, and Voice concierge</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 3 Stat Metrics -->
        <div class="stats-triad-grid">
          <div class="stat-triad-card">
            <div class="stat-triad-num">€500+</div>
            <div class="stat-triad-label">Average value lost per missed buyer inquiry</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">78%</div>
            <div class="stat-triad-label">Of consumers select the first responder</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">24/7</div>
            <div class="stat-triad-label">Automated throughput—our AI never sleeps</div>
          </div>
        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner">
          <h3>Stop Losing Qualified Customers Today</h3>
          <p>
            Get a tailored response-time audit and revenue diagnostic to discover exactly how many sales opportunities your business is leaving on the table.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Revenue Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `}function W(){return`
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
  `}function z(){const a=document.getElementById("chatSimBubbleBot"),t=document.getElementById("chatSimBubbleUser"),s=document.getElementById("chatSimTyping");if(a&&t&&s){const o=[{bot:"Good evening! How may I assist you?",user:"I'd like to check pricing and availability"},{bot:"We have 3 slots open for this Saturday!",user:"Can I book the 11:00 AM slot?"},{bot:"Confirmed! A calendar invite has been sent to your email.",user:"Thank you, that was lightning fast!"}];let n=0;setInterval(()=>{s.style.display="inline-flex",setTimeout(()=>{s.style.display="none",n=(n+1)%o.length,a.textContent=o[n].bot,t.textContent=o[n].user},900)},4500)}const e=document.getElementById("interactiveCalGrid"),i=document.getElementById("calStatusMessage");e&&i&&e.querySelectorAll(".cal-day").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".cal-day").forEach(d=>d.classList.remove("active-day")),o.classList.add("active-day");const n=o.getAttribute("data-day")||o.textContent;i.innerHTML=`
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Slot confirmed for the ${n}th at 2:00 PM</span>
        `})})}const C={automotive:{badge:"Car Dealerships & Showrooms",title:"See AI Handle Real Car Sales & Test Drives",desc:"Watch how our AI conversational agent answers vehicle spec inquiries, checks showroom inventory, pre-qualifies trade-ins, and books test drives 24/7.",quote:'"We went from missing 70% of after-hours car inquiries to capturing every single lead. Our test drive bookings increased 50% in the first month alone."',author:"— Mike Rodriguez, Dealership Principal",agentName:"Michael - AI Sales Specialist",agentPhone:"Showroom WhatsApp Active",prompts:["Available Sedans","Book Test Drive","Financing Rates","Trade-in Estimate"],initialMessages:[{sender:"customer",text:"Hi! I'm interested in the 2024 Premium Sedan in stock. What's the pricing?"},{sender:"ai",text:"Hello! The 2024 Premium Sedan starts at €42,500. We currently have black, slate grey, and pearl white available on our showroom floor."},{sender:"customer",text:"Can I schedule a test drive for this Thursday?"},{sender:"ai",text:"Absolutely! I have 11:00 AM or 3:30 PM open this Thursday. All test drives are free and include a full vehicle walkthrough. Would 11:00 AM suit you?"}],responses:{"Available Sedans":"We have 3 Executive Trim Sedans and 2 Sport Models ready for immediate delivery with 0% APR options.","Book Test Drive":"You're booked for Thursday at 11:00 AM! Please bring your driver's license. We will have the vehicle washed and ready at the showroom entrance.","Financing Rates":"Our current promotional financing starts from 2.9% APR for 36 months, with €0 down-payment programs for qualified buyers.","Trade-in Estimate":"I can generate a valuation in 60 seconds! What is your current car’s year, make, model, and approximate mileage?"}},salons:{badge:"Barbershops & Luxury Salons",title:"Fill Every Chair Without Answering Phone Calls",desc:"Never pause client cuts or styling appointments to manage booking calls. The AI coordinates stylist calendars, confirms cancellations, and fills empty slots.",quote:'"Our stylists no longer lose time picking up phones while holding scissors. Our weekend schedule is fully booked 2 weeks in advance now."',author:"— Julian Vance, Master Barber & Salon Owner",agentName:"Chloe - Salon Concierge",agentPhone:"Salon Booking Line Active",prompts:["Saturday Slots","Hair Color Consultation","Cancel or Reschedule","VIP Membership"],initialMessages:[{sender:"customer",text:"Hey, do you have any openings for a skin fade and beard trim this Saturday?"},{sender:"ai",text:"Hey there! Yes, we have 1:30 PM and 4:15 PM open with senior stylist Marcus this Saturday."},{sender:"customer",text:"Put me down for 1:30 PM please!"},{sender:"ai",text:"You're all set for 1:30 PM Saturday with Marcus! An SMS confirmation has been sent with directions and easy parking tips."}],responses:{"Saturday Slots":"Saturday has slots at 10:00 AM, 1:30 PM, and 4:15 PM with our master stylists. Which time works best for you?","Hair Color Consultation":"Color consultations are complimentary! We can book a 15-minute patch test and consultation anytime Tuesday through Thursday.","Cancel or Reschedule":"No problem at all. Let me know your preferred new date and time and I will update your calendar invite instantly.","VIP Membership":"Our VIP Grooming Club includes 2 cuts per month, beard sculpt, and priority holiday bookings for €65/mo."}},clinics:{badge:"Dentists, Physios & Private Clinics",title:"Intelligent Patient Onboarding & Triage",desc:"Provide immediate, reassuring patient intake 24/7. Handle emergency inquiries, check insurance compatibility, and book specialist consultations.",quote:'"Patients with urgent dental pain book at 11 PM and arrive the next morning. Our new patient acquisition jumped 80% without extra administrative overhead."',author:"— Dr. Sarah O'Connor, Clinic Director",agentName:"Aria - Clinical Intake AI",agentPhone:"Patient Help Line Active",prompts:["Emergency Appointment","Dental Implants Info","Insurance Check","Teeth Whitening Cost"],initialMessages:[{sender:"customer",text:"I broke a tooth while eating dinner, can I see a dentist tomorrow morning?"},{sender:"ai",text:"I am so sorry to hear that. We hold emergency triage slots every morning at 8:30 AM and 9:15 AM. Are you experiencing severe pain?"},{sender:"customer",text:"Yes, moderate pain. 8:30 AM would be a lifesaver."},{sender:"ai",text:"I have reserved the 8:30 AM emergency slot for you with Dr. O'Connor. Please avoid hot/cold drinks tonight, and our clinic doors open at 8:15 AM."}],responses:{"Emergency Appointment":"We have emergency walk-in availability reserved every morning. I can book you for 8:30 AM right now.","Dental Implants Info":"Our premium dental implant consultations include full 3D CBCT scans and treatment financing options from €89/month.","Insurance Check":"We accept VHI, Laya, Irish Life Health, and PRSI dental benefit claims directly at our front desk.","Teeth Whitening Cost":"Our Philips Zoom professional whitening package is €295, including take-home maintenance trays."}},restaurants:{badge:"Fine Dining & Hospitality",title:"Automate Table Reservations & Group Bookings",desc:"Capture private dining inquiries, manage dietary restrictions, and confirm party reservations instantly across your website and WhatsApp.",quote:'"We used to lose high-ticket weekend corporate reservations during kitchen prep. Cliste captured €34,000 in private event bookings in our first quarter."',author:"— Marco Rossi, General Manager",agentName:"Elena - Guest Host AI",agentPhone:"VIP Reservations Active",prompts:["Table for 4 Friday","Private Event Room","Tasting Menu","Dietary Accommodations"],initialMessages:[{sender:"customer",text:"Do you have a table for 4 this Friday at 7:30 PM?"},{sender:"ai",text:"Good evening! We have an intimate booth available in our main dining room at 7:45 PM this Friday."},{sender:"customer",text:"That works! Is there an anniversary special?"},{sender:"ai",text:"Happy Anniversary! I have marked your booking for 7:45 PM and notified our sommelier to prepare complimentary prosecco upon your arrival."}],responses:{"Table for 4 Friday":"Table confirmed for Friday at 7:45 PM! A calendar invite and menu preview have been dispatched to your phone.","Private Event Room":"Our Mezzanine private dining room seats up to 28 guests with dedicated bar service. Would you like our corporate events brochure?","Tasting Menu":"Our 7-course seasonal tasting menu by Chef Alain features optional biodynamic wine pairings for €115 per guest.","Dietary Accommodations":"Our culinary team caters expertly to gluten-free, vegan, celiac, and nut-allergy requirements with advance notice."}}};function F(){const t=C["automotive"];return`
    <section class="section-pad" id="ai-team">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-green"></span>
            <span>Tailored Industry Solutions</span>
          </div>
          <h2 class="section-title" id="indSectionTitle">
            ${t.title}
          </h2>
          <p class="section-subtitle" id="indSectionDesc">
            ${t.desc}
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
              ${t.badge}
            </div>

            <h3 style="font-size: 2rem; font-weight: 800; color: #ffffff; line-height: 1.25;">
              This is what your buyers experience in real time.
            </h3>

            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
              While your competitors miss calls and allow hot website leads to slip away, your AI concierge delivers instantaneous, personalized consultation, qualifying buyer intent and securing bookings on autopilot.
            </p>

            <div class="ind-quote-card" id="indQuoteBox">
              <p id="indQuoteText">${t.quote}</p>
              <div class="ind-quote-author" id="indQuoteAuthor">${t.author}</div>
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
                  <div class="agent-name" id="chatAgentName">${t.agentName}</div>
                  <div class="agent-status-label">
                    <span class="pulse-dot dot-green" style="width: 5px; height: 5px;"></span>
                    <span id="chatAgentPhone">${t.agentPhone}</span>
                  </div>
                </div>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">24/7 LIVE</span>
            </div>

            <!-- Messages Window -->
            <div class="chat-messages-scroll" id="chatMessagesScroll">
              ${t.initialMessages.map(s=>`
                <div class="chat-msg ${s.sender==="customer"?"customer-msg":"ai-msg"}">
                  ${s.text}
                </div>
              `).join("")}
            </div>

            <!-- Quick Action Prompts Bar -->
            <div class="chat-prompts-bar" id="chatPromptsBar">
              ${t.prompts.map(s=>`
                <button type="button" class="chat-prompt-pill" data-prompt="${s}">${s}</button>
              `).join("")}
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
  `}function H(){let a="automotive";const t=document.querySelectorAll(".ind-tab-btn"),s=document.getElementById("indSectionTitle"),e=document.getElementById("indSectionDesc"),i=document.getElementById("indBadgeText"),o=document.getElementById("indQuoteText"),n=document.getElementById("indQuoteAuthor"),d=document.getElementById("chatAgentName"),b=document.getElementById("chatAgentPhone"),c=document.getElementById("chatMessagesScroll"),m=document.getElementById("chatPromptsBar"),g=document.getElementById("chatDemoForm"),v=document.getElementById("chatDemoInput");function h(l){c&&(c.innerHTML=l.map(r=>`
      <div class="chat-msg ${r.sender==="customer"?"customer-msg":"ai-msg"}">
        ${r.text}
      </div>
    `).join(""),c.scrollTop=c.scrollHeight)}function w(l){m&&(m.innerHTML=l.map(r=>`
      <button type="button" class="chat-prompt-pill" data-prompt="${r}">${r}</button>
    `).join(""),m.querySelectorAll(".chat-prompt-pill").forEach(r=>{r.addEventListener("click",()=>{const u=r.getAttribute("data-prompt");u&&y(u)})}))}function f(l){a=l;const r=C[l];r&&(t.forEach(u=>{u.classList.toggle("active",u.getAttribute("data-industry")===l)}),s&&(s.textContent=r.title),e&&(e.textContent=r.desc),i&&(i.textContent=r.badge),o&&(o.textContent=r.quote),n&&(n.textContent=r.author),d&&(d.textContent=r.agentName),b&&(b.textContent=r.agentPhone),h(r.initialMessages),w(r.prompts))}t.forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-industry");r&&f(r)})});function y(l){if(!l.trim()||!c)return;const r=document.createElement("div");r.className="chat-msg customer-msg",r.textContent=l,c.appendChild(r),c.scrollTop=c.scrollHeight;const u=document.createElement("div");u.className="chat-msg ai-msg typing-pill",u.innerHTML='<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>',c.appendChild(u),c.scrollTop=c.scrollHeight;let k=C[a].responses[l];k||(k=`Thank you for asking about "${l}". Our AI system has logged this inquiry and can immediately schedule your appointment or transfer you to our live team!`),setTimeout(()=>{u.remove();const x=document.createElement("div");x.className="chat-msg ai-msg",x.textContent=k,c.appendChild(x),c.scrollTop=c.scrollHeight},700)}g==null||g.addEventListener("submit",l=>{l.preventDefault(),v&&v.value&&(y(v.value),v.value="")}),m==null||m.querySelectorAll(".chat-prompt-pill").forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-prompt");r&&y(r)})})}const p=[{quote:"We went from missing 70% of after-hours inquiries to capturing every single lead. Customer bookings increased 50% in the first month alone.",author:"Mike Rodriguez",role:"Dealership Owner, Apex Automotive",metric:"+50% Bookings"},{quote:"We spend so much less time manually replying to leads because of the instant engagement Vuvuzela offers. Our pipeline velocity has doubled.",author:"Sarah Chen",role:"Sales Director, Nexus SaaS",metric:"2x Velocity"},{quote:"With Vuvuzela DMF, our conversion rates increased by 85% and boosted our weekend revenue by 40%. The ROI was undeniable within 21 days.",author:"Michael Torres",role:"General Manager, Grand Plaza",metric:"+85% Conv. Rate"},{quote:"The AI handles patient questions 24/7, so our clinical staff can focus on procedures rather than telephone administration.",author:"Dr. Jennifer Walsh",role:"Clinical Director, City Dental Group",metric:"Zero Wait Time"},{quote:"Client satisfaction scores jumped dramatically. Customers constantly praise how quick and helpful our website chat assistant is.",author:"David Kim",role:"Customer Experience Lead, Horizon Retail",metric:"4.9/5 Rating"},{quote:"Property inquiries are qualified and booked instantly now. We closed 3x more premium real estate transactions in Q2 alone.",author:"James Wilson",role:"Principal Broker, Wilson & Co Real Estate",metric:"3x More Deals"}];function O(){const a=[p[0],p[1],p[2],p[0],p[1]],t=[p[3],p[4],p[5],p[3],p[4]],s=[p[2],p[5],p[1],p[2],p[5]],e=i=>`
    <div class="test-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.12); padding: 0.2rem 0.6rem; border-radius: 9999px; border: 1px solid rgba(16, 185, 129, 0.25);">
          ${i.metric}
        </span>
        <span style="color: #fbbf24; font-size: 0.85rem;">★★★★★</span>
      </div>
      <p class="test-body">"${i.quote}"</p>
      <div class="test-author-row">
        <div class="test-avatar-placeholder">
          ${i.author.charAt(0)}
        </div>
        <div>
          <div class="test-name">${i.author}</div>
          <div class="test-role">${i.role}</div>
        </div>
      </div>
    </div>
  `;return`
    <section class="testimonials-grid-section" id="testimonials">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot"></span>
            <span>Client Success Stories</span>
          </div>
          <h2 class="section-title">
            The Businesses We Empower
          </h2>
          <p class="section-subtitle">
            Discover how leading brands and local enterprises transform customer engagement and scale recurring pipeline with Vuvuzela DMF.
          </p>
        </div>

        <!-- 3-Column Vertical Masonry Marquee -->
        <div class="testimonials-scroll-viewport">
          <div class="test-col-track">
            ${a.map(e).join("")}
          </div>
          <div class="test-col-track reverse-scroll">
            ${t.map(e).join("")}
          </div>
          <div class="test-col-track">
            ${s.map(e).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function V(){return`
    <section class="roi-calc-section" id="roi-calculator">
      <div class="container">
        <!-- Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span class="pulse-dot dot-green"></span>
            <span>ROI Estimation Engine</span>
          </div>
          <h2 class="section-title">
            Calculate Your Revenue Growth Potential
          </h2>
          <p class="section-subtitle">
            Adjust your monthly traffic, current conversion baseline, and customer deal size to see how much pipeline Vuvuzela DMF unlocks for you.
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
                <option value="automotive">Car Dealerships / Automotive (€25,000 avg deal)</option>
                <option value="ecommerce" selected>E-Commerce & Retail (€85 avg order)</option>
                <option value="clinics">Private Clinics & Health (€250 avg patient)</option>
                <option value="salons">Salons, Barbers & Spas (€65 avg ticket)</option>
                <option value="realestate">Real Estate & Property (€5,000 avg fee)</option>
                <option value="b2b">B2B & Professional Services (€1,500 avg retainer)</option>
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
  `}function N(){const a=document.getElementById("businessSectorSelect"),t=document.getElementById("sliderVisitors"),s=document.getElementById("sliderConversion"),e=document.getElementById("sliderOrder"),i=document.getElementById("valVisitors"),o=document.getElementById("valConversion"),n=document.getElementById("valOrder"),d=document.getElementById("kpiLeads"),b=document.getElementById("kpiMonthlyRev"),c=document.getElementById("kpiLift"),m=document.getElementById("kpiAnnualRev");if(!t||!s||!e)return;const g={ecommerce:{order:85,min:25,max:1e3},automotive:{order:1200,min:200,max:5e3},clinics:{order:250,min:50,max:2e3},salons:{order:65,min:25,max:300},realestate:{order:3500,min:500,max:1e4},b2b:{order:1500,min:300,max:5e3}};function v(){const h=parseInt(t.value,10),w=parseFloat(s.value),f=parseInt(e.value,10);i.textContent=Number(h).toLocaleString(),o.textContent=`${w.toFixed(1)}%`,n.textContent=`€${Number(f).toLocaleString()}`;const y=h*(w/100),l=35,r=Math.round(y*(l/100)),u=Math.round(r*f),A=u*12;d.textContent=`+${r.toLocaleString()}`,b.textContent=`+€${u.toLocaleString()}`,c.textContent=`+${l.toFixed(1)}%`,m.textContent=`€${A.toLocaleString()}`}a==null||a.addEventListener("change",()=>{const h=g[a.value];h&&(e.min=h.min,e.max=h.max,e.value=h.order,v())}),t.addEventListener("input",v),s.addEventListener("input",v),e.addEventListener("input",v),v()}function S(){return`
    <section class="cta-banner-section" id="contact">
      <div class="container">
        <div class="cta-glow-card">
          <h2 class="cta-headline">
            Ready to transform your business's <em>customer engagement</em>?
          </h2>
          <p class="cta-subline">
            Join hundreds of forward-thinking businesses leveraging autonomous AI workflows to capture more leads, eliminate missed inquiries, and accelerate closed revenue.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal" style="padding: 1rem 2.5rem; font-size: 1.15rem;">
            <span>Get Your Demo Today</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `}function I(){return`
    <footer class="global-footer">
      <div class="footer-inner-grid">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <div class="nav-logo-link" style="align-self: flex-start;">
            <div class="nav-logo-text">
              <span>VUVUZELA</span><span class="nav-brand-accent">DMF</span>
            </div>
          </div>
          <p class="footer-brand-desc">
            Digital Marketing Factory & AI Automation Engine. Engineering high-velocity revenue pipelines for ambitious businesses worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${new Date().getFullYear()} Vuvuzela DMF. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Product -->
          <div class="footer-nav-col">
            <h4>Product</h4>
            <ul class="footer-nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#ai-team">Industry AI</a></li>
              <li><a href="#roi-calculator">ROI Calculator</a></li>
              <li><a href="/car-dealerships" data-route="/car-dealerships">Car Dealerships</a></li>
            </ul>
          </div>

          <!-- Column 2: Solutions -->
          <div class="footer-nav-col">
            <h4>Solutions</h4>
            <ul class="footer-nav-links">
              <li><a href="#ai-team">Automotive Showrooms</a></li>
              <li><a href="#ai-team">Barbers & Salons</a></li>
              <li><a href="#ai-team">Dentists & Clinics</a></li>
              <li><a href="#ai-team">Restaurants & Dining</a></li>
            </ul>
          </div>

          <!-- Column 3: Resources -->
          <div class="footer-nav-col">
            <h4>Resources</h4>
            <ul class="footer-nav-links">
              <li><a href="#testimonials">Case Studies</a></li>
              <li><a href="#problem-solution">Response Diagnostic</a></li>
              <li><a href="#contact">Schedule Demo</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>

          <!-- Column 4: Social -->
          <div class="footer-nav-col">
            <h4>Connect</h4>
            <ul class="footer-nav-links">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener">X (Twitter)</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <span>Designed & Engineered with Cliste Architecture</span>
        <span>Enterprise Conversational AI & Performance Marketing</span>
      </div>
    </footer>
  `}function G(){return`
    <div class="dealership-page-wrapper">
      <!-- Dealership Hero Header -->
      <section class="hero-section" id="dealership-hero" style="min-height: 85vh; padding-top: 7rem;">
        <div class="hero-inner">
          <div class="pill-badge">
            <span class="pulse-dot"></span>
            <span>Clutch 1.0 By Vuvuzela DMF</span>
          </div>

          <h1 class="hero-headline">
            Never Miss Another Car Buyer Lead
          </h1>

          <div style="margin-bottom: 2rem;">
            <p style="font-size: clamp(1.1rem, 2vw, 1.35rem); color: var(--text-secondary);">
              Dealerships lose over
            </p>
            <div class="dealership-counter-badge" id="dealershipCounter">
              €0K+
            </div>
            <p style="font-size: clamp(1.1rem, 2vw, 1.35rem); color: var(--text-secondary);">
              annually to slow after-hours and weekend response times.
            </p>
          </div>

          <!-- Video Demo Card -->
          <div class="dealership-video-card">
            <div class="play-video-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div style="position: absolute; bottom: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
              Click to preview Clutch 1.0 in action
            </div>
          </div>

          <!-- Hero Actions -->
          <div class="hero-actions">
            <button type="button" class="btn-pill-primary trigger-brief-modal">
              <span>Book Dealership Demo</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button type="button" class="btn-pill-secondary trigger-brief-modal">
              <span>Request Response Audit</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Before & After Comparison -->
      <section class="section-pad" id="dealership-before-after">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-red"></span>
              <span>The Showroom Contrast</span>
            </div>
            <h2 class="section-title">Before vs. After Clutch 1.0</h2>
            <p class="section-subtitle">
              How modern automotive retail transforms when every digital touchpoint is managed 24/7.
            </p>
          </div>

          <div class="split-screen-grid">
            <!-- Without AI -->
            <div class="comp-card reality-card">
              <div class="comp-header-badge">
                <span>Traditional Dealership Reality</span>
              </div>
              <ul class="comp-list" style="margin-top: 1rem;">
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Weekend & evening inquiries sit unattended for 12 to 48 hours until Monday morning</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Sales reps spend 60% of their workday answering basic vehicle spec and mileage questions</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Over 70% of potential buyers cross-shop and test drive at competing showrooms that reply first</span>
                </li>
              </ul>
            </div>

            <!-- With Clutch 1.0 -->
            <div class="comp-card solution-card">
              <div class="comp-header-badge">
                <span>With Clutch 1.0 AI Engine</span>
              </div>
              <ul class="comp-list" style="margin-top: 1rem;">
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Inquiries engaged in less than 3 seconds on your website, WhatsApp, and social media</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Auto-qualifies budget, trade-in details, and financing readiness before scheduling</span>
                </li>
                <li class="comp-list-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Test drives booked straight into your sales calendar with automatic SMS confirmation reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Tyre Kickers Filter Section -->
      <section class="section-pad" id="dealership-filters" style="background: rgba(255, 255, 255, 0.02);">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-green"></span>
              <span>Intelligent Lead Triage</span>
            </div>
            <h2 class="section-title">Separate Serious Buyers from Tyre Kickers</h2>
            <p class="section-subtitle">
              Your sales team should only spend their valuable time closing verified, qualified buyers who are ready to purchase.
            </p>
          </div>

          <div class="stats-triad-grid">
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #38bdf8;">100%</div>
              <div class="stat-triad-label">Inquiries verified with contact and vehicle interest</div>
            </div>
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #10b981;">+52%</div>
              <div class="stat-triad-label">Increase in completed showroom test drives</div>
            </div>
            <div class="stat-triad-card">
              <div class="stat-triad-num" style="color: #fbbf24;">4.8x</div>
              <div class="stat-triad-label">Return on advertising spend across Meta & Google</div>
            </div>
          </div>
        </div>
      </section>

      <!-- WhatsApp Showroom Demo -->
      <section class="section-pad" id="dealership-whatsapp">
        <div class="container">
          <div class="section-header-center">
            <div class="pill-badge">
              <span class="pulse-dot dot-green"></span>
              <span>WhatsApp Showroom Integration</span>
            </div>
            <h2 class="section-title">Direct-to-WhatsApp Automotive Funnel</h2>
            <p class="section-subtitle">
              Irish buyers prefer WhatsApp over email forms. Clutch 1.0 connects your ads and inventory directly into WhatsApp conversations that book appointments on the spot.
            </p>
          </div>

          <div style="text-align: center; margin-top: 2rem;">
            <button type="button" class="btn-pill-primary trigger-brief-modal" style="font-size: 1.15rem; padding: 1rem 2.5rem;">
              <span>Deploy Clutch 1.0 for Your Dealership</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  `}function $(){const a=document.getElementById("dealershipCounter");if(!a)return;const t=200;let s=0;const e=1800,i=25,o=e/i,n=t/o,d=setInterval(()=>{s+=n,s>=t?(a.textContent=`€${t}K+`,clearInterval(d)):a.textContent=`€${Math.round(s)}K+`},i)}class Y{constructor(t="appRoot"){this.rootContainer=document.getElementById(t),this.transitionOverlay=document.getElementById("pageTransitionOverlay"),this.currentPath=this.normalizePath(window.location.pathname)}normalizePath(t){return!t||t==="/"||t.endsWith("/index.html")?"/":t.includes("car-dealerships")?"/car-dealerships":"/"}init(){document.addEventListener("click",t=>{const s=t.target.closest("a");if(!s)return;const e=s.getAttribute("href");if(!e||e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:")||s.target==="_blank")return;if(e.startsWith("#")){t.preventDefault(),this.scrollToAnchor(e);return}const i=s.getAttribute("data-route")||e,o=this.normalizePath(i);if(o!==this.currentPath)t.preventDefault(),this.navigateTo(o);else if(e.includes("#")){t.preventDefault();const n=e.substring(e.indexOf("#"));this.scrollToAnchor(n)}}),window.addEventListener("popstate",()=>{const t=this.normalizePath(window.location.pathname);t!==this.currentPath&&this.renderRoute(t,!1)}),this.renderRoute(this.currentPath,!1),window.location.hash&&setTimeout(()=>{this.scrollToAnchor(window.location.hash)},200)}navigateTo(t){this.isNavigating||(this.isNavigating=!0,this.transitionOverlay&&this.transitionOverlay.classList.add("is-active"),setTimeout(()=>{window.history.pushState({},"",t==="/"?"/":t),this.renderRoute(t,!0),window.scrollTo(0,0),setTimeout(()=>{this.transitionOverlay&&this.transitionOverlay.classList.remove("is-active"),this.isNavigating=!1},100)},220))}renderRoute(t,s){if(this.currentPath=this.normalizePath(t),!this.rootContainer)return;let e="";e+=L(this.currentPath),this.currentPath==="/car-dealerships"?(document.title="Car Dealership AI Engine — Clutch 1.0 | Vuvuzela DMF",e+=G(),e+=S(),e+=I()):(document.title="VUVUZELA DMF — AI Automation & Performance Growth Engine",e+=P(),e+=q(),e+=W(),e+=F(),e+=O(),e+=V(),e+=S(),e+=I()),this.rootContainer.innerHTML=e,D(),this.currentPath==="/car-dealerships"?$():(R(),z(),H(),N())}scrollToAnchor(t){const s=document.querySelector(t);if(s){const i=s.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:Math.max(0,i-90),behavior:"smooth"})}}}document.addEventListener("DOMContentLoaded",()=>{M("auroraCanvas");const a=document.getElementById("modalMount");a&&(a.innerHTML=B(),E());const t=document.getElementById("whatsappMount");t&&(t.innerHTML=T()),new Y("appRoot").init()});
