(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function E(a="auroraCanvas"){const e=document.getElementById(a);if(!e)return;const i=e.getContext("2d");if(!i)return;let t=e.width=window.innerWidth,s=e.height=window.innerHeight;const o=()=>{t=e.width=window.innerWidth,s=e.height=window.innerHeight};window.addEventListener("resize",o,{passive:!0});let r=0;function d(){r+=.003,i.clearRect(0,0,t,s);const c=document.documentElement.getAttribute("data-theme")==="dark";i.fillStyle=c?"#09090b":"#f8fafc",i.fillRect(0,0,t,s);const f=t*.4+Math.sin(r*.7)*(t*.15),b=s*.25+Math.cos(r*.9)*(s*.1),p=Math.max(t,s)*.48,g=i.createRadialGradient(f,b,0,f,b,p);c?(g.addColorStop(0,"rgba(56, 189, 248, 0.16)"),g.addColorStop(.5,"rgba(30, 58, 138, 0.08)"),g.addColorStop(1,"rgba(9, 9, 11, 0)")):(g.addColorStop(0,"rgba(56, 189, 248, 0.12)"),g.addColorStop(.5,"rgba(186, 230, 253, 0.06)"),g.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=g,i.fillRect(0,0,t,s);const v=t*.65+Math.cos(r*.8)*(t*.2),y=s*.35+Math.sin(r*.6)*(s*.12),x=Math.max(t,s)*.52,m=i.createRadialGradient(v,y,0,v,y,x);c?(m.addColorStop(0,"rgba(99, 102, 241, 0.14)"),m.addColorStop(.5,"rgba(15, 23, 42, 0.06)"),m.addColorStop(1,"rgba(9, 9, 11, 0)")):(m.addColorStop(0,"rgba(129, 140, 248, 0.11)"),m.addColorStop(.5,"rgba(224, 231, 255, 0.05)"),m.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=m,i.fillRect(0,0,t,s);const w=t*.5+Math.sin(r*.5)*(t*.25),u=s*.65+Math.cos(r*.7)*(s*.15),n=Math.max(t,s)*.42,l=i.createRadialGradient(w,u,0,w,u,n);c?(l.addColorStop(0,"rgba(16, 185, 129, 0.08)"),l.addColorStop(.5,"rgba(15, 23, 42, 0.04)"),l.addColorStop(1,"rgba(9, 9, 11, 0)")):(l.addColorStop(0,"rgba(52, 211, 153, 0.08)"),l.addColorStop(.5,"rgba(209, 250, 229, 0.04)"),l.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=l,i.fillRect(0,0,t,s),requestAnimationFrame(d)}d()}function D(){return`
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
            <label for="inputSector">Primary Industry / Sector</label>
            <select id="inputSector" class="calc-type-select" style="width: 100%;">
              <option value="ecommerce" selected>E-Commerce & DTC Brand</option>
              <option value="b2b">B2B & Professional Services</option>
              <option value="politics">Political & Civic Organization (GOTV)</option>
              <option value="executive">Private Individual / Executive PR</option>
              <option value="clinics">Private Healthcare & Clinic</option>
              <option value="realestate">Real Estate & Property</option>
              <option value="saas">SaaS & Technology</option>
              <option value="other">Other Growth Business</option>
            </select>
          </div>

          <div class="form-group">
            <label for="inputGrowthGoal">Primary Growth Objective / Needed Service</label>
            <select id="inputGrowthGoal" class="calc-type-select" style="width: 100%;">
              <option value="full-funnel" selected>Full-Funnel Digital Marketing Transformation</option>
              <option value="paid-media">PPC & Performance Paid Ads (Meta & Google)</option>
              <option value="web-ecom">Websites & E-Commerce with Built-in CTA Funnels</option>
              <option value="mobile-apps">Mobile Application Development (iOS & Android)</option>
              <option value="video-content">Online Video & Lifecycle Content Marketing</option>
              <option value="reputation-pr">Online Reputation Management (ORM) & Digital PR</option>
              <option value="gotv-campaign">Strategic Digital Campaign & GOTV Mobilization</option>
              <option value="brand-identity">Brand Identity & Eye-Catching Logos</option>
              <option value="smm">Social Media Marketing & Brand Awareness</option>
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
  `}function O(){const a=document.getElementById("briefModalOverlay"),e=document.getElementById("modalCloseBtn"),i=document.getElementById("briefModalForm"),t=document.getElementById("modalSuccessState"),s=()=>{a==null||a.classList.add("open"),document.body.style.overflow="hidden"},o=()=>{a==null||a.classList.remove("open"),document.body.style.overflow=""};document.addEventListener("click",r=>{const d=r.target;d!=null&&d.closest(".trigger-brief-modal")&&(r.preventDefault(),s())}),e==null||e.addEventListener("click",o),a==null||a.addEventListener("click",r=>{r.target===a&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(a!=null&&a.classList.contains("open"))&&o()}),i==null||i.addEventListener("submit",r=>{r.preventDefault(),i&&t&&(i.style.display="none",t.style.display="block")})}function q(){return`
    <div class="whatsapp-float-widget" id="whatsappFloatWidget">
      <a href="https://wa.me/2347011961582?text=${encodeURIComponent("Hello Vuvuzela DMF, I would like to speak with a Growth Strategist regarding: [1. New Campaign / 2. Client Support / 3. Free Audit]")}"
         target="_blank"
         rel="noopener noreferrer"
         class="whatsapp-float-link"
         aria-label="Directly contact Vuvuzela DMF on WhatsApp - Hybrid AI Triage and Live Human Strategist">
        <svg class="whatsapp-icon-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.19 0-.41.07-.63.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.56 4.07 3.59.57.25 1.02.39 1.37.5.57.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01z"/>
        </svg>
        <span class="whatsapp-float-text">Chat with Us</span>
        <span class="whatsapp-ping" aria-hidden="true"></span>
      </a>
    </div>
  `}const I="vuvuzela_theme";function G(){const a=localStorage.getItem(I);return a==="dark"||a==="light"?a:"light"}function P(a){const e=a==="dark"?"dark":"light";return document.documentElement.setAttribute("data-theme",e),localStorage.setItem(I,e),L(e),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:e}})),e}function V(){const e=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";return P(e)}function L(a){const e=a==="dark";document.querySelectorAll(".theme-toggle-btn").forEach(t=>{t.setAttribute("aria-label",e?"Switch to Light Theme":"Switch to Dark Theme"),t.setAttribute("title",e?"Switch to Light Theme":"Switch to Dark Theme"),t.setAttribute("aria-pressed",e?"true":"false");const s=t.querySelector(".theme-icon-sun"),o=t.querySelector(".theme-icon-moon"),r=t.querySelector(".theme-toggle-label");s&&o&&(e?(s.style.display="block",o.style.display="none"):(s.style.display="none",o.style.display="block")),r&&(r.textContent=e?"Light Mode":"Dark Mode")})}function H(){const a=G();P(a),document.addEventListener("click",e=>{e.target.closest(".theme-toggle-btn")&&(e.preventDefault(),e.stopPropagation(),V())})}function z(){return`
    <nav class="glass-nav-container navbar-visible" id="glassNav" aria-label="Main Navigation">
      <div class="glass-nav-bar">
        <!-- Brand Logo (Bespoke Geometric Deep-Blue 'V' Mark + Wordmark) -->
        <a href="/" class="nav-logo-link" data-route="/" aria-label="Vuvuzela DMF Home">
          <div class="nav-logo-mark" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navVDeepBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1e1b4b" />
                  <stop offset="45%" stop-color="#1e3a8a" />
                  <stop offset="100%" stop-color="#0f172a" />
                </linearGradient>
                <linearGradient id="navVCobalt" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="60%" stop-color="#2563eb" />
                  <stop offset="100%" stop-color="#1d4ed8" />
                </linearGradient>
                <linearGradient id="navVCyanGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#06b6d4" />
                  <stop offset="100%" stop-color="#38bdf8" />
                </linearGradient>
                <linearGradient id="navVShield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0b1120" />
                  <stop offset="100%" stop-color="#020617" />
                </linearGradient>
              </defs>
              <rect width="48" height="48" rx="13" fill="url(#navVShield)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.2" />
              <circle cx="24" cy="24" r="14" fill="#2563eb" opacity="0.25" />
              <path d="M10 12 L19 12 L24 38 L17.5 38 Z" fill="url(#navVDeepBlue)" />
              <path d="M38 12 L29 12 L24 38 L30.5 38 Z" fill="url(#navVCobalt)" />
              <path d="M19 12 L24 26 L29 12 L24 18 Z" fill="url(#navVCyanGlow)" />
              <circle cx="24" cy="37" r="1.8" fill="#38bdf8" />
            </svg>
          </div>
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
  `}function W(){const a=document.getElementById("glassNav"),e=document.getElementById("mobileNavToggle"),i=document.getElementById("mobileNavMenu"),t=document.getElementById("mobileNavBackdrop");if(!a)return;const s=document.documentElement.getAttribute("data-theme")||"light";L(s);let o=window.scrollY;window.addEventListener("scroll",()=>{const c=window.scrollY;c>60?c>o&&c-o>6?(a.classList.add("navbar-hidden"),a.classList.remove("navbar-visible")):o-c>6&&(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")):(a.classList.remove("navbar-hidden"),a.classList.add("navbar-visible")),o=c},{passive:!0});const r=()=>{i==null||i.classList.add("open"),t==null||t.classList.add("open"),document.body.style.overflow="hidden"},d=()=>{i==null||i.classList.remove("open"),t==null||t.classList.remove("open"),document.body.style.overflow=""};e==null||e.addEventListener("click",()=>{i!=null&&i.classList.contains("open")?d():r()}),t==null||t.addEventListener("click",d),i==null||i.querySelectorAll("a, .mobile-nav-cta").forEach(c=>{c.addEventListener("click",d)})}function F(){return`
    <section class="hero-section" id="hero">
      <div class="hero-inner">
        <!-- Split Hero Grid -->
        <div class="hero-split-grid">
          <!-- Left Column: High-Conversion Copy & CTAs -->
          <div class="hero-copy-col">
            <!-- Main Headline with Rotating Word Badge -->
            <h1 class="hero-headline">
              Accelerate your
              <br />
              <div class="hero-headline-subrow">
                <span>Business</span>
                <span class="rotating-word-pill" id="rotatingWordPill">Revenue</span>
              </div>
            </h1>

            <!-- Subheading -->
            <p class="hero-lead">
              The Internet is here to stay, and smartphones now account for over 80% of retail visits. At <strong>Vuvuzela Digital Marketing Factory Inc.</strong>, we blend bespoke creative direction with data-driven strategy across high-converting web engineering, precision PPC, lifecycle video content, mobile apps, and strategic campaigns to engineer predictable revenue pipelines far beyond expectations.
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
                <span>Explore 9 Services</span>
              </a>
            </div>

            <!-- Social Proof Avatar Stack & Ratings -->
            <div class="hero-trust-proof">
              <div class="hero-avatar-stack">
                <img src="/images/avatar-mike.jpg" alt="Client Babajide Adeleke - PrimeHaven Properties" class="hero-avatar-img" />
                <img src="/images/avatar-sarah.jpg" alt="Client Amina Bello - KariStore DTC" class="hero-avatar-img" />
                <img src="/images/avatar-michael.jpg" alt="Client Dr. Emeka Nnamani - Apex Medicare" class="hero-avatar-img" />
                <img src="/images/avatar-david.jpg" alt="Client Folake Adeyemi - Nexus Advisory" class="hero-avatar-img" />
                <span class="hero-avatar-extra">+50</span>
              </div>
              <div class="hero-trust-text">
                <div class="hero-stars">★★★★★ <span class="hero-rating-num">4.9/5 Rating</span></div>
                <div class="hero-trust-sub">Trusted by 50+ Nigerian &amp; African growth brands • Average 4.4x Blended ROAS</div>
              </div>
            </div>

            <!-- Quick Conversion Checklist -->
            <div class="hero-checklist">
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                7-14 Day Lead Velocity
              </span>
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Verified Naira &amp; USD ROAS
              </span>
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Instant Triage + Human Handoff
              </span>
            </div>
          </div>

          <!-- Right Column: Interactive Marketing Command Center Mockup -->
          <div class="hero-visual-col">
            <div class="hero-visual-container" id="heroVisualContainer">
              <div class="hero-ambient-glow" aria-hidden="true"></div>

              <div class="hero-visual-card" id="heroVisualCard">
                <!-- macOS Chrome Header -->
                <div class="hero-visual-chrome">
                  <div class="hero-chrome-dots">
                    <span class="chrome-dot dot-red"></span>
                    <span class="chrome-dot dot-amber"></span>
                    <span class="chrome-dot dot-emerald"></span>
                  </div>
                  <div class="hero-chrome-title">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    <span>vuvuzela.growth.engine/live-telemetry</span>
                  </div>
                  <div class="hero-chrome-live-tag">
                    <span class="pulse-dot dot-green"></span>
                    <span>Q4 2026 LIVE STREAM</span>
                  </div>
                </div>

                <!-- Main Visual Image Wrap with Real-Time HUD Overlay -->
                <div class="hero-image-wrap">
                  <img
                    src="/images/hero-dashboard.jpg"
                    alt="Vuvuzela Digital Marketing Factory Inc. Growth Command Center"
                    class="hero-dashboard-image"
                    loading="eager"
                  />
                  <!-- Modern Regional Telemetry Overlay Strip -->
                  <div class="hero-telemetry-hud" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.75) 70%, transparent 100%); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px);">
                    <div>
                      <div style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; font-weight: 700;">Active Hubs: Lagos • Abuja • London</div>
                      <div style="font-size: 0.95rem; font-weight: 800; color: #ffffff; font-family: 'JetBrains Mono', monospace;">₦48,650,000 <span style="font-size: 0.75rem; color: #10b981; font-weight: 600;">($31,400) MTD</span></div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; font-weight: 700;">Blended Return</div>
                      <div style="font-size: 0.95rem; font-weight: 800; color: #10b981; font-family: 'JetBrains Mono', monospace;">4.4x Verified ROAS</div>
                    </div>
                  </div>
                  <div class="hero-image-glare"></div>
                </div>

                <!-- Floating Interactive Pill 1: Speed to Lead -->
                <div class="hero-floating-pill pill-speed">
                  <div class="pill-icon-box whatsapp-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Hybrid Speed-to-Lead</span>
                    <span class="pill-stat">&lt;45s AI + Live Human Agent</span>
                  </div>
                </div>

                <!-- Floating Interactive Pill 2: ROAS Multiplier -->
                <div class="hero-floating-pill pill-roas">
                  <div class="pill-icon-box roas-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Average ROAS</span>
                    <span class="pill-stat highlight-green">4.4x (₦ &amp; $ Tracked)</span>
                  </div>
                </div>

                <!-- Floating Interactive Pill 3: Core Web Vitals -->
                <div class="hero-floating-pill pill-vitals">
                  <div class="pill-icon-box vitals-bg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <div class="pill-text-content">
                    <span class="pill-title">Web Performance</span>
                    <span class="pill-stat">99 Lighthouse • 0.35s LCP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof / Infinite Marquee with Authentic Client Brands -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies, ambitious property developers &amp; DTC brands across Nigeria &amp; West Africa</p>
          <div class="trust-marquee-track">
            <!-- First Set -->
            <div class="trust-marquee-item">PrimeHaven Properties</div>
            <div class="trust-marquee-item">KariStore DTC</div>
            <div class="trust-marquee-item">Apex Medicare Clinics</div>
            <div class="trust-marquee-item">Nexus Advisory Partners</div>
            <div class="trust-marquee-item">Cedarcrest Diagnostics</div>
            <div class="trust-marquee-item">PayGrid Commerce</div>
            <div class="trust-marquee-item">UrbanNest Realty Lagos</div>
            <div class="trust-marquee-item">Vanguard Energy &amp; Logistics</div>
            <!-- Duplicated for Infinite Smooth Loop -->
            <div class="trust-marquee-item">PrimeHaven Properties</div>
            <div class="trust-marquee-item">KariStore DTC</div>
            <div class="trust-marquee-item">Apex Medicare Clinics</div>
            <div class="trust-marquee-item">Nexus Advisory Partners</div>
            <div class="trust-marquee-item">Cedarcrest Diagnostics</div>
            <div class="trust-marquee-item">PayGrid Commerce</div>
            <div class="trust-marquee-item">UrbanNest Realty Lagos</div>
            <div class="trust-marquee-item">Vanguard Energy &amp; Logistics</div>
          </div>
      </div>
    </section>
  `}function N(){const a=document.getElementById("rotatingWordPill");if(a){const t=["Revenue","ROAS","Pipeline","Acquisition","Conversion","Growth"];let s=0;setInterval(()=>{a.style.opacity="0",a.style.transform="translateY(-12px) scale(0.95)",setTimeout(()=>{s=(s+1)%t.length,a.textContent=t[s],a.style.transform="translateY(12px) scale(0.95)",requestAnimationFrame(()=>{a.style.opacity="1",a.style.transform="translateY(0) scale(1)"})},250)},2200)}const e=document.getElementById("heroVisualContainer"),i=document.getElementById("heroVisualCard");e&&i&&window.matchMedia("(pointer: fine)").matches&&(e.addEventListener("mousemove",t=>{const s=e.getBoundingClientRect(),o=t.clientX-s.left,r=t.clientY-s.top,d=s.width/2,c=s.height/2,f=(r-c)/c*-6,b=(o-d)/d*6;i.style.transform=`perspective(1000px) rotateX(${f}deg) rotateY(${b}deg) scale3d(1.02, 1.02, 1.02)`}),e.addEventListener("mouseleave",()=>{i.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}))}function $(){return`
    <section class="section-pad" id="problem-solution">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>The Digital Landscape Reality</span>
          </div>
          <h2 class="section-title">
            The Internet is Here to Stay. <span style="color: var(--brand-accent, #6366f1);">Is Your Brand Positioned to Win?</span>
          </h2>
          <p class="section-subtitle">
            Smartphones now account for over <strong>80% of retail web visits</strong>. Consumers catch up on WhatsApp, discover on Instagram, and engage on TikTok. Yet most brands bleed cash on disjointed agencies, low ROAS, slow-loading pages, and uncontacted leads. Here is how Vuvuzela Digital Marketing Factory Inc. bridges the gap with bespoke, data-driven strategy.
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
  `}function j(){return`
    <section class="light-features-section" id="services">
      <span id="features" style="position: absolute; top: -100px;"></span>
      <div class="light-dot-grid"></div>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Specialized Offer Architecture</span>
          </div>
          <h2 class="section-title">
            Where We Win Most: Our 3 Dominant Revenue Engines
          </h2>
          <p class="section-subtitle">
            Ambitious brands don't need disjointed tactical favors. They need a predictable revenue pipeline. We focus relentlessly on three high-impact growth pillars — supported by our complete creative and strategic infrastructure.
          </p>
        </div>

        <!-- 3 Core Hero Revenue Engines (Dominant Pillars) -->
        <div class="features-interactive-grid" style="margin-bottom: 4rem;">

          <!-- Engine 1: PPC & Performance Media -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(99, 102, 241, 0.4); box-shadow: 0 10px 30px rgba(99, 102, 241, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-ppc-ads.jpg" alt="Performance Paid Advertising Engine" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(99, 102, 241, 0.85); color: #fff;">Pillar 01 • Media</span>
                <span class="feature-tile-stat-badge highlight-stat">Avg 4.4x Blended ROAS</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--brand-accent, #6366f1); letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">High-ROI Paid Advertising (Meta &amp; Google)</h3>
              <p class="feature-tile-desc">
                High-intent customer acquisition across Meta Advantage+ (Facebook &amp; Instagram), Google Search, and YouTube. Continuous creative testing, conversion API tracking, and strict accountability to closed-revenue and qualified leads in Naira and USD.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Meta Advantage+</span>
                <span class="chip-tag">Google Search Ads</span>
                <span class="chip-tag">Conversion API</span>
                <span class="chip-tag">High-Intent Funnels</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Scale Paid Media</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Engine 2: High-Converting Websites & E-Commerce CRO -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(16, 185, 129, 0.4); box-shadow: 0 10px 30px rgba(16, 185, 129, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-web-ecommerce.jpg" alt="High-Converting Web & E-Commerce" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(16, 185, 129, 0.85); color: #fff;">Pillar 02 • Web</span>
                <span class="feature-tile-stat-badge">+64.2% Conversion Lift</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: #10b981; letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">Websites &amp; E-Commerce Conversion Engineering</h3>
              <p class="feature-tile-desc">
                Sub-second everyday corporate platforms and Shopify stores engineered with built-in CTA psychological funnels, high Click-Through Rates (CTR), agile Conversion Rate Optimization (CRO), and Google Lighthouse 99+ architecture.
              </p>
              <div class="chips-row">
                <span class="chip-tag">0.6s Page Speed</span>
                <span class="chip-tag">Shopify &amp; Next.js</span>
                <span class="chip-tag">Lighthouse 99</span>
                <span class="chip-tag">Frictionless Checkout</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Engineer Your Web Platform</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Engine 3: 24/7 Revenue Automation & Hybrid Speed-to-Lead -->
          <div class="feature-tile feature-tile-pillar" style="border: 1.5px solid rgba(245, 158, 11, 0.4); box-shadow: 0 10px 30px rgba(245, 158, 11, 0.08);">
            <div class="feature-tile-media">
              <img src="/images/service-campaigns-gotv.jpg" alt="Revenue Automation & Speed to Lead" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge" style="background: rgba(245, 158, 11, 0.85); color: #fff;">Pillar 03 • Automation</span>
                <span class="feature-tile-stat-badge highlight-stat">&lt;45s AI + Human Escalation</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: #f59e0b; letter-spacing: 0.06em; margin-bottom: 0.35rem;">Dominant Growth Engine</div>
              <h3 class="feature-tile-title">24/7 Revenue Automation &amp; Speed-to-Lead Triage</h3>
              <p class="feature-tile-desc">
                Over 80% of sales go to the vendor who responds first. We deploy automated WhatsApp API lead qualification combined with seamless live human strategist escalation within 5 minutes, ensuring high-ticket leads convert and complaints never fester.
              </p>
              <div class="chips-row">
                <span class="chip-tag">WhatsApp API</span>
                <span class="chip-tag">Instant Triage</span>
                <span class="chip-tag">Live Human Handoff</span>
                <span class="chip-tag">Multi-Touch CRM</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Deploy Speed-to-Lead</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Section Sub-Header: Supporting Capabilities -->
        <div class="section-header-center" style="margin-top: 2rem; margin-bottom: 2rem;">
          <div class="pill-badge" style="background: rgba(148, 163, 184, 0.12); color: var(--text-secondary); border-color: rgba(148, 163, 184, 0.25);">
            <span>Supporting Creative &amp; Strategic Infrastructure</span>
          </div>
          <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-top: 0.5rem; margin-bottom: 0.5rem;">
            Specialized Tactical Disciplines
          </h3>
          <p class="section-subtitle" style="font-size: 0.95rem; max-width: 680px; margin: 0 auto;">
            Our growth engines are reinforced by in-house design, 4K production, reputation defense, and civic campaign frameworks.
          </p>
        </div>

        <!-- Category Filter Tabs for Supporting Services -->
        <div class="industry-tabs-wrap" id="servicesFilterTabs" style="margin-bottom: 2.5rem; justify-content: center;">
          <button type="button" class="ind-tab-btn active" data-filter="all">All 6 Disciplines</button>
          <button type="button" class="ind-tab-btn" data-filter="creative">Brand &amp; Video</button>
          <button type="button" class="ind-tab-btn" data-filter="tech">Mobile Apps</button>
          <button type="button" class="ind-tab-btn" data-filter="strategic">PR, ORM &amp; Campaigns</button>
        </div>

        <!-- Supporting Feature Cards Grid -->
        <div class="features-interactive-grid" id="servicesGrid">

          <!-- 4. Eye-Catching Logos & Brand Identity -->
          <div class="feature-tile" data-category="creative">
            <div class="feature-tile-media">
              <img src="/images/service-brand-identity.jpg" alt="Eye-Catching Logos & Brand Identity" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Architecture</span>
                <span class="feature-tile-stat-badge">Vector • Guidelines</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">4. Brand Identity &amp; Logo Architecture</h3>
              <p class="feature-tile-desc">
                Memorable visual identities and bespoke corporate logos tailored for your letterheads, packaging, digital collateral, and brand style guides that anchor immediate authority.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Vector SVGs</span>
                <span class="chip-tag">Design Systems</span>
                <span class="chip-tag">Collateral</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Branding</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 5. Online Video & Content Marketing Practitioners -->
          <div class="feature-tile" data-category="creative">
            <div class="feature-tile-media">
              <img src="/images/service-video-production.jpg" alt="Online Video & Content Marketing" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Lifecycle Video Studio</span>
                <span class="feature-tile-stat-badge">4K Short-Form &amp; Ads</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">5. Lifecycle Video &amp; Short-Form Content</h3>
              <p class="feature-tile-desc">
                In-house scriptwriters and video production specialists creating high-retention 4K video assets and viral hooks for YouTube, TikTok, Instagram Reels, and high-CTR paid ad creatives.
              </p>
              <div class="chips-row">
                <span class="chip-tag">TikTok &amp; Reels</span>
                <span class="chip-tag">YouTube Shorts</span>
                <span class="chip-tag">Creative Direction</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Video Studio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 6. Mobile Application Development (iOS & Android) -->
          <div class="feature-tile" data-category="tech">
            <div class="feature-tile-media">
              <img src="/images/service-mobile-apps.jpg" alt="Mobile Application Development" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Mobile Engineering</span>
                <span class="feature-tile-stat-badge">★ 4.9 App Store Rating</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">6. Mobile Application Engineering</h3>
              <p class="feature-tile-desc">
                We design and build powerful, user-friendly mobile applications that engage customers and streamline business operations across iOS and Android with scheduled test and release management.
              </p>
              <div class="chips-row">
                <span class="chip-tag">iOS &amp; Android</span>
                <span class="chip-tag">React Native / Flutter</span>
                <span class="chip-tag">Biometric Auth</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Mobile Apps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 7. Digital Public Relations (PR) for Private Individuals -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-digital-pr.jpg" alt="Digital Public Relations for Private Individuals" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Executive Prestige</span>
                <span class="feature-tile-stat-badge">Tier-1 Press Placements</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">7. Digital PR for Executives &amp; Founders</h3>
              <p class="feature-tile-desc">
                Strategic public relations and executive personal brand engineering for founders, executives, and high-profile individuals seeking authoritative media features, thought leadership, and elevated digital standing.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Tier-1 Press</span>
                <span class="chip-tag">Thought Leadership</span>
                <span class="chip-tag">Executive Profiles</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital PR</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 8. Online Reputation Management (ORM) & Brand Defense -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-reputation-orm.jpg" alt="Online Reputation Management ORM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Defense</span>
                <span class="feature-tile-stat-badge">99.4% Sentiment Restored</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">8. Online Reputation Management &amp; Defense</h3>
              <p class="feature-tile-desc">
                Counterfeit suppression, negative review containment, and brand perception defense. We deploy proprietary search-suppression tools and proactive reputation frameworks to safeguard market equity.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Review Defense</span>
                <span class="chip-tag">Search Suppression</span>
                <span class="chip-tag">Counterfeit Takedowns</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Brand Defense</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 9. Strategic Digital Campaign Practitioners (Political, GOTV & Mobilization) -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-social-media.jpg" alt="Strategic Digital Campaigns GOTV" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Civic Mobilization</span>
                <span class="feature-tile-stat-badge">WhatsApp API 98% Open</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">9. Strategic Civic &amp; GOTV Campaigns</h3>
              <p class="feature-tile-desc">
                Battle-tested campaign practitioners for voter mobilization (Get Out To Vote), civic education, campaign portals, Constituent Relationship Management, and high-capacity WhatsApp API broadcasting.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Constituent CRM</span>
                <span class="chip-tag">WhatsApp Broadcasting</span>
                <span class="chip-tag">Precision Media Blitz</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Campaigns</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner" style="margin-top: 3.5rem;">
          <h3>Ready to Deploy a Dominant Growth Strategy?</h3>
          <p>
            Whether scaling high-ROI ad spend, engineering a bespoke web platform, or deploying automated lead triage, our factory delivers far beyond expectations.
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
  `}function Y(){const a=document.querySelectorAll("#servicesFilterTabs .ind-tab-btn"),e=document.querySelectorAll("#servicesGrid .feature-tile");a.forEach(i=>{i.addEventListener("click",()=>{a.forEach(s=>s.classList.remove("active")),i.classList.add("active");const t=i.getAttribute("data-filter");e.forEach(s=>{const o=s.getAttribute("data-category");t==="all"||o===t?(s.style.display="flex",s.style.animation="fadeInUp 0.35s ease forwards"):s.style.display="none"})})})}const S={ecommerce:{badge:"E-Commerce & High-Growth DTC",image:"/images/industry-ecommerce.jpg",title:"Scale E-Commerce Revenue & Blended ROAS",desc:"High-ROI Meta, TikTok, and Google Performance Max campaigns paired with conversion-rate-optimized product pages, automated abandoned cart WhatsApp recovery, and dedicated human sales support.",quote:'"Vuvuzela scaled our fashion DTC brand from ₦6.5M to ₦28.4M/month in 90 days. Their ad creative testing and checkout CRO doubled our blended return on ad spend to 4.4x."',author:"— Amina Bello, Founder & Creative Director, KariStore DTC",agentName:"Chloe — VIP Concierge + Human Handoff",agentPhone:"Lagos/Abuja VIP Line • Human Strategist on Duty",prompts:["Best Sellers","Discount Code","Track My Order","Speak to Human"],initialMessages:[{sender:"customer",text:"Hey, I saw your Instagram ad for the new collection. Do you have a bundle discount for deliveries to Abuja?"},{sender:"ai",text:"Hey there! Yes, our 3-piece Luxury Bundle is currently 25% off with free express dispatch to Lagos and Abuja. Would you like the VIP checkout link?"},{sender:"customer",text:"Yes please, and what happens if I need to change my sizing after delivery?"},{sender:"ai",text:"100% covered! We provide 7-day hassle-free doorstep size exchanges across Nigeria. Here is your VIP checkout link: [Claim Bundle Discount]."}],responses:{"Best Sellers":"Our top-selling item this week is the Heritage Embroidered Set with over 320 verified 5-star customer reviews across Lagos and Abuja!","Discount Code":"Use promo code VUVUZELA15 at checkout to receive 15% off your first order today with free express delivery.","Track My Order":"Please share your 6-digit order number or WhatsApp phone number and our logistics desk will fetch live GIG/FeZ tracking immediately.","Speak to Human":"Connecting you immediately! Senior Account Representative Tunde has joined this WhatsApp session to handle your request."}},b2b:{badge:"B2B & Professional Services",image:"/images/industry-b2b.jpg",title:"Predictable Inbound Pipeline for High-Ticket B2B & Consultancies",desc:"Target corporate decision-makers with precision Google Search & LinkedIn funnels, authoritative case study landing pages, and hybrid qualification that delivers calendar-ready C-suite consultations.",quote:'"We used to rely on sporadic referrals. Vuvuzela built a predictable inbound engine that closed ₦145M in new corporate advisory retainers within 120 days."',author:"— Folake Adeyemi, Senior Partner, Nexus Advisory",agentName:"Marcus — B2B Strategy Intake",agentPhone:"Corporate Consulting Pipeline Active • Strategist Online",prompts:["Book Consultation","Service Retainers","Case Studies","Speak to Director"],initialMessages:[{sender:"customer",text:"We are looking to overhaul our digital acquisition and need to know your agency retainer tiers for Nigerian domestic operations."},{sender:"ai",text:"Welcome! Our dedicated growth partnerships range from ₦5,500,000 to ₦13,500,000/month (or $3,500 to $8,500 USD) depending on ad spend velocity and engineering scope."},{sender:"customer",text:"Can we schedule a 20-minute strategic discovery call this week?"},{sender:"ai",text:"Certainly. I have Wednesday at 2:00 PM or Thursday at 10:30 AM open with our Growth Director. Which slot works best for your team?"}],responses:{"Book Consultation":"I have reserved a 20-minute discovery session for your executive team. A calendar invite with Google Meet coordinates is on its way.","Service Retainers":"Our retainers cover full-funnel management: High-ROI Meta/Google Paid Ads, CRO web engineering, 4K creative testing, and 24/7 lead automation.","Case Studies":"We recently scaled an e-commerce brand to 4.4x ROAS and closed ₦380M in luxury real estate transactions. Would you like our breakdown PDF?","Speak to Director":"Understood. Direct line dispatched: Senior Growth Partner Joseph is stepping into this chat right now."}},clinics:{badge:"Private Clinics & Healthcare",image:"/images/industry-clinics.jpg",title:"High-Value Patient Inbound & Local Dominance",desc:"Capture high-ticket private patient inquiries with local Google search dominance, credible medical landing pages, and 24/7 patient intake triage across web and WhatsApp.",quote:'"Patients booking high-ticket cosmetic dental treatments jumped 80%. Their local Google ad campaigns and rapid WhatsApp triage completely filled our treatment rooms in Victoria Island."',author:"— Dr. Emeka Nnamani, Medical Director, Apex Medicare Clinics",agentName:"Aria — Clinical Intake Concierge",agentPhone:"VI & Ikoyi Patient Help Line Active",prompts:["Emergency Slot","Dental Implants Info","Consultation Fee","Speak to Reception"],initialMessages:[{sender:"customer",text:"I saw your clinic on Google Search in Victoria Island. Do you have an appointment open tomorrow morning?"},{sender:"ai",text:"Hello! Yes, we hold priority consultations every morning at 9:00 AM and 10:30 AM at our Victoria Island clinic. Are you experiencing severe dental discomfort?"},{sender:"customer",text:"Moderate pain from a cracked molar. 9:00 AM would be ideal."},{sender:"ai",text:"I have reserved the 9:00 AM emergency consultation slot for you with Dr. Nnamani. Our clinic desk has sent an SMS confirmation with private parking coordinates."}],responses:{"Emergency Slot":"We have priority walk-in availability reserved every morning in Victoria Island. I can secure you for 9:00 AM right now.","Dental Implants Info":"Our premium dental implant consultations include full 3D CBCT diagnostic scans and treatment plans from ₦450,000 with installment options.","Consultation Fee":"Specialist diagnostic review is ₦35,000, which is fully credited toward your treatment plan if scheduled during your visit.","Speak to Reception":"Handing you over to our Chief Clinical Concierge Nurse Blessing now. One moment please."}},realestate:{badge:"Real Estate & Luxury Property",image:"/images/industry-realestate.jpg",title:"High-Ticket Investor & Buyer Acquisition",desc:"Precision Meta and Google Search campaigns, bespoke single-development landing pages, and 24/7 WhatsApp investor triage that qualifies budgets and schedules private viewings in Lekki, Ikoyi, and Abuja.",quote:'"Vuvuzela generated over ₦380M in verified closed buyer transactions for our luxury residential developments within 180 days of ad launch."',author:"— Babajide Adeleke, Managing Director, PrimeHaven Properties",agentName:"Liam — Luxury Property Concierge",agentPhone:"Lekki & Ikoyi Acquisition Line Active",prompts:["Penthouse Listings","Schedule Viewing","Rental Yields","Speak to Broker"],initialMessages:[{sender:"customer",text:"Hi, I saw your ad for the Lekki Waterfront Residences. Are there 3-bedroom penthouses available for diaspora buyers?"},{sender:"ai",text:"Good day! Yes, we have two 3-bedroom corner penthouses remaining with panoramic lagoon views, private elevators, and automated smart homes starting from ₦285M."},{sender:"customer",text:"Can I schedule a private walkthrough this Friday or a live video walkthrough for my team in London?"},{sender:"ai",text:"Certainly! I have 11:30 AM or 3:00 PM open this Friday. Would 11:30 AM suit your schedule? I will also dispatch the high-res architectural brochure to your WhatsApp."}],responses:{"Penthouse Listings":"We have 2 corner penthouses starting at ₦285M with bespoke Italian kitchens, smart automation, and private underground parking.","Schedule Viewing":"You're scheduled for Friday at 11:30 AM! Our development director Babajide will welcome you at the private presentation suite.","Rental Yields":"Projected rental yields on this development sit between 9.5% and 12.4% annually, with full turnkey diaspora tenancy management provided.","Speak to Broker":"Connecting you immediately to Senior Property Consultant Tola on our direct line: +234 701 196 1582."}},gotv:{badge:"Political, Civic & GOTV Campaigns",image:"/images/service-campaigns-gotv.jpg",title:"Strategic Voter Mobilization & Constituent Engagement",desc:"Battle-tested online mobilization frameworks, optimized campaign portals, targeted media blitzes, and high-capacity WhatsApp API broadcasting engineered to persuade voters and mobilize communities.",quote:`"Vuvuzela's GOTV digital campaign infrastructure reached over 350,000 constituents with a 98% WhatsApp open rate, swinging turnout by +18.4% on election day."`,author:"— Hon. K. Adeleke, Campaign Director General",agentName:"Ayo — Campaign Mobilization Hub",agentPhone:"Official WhatsApp Mobilization Line Active",prompts:["Polling Unit Locator","Volunteer Sign-up","Policy Manifesto","Speak to Coordinator"],initialMessages:[{sender:"customer",text:"Hello, where is my designated polling unit for Ward 4 and how can I join the volunteer team?"},{sender:"ai",text:"Welcome! Your Ward 4 polling station is Community Hall Center. Would you like the GPS directions dispatched to your phone?"},{sender:"customer",text:"Yes, and I would love to sign up for canvassing this weekend."},{sender:"ai",text:"Fantastic! You've been registered as an active Ward 4 Field Volunteer. You'll receive our campaign briefing kit and WhatsApp group invite immediately."}],responses:{"Polling Unit Locator":"Please reply with your voter registration card number or district name and we will display your exact polling station coordinates.","Volunteer Sign-up":"Thank you for standing up for progress! Our field coordinator will connect with you in 10 minutes with your local canvassing schedule.","Policy Manifesto":"Our 5-pillar civic agenda (Jobs, Infrastructure, Education, Healthcare, and Transparency) has been sent to your WhatsApp.","Speak to Coordinator":"Routing your request to the Ward 4 Field Mobilization Director now."}}};function U(){const e=S["ecommerce"];return`
    <section class="section-pad" id="industries">
      <span id="ai-team" style="position: absolute; top: -100px;"></span>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Specialized Growth Playbooks</span>
          </div>
          <h2 class="section-title" id="indSectionTitle">
            ${e.title}
          </h2>
          <p class="section-subtitle" id="indSectionDesc">
            ${e.desc}
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
              ${e.badge}
            </div>

            <!-- Contextual Industry Visual Banner -->
            <div class="ind-preview-media">
              <img id="indIndustryImg" src="${e.image}" alt="${e.badge}" class="ind-industry-img" loading="lazy" />
              <div class="ind-preview-tag">
                <span class="pulse-dot dot-green"></span>
                <span id="indTagLabel">${e.badge} Pipeline</span>
              </div>
            </div>

            <h3 style="font-size: 1.85rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
              This is how your marketing turns traffic into paying clients.
            </h3>

            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
              While competing agencies stop at generating empty clicks, Vuvuzela DMF captures every high-intent lead in real time, pre-qualifying buying intent and booking appointments straight into your sales pipeline.
            </p>

            <div class="ind-quote-card" id="indQuoteBox">
              <p id="indQuoteText">${e.quote}</p>
              <div class="ind-quote-author" id="indQuoteAuthor">${e.author}</div>
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
                  <div class="agent-name" id="chatAgentName">${e.agentName}</div>
                  <div class="agent-status-label">
                    <span id="chatAgentPhone">${e.agentPhone}</span>
                  </div>
                </div>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">24/7 LIVE</span>
            </div>

            <!-- Messages Window -->
            <div class="chat-messages-scroll" id="chatMessagesScroll">
              ${e.initialMessages.map(i=>`
                <div class="chat-msg ${i.sender==="customer"?"customer-msg":"ai-msg"}">
                  ${i.text}
                </div>
              `).join("")}
            </div>

            <!-- Quick Action Prompts Bar -->
            <div class="chat-prompts-bar" id="chatPromptsBar">
              ${e.prompts.map(i=>`
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
  `}function K(){let a="ecommerce";const e=document.querySelectorAll(".ind-tab-btn"),i=document.getElementById("indSectionTitle"),t=document.getElementById("indSectionDesc"),s=document.getElementById("indBadgeText"),o=document.getElementById("indQuoteText"),r=document.getElementById("indQuoteAuthor"),d=document.getElementById("chatAgentName"),c=document.getElementById("chatAgentPhone"),f=document.getElementById("indIndustryImg"),b=document.getElementById("indTagLabel"),p=document.getElementById("chatMessagesScroll"),g=document.getElementById("chatPromptsBar"),v=document.getElementById("chatDemoForm"),y=document.getElementById("chatDemoInput");if(!e.length||!p)return;function x(u){const n=S[u];n&&(a=u,i&&(i.textContent=n.title),t&&(t.textContent=n.desc),s&&(s.textContent=n.badge),o&&(o.textContent=n.quote),r&&(r.textContent=n.author),d&&(d.textContent=n.agentName),c&&(c.textContent=n.agentPhone),f&&(f.src=n.image,f.alt=n.badge),b&&(b.textContent=`${n.badge} Pipeline`),p.innerHTML=n.initialMessages.map(l=>`
      <div class="chat-msg ${l.sender==="customer"?"customer-msg":"ai-msg"}">
        ${l.text}
      </div>
    `).join(""),p.scrollTop=p.scrollHeight,g&&(g.innerHTML=n.prompts.map(l=>`
        <button type="button" class="chat-prompt-pill" data-prompt="${l}">${l}</button>
      `).join(""),m()))}function m(){g==null||g.querySelectorAll(".chat-prompt-pill").forEach(u=>{u.addEventListener("click",()=>{const n=u.getAttribute("data-prompt");w(n)})})}function w(u){if(!u||!u.trim())return;const n=document.createElement("div");n.className="chat-msg customer-msg",n.textContent=u,p.appendChild(n),p.scrollTop=p.scrollHeight;const l=S[a],h=l.responses[u]||`Thank you for asking! Our specialized ${l.badge} growth team will be delighted to audit your marketing.`;setTimeout(()=>{const k=document.createElement("div");k.className="chat-msg ai-msg",k.textContent=h,p.appendChild(k),p.scrollTop=p.scrollHeight},450)}e.forEach(u=>{u.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),u.classList.add("active");const n=u.getAttribute("data-industry");x(n)})}),v==null||v.addEventListener("submit",u=>{if(u.preventDefault(),!y)return;const n=y.value.trim();n&&(w(n),y.value="")}),m()}const Q=[{id:"realestate",client:"PrimeHaven Luxury Properties",location:"Lekki Phase 1 & Ikoyi, Lagos",sector:"High-Ticket Real Estate Development",timeframe:"Jan 2026 – June 2026 (6-Month Campaign)",metrics:[{label:"Closed Sales Pipeline",value:"₦380,000,000"},{label:"Blended ROAS",value:"4.8x Verified"},{label:"Cost Per Lead",value:"-71% Reduction"}],problem:"Bleeding ₦14,200 per lead on generic Facebook boost ads; 68% of buyer inquiries dropped off uncontacted due to 12-hour WhatsApp response delays.",solution:"Built a high-converting Next.js landing portal with 3D virtual unit tours, restructured Meta Advantage+ campaigns targeting high-net-worth investors, and deployed sub-60s WhatsApp CRM triage with instant live broker escalation.",outcome:"Generated 94 private VIP walkthroughs and ₦380M in verified closed transactions within 180 days; cost-per-lead plummeted from ₦14,200 to ₦4,100.",author:"Babajide Adeleke",role:"Managing Director, PrimeHaven Properties",avatar:"/images/avatar-mike.jpg",quote:"Before Vuvuzela, our sales team spent half the day chasing cold numbers. Their landing page and WhatsApp triage completely changed our pipeline quality. ₦380M closed speaks for itself."},{id:"ecommerce",client:"KariStore DTC Fashion & Retail",location:"Lagos, Abuja & Port Harcourt",sector:"E-Commerce & High-Growth DTC",timeframe:"Q1 – Q3 2026 (90-Day Scaling Sprint)",metrics:[{label:"Monthly Revenue",value:"₦28.4M Run-Rate"},{label:"Revenue Growth Lift",value:"+336% YoY"},{label:"Blended Ad ROAS",value:"4.4x Average"}],problem:"Monthly revenue was capped at ₦6.5M. Ad accounts suffered from 78% mobile cart abandonment and climbing CPMs on Meta without reliable purchase attribution.",solution:"Complete Shopify checkout CRO rebuild with 0.6s load time, production of 24 high-retention 4K UGC TikTok/Reels video creatives, and automated WhatsApp abandoned checkout recovery workflows.",outcome:"Scaled monthly revenue from ₦6.5M to ₦28.4M/month; recovered 41% of abandoned carts via automated WhatsApp follow-up; maintained an average 4.4x blended ROAS across ₦18M total ad spend.",author:"Amina Bello",role:"Founder & Creative Director, KariStore DTC",avatar:"/images/avatar-sarah.jpg",quote:"The checkout rebuild and TikTok ad direction doubled our daily order velocity. Having our WhatsApp sales line connected directly to abandoned carts recovered millions for us every month."},{id:"healthcare",client:"Apex Medicare Specialist Clinics",location:"Victoria Island, Lagos",sector:"Private Healthcare & Specialist Practice",timeframe:"Feb 2026 – Present (Growth Retainer)",metrics:[{label:"Private Patient Inflow",value:"+140% Increase"},{label:"Booking Advance",value:"3-Week Waiting List"},{label:"Patient Acquisition Cost",value:"-52% Lower CAC"}],problem:"High-ticket cosmetic dental and private specialist consultations had unpredictable booking gaps, relying solely on sporadic word-of-mouth with zero digital predictability.",solution:"Engineered hyper-local Google Search campaigns dominating Victoria Island and Ikoyi medical keywords, built high-trust clinical landing pages with patient video proof, and enabled instant WhatsApp patient intake triage.",outcome:"Private consultation bookings surged by 140%; clinic treatment rooms filled 3 weeks in advance; cost per patient acquisition lowered by 52%.",author:"Dr. Emeka Nnamani",role:"Medical Director, Apex Medicare Clinics",avatar:"/images/avatar-michael.jpg",quote:"Patients searching on Google now reach our clinic desk in seconds. We went from empty appointment slots on Tuesdays to fully booked surgery days weeks in advance."},{id:"b2b",client:"Nexus Advisory & Capital Partners",location:"Abuja & London",sector:"Corporate Advisory & B2B Consulting",timeframe:"March 2026 – September 2026",metrics:[{label:"New Retainers Closed",value:"₦145,000,000"},{label:"Monthly Boardroom Briefs",value:"18 Qualified Inquiries"},{label:"Media Credibility",value:"Tier-1 Press Placed"}],problem:"Suffered from long 6-month sales cycles with zero digital inbound inquiries; corporate leaders had no verifiable online proof or authoritative content to review.",solution:"Secured executive Digital PR placements across leading business publications, built intent-focused Google Search & LinkedIn ad funnels, and authored high-authority industry research whitepapers.",outcome:"Closed 4 enterprise advisory mandates totaling ₦145M within 120 days; established a consistent pipeline of 18 qualified C-suite consultation briefs per month.",author:"Folake Adeyemi",role:"Senior Partner, Nexus Advisory",avatar:"/images/avatar-david.jpg",quote:"Vuvuzela established our market authority in tier-1 financial press and built an inbound pipeline that connects us directly with C-suite executives ready to engage."}];function _(){const a=e=>`
    <div class="case-study-card" id="case-${e.id}">
      <!-- Card Top: Client & Sector Header -->
      <div class="case-study-top">
        <div>
          <div class="case-study-badge-row">
            <span class="case-study-sector-badge">${e.sector}</span>
            <span class="case-study-time-badge">${e.timeframe}</span>
          </div>
          <h3 class="case-study-client-title">${e.client}</h3>
          <p class="case-study-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            ${e.location}
          </p>
        </div>
      </div>

      <!-- Key Metrics Row -->
      <div class="case-study-metrics-grid">
        ${e.metrics.map(i=>`
          <div class="case-metric-box">
            <div class="case-metric-value">${i.value}</div>
            <div class="case-metric-label">${i.label}</div>
          </div>
        `).join("")}
      </div>

      <!-- Problem / Solution / Outcome Breakdown -->
      <div class="case-study-narrative">
        <div class="narrative-block problem-block">
          <div class="narrative-label">
            <span class="dot-indicator dot-red"></span>
            <strong>The Problem:</strong>
          </div>
          <p class="narrative-text">${e.problem}</p>
        </div>

        <div class="narrative-block solution-block">
          <div class="narrative-label">
            <span class="dot-indicator dot-amber"></span>
            <strong>What Vuvuzela Did:</strong>
          </div>
          <p class="narrative-text">${e.solution}</p>
        </div>

        <div class="narrative-block outcome-block">
          <div class="narrative-label">
            <span class="dot-indicator dot-green"></span>
            <strong>What Changed:</strong>
          </div>
          <p class="narrative-text">${e.outcome}</p>
        </div>
      </div>

      <!-- Quote & Verified Client Signature -->
      <div class="case-study-quote-box">
        <p class="case-study-quote-text">"${e.quote}"</p>
        <div class="case-study-rep-row">
          <img src="${e.avatar}" alt="${e.author}" class="case-rep-avatar" loading="lazy" />
          <div>
            <div class="case-rep-name">${e.author} <span class="verified-check" title="Verified Client">✓ Verified</span></div>
            <div class="case-rep-role">${e.role}</div>
          </div>
        </div>
      </div>
    </div>
  `;return`
    <section class="section-pad" id="case-studies" style="position: relative;">
      <span id="testimonials" style="position: absolute; top: -100px;"></span>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Verified Case Studies &amp; Revenue Outcomes</span>
          </div>
          <h2 class="section-title">
            The Numbers Behind The Claims: Real Clients, Real Revenue
          </h2>
          <p class="section-subtitle">
            Every statistic on our site is grounded in a verified client campaign. Here is the bottleneck they faced, the strategy we executed, and the financial turnaround in Naira and foreign revenue.
          </p>
        </div>

        <!-- Case Studies 2x2 Grid -->
        <div class="case-studies-grid">
          ${Q.map(a).join("")}
        </div>

        <!-- Bottom Call to Action -->
        <div class="case-study-cta-banner" style="margin-top: 3.5rem; text-align: center; background: var(--bg-card); border: 1px solid var(--border-glass-subtle); border-radius: var(--radius-2xl); padding: 2.5rem 1.5rem; backdrop-filter: blur(16px);">
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
            Want Your Business To Be Our Next Documented Win?
          </h3>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 1.5rem; font-size: 0.95rem;">
            We conduct regular 14-day and 30-day performance check-ins to ensure your campaigns deliver measurable revenue and become our next documented case study.
          </p>
          <button type="button" class="btn-pill-primary trigger-brief-modal">
            <span>Claim Free Growth Audit &amp; Proposal</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  `}function Z(){return`
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
  `}const C={NGN:{code:"NGN",symbol:"₦",presets:{ecommerce:{label:"E-Commerce & DTC Brands (₦85,000 avg order)",order:85e3,min:1e4,max:5e5,step:5e3},b2b:{label:"B2B & Professional Services (₦1,500,000 avg retainer)",order:15e5,min:25e4,max:1e7,step:5e4},clinics:{label:"Private Healthcare & Clinics (₦250,000 avg patient)",order:25e4,min:5e4,max:3e6,step:25e3},realestate:{label:"Real Estate & Property (₦5,000,000 avg commission/deal)",order:5e6,min:5e5,max:25e6,step:1e5},saas:{label:"SaaS & Tech Subscriptions (₦150,000 avg MRR)",order:15e4,min:25e3,max:2e6,step:1e4}}},USD:{code:"USD",symbol:"$",presets:{ecommerce:{label:"E-Commerce & DTC Brands ($85 avg order)",order:85,min:25,max:1e3,step:5},b2b:{label:"B2B & Professional Services ($1,500 avg retainer)",order:1500,min:300,max:5e3,step:50},clinics:{label:"Private Healthcare & Clinics ($250 avg patient)",order:250,min:50,max:2e3,step:25},realestate:{label:"Real Estate & Property ($3,500 avg deal)",order:3500,min:500,max:1e4,step:100},saas:{label:"SaaS & Tech Subscriptions ($150 avg MRR)",order:150,min:30,max:2500,step:25}}}};function J(){try{const a=Intl.DateTimeFormat().resolvedOptions().timeZone||"";if(a.toLowerCase().includes("lagos")||a.toLowerCase().includes("nigeria")||(navigator.languages||[navigator.language||""]).some(t=>t&&t.toLowerCase().includes("-ng")))return"NGN"}catch{}return"USD"}function X(){const a=document.getElementById("businessSectorSelect"),e=document.getElementById("sliderVisitors"),i=document.getElementById("sliderConversion"),t=document.getElementById("sliderOrder"),s=document.getElementById("valVisitors"),o=document.getElementById("valConversion"),r=document.getElementById("valOrder"),d=document.getElementById("sliderOrderMinLabel"),c=document.getElementById("sliderOrderMaxLabel"),f=document.getElementById("kpiLeads"),b=document.getElementById("kpiMonthlyRev"),p=document.getElementById("kpiLift"),g=document.getElementById("kpiAnnualRev");if(!e||!i||!t||!a)return;let v=J();function y(n="ecommerce"){const l=C[v];a.innerHTML=Object.entries(l.presets).map(([h,k])=>`
          <option value="${h}" ${h===n?"selected":""}>
            ${k.label}
          </option>
        `).join("")}function x(){const n=C[v],l=a.value||"ecommerce";y(l);const h=n.presets[l]||n.presets.ecommerce;t.min=h.min,t.max=h.max,t.step=h.step,t.value=h.order,d&&(d.textContent=`${n.symbol}${Number(h.min).toLocaleString()}`),c&&(c.textContent=`${n.symbol}${Number(h.max).toLocaleString()}`),m()}function m(){const n=C[v],l=parseInt(e.value,10),h=parseFloat(i.value),k=parseInt(t.value,10);s.textContent=Number(l).toLocaleString(),o.textContent=`${h.toFixed(1)}%`,r.textContent=`${n.symbol}${Number(k).toLocaleString()}`;const T=l*(h/100),M=35,A=Math.round(T*(M/100)),B=Math.round(A*k),R=B*12;f.textContent=`+${A.toLocaleString()}`,b.textContent=`+${n.symbol}${B.toLocaleString()}`,p.textContent=`+${M.toFixed(1)}%`,g.textContent=`${n.symbol}${R.toLocaleString()}`}a.addEventListener("change",()=>{const n=C[v],l=n.presets[a.value];l&&(t.min=l.min,t.max=l.max,t.step=l.step,t.value=l.order,d&&(d.textContent=`${n.symbol}${Number(l.min).toLocaleString()}`),c&&(c.textContent=`${n.symbol}${Number(l.max).toLocaleString()}`),m())}),e.addEventListener("input",m),i.addEventListener("input",m),t.addEventListener("input",m),x();const w=new AbortController,u=setTimeout(()=>w.abort(),2500);fetch("https://api.country.is/",{signal:w.signal}).then(n=>n.json()).then(n=>{if(clearTimeout(u),n&&n.country){const l=n.country==="NG"?"NGN":"USD";l!==v&&(v=l,x())}}).catch(()=>{fetch("https://ipapi.co/json/",{signal:w.signal}).then(n=>n.json()).then(n=>{if(n&&n.country_code){const l=n.country_code==="NG"?"NGN":"USD";l!==v&&(v=l,x())}}).catch(()=>{})})}const ee=[{id:"faq-1",question:"What are the 9 core services offered by Vuvuzela Digital Marketing Factory Inc.?",answer:"We deliver 9 core capabilities: 1) Eye-catching Logos & Brand Identity; 2) Everyday Websites & E-Commerce CRO Funnels; 3) Online Video & Lifecycle Content Marketing; 4) PPC (Pay-Per-Click) Google & Meta Ads; 5) Digital PR for Private Individuals; 6) Strategic Social Media Marketing; 7) Online Reputation Management (ORM) & Brand Defense; 8) Mobile Application Development (iOS & Android); and 9) Strategic Digital Campaigns (GOTV & Civic Mobilization)."},{id:"faq-2",question:"How do your Strategic Digital Campaigns and GOTV (Get Out To Vote) services work?",answer:"Our political and civic campaign practitioners build a battle-tested framework: we develop optimized campaign websites, deploy targeted online media blitzes across Google and Meta, integrate high-capacity WhatsApp APIs (achieving 98%+ open rates), and establish Constituent Relationship Management systems to build awareness, persuade voters, and mobilize supporters."},{id:"faq-3",question:"What does your Online Reputation Management (ORM) service cover?",answer:"Our ORM framework actively protects brands and high-profile individuals against counterfeit goods, fake product listings, defamatory attacks, and negative review spikes. Using proprietary online redeeming tools, negative search suppression, and proactive sentiment defense, we rehabilitate and safeguard your digital perception."},{id:"faq-4",question:"What technology stacks do you use for Websites and Mobile App Development?",answer:"For web and e-commerce, we engineer custom platforms with Vite, Next.js, Shopify, and WordPress engineered for 99+ Lighthouse scores and psychological CRO funnels. For mobile apps, we develop native, hybrid, and cross-platform solutions for iOS and Android (React Native / Flutter) backed by scheduled test & App Store release management."},{id:"faq-5",question:"How quickly do we see measurable results and pipeline growth?",answer:"Paid advertising campaigns on Meta and Google typically start generating qualified leads within the first 7 to 14 days of launch. Bespoke web engineering and CRO funnels are launched within 2 to 4 weeks, while organic technical SEO compounding begins demonstrating strong ranking acceleration within 60 to 90 days."},{id:"faq-6",question:"How does Vuvuzela guarantee return on ad spend (ROAS)?",answer:"Unlike traditional agencies that report on vanity clicks and impressions, our media campaigns are held strictly accountable to closed-revenue and qualified inquiry KPIs. We implement conversion API tracking, real-time lead validation, and continuous high-velocity creative testing, maintaining an average blended client ROAS of 4.2x."}];function te(){const a=`
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,e=`
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
          ${ee.map((i,t)=>{const s=t===0;return`
              <div class="faq-item ${s?"open":""}" data-faq-id="${i.id}">
                <button type="button" class="faq-question" aria-expanded="${s?"true":"false"}" aria-controls="${i.id}-answer" id="${i.id}-question">
                  <span class="faq-question-text">${i.question}</span>
                  <div class="faq-toggle" aria-hidden="true">
                    ${s?e:a}
                  </div>
                </button>
                <div class="faq-answer" id="${i.id}-answer" role="region" aria-labelledby="${i.id}-question" style="${s?"max-height: 400px;":"max-height: 0px;"}">
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
  `}function ie(){const a=document.getElementById("faqAccordion");if(!a)return;const e=`
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,i=`
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,t=a.querySelectorAll(".faq-item"),s=a.querySelector(".faq-item.open");if(s){const o=s.querySelector(".faq-answer");o&&(o.style.maxHeight=o.scrollHeight+30+"px")}t.forEach(o=>{const r=o.querySelector(".faq-question"),d=o.querySelector(".faq-answer"),c=o.querySelector(".faq-toggle");r==null||r.addEventListener("click",f=>{if(f.preventDefault(),o.classList.contains("open")){o.classList.remove("open"),r.setAttribute("aria-expanded","false"),d.style.maxHeight="0px",c.innerHTML=e;return}t.forEach(p=>{if(p!==o&&p.classList.contains("open")){p.classList.remove("open");const g=p.querySelector(".faq-question"),v=p.querySelector(".faq-answer"),y=p.querySelector(".faq-toggle");g==null||g.setAttribute("aria-expanded","false"),v&&(v.style.maxHeight="0px"),y&&(y.innerHTML=e)}}),o.classList.add("open"),r.setAttribute("aria-expanded","true"),d.style.maxHeight=d.scrollHeight+30+"px",c.innerHTML=i})})}function ae(){return`
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
  `}function se(){return`
    <footer class="global-footer">
      <div class="footer-inner-grid">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <div class="nav-logo-link" style="align-self: flex-start;">
            <div class="nav-logo-mark" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footVDeepBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e1b4b" />
                    <stop offset="45%" stop-color="#1e3a8a" />
                    <stop offset="100%" stop-color="#0f172a" />
                  </linearGradient>
                  <linearGradient id="footVCobalt" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="60%" stop-color="#2563eb" />
                    <stop offset="100%" stop-color="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="footVCyanGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#06b6d4" />
                    <stop offset="100%" stop-color="#38bdf8" />
                  </linearGradient>
                  <linearGradient id="footVShield" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0b1120" />
                    <stop offset="100%" stop-color="#020617" />
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="13" fill="url(#footVShield)" stroke="rgba(255, 255, 255, 0.16)" stroke-width="1.2" />
                <circle cx="24" cy="24" r="14" fill="#2563eb" opacity="0.25" />
                <path d="M10 12 L19 12 L24 38 L17.5 38 Z" fill="url(#footVDeepBlue)" />
                <path d="M38 12 L29 12 L24 38 L30.5 38 Z" fill="url(#footVCobalt)" />
                <path d="M19 12 L24 26 L29 12 L24 18 Z" fill="url(#footVCyanGlow)" />
                <circle cx="24" cy="37" r="1.8" fill="#38bdf8" />
              </svg>
            </div>
            <div class="nav-logo-text">
              <span>VUVUZELA</span><span class="nav-brand-accent">DMF</span>
            </div>
          </div>
          <p class="footer-brand-desc">
            Vuvuzela Digital Marketing Factory Inc. — Full-Spectrum Digital Marketing &amp; Platform Engineering. Engineering high-converting funnels, scalable paid acquisition, mobile apps, lifecycle video content, digital PR, and strategic campaign infrastructure worldwide.
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            © ${new Date().getFullYear()} Vuvuzela Digital Marketing Factory Inc. All rights reserved.
          </div>
        </div>

        <!-- 4 Link Columns -->
        <div class="footer-nav-grid">
          <!-- Column 1: Services -->
          <div class="footer-nav-col">
            <h4>Our 9 Services</h4>
            <ul class="footer-nav-links">
              <li><a href="#services">PPC (Pay-Per-Click) Adverts</a></li>
              <li><a href="#services">Websites &amp; E-Commerce CRO</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">Online Video &amp; Content Marketing</a></li>
              <li><a href="#services">Digital PR for Individuals</a></li>
              <li><a href="#services">Online Reputation Management (ORM)</a></li>
              <li><a href="#services">Strategic GOTV Campaigns</a></li>
            </ul>
          </div>

          <!-- Column 2: Industries -->
          <div class="footer-nav-col">
            <h4>Specialized Sectors</h4>
            <ul class="footer-nav-links">
              <li><a href="#industries">Civic &amp; Political Campaigns (GOTV)</a></li>
              <li><a href="#industries">E-Commerce &amp; High-Growth DTC</a></li>
              <li><a href="#industries">Private Individuals &amp; PR</a></li>
              <li><a href="#industries">B2B &amp; Professional Services</a></li>
              <li><a href="#industries">Private Healthcare &amp; Clinics</a></li>
              <li><a href="#industries">Luxury Real Estate &amp; Property</a></li>
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
        <span>Vuvuzela Digital Marketing Factory Inc. — Growth Strategy • Platform Engineering • PR &amp; ORM</span>
        <span>Paid Media • Web &amp; Mobile Engineering • 4K Video • Strategic GOTV Campaigns</span>
      </div>
    </footer>
  `}class ne{constructor(e="appRoot"){this.rootContainer=document.getElementById(e),this.transitionOverlay=document.getElementById("pageTransitionOverlay"),this.currentPath=this.normalizePath(window.location.pathname)}normalizePath(e){return"/"}init(){document.addEventListener("click",e=>{const i=e.target.closest("a");if(!i)return;const t=i.getAttribute("href");if(!t||t.startsWith("http")||t.startsWith("mailto:")||t.startsWith("tel:")||i.target==="_blank")return;if(t.startsWith("#")){e.preventDefault(),this.scrollToAnchor(t);return}const s=i.getAttribute("data-route")||t,o=this.normalizePath(s);if(o!==this.currentPath)e.preventDefault(),this.navigateTo(o);else if(t.includes("#")){e.preventDefault();const r=t.substring(t.indexOf("#"));this.scrollToAnchor(r)}}),window.addEventListener("popstate",()=>{this.renderRoute("/",!1)}),this.renderRoute("/",!1),window.location.hash&&setTimeout(()=>{this.scrollToAnchor(window.location.hash)},200)}navigateTo(e){this.isNavigating||(this.isNavigating=!0,this.transitionOverlay&&this.transitionOverlay.classList.add("is-active"),setTimeout(()=>{window.history.pushState({},"","/"),this.renderRoute("/",!0),window.scrollTo(0,0),setTimeout(()=>{this.transitionOverlay&&this.transitionOverlay.classList.remove("is-active"),this.isNavigating=!1},100)},220))}renderRoute(e,i){if(!this.rootContainer)return;let t="";t+=z(),document.title="Vuvuzela DMF — Performance Digital Marketing Agency & Web Engineering",t+=F(),t+=$(),t+=j(),t+=U(),t+=_(),t+=Z(),t+=te(),t+=ae(),t+=se(),this.rootContainer.innerHTML=t,W(),N(),Y(),K(),X(),ie()}scrollToAnchor(e){const i=document.querySelector(e);if(i){const s=i.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:Math.max(0,s-90),behavior:"smooth"})}}}document.addEventListener("DOMContentLoaded",()=>{H(),E("auroraCanvas");const a=document.getElementById("modalMount");a&&(a.innerHTML=D(),O());const e=document.getElementById("whatsappMount");e&&(e.innerHTML=q()),new ne("appRoot").init()});
