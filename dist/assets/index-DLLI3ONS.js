(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();function M(a="auroraCanvas"){const t=document.getElementById(a);if(!t)return;const i=t.getContext("2d");if(!i)return;let e=t.width=window.innerWidth,n=t.height=window.innerHeight;const s=()=>{e=t.width=window.innerWidth,n=t.height=window.innerHeight};window.addEventListener("resize",s,{passive:!0});let o=0;function c(){o+=.003,i.clearRect(0,0,e,n);const u=document.documentElement.getAttribute("data-theme")==="dark";i.fillStyle=u?"#09090b":"#f8fafc",i.fillRect(0,0,e,n);const p=e*.4+Math.sin(o*.7)*(e*.15),y=n*.25+Math.cos(o*.9)*(n*.1),m=Math.max(e,n)*.48,d=i.createRadialGradient(p,y,0,p,y,m);u?(d.addColorStop(0,"rgba(56, 189, 248, 0.16)"),d.addColorStop(.5,"rgba(30, 58, 138, 0.08)"),d.addColorStop(1,"rgba(9, 9, 11, 0)")):(d.addColorStop(0,"rgba(56, 189, 248, 0.12)"),d.addColorStop(.5,"rgba(186, 230, 253, 0.06)"),d.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=d,i.fillRect(0,0,e,n);const h=e*.65+Math.cos(o*.8)*(e*.2),b=n*.35+Math.sin(o*.6)*(n*.12),w=Math.max(e,n)*.52,l=i.createRadialGradient(h,b,0,h,b,w);u?(l.addColorStop(0,"rgba(99, 102, 241, 0.14)"),l.addColorStop(.5,"rgba(15, 23, 42, 0.06)"),l.addColorStop(1,"rgba(9, 9, 11, 0)")):(l.addColorStop(0,"rgba(129, 140, 248, 0.11)"),l.addColorStop(.5,"rgba(224, 231, 255, 0.05)"),l.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=l,i.fillRect(0,0,e,n);const r=e*.5+Math.sin(o*.5)*(e*.25),v=n*.65+Math.cos(o*.7)*(n*.15),k=Math.max(e,n)*.42,f=i.createRadialGradient(r,v,0,r,v,k);u?(f.addColorStop(0,"rgba(16, 185, 129, 0.08)"),f.addColorStop(.5,"rgba(15, 23, 42, 0.04)"),f.addColorStop(1,"rgba(9, 9, 11, 0)")):(f.addColorStop(0,"rgba(52, 211, 153, 0.08)"),f.addColorStop(.5,"rgba(209, 250, 229, 0.04)"),f.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=f,i.fillRect(0,0,e,n),requestAnimationFrame(c)}c()}function B(){return`
    <div class="modal-overlay" id="briefModalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-content-card">
        <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">×</button>
        
        <div class="pill-badge" style="margin-bottom: 1rem;">
          <span>Zero-Obligation Growth Diagnostic</span>
        </div>

        <h3 id="modalTitle" style="font-size: 1.65rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
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
            <select id="inputSector" class="calc-type-select" style="width: 100%;">
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
            <select id="inputGrowthGoal" class="calc-type-select" style="width: 100%;">
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
          <h4 style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Audit Request Confirmed!</h4>
          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">
            Our solutions engineering team will prepare your custom conversational prototype and contact you within 15 minutes.
          </p>
        </div>
      </div>
    </div>
  `}function T(){const a=document.getElementById("briefModalOverlay"),t=document.getElementById("modalCloseBtn"),i=document.getElementById("briefModalForm"),e=document.getElementById("modalSuccessState"),n=()=>{a==null||a.classList.add("open"),document.body.style.overflow="hidden"},s=()=>{a==null||a.classList.remove("open"),document.body.style.overflow=""};document.addEventListener("click",o=>{const c=o.target;c!=null&&c.closest(".trigger-brief-modal")&&(o.preventDefault(),n())}),t==null||t.addEventListener("click",s),a==null||a.addEventListener("click",o=>{o.target===a&&s()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&(a!=null&&a.classList.contains("open"))&&s()}),i==null||i.addEventListener("submit",o=>{o.preventDefault(),i&&e&&(i.style.display="none",e.style.display="block")})}function q(){return`
    <div class="whatsapp-float-widget" id="whatsappFloatWidget">
      <a href="https://wa.me/2347011961582?text=Hello%20Vuvuzela%20DMF%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services"
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
  `}const C="vuvuzela_theme";function E(){const a=localStorage.getItem(C);return a==="dark"||a==="light"?a:"light"}function S(a){const t=a==="dark"?"dark":"light";return document.documentElement.setAttribute("data-theme",t),localStorage.setItem(C,t),A(t),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:t}})),t}function I(){const t=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";return S(t)}function A(a){const t=a==="dark";document.querySelectorAll(".theme-toggle-btn").forEach(e=>{e.setAttribute("aria-label",t?"Switch to Light Theme":"Switch to Dark Theme"),e.setAttribute("title",t?"Switch to Light Theme":"Switch to Dark Theme"),e.setAttribute("aria-pressed",t?"true":"false");const n=e.querySelector(".theme-icon-sun"),s=e.querySelector(".theme-icon-moon"),o=e.querySelector(".theme-toggle-label");n&&s&&(t?(n.style.display="block",s.style.display="none"):(n.style.display="none",s.style.display="block")),o&&(o.textContent=t?"Light Mode":"Dark Mode")})}function L(){const a=E();S(a),document.addEventListener("click",t=>{t.target.closest(".theme-toggle-btn")&&(t.preventDefault(),t.stopPropagation(),I())})}function P(){return`
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
          <a href="#services" class="nav-link-item">Services</a>
          <a href="#problem-solution" class="nav-link-item">Our Engine</a>
          <a href="#industries" class="nav-link-item">Industries</a>
          <a href="#case-studies" class="nav-link-item">Case Studies</a>
          <a href="#roi-calculator" class="nav-link-item">Growth ROI</a>
          <a href="#faq" class="nav-link-item">FAQ</a>
        </div>

        <!-- Desktop Actions: Theme Toggle + Free Growth Audit -->
        <div class="nav-actions-desktop">
          <!-- Theme Switch Button -->
          <button type="button" class="theme-toggle-btn nav-theme-toggle" aria-label="Toggle light/dark theme" title="Toggle theme">
            <svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <button type="button" class="nav-cta-btn trigger-brief-modal" aria-label="Claim Free Growth Audit">
            <span>Free Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Nav Actions (Theme Switch + Hamburger Button) -->
        <div class="nav-mobile-actions">
          <button type="button" class="theme-toggle-btn mobile-quick-theme-toggle" aria-label="Toggle light/dark theme" title="Toggle theme">
            <svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
            <svg class="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    <div class="mobile-nav-menu" id="mobileNavMenu" role="dialog" aria-modal="true">
      <a href="#services" class="mobile-nav-item">Services</a>
      <a href="#problem-solution" class="mobile-nav-item">Our Engine</a>
      <a href="#industries" class="mobile-nav-item">Industries</a>
      <a href="#case-studies" class="mobile-nav-item">Case Studies</a>
      <a href="#roi-calculator" class="mobile-nav-item">Growth ROI</a>
      <a href="#faq" class="mobile-nav-item">FAQ</a>

      <div class="mobile-theme-row">
        <span class="mobile-theme-label">Theme Mode</span>
        <button type="button" class="theme-toggle-btn mobile-menu-theme-btn" aria-label="Toggle theme">
          <svg class="theme-icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg class="theme-icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span class="theme-toggle-label">Dark Mode</span>
        </button>
      </div>

      <button type="button" class="mobile-nav-cta trigger-brief-modal">
        <span>Free Growth Audit</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `}function R(){const a=document.getElementById("glassNav"),t=document.getElementById("mobileNavToggle"),i=document.getElementById("mobileNavMenu"),e=document.getElementById("mobileNavBackdrop");if(!a)return;const n=document.documentElement.getAttribute("data-theme")||"light";A(n);let s=window.scrollY;window.addEventListener("scroll",()=>{const u=window.scrollY;u>60?u>s&&u-s>6?(a.classList.add("navbar-hidden"),a.classList.remove("navbar-visible")):s-u>6&&(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")):(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")),s=u},{passive:!0});const o=()=>{i==null||i.classList.add("open"),e==null||e.classList.add("open"),document.body.style.overflow="hidden"},c=()=>{i==null||i.classList.remove("open"),e==null||e.classList.remove("open"),document.body.style.overflow=""};t==null||t.addEventListener("click",()=>{i!=null&&i.classList.contains("open")?c():o()}),e==null||e.addEventListener("click",c),i==null||i.querySelectorAll("a, .mobile-nav-cta").forEach(u=>{u.addEventListener("click",c)})}function O(){return`
    <section class="hero-section" id="hero">
      <div class="hero-inner">
        <!-- Main Headline with Rotating Word Badge -->
        <h1 class="hero-headline">
          <span>Elevate your</span>
          <br />
          <div class="hero-headline-subrow">
            <span>Business</span>
            <span class="rotating-word-pill" id="rotatingWordPill">Revenue</span>
          </div>
        </h1>

        <!-- Subheading -->
        <p class="hero-lead">
          Vuvuzela DMF is an elite digital marketing agency engineering predictable revenue pipelines for ambitious brands. We combine high-converting web design, precision paid acquisition (Meta & Google), technical SEO, and 24/7 smart lead automation—fully managed for you.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Growth Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <a href="#services" class="btn-pill-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
            <span>Explore Services</span>
          </a>
        </div>

        <!-- Social Proof / Infinite Marquee -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies, ambitious brands & industry leaders</p>
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
  `}function D(){const a=document.getElementById("rotatingWordPill");if(!a)return;const t=["Revenue","ROAS","Pipeline","Acquisition","Conversion","Growth"];let i=0;setInterval(()=>{a.style.opacity="0",a.style.transform="translateY(-12px) scale(0.95)",setTimeout(()=>{i=(i+1)%t.length,a.textContent=t[i],a.style.transform="translateY(12px) scale(0.95)",requestAnimationFrame(()=>{a.style.opacity="1",a.style.transform="translateY(0) scale(1)"})},250)},2200)}function W(){return`
    <section class="section-pad" id="problem-solution">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>The Marketing Reality Check</span>
          </div>
          <h2 class="section-title">
            Stop Burning Ad Spend on <span style="color: var(--accent-red);">Leaky Funnels</span>
          </h2>
          <p class="section-subtitle">
            Most agencies sell vanity clicks while businesses bleed cash on low ROAS, slow-loading pages, and uncontacted leads. Here is how Vuvuzela DMF engineers predictable, profitable customer acquisition.
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
              <span>The Broken Agency Model</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">68% Wasted</div>
              <div class="comp-stat-desc">
                Average ad spend leakage caused by unqualified traffic, slow landing pages, and sluggish lead follow-up.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Expensive Meta & Google campaigns optimized for vanity clicks with zero closed-revenue accountability</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Outdated, slow-loading websites that lose 80%+ of visitors before they ever reach an inquiry form</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Inbound leads wait hours or days for a reply, bouncing straight to competitors who respond first</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <span>Disjointed freelancers and agencies pointing fingers with no unified ownership of your pipeline</span>
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
              <span>The Vuvuzela Growth Engine</span>
            </div>

            <div class="comp-stat-banner">
              <div class="comp-stat-number">4.2x Avg ROAS</div>
              <div class="comp-stat-desc">
                Full-funnel marketing architecture unifying high-converting web engineering, targeted media, and instant automation.
              </div>
            </div>

            <ul class="comp-list">
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Precision paid acquisition on Meta & Google focused strictly on high-intent buyer segments</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Bespoke landing pages engineered with modern conversion rate optimization (CRO) principles</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Instant speed-to-lead automation qualifying and booking prospects in under 60 seconds on WhatsApp & CRM</span>
              </li>
              <li class="comp-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Transparent live dashboards tracking cost per lead, qualified pipeline value, and return on investment</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 3 Stat Metrics -->
        <div class="stats-triad-grid">
          <div class="stat-triad-card">
            <div class="stat-triad-num">4.2x</div>
            <div class="stat-triad-label">Average return on advertising spend (ROAS)</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">&lt; 60s</div>
            <div class="stat-triad-label">Instant lead response time on WhatsApp & web</div>
          </div>
          <div class="stat-triad-card">
            <div class="stat-triad-num">+185%</div>
            <div class="stat-triad-label">Average 90-day qualified customer pipeline growth</div>
          </div>
        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner">
          <h3>Uncover Your Hidden Revenue Opportunities</h3>
          <p>
            Get a tailored digital marketing and conversion audit to discover exactly where your ad spend is leaking and how to scale predictable revenue.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Growth Audit</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `}function F(){return`
    <section class="light-features-section" id="services">
      <span id="features" style="position: absolute; top: -100px;"></span>
      <div class="light-dot-grid"></div>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>What We Deliver</span>
          </div>
          <h2 class="section-title">
            Full-Service Digital Marketing Engineered for Revenue
          </h2>
          <p class="section-subtitle">
            An integrated growth engine unifying high-ROI paid media, custom web development, technical SEO, and automated lead capture pipelines.
          </p>
        </div>

        <!-- 6 Interactive Feature Cards -->
        <div class="features-interactive-grid">
          <!-- Card 1: Performance Paid Advertising -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#dbeafe; color:#1e40af; border-color:#93c5fd;">High Intent: +42%</span>
                <span class="chip-tag">Meta Ads (FB/IG)</span>
                <span class="chip-tag" style="background:#fef3c7; color:#92400e; border-color:#fcd34d;">Google PMax</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag">Omnichannel Retargeting</span>
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac; font-weight: 800;">Avg ROAS: 4.2x</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Performance Paid Advertising</h3>
            <p class="feature-tile-desc">
              Data-driven ad campaigns across Meta, Google Search, YouTube, and TikTok engineered strictly for high return on ad spend (ROAS) and scalable customer acquisition.
            </p>
          </div>

          <!-- Card 2: High-Converting Web Development -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: #1e293b;">
                <span>Conversion Rate Lift</span>
                <span style="color: #10b981;">+64.2%</span>
              </div>
              <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="width: 82%; height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); border-radius: 4px;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 4px;">
                <span>Speed: 0.6s (Lighthouse 99)</span>
                <span>CRO Architecture</span>
              </div>
            </div>
            <h3 class="feature-tile-title">High-Converting Web Engineering</h3>
            <p class="feature-tile-desc">
              Bespoke websites and sales funnels crafted with elite visual design, psychological copywriting, and sub-second load speeds that turn cold visitors into paying buyers.
            </p>
          </div>

          <!-- Card 3: 24/7 Smart Speed-to-Lead Automation -->
          <div class="feature-tile">
            <div class="feature-tile-preview" id="featureChatPreview">
              <div style="position: absolute; top: 10px; right: 12px; display: flex; align-items: center; gap: 4px;">
                <span style="font-size: 0.72rem; color: #10b981; font-weight: 700;">&lt; 60s RESPONSE</span>
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
            <h3 class="feature-tile-title">Smart Speed-to-Lead Automation</h3>
            <p class="feature-tile-desc">
              Never let paid ad leads slip away. Our automated conversational workflows engage inbound inquiries within seconds across your website and WhatsApp, qualifying buyers 24/7.
            </p>
          </div>

          <!-- Card 4: Automated Pipeline & Calendar Booking -->
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
            <h3 class="feature-tile-title">Automated Pipeline & Booking</h3>
            <p class="feature-tile-desc">
              Frictionless booking funnels synchronize with team calendars, eliminate back-and-forth emails, and send automated SMS and WhatsApp confirmation reminders.
            </p>
          </div>

          <!-- Card 5: Technical & Local SEO Dominance -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: space-evenly;">
              <div class="chips-row">
                <span class="chip-tag" style="background:#e0e7ff; color:#3730a3; border-color:#c7d2fe; font-weight:700;">Google Page 1</span>
                <span class="chip-tag">Local Maps 3-Pack</span>
              </div>
              <div class="chips-row">
                <span class="chip-tag" style="background:#dcfce7; color:#166534; border-color:#86efac;">Organic Clicks: +210%</span>
                <span class="chip-tag">Technical Audit: 99/100</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Technical SEO & Search Dominance</h3>
            <p class="feature-tile-desc">
              Capture compounding organic buyer demand. We engineer technical SEO architectures, authoritative content strategies, and local search dominance that rank you at the top of Google.
            </p>
          </div>

          <!-- Card 6: Multi-Platform CRM & Revenue Attribution -->
          <div class="feature-tile">
            <div class="feature-tile-preview" style="justify-content: center;">
              <div class="chips-row" style="gap: 0.6rem;">
                <span class="chip-tag" style="font-weight: 700;">WhatsApp API</span>
                <span class="chip-tag" style="font-weight: 700;">HubSpot</span>
                <span class="chip-tag" style="font-weight: 700;">Salesforce</span>
                <span class="chip-tag" style="font-weight: 700;">Meta Pixel</span>
                <span class="chip-tag" style="font-weight: 700;">Google Ads</span>
                <span class="chip-tag" style="font-weight: 700;">Zapier</span>
              </div>
            </div>
            <h3 class="feature-tile-title">Omnichannel CRM & Attribution</h3>
            <p class="feature-tile-desc">
              Full transparency over every marketing dollar spent. Seamlessly plugs into your sales stack and CRM with real-time dashboards tracking exact acquisition cost and revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  `}function H(){const a=document.getElementById("chatSimBubbleBot"),t=document.getElementById("chatSimBubbleUser"),i=document.getElementById("chatSimTyping");if(a&&t&&i){const s=[{bot:"Good evening! How may I assist you?",user:"I'd like to check pricing and availability"},{bot:"We have 3 slots open for this Saturday!",user:"Can I book the 11:00 AM slot?"},{bot:"Confirmed! A calendar invite has been sent to your email.",user:"Thank you, that was lightning fast!"}];let o=0;setInterval(()=>{i.style.display="inline-flex",setTimeout(()=>{i.style.display="none",o=(o+1)%s.length,a.textContent=s[o].bot,t.textContent=s[o].user},900)},4500)}const e=document.getElementById("interactiveCalGrid"),n=document.getElementById("calStatusMessage");e&&n&&e.querySelectorAll(".cal-day").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll(".cal-day").forEach(c=>c.classList.remove("active-day")),s.classList.add("active-day");const o=s.getAttribute("data-day")||s.textContent;n.innerHTML=`
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Slot confirmed for the ${o}th at 2:00 PM</span>
        `})})}const x={ecommerce:{badge:"E-Commerce & High-Growth DTC",title:"Scale E-Commerce Revenue & Blended ROAS",desc:"High-ROI Meta, TikTok, and Google Performance Max campaigns paired with conversion-rate-optimized product pages, abandoned cart WhatsApp recovery, and high-LTV email retention flows.",quote:'"Vuvuzela scaled our DTC brand from $35k to $140k/month in 90 days. Their ad creative testing and checkout CRO doubled our blended return on ad spend to 4.6x."',author:"— Julian Vance, E-Commerce Brand Founder",agentName:"Chloe — VIP Concierge AI",agentPhone:"Store Support & VIP Concierge Active",prompts:["Best Sellers","Discount Code","Track My Order","Bundle Offers"],initialMessages:[{sender:"customer",text:"Hey, I saw your Instagram ad for the Winter Collection. Do you have a bundle discount?"},{sender:"ai",text:"Hey there! Yes, our 3-piece Winter Bundle is currently 25% off with free express shipping. Would you like the direct checkout link?"},{sender:"customer",text:"Yes please, and does it include a 30-day return guarantee?"},{sender:"ai",text:"100%! We provide 30-day no-questions-asked free exchanges and returns. Here is your VIP checkout link: [Claim Bundle Discount]."}],responses:{"Best Sellers":"Our top-ranked item this week is the Apex All-Weather Parka with over 450 verified 5-star customer reviews!","Discount Code":"Use promo code VUVUZELA15 at checkout to receive 15% off your first order today.","Track My Order":"Please share your 6-digit order number or the email address used during purchase and I will fetch live courier tracking.","Bundle Offers":"Our Ultimate Essentials Bundle saves you 30% versus purchasing individual items and includes priority dispatch."}},b2b:{badge:"B2B & Professional Services",title:"Predictable Pipeline for High-Ticket B2B & Consultancies",desc:"Target corporate decision-makers with precision Google Search & LinkedIn funnels, authoritative case study landing pages, and automated qualification that delivers calendar-ready sales consultations.",quote:'"We used to rely on sporadic referrals. Vuvuzela built a predictable inbound engine that adds 15 to 20 qualified corporate strategy consultations to our calendar every month."',author:"— Marco Rossi, Managing Partner",agentName:"Marcus — B2B Strategy Intake",agentPhone:"Corporate Consulting Pipeline Active",prompts:["Book Consultation","Service Retainers","Case Studies","Corporate Audit"],initialMessages:[{sender:"customer",text:"We are looking to overhaul our digital acquisition and need to know your agency retainer tiers."},{sender:"ai",text:"Welcome! Our dedicated growth partnerships range from €3,500 to €8,500/month depending on ad spend velocity and engineering scope."},{sender:"customer",text:"Can we schedule a 20-minute strategic discovery call this week?"},{sender:"ai",text:"Certainly. I have Wednesday at 2:00 PM or Thursday at 10:30 AM open with our Growth Director. Which slot works best for your team?"}],responses:{"Book Consultation":"I have reserved a 20-minute discovery session for your team. A calendar invite with Google Meet coordinates is on its way.","Service Retainers":"Our retainers cover full-funnel management: Paid Ads (Meta/Google), CRO web engineering, creative testing, and 24/7 lead automation.","Case Studies":"We recently scaled an e-commerce brand to 4.6x ROAS and a B2B firm to €180k monthly recurring revenue. Would you like our breakdown PDF?","Corporate Audit":"Our free growth audit evaluates your current ad accounts, tracking architecture, and conversion drop-offs with an actionable 90-day roadmap."}},clinics:{badge:"Private Clinics & Healthcare",title:"High-Value Patient Inbound & Local Dominance",desc:"Capture high-ticket private patient inquiries with local Google search dominance, credible medical landing pages, and 24/7 patient intake triage across web and WhatsApp.",quote:'"Patients booking high-ticket cosmetic dental treatments jumped 80%. Their local Google ad campaigns and rapid WhatsApp triage completely filled our treatment rooms."',author:"— Dr. Sarah O'Connor, Clinic Director",agentName:"Aria — Clinical Intake Concierge",agentPhone:"Patient Help Line Active",prompts:["Emergency Slot","Dental Implants Info","Insurance Check","Teeth Whitening Cost"],initialMessages:[{sender:"customer",text:"I saw your clinic on Google Search. Do you have an emergency appointment open tomorrow morning?"},{sender:"ai",text:"Hello! Yes, we hold emergency triage slots every morning at 8:30 AM and 9:15 AM. Are you experiencing severe pain?"},{sender:"customer",text:"Moderate pain from a cracked molar. 8:30 AM would be a lifesaver."},{sender:"ai",text:"I have reserved the 8:30 AM emergency slot for you with Dr. O'Connor. Our front desk has sent an SMS confirmation with parking details."}],responses:{"Emergency Slot":"We have emergency walk-in availability reserved every morning. I can book you for 8:30 AM right now.","Dental Implants Info":"Our premium dental implant consultations include full 3D CBCT scans and treatment financing options from €89/month.","Insurance Check":"We accept VHI, Laya, Irish Life Health, and PRSI dental benefit claims directly at our front desk.","Teeth Whitening Cost":"Our Philips Zoom professional whitening package is €295, including take-home maintenance trays."}},realestate:{badge:"Real Estate & Luxury Property",title:"High-Ticket Investor & Buyer Acquisition",desc:"Precision Meta and Google Search campaigns, bespoke single-development landing pages, and 24/7 WhatsApp investor triage that qualifies budgets and schedules private viewings.",quote:'"Vuvuzela generated over €4.2M in qualified buyer pipeline for our luxury residential developments within 60 days of ad launch."',author:"— James Wilson, Principal Broker",agentName:"Liam — Luxury Property Concierge",agentPhone:"Property Acquisition Line Active",prompts:["Penthouse Listings","Schedule Viewing","Investment Returns","Project Brochure"],initialMessages:[{sender:"customer",text:"Hi, I saw your ad for the Waterfront Residences. Are there 3-bedroom penthouses available?"},{sender:"ai",text:"Good day! Yes, we have two 3-bedroom corner penthouses remaining with panoramic ocean views and private rooftop terraces."},{sender:"customer",text:"Can I schedule a private walkthrough this Friday?"},{sender:"ai",text:"Certainly! I have 11:30 AM or 3:00 PM open this Friday. Would 11:30 AM suit your schedule? I will also dispatch the architectural brochure to your WhatsApp."}],responses:{"Penthouse Listings":"We have 2 corner penthouses starting at €1.45M with bespoke Italian kitchens, smart automation, and private underground parking.","Schedule Viewing":"You're scheduled for Friday at 11:30 AM! Our development director will welcome you at the private presentation lounge.","Investment Returns":"Projected rental yields on this development sit between 7.2% and 8.4% annually, with full turnkey tenancy management provided.","Project Brochure":"The high-resolution architectural plans and specification brochure have been sent to your contact number."}}};function G(){const t=x["ecommerce"];return`
    <section class="section-pad" id="industries">
      <span id="ai-team" style="position: absolute; top: -100px;"></span>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            
            <span>Specialized Growth Playbooks</span>
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
              ${t.badge}
            </div>

            <h3 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
              This is how your marketing turns traffic into paying clients.
            </h3>

            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
              While competing agencies stop at generating empty clicks, Vuvuzela DMF captures every high-intent lead in real time, pre-qualifying buying intent and booking appointments straight into your sales pipeline.
            </p>

            <div class="ind-quote-card" id="indQuoteBox">
              <p id="indQuoteText">${t.quote}</p>
              <div class="ind-quote-author" id="indQuoteAuthor">${t.author}</div>
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
                  <div class="agent-name" id="chatAgentName">${t.agentName}</div>
                  <div class="agent-status-label">
                    <span id="chatAgentPhone">${t.agentPhone}</span>
                  </div>
                </div>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">24/7 LIVE</span>
            </div>

            <!-- Messages Window -->
            <div class="chat-messages-scroll" id="chatMessagesScroll">
              ${t.initialMessages.map(i=>`
                <div class="chat-msg ${i.sender==="customer"?"customer-msg":"ai-msg"}">
                  ${i.text}
                </div>
              `).join("")}
            </div>

            <!-- Quick Action Prompts Bar -->
            <div class="chat-prompts-bar" id="chatPromptsBar">
              ${t.prompts.map(i=>`
                <button type="button" class="chat-prompt-pill" data-prompt="${i}">${i}</button>
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
  `}function z(){let a="ecommerce";const t=document.querySelectorAll(".ind-tab-btn"),i=document.getElementById("indSectionTitle"),e=document.getElementById("indSectionDesc"),n=document.getElementById("indBadgeText"),s=document.getElementById("indQuoteText"),o=document.getElementById("indQuoteAuthor"),c=document.getElementById("chatAgentName"),u=document.getElementById("chatAgentPhone"),p=document.getElementById("chatMessagesScroll"),y=document.getElementById("chatPromptsBar"),m=document.getElementById("chatDemoForm"),d=document.getElementById("chatDemoInput");if(!t.length||!p)return;function h(l){const r=x[l];r&&(a=l,i&&(i.textContent=r.title),e&&(e.textContent=r.desc),n&&(n.textContent=r.badge),s&&(s.textContent=r.quote),o&&(o.textContent=r.author),c&&(c.textContent=r.agentName),u&&(u.textContent=r.agentPhone),p.innerHTML=r.initialMessages.map(v=>`
      <div class="chat-msg ${v.sender==="customer"?"customer-msg":"ai-msg"}">
        ${v.text}
      </div>
    `).join(""),p.scrollTop=p.scrollHeight,y&&(y.innerHTML=r.prompts.map(v=>`
        <button type="button" class="chat-prompt-pill" data-prompt="${v}">${v}</button>
      `).join(""),b()))}function b(){y==null||y.querySelectorAll(".chat-prompt-pill").forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-prompt");w(r)})})}function w(l){if(!l||!l.trim())return;const r=document.createElement("div");r.className="chat-msg customer-msg",r.textContent=l,p.appendChild(r),p.scrollTop=p.scrollHeight;const v=x[a],k=v.responses[l]||`Thank you for asking! Our specialized ${v.badge} growth team will be delighted to audit your marketing.`;setTimeout(()=>{const f=document.createElement("div");f.className="chat-msg ai-msg",f.textContent=k,p.appendChild(f),p.scrollTop=p.scrollHeight},450)}t.forEach(l=>{l.addEventListener("click",()=>{t.forEach(v=>v.classList.remove("active")),l.classList.add("active");const r=l.getAttribute("data-industry");h(r)})}),m==null||m.addEventListener("submit",l=>{if(l.preventDefault(),!d)return;const r=d.value.trim();r&&(w(r),d.value="")}),b()}const g=[{quote:"Vuvuzela restructured our digital ad spend and connected our showroom WhatsApp. In month two, we generated 64 verified test drives at an acquisition cost 42% lower than our historical baseline.",author:"Mike Rodriguez",role:"Principal, Apex Automotive Group",metric:"4.2x ROAS | 64 Test Drives"},{quote:"They completely re-engineered our Meta & TikTok ad creative and rebuilt our checkout funnels. Our monthly revenue surged from $45k to over $180k within 90 days.",author:"Sarah Chen",role:"Founder & CEO, Lumina DTC Apparel",metric:"+300% Revenue Lift"},{quote:"With Vuvuzela DMF, our conversion rates jumped by 85% and inbound LinkedIn/Google Search ad inquiries became our #1 corporate deal generator. The ROI was undeniable within 30 days.",author:"Michael Torres",role:"Managing Director, Vantage B2B Advisory",metric:"+85% Conversion Rate"},{quote:"Their technical SEO and local Google ad strategy ranked our clinics #1 in our region. We went from struggling for private implant patients to a 3-week waiting list.",author:"Dr. Jennifer Walsh",role:"Clinical Director, City Dental Group",metric:"+140% Private Patients"},{quote:"What sets Vuvuzela apart is their speed-to-lead automation. Every dollar we put into paid ads is captured in seconds on WhatsApp before the lead can cross-shop.",author:"David Kim",role:"VP of Growth, Horizon Retail",metric:"4.8x Blended ROAS"},{quote:"They engineered a high-intent Meta ad funnel and custom property landing page that generated two closed luxury home listings totaling €2.4M in our first quarter.",author:"James Wilson",role:"Principal Broker, Wilson & Co Real Estate",metric:"€2.4M Closed Pipeline"}];function V(){const a=[g[0],g[1],g[2],g[0],g[1]],t=[g[3],g[4],g[5],g[3],g[4]],i=[g[2],g[5],g[1],g[2],g[5]],e=n=>`
    <div class="test-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.12); padding: 0.2rem 0.6rem; border-radius: 9999px; border: 1px solid rgba(16, 185, 129, 0.25);">
          ${n.metric}
        </span>
        <span style="color: #fbbf24; font-size: 0.85rem;">★★★★★</span>
      </div>
      <p class="test-body">"${n.quote}"</p>
      <div class="test-author-row">
        <div class="test-avatar-placeholder">
          ${n.author.charAt(0)}
        </div>
        <div>
          <div class="test-name">${n.author}</div>
          <div class="test-role">${n.role}</div>
        </div>
      </div>
    </div>
  `;return`
    <section class="testimonials-grid-section" id="case-studies">
      <span id="testimonials" style="position: absolute; top: -100px;"></span>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            
            <span>Client Case Studies & ROAS Proof</span>
          </div>
          <h2 class="section-title">
            The Brands We Scale to Market Dominance
          </h2>
          <p class="section-subtitle">
            Real revenue outcomes generated by Vuvuzela DMF's digital marketing, performance advertising, and conversion engineering.
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
            ${i.map(e).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function $(){return`
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
  `}function N(){const a=document.getElementById("businessSectorSelect"),t=document.getElementById("sliderVisitors"),i=document.getElementById("sliderConversion"),e=document.getElementById("sliderOrder"),n=document.getElementById("valVisitors"),s=document.getElementById("valConversion"),o=document.getElementById("valOrder"),c=document.getElementById("kpiLeads"),u=document.getElementById("kpiMonthlyRev"),p=document.getElementById("kpiLift"),y=document.getElementById("kpiAnnualRev");if(!t||!i||!e)return;const m={ecommerce:{order:85,min:25,max:1e3},b2b:{order:1500,min:300,max:5e3},clinics:{order:250,min:50,max:2e3},realestate:{order:3500,min:500,max:1e4},saas:{order:150,min:30,max:2500}};function d(){const h=parseInt(t.value,10),b=parseFloat(i.value),w=parseInt(e.value,10);n.textContent=Number(h).toLocaleString(),s.textContent=`${b.toFixed(1)}%`,o.textContent=`€${Number(w).toLocaleString()}`;const l=h*(b/100),r=35,v=Math.round(l*(r/100)),k=Math.round(v*w),f=k*12;c.textContent=`+${v.toLocaleString()}`,u.textContent=`+€${k.toLocaleString()}`,p.textContent=`+${r.toFixed(1)}%`,y.textContent=`€${f.toLocaleString()}`}a==null||a.addEventListener("change",()=>{const h=m[a.value];h&&(e.min=h.min,e.max=h.max,e.value=h.order,d())}),t.addEventListener("input",d),i.addEventListener("input",d),e.addEventListener("input",d),d()}const j=[{id:"faq-1",question:"What services does Vuvuzela DMF offer?",answer:"Vuvuzela DMF delivers end-to-end performance digital marketing: paid advertising across Meta (Facebook & Instagram), Google Search, YouTube, and TikTok; bespoke high-converting web engineering & conversion rate optimization (CRO); technical and local SEO dominance; 24/7 automated speed-to-lead triage (WhatsApp & CRM integrations); and multi-touch revenue attribution."},{id:"faq-2",question:"How quickly do we see measurable results and pipeline growth?",answer:"Paid advertising campaigns on Meta and Google typically start generating qualified leads within the first 7 to 14 days of launch. Bespoke web engineering and CRO funnels are launched within 2 to 4 weeks, while organic technical SEO compounding begins demonstrating strong ranking acceleration within 60 to 90 days."},{id:"faq-3",question:"How does Vuvuzela DMF guarantee return on ad spend (ROAS)?",answer:"Unlike traditional agencies that report on vanity clicks and impressions, our media campaigns are held strictly accountable to closed-revenue and qualified inquiry KPIs. We implement rigorous conversion API tracking, real-time lead validation, and continuous high-velocity creative testing, maintaining an average blended client ROAS of 4.2x."},{id:"faq-4",question:"What platforms and web development stacks do you build on?",answer:"We engineer custom, blazing-fast web platforms using modern web standards: high-performance JavaScript (Vite, Next.js), Shopify, WordPress/WooCommerce, Webflow, and custom headful/headless web architectures. Every build is rigorously engineered for 99+ Google Lighthouse scores, sub-second load times, and psychological CRO conversion paths."},{id:"faq-5",question:"Does Vuvuzela DMF provide ongoing support after launch?",answer:"Yes. We operate long-term growth partnerships with structured retainers covering proactive conversion optimization, weekly performance dashboards, new ad creative iteration, platform security updates, technical monitoring, and priority direct WhatsApp support."},{id:"faq-6",question:"How much does a partnership with Vuvuzela cost?",answer:"Our dedicated growth retainers range between €3,500 and €8,500/month depending on ad spend velocity, market competition, and development requirements. We provide detailed, fixed-price proposals after an initial discovery session so you have absolute transparency before any campaign begins."}];function Y(){const a=`
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,t=`
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;return`
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
          ${j.map((i,e)=>{const n=e===0;return`
              <div class="faq-item ${n?"open":""}" data-faq-id="${i.id}">
                <button type="button" class="faq-question" aria-expanded="${n?"true":"false"}" aria-controls="${i.id}-answer" id="${i.id}-question">
                  <span class="faq-question-text">${i.question}</span>
                  <div class="faq-toggle" aria-hidden="true">
                    ${n?t:a}
                  </div>
                </button>
                <div class="faq-answer" id="${i.id}-answer" role="region" aria-labelledby="${i.id}-question" style="${n?"max-height: 400px;":"max-height: 0px;"}">
                  <div class="faq-answer-inner">
                    <p>${i.answer}</p>
                  </div>
                </div>
              </div>
            `}).join("")}
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
  `}function U(){const a=document.getElementById("faqAccordion");if(!a)return;const t=`
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,i=`
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,e=a.querySelectorAll(".faq-item"),n=a.querySelector(".faq-item.open");if(n){const s=n.querySelector(".faq-answer");s&&(s.style.maxHeight=s.scrollHeight+30+"px")}e.forEach(s=>{const o=s.querySelector(".faq-question"),c=s.querySelector(".faq-answer"),u=s.querySelector(".faq-toggle");o==null||o.addEventListener("click",p=>{if(p.preventDefault(),s.classList.contains("open")){s.classList.remove("open"),o.setAttribute("aria-expanded","false"),c.style.maxHeight="0px",u.innerHTML=t;return}e.forEach(m=>{if(m!==s&&m.classList.contains("open")){m.classList.remove("open");const d=m.querySelector(".faq-question"),h=m.querySelector(".faq-answer"),b=m.querySelector(".faq-toggle");d==null||d.setAttribute("aria-expanded","false"),h&&(h.style.maxHeight="0px"),b&&(b.innerHTML=t)}}),s.classList.add("open"),o.setAttribute("aria-expanded","true"),c.style.maxHeight=c.scrollHeight+30+"px",u.innerHTML=i})})}function Q(){return`
    <section class="cta-banner-section" id="contact">
      <div class="container">
        <div class="cta-glow-card">
          <h2 class="cta-headline">
            Ready to scale your business with a <em>predictable revenue engine</em>?
          </h2>
          <p class="cta-subline">
            Partner with Vuvuzela DMF. Let our full-service digital marketing agency engineer your high-converting funnels, scale your paid acquisition, and automate your lead pipeline.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; align-items: center; margin-top: 0.5rem;">
            <button type="button" class="btn-pill-primary trigger-brief-modal" style="padding: 1rem 2.5rem; font-size: 1.15rem;">
              <span>Claim Free Growth Audit</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <a href="#services" class="btn-pill-secondary" style="padding: 0.95rem 1.8rem; font-size: 1.05rem;">
              <span>Explore All Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function K(){return`
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
            Full-Service Digital Marketing Agency & Performance Growth Engine. Engineering high-converting funnels, scalable paid acquisition, and automated revenue pipelines for ambitious businesses worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${new Date().getFullYear()} Vuvuzela DMF. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Services -->
          <div class="footer-nav-col">
            <h4>Services</h4>
            <ul class="footer-nav-links">
              <li><a href="#services">Paid Advertising (Meta & Google)</a></li>
              <li><a href="#services">High-Converting Web Dev</a></li>
              <li><a href="#services">Technical & Local SEO</a></li>
              <li><a href="#services">Speed-to-Lead Automation</a></li>
              <li><a href="#services">Conversion Rate Optimization</a></li>
            </ul>
          </div>

          <!-- Column 2: Industries -->
          <div class="footer-nav-col">
            <h4>Industries</h4>
            <ul class="footer-nav-links">
              <li><a href="#industries">Luxury Real Estate</a></li>
              <li><a href="#industries">E-Commerce & DTC</a></li>
              <li><a href="#industries">Private Clinics & Health</a></li>
              <li><a href="#industries">B2B & Professional</a></li>
              <li><a href="#industries">High-Ticket Retail</a></li>
            </ul>
          </div>

          <!-- Column 3: Growth Hub -->
          <div class="footer-nav-col">
            <h4>Growth Hub</h4>
            <ul class="footer-nav-links">
              <li><a href="#case-studies">Client Case Studies</a></li>
              <li><a href="#problem-solution">The Growth Engine</a></li>
              <li><a href="#roi-calculator">Marketing ROI Calculator</a></li>
              <li><a href="#" class="trigger-brief-modal">Claim Free Growth Audit</a></li>
              <li><a href="#services">Our Capabilities</a></li>
            </ul>
          </div>

          <!-- Column 4: Social / Connect -->
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
        <span>VUVUZELA DMF — Digital Marketing Agency & Performance Engine</span>
        <span>Paid Media • Web Engineering • SEO • 24/7 Lead Automation</span>
      </div>
    </footer>
  `}class _{constructor(t="appRoot"){this.rootContainer=document.getElementById(t),this.transitionOverlay=document.getElementById("pageTransitionOverlay"),this.currentPath=this.normalizePath(window.location.pathname)}normalizePath(t){return"/"}init(){document.addEventListener("click",t=>{const i=t.target.closest("a");if(!i)return;const e=i.getAttribute("href");if(!e||e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:")||i.target==="_blank")return;if(e.startsWith("#")){t.preventDefault(),this.scrollToAnchor(e);return}const n=i.getAttribute("data-route")||e,s=this.normalizePath(n);if(s!==this.currentPath)t.preventDefault(),this.navigateTo(s);else if(e.includes("#")){t.preventDefault();const o=e.substring(e.indexOf("#"));this.scrollToAnchor(o)}}),window.addEventListener("popstate",()=>{this.renderRoute("/",!1)}),this.renderRoute("/",!1),window.location.hash&&setTimeout(()=>{this.scrollToAnchor(window.location.hash)},200)}navigateTo(t){this.isNavigating||(this.isNavigating=!0,this.transitionOverlay&&this.transitionOverlay.classList.add("is-active"),setTimeout(()=>{window.history.pushState({},"","/"),this.renderRoute("/",!0),window.scrollTo(0,0),setTimeout(()=>{this.transitionOverlay&&this.transitionOverlay.classList.remove("is-active"),this.isNavigating=!1},100)},220))}renderRoute(t,i){if(!this.rootContainer)return;let e="";e+=P(),document.title="Vuvuzela DMF — Performance Digital Marketing Agency & Web Engineering",e+=O(),e+=W(),e+=F(),e+=G(),e+=V(),e+=$(),e+=Y(),e+=Q(),e+=K(),this.rootContainer.innerHTML=e,R(),D(),H(),z(),N(),U()}scrollToAnchor(t){const i=document.querySelector(t);if(i){const n=i.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:Math.max(0,n-90),behavior:"smooth"})}}}document.addEventListener("DOMContentLoaded",()=>{L(),M("auroraCanvas");const a=document.getElementById("modalMount");a&&(a.innerHTML=B(),T());const t=document.getElementById("whatsappMount");t&&(t.innerHTML=q()),new _("appRoot").init()});
