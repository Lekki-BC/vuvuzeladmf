(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();function O(s="auroraCanvas"){const t=document.getElementById(s);if(!t)return;const i=t.getContext("2d");if(!i)return;let e=t.width=window.innerWidth,a=t.height=window.innerHeight;const o=()=>{e=t.width=window.innerWidth,a=t.height=window.innerHeight};window.addEventListener("resize",o,{passive:!0});let r=0;function d(){r+=.003,i.clearRect(0,0,e,a);const c=document.documentElement.getAttribute("data-theme")==="dark";i.fillStyle=c?"#09090b":"#f8fafc",i.fillRect(0,0,e,a);const y=e*.4+Math.sin(r*.7)*(e*.15),w=a*.25+Math.cos(r*.9)*(a*.1),u=Math.max(e,a)*.48,g=i.createRadialGradient(y,w,0,y,w,u);c?(g.addColorStop(0,"rgba(56, 189, 248, 0.16)"),g.addColorStop(.5,"rgba(30, 58, 138, 0.08)"),g.addColorStop(1,"rgba(9, 9, 11, 0)")):(g.addColorStop(0,"rgba(56, 189, 248, 0.12)"),g.addColorStop(.5,"rgba(186, 230, 253, 0.06)"),g.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=g,i.fillRect(0,0,e,a);const v=e*.65+Math.cos(r*.8)*(e*.2),b=a*.35+Math.sin(r*.6)*(a*.12),C=Math.max(e,a)*.52,m=i.createRadialGradient(v,b,0,v,b,C);c?(m.addColorStop(0,"rgba(99, 102, 241, 0.14)"),m.addColorStop(.5,"rgba(15, 23, 42, 0.06)"),m.addColorStop(1,"rgba(9, 9, 11, 0)")):(m.addColorStop(0,"rgba(129, 140, 248, 0.11)"),m.addColorStop(.5,"rgba(224, 231, 255, 0.05)"),m.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=m,i.fillRect(0,0,e,a);const k=e*.5+Math.sin(r*.5)*(e*.25),p=a*.65+Math.cos(r*.7)*(a*.15),n=Math.max(e,a)*.42,l=i.createRadialGradient(k,p,0,k,p,n);c?(l.addColorStop(0,"rgba(16, 185, 129, 0.08)"),l.addColorStop(.5,"rgba(15, 23, 42, 0.04)"),l.addColorStop(1,"rgba(9, 9, 11, 0)")):(l.addColorStop(0,"rgba(52, 211, 153, 0.08)"),l.addColorStop(.5,"rgba(209, 250, 229, 0.04)"),l.addColorStop(1,"rgba(248, 250, 252, 0)")),i.fillStyle=l,i.fillRect(0,0,e,a),requestAnimationFrame(d)}d()}function q(){return`
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
  `}function D(){const s=document.getElementById("briefModalOverlay"),t=document.getElementById("modalCloseBtn"),i=document.getElementById("briefModalForm"),e=document.getElementById("modalSuccessState"),a=()=>{s==null||s.classList.add("open"),document.body.style.overflow="hidden"},o=()=>{s==null||s.classList.remove("open"),document.body.style.overflow=""};document.addEventListener("click",r=>{const d=r.target;d!=null&&d.closest(".trigger-brief-modal")&&(r.preventDefault(),a())}),t==null||t.addEventListener("click",o),s==null||s.addEventListener("click",r=>{r.target===s&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(s!=null&&s.classList.contains("open"))&&o()}),i==null||i.addEventListener("submit",r=>{r.preventDefault(),i&&e&&(i.style.display="none",e.style.display="block")})}function V(){return`
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
  `}const T="vuvuzela_theme";function G(){const s=localStorage.getItem(T);return s==="dark"||s==="light"?s:"light"}function P(s){const t=s==="dark"?"dark":"light";return document.documentElement.setAttribute("data-theme",t),localStorage.setItem(T,t),L(t),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:t}})),t}function W(){const t=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";return P(t)}function L(s){const t=s==="dark";document.querySelectorAll(".theme-toggle-btn").forEach(e=>{e.setAttribute("aria-label",t?"Switch to Light Theme":"Switch to Dark Theme"),e.setAttribute("title",t?"Switch to Light Theme":"Switch to Dark Theme"),e.setAttribute("aria-pressed",t?"true":"false");const a=e.querySelector(".theme-icon-sun"),o=e.querySelector(".theme-icon-moon"),r=e.querySelector(".theme-toggle-label");a&&o&&(t?(a.style.display="block",o.style.display="none"):(a.style.display="none",o.style.display="block")),r&&(r.textContent=t?"Light Mode":"Dark Mode")})}function z(){const s=G();P(s),document.addEventListener("click",t=>{t.target.closest(".theme-toggle-btn")&&(t.preventDefault(),t.stopPropagation(),W())})}function F(){return`
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
  `}function H(){const s=document.getElementById("glassNav"),t=document.getElementById("mobileNavToggle"),i=document.getElementById("mobileNavMenu"),e=document.getElementById("mobileNavBackdrop");if(!s)return;const a=document.documentElement.getAttribute("data-theme")||"light";L(a);let o=window.scrollY;window.addEventListener("scroll",()=>{const c=window.scrollY;c>60?c>o&&c-o>6?(s.classList.add("navbar-hidden"),s.classList.remove("navbar-visible")):o-c>6&&(s.classList.remove("navbar-hidden"),s.classList.add("navbar-visible")):(s.classList.remove("navbar-hidden"),s.classList.add("navbar-visible")),o=c},{passive:!0});const r=()=>{i==null||i.classList.add("open"),e==null||e.classList.add("open"),document.body.style.overflow="hidden"},d=()=>{i==null||i.classList.remove("open"),e==null||e.classList.remove("open"),document.body.style.overflow=""};t==null||t.addEventListener("click",()=>{i!=null&&i.classList.contains("open")?d():r()}),e==null||e.addEventListener("click",d),i==null||i.querySelectorAll("a, .mobile-nav-cta").forEach(c=>{c.addEventListener("click",d)})}function $(){return`
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
                <img src="/images/avatar-mike.jpg" alt="Client Mike Rodriguez" class="hero-avatar-img" />
                <img src="/images/avatar-sarah.jpg" alt="Client Sarah Chen" class="hero-avatar-img" />
                <img src="/images/avatar-michael.jpg" alt="Client Michael Torres" class="hero-avatar-img" />
                <img src="/images/avatar-david.jpg" alt="Client David Kim" class="hero-avatar-img" />
                <span class="hero-avatar-extra">+50</span>
              </div>
              <div class="hero-trust-text">
                <div class="hero-stars">★★★★★ <span class="hero-rating-num">4.9/5 Rating</span></div>
                <div class="hero-trust-sub">Trusted by 50+ growth brands • Average 4.2x ROAS</div>
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
                Zero Vanity Metrics
              </span>
              <span class="hero-check-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                24/7 WhatsApp Triage
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
                    <span>LIVE STREAM</span>
                  </div>
                </div>

                <!-- Main Visual Image Wrap -->
                <div class="hero-image-wrap">
                  <img
                    src="/images/hero-dashboard.jpg"
                    alt="Vuvuzela Digital Marketing Factory Inc. Growth Command Center"
                    class="hero-dashboard-image"
                    loading="eager"
                  />
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
                    <span class="pill-title">Speed-to-Lead Triage</span>
                    <span class="pill-stat">0:45s Instant Follow-up</span>
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
                    <span class="pill-stat highlight-green">4.2x (+340% YoY)</span>
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

        <!-- Social Proof / Infinite Marquee -->
        <div class="trust-marquee-wrapper">
          <div class="trust-marquee-fade-left"></div>
          <div class="trust-marquee-fade-right"></div>
          <p class="trust-marquee-label">Trusted by high-growth companies, ambitious brands &amp; industry leaders</p>
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
  `}function j(){const s=document.getElementById("rotatingWordPill");if(s){const e=["Revenue","ROAS","Pipeline","Acquisition","Conversion","Growth"];let a=0;setInterval(()=>{s.style.opacity="0",s.style.transform="translateY(-12px) scale(0.95)",setTimeout(()=>{a=(a+1)%e.length,s.textContent=e[a],s.style.transform="translateY(12px) scale(0.95)",requestAnimationFrame(()=>{s.style.opacity="1",s.style.transform="translateY(0) scale(1)"})},250)},2200)}const t=document.getElementById("heroVisualContainer"),i=document.getElementById("heroVisualCard");t&&i&&window.matchMedia("(pointer: fine)").matches&&(t.addEventListener("mousemove",e=>{const a=t.getBoundingClientRect(),o=e.clientX-a.left,r=e.clientY-a.top,d=a.width/2,c=a.height/2,y=(r-c)/c*-6,w=(o-d)/d*6;i.style.transform=`perspective(1000px) rotateX(${y}deg) rotateY(${w}deg) scale3d(1.02, 1.02, 1.02)`}),t.addEventListener("mouseleave",()=>{i.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}))}function N(){return`
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
  `}function Y(){return`
    <section class="light-features-section" id="services">
      <span id="features" style="position: absolute; top: -100px;"></span>
      <div class="light-dot-grid"></div>
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-center">
          <div class="pill-badge">
            <span>Our 9 Core Capabilities</span>
          </div>
          <h2 class="section-title">
            Full-Spectrum Digital Marketing &amp; Platform Engineering
          </h2>
          <p class="section-subtitle">
            Without much ado, here is our full suite of bespoke services engineered to expand your reach, elevate brand credibility, and scale predictable revenue.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="industry-tabs-wrap" id="servicesFilterTabs" style="margin-bottom: 2.5rem; justify-content: center;">
          <button type="button" class="ind-tab-btn active" data-filter="all">All 9 Services</button>
          <button type="button" class="ind-tab-btn" data-filter="media">Paid Media &amp; Content</button>
          <button type="button" class="ind-tab-btn" data-filter="engineering">Web &amp; Mobile Apps</button>
          <button type="button" class="ind-tab-btn" data-filter="strategic">PR, ORM &amp; Campaigns</button>
        </div>

        <!-- 9 Interactive Feature Cards Grid -->
        <div class="features-interactive-grid" id="servicesGrid">

          <!-- 1. Eye-Catching Logos & Brand Identity -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-brand-identity.jpg" alt="Eye-Catching Logos & Brand Identity" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Architecture</span>
                <span class="feature-tile-stat-badge">Vector • Guidelines</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">1. Eye-Catching Logos &amp; Brand Identity</h3>
              <p class="feature-tile-desc">
                Memorable visual identities and bespoke logos tailored for your corporate letterheads, websites, packaging, and digital collateral that anchor instant brand trust.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Vector SVGs</span>
                <span class="chip-tag">Print Collateral</span>
                <span class="chip-tag">Social Assets</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Branding</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 2. Everyday & E-Commerce Websites (CRO, CTR, SEO) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-web-ecommerce.jpg" alt="Websites & E-Commerce Funnels" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Web Engineering</span>
                <span class="feature-tile-stat-badge">+64.2% Conversion Lift</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">2. Websites &amp; E-Commerce Funnels</h3>
              <p class="feature-tile-desc">
                High-performance everyday corporate websites and e-commerce stores with built-in CTA funnels, high Click-Through Rates (CTR), agile Conversion Rate Optimization (CRO), and robust SEO.
              </p>
              <div class="chips-row">
                <span class="chip-tag">0.6s Page Speed</span>
                <span class="chip-tag">Shopify &amp; Next.js</span>
                <span class="chip-tag">Lighthouse 99</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Web Engineering</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 3. Online Video & Content Marketing Practitioners -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-video-production.jpg" alt="Online Video & Content Marketing" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Lifecycle Video Studio</span>
                <span class="feature-tile-stat-badge">4K Short-Form &amp; Ads</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">3. Online Video &amp; Content Marketing</h3>
              <p class="feature-tile-desc">
                Your preferred lifecycle content managers. Professional in-house scriptwriters craft your message, while our video production team breathes life into high-retention video assets for YouTube, TikTok, Instagram, Facebook, and Google Ads.
              </p>
              <div class="chips-row">
                <span class="chip-tag">YouTube &amp; TikTok</span>
                <span class="chip-tag">Instagram Reels</span>
                <span class="chip-tag">Creative Direction</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Video Studio</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 4. PPC (Pay-Per-Click) Adverts & Scalable Acquisition -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-ppc-ads.jpg" alt="PPC Advertising & Scalable Acquisition" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Performance Media</span>
                <span class="feature-tile-stat-badge highlight-stat">Avg 4.2x ROAS</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">4. PPC (Pay-Per-Click) Advertising</h3>
              <p class="feature-tile-desc">
                Data-backed ad campaigns tailored to your budget velocity and urgency. We advertise your goods and services across Google Ads and Meta Ads with the necessary CTA funnel to help your brand scale with absolute ease.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Google Search Ads</span>
                <span class="chip-tag">Meta Advantage+</span>
                <span class="chip-tag">High-Intent Funnels</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Paid Ads</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 5. Digital Public Relations (PR) for Private Individuals -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-digital-pr.jpg" alt="Digital Public Relations for Private Individuals" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Executive Prestige</span>
                <span class="feature-tile-stat-badge">Tier-1 Press</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">5. Digital PR for Private Individuals</h3>
              <p class="feature-tile-desc">
                Strategic public relations and personal brand engineering for founders, executives, and high-profile individuals seeking authoritative media features, thought leadership syndication, and elevated digital standing.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Verified Press</span>
                <span class="chip-tag">Thought Leadership</span>
                <span class="chip-tag">Executive Profiles</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital PR</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 6. Social Media Marketing (SMM) & Brand Awareness -->
          <div class="feature-tile" data-category="media">
            <div class="feature-tile-media">
              <img src="/images/service-social-media.jpg" alt="Social Media Marketing SMM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Audience Growth</span>
                <span class="feature-tile-stat-badge">+248% Engagement</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">6. Social Media Marketing (SMM)</h3>
              <p class="feature-tile-desc">
                Harness in-house solutions and custom tools to pinpoint your ideal audience, build undeniable brand awareness, and elevate organic visibility that funnels directly into sustainable ROI.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Target Discovery</span>
                <span class="chip-tag">Multi-Platform SMM</span>
                <span class="chip-tag">Community Viral Growth</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for SMM</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 7. Online Reputation Management (ORM) & Brand Defense -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-reputation-orm.jpg" alt="Online Reputation Management ORM" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Brand Defense</span>
                <span class="feature-tile-stat-badge">99.4% Sentiment Restored</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">7. Online Reputation Management</h3>
              <p class="feature-tile-desc">
                Fake products and negative reviews pop up constantly across the spectrum. We proactively restore and defend online brand perceptions through our proprietary online redeeming and search-suppression tools.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Review Defense</span>
                <span class="chip-tag">Search Suppression</span>
                <span class="chip-tag">Counterfeit Takedown</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Brand Defense</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 8. Mobile Application Development (iOS & Android) -->
          <div class="feature-tile" data-category="engineering">
            <div class="feature-tile-media">
              <img src="/images/service-mobile-apps.jpg" alt="Mobile Application Development" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Mobile Engineering</span>
                <span class="feature-tile-stat-badge">★ 4.9 App Store Rating</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">8. Mobile Application Development</h3>
              <p class="feature-tile-desc">
                We design and build powerful, user-friendly mobile applications that engage customers and streamline business operations. Delivering native, hybrid, and cross-platform solutions across iOS and Android with scheduled test &amp; release management.
              </p>
              <div class="chips-row">
                <span class="chip-tag">iOS &amp; Android</span>
                <span class="chip-tag">React Native / Flutter</span>
                <span class="chip-tag">Biometric &amp; Real-Time</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Mobile Apps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- 9. Strategic Digital Campaign Practitioners (Political, GOTV & Mobilization) -->
          <div class="feature-tile" data-category="strategic">
            <div class="feature-tile-media">
              <img src="/images/service-campaigns-gotv.jpg" alt="Strategic Digital Campaigns GOTV" class="feature-tile-img" loading="lazy" />
              <div class="feature-tile-overlay">
                <span class="feature-tile-category-badge">Civic Mobilization</span>
                <span class="feature-tile-stat-badge">WhatsApp API 98% Open</span>
              </div>
            </div>
            <div class="feature-tile-content">
              <h3 class="feature-tile-title">9. Strategic Digital Campaigns (GOTV)</h3>
              <p class="feature-tile-desc">
                Specialized campaign practitioners for your GOTV (Get Out To Vote) strategy, civic mobilization, campaign websites, and Constituent Relationship Management systems. We execute targeted online media blitzes and integrated WhatsApp API multi-channel outreach.
              </p>
              <div class="chips-row">
                <span class="chip-tag">Constituent CRM</span>
                <span class="chip-tag">WhatsApp Broadcasting</span>
                <span class="chip-tag">Precision Media Blitz</span>
              </div>
              <button type="button" class="feature-tile-action trigger-brief-modal">
                <span>Inquire for Digital Campaigns</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Stop Losing Customers Callout -->
        <div class="stop-losing-banner" style="margin-top: 3.5rem;">
          <h3>Ready to Deploy a Winning Digital Strategy?</h3>
          <p>
            Whether you need high-converting websites, 4K video content, mobile app development, or a strategic GOTV digital campaign, our factory delivers far beyond expectations.
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
  `}function U(){const s=document.querySelectorAll("#servicesFilterTabs .ind-tab-btn"),t=document.querySelectorAll("#servicesGrid .feature-tile");s.forEach(i=>{i.addEventListener("click",()=>{s.forEach(a=>a.classList.remove("active")),i.classList.add("active");const e=i.getAttribute("data-filter");t.forEach(a=>{const o=a.getAttribute("data-category");e==="all"||o===e?(a.style.display="flex",a.style.animation="fadeInUp 0.35s ease forwards"):a.style.display="none"})})})}const M={ecommerce:{badge:"E-Commerce & High-Growth DTC",image:"/images/industry-ecommerce.jpg",title:"Scale E-Commerce Revenue & Blended ROAS",desc:"High-ROI Meta, TikTok, and Google Performance Max campaigns paired with conversion-rate-optimized product pages, abandoned cart WhatsApp recovery, and high-LTV email retention flows.",quote:'"Vuvuzela scaled our DTC brand from $35k to $140k/month in 90 days. Their ad creative testing and checkout CRO doubled our blended return on ad spend to 4.6x."',author:"— Julian Vance, E-Commerce Brand Founder",agentName:"Chloe — VIP Concierge AI",agentPhone:"Store Support & VIP Concierge Active",prompts:["Best Sellers","Discount Code","Track My Order","Bundle Offers"],initialMessages:[{sender:"customer",text:"Hey, I saw your Instagram ad for the Winter Collection. Do you have a bundle discount?"},{sender:"ai",text:"Hey there! Yes, our 3-piece Winter Bundle is currently 25% off with free express shipping. Would you like the direct checkout link?"},{sender:"customer",text:"Yes please, and does it include a 30-day return guarantee?"},{sender:"ai",text:"100%! We provide 30-day no-questions-asked free exchanges and returns. Here is your VIP checkout link: [Claim Bundle Discount]."}],responses:{"Best Sellers":"Our top-ranked item this week is the Apex All-Weather Parka with over 450 verified 5-star customer reviews!","Discount Code":"Use promo code VUVUZELA15 at checkout to receive 15% off your first order today.","Track My Order":"Please share your 6-digit order number or the email address used during purchase and I will fetch live courier tracking.","Bundle Offers":"Our Ultimate Essentials Bundle saves you 30% versus purchasing individual items and includes priority dispatch."}},b2b:{badge:"B2B & Professional Services",image:"/images/industry-b2b.jpg",title:"Predictable Pipeline for High-Ticket B2B & Consultancies",desc:"Target corporate decision-makers with precision Google Search & LinkedIn funnels, authoritative case study landing pages, and automated qualification that delivers calendar-ready sales consultations.",quote:'"We used to rely on sporadic referrals. Vuvuzela built a predictable inbound engine that adds 15 to 20 qualified corporate strategy consultations to our calendar every month."',author:"— Marco Rossi, Managing Partner",agentName:"Marcus — B2B Strategy Intake",agentPhone:"Corporate Consulting Pipeline Active",prompts:["Book Consultation","Service Retainers","Case Studies","Corporate Audit"],initialMessages:[{sender:"customer",text:"We are looking to overhaul our digital acquisition and need to know your agency retainer tiers."},{sender:"ai",text:"Welcome! Our dedicated growth partnerships range from €3,500 to €8,500/month depending on ad spend velocity and engineering scope."},{sender:"customer",text:"Can we schedule a 20-minute strategic discovery call this week?"},{sender:"ai",text:"Certainly. I have Wednesday at 2:00 PM or Thursday at 10:30 AM open with our Growth Director. Which slot works best for your team?"}],responses:{"Book Consultation":"I have reserved a 20-minute discovery session for your team. A calendar invite with Google Meet coordinates is on its way.","Service Retainers":"Our retainers cover full-funnel management: Paid Ads (Meta/Google), CRO web engineering, creative testing, and 24/7 lead automation.","Case Studies":"We recently scaled an e-commerce brand to 4.6x ROAS and a B2B firm to €180k monthly recurring revenue. Would you like our breakdown PDF?","Corporate Audit":"Our free growth audit evaluates your current ad accounts, tracking architecture, and conversion drop-offs with an actionable 90-day roadmap."}},clinics:{badge:"Private Clinics & Healthcare",image:"/images/industry-clinics.jpg",title:"High-Value Patient Inbound & Local Dominance",desc:"Capture high-ticket private patient inquiries with local Google search dominance, credible medical landing pages, and 24/7 patient intake triage across web and WhatsApp.",quote:'"Patients booking high-ticket cosmetic dental treatments jumped 80%. Their local Google ad campaigns and rapid WhatsApp triage completely filled our treatment rooms."',author:"— Dr. Sarah O'Connor, Clinic Director",agentName:"Aria — Clinical Intake Concierge",agentPhone:"Patient Help Line Active",prompts:["Emergency Slot","Dental Implants Info","Insurance Check","Teeth Whitening Cost"],initialMessages:[{sender:"customer",text:"I saw your clinic on Google Search. Do you have an emergency appointment open tomorrow morning?"},{sender:"ai",text:"Hello! Yes, we hold emergency triage slots every morning at 8:30 AM and 9:15 AM. Are you experiencing severe pain?"},{sender:"customer",text:"Moderate pain from a cracked molar. 8:30 AM would be a lifesaver."},{sender:"ai",text:"I have reserved the 8:30 AM emergency slot for you with Dr. O'Connor. Our front desk has sent an SMS confirmation with parking details."}],responses:{"Emergency Slot":"We have emergency walk-in availability reserved every morning. I can book you for 8:30 AM right now.","Dental Implants Info":"Our premium dental implant consultations include full 3D CBCT scans and treatment financing options from €89/month.","Insurance Check":"We accept VHI, Laya, Irish Life Health, and PRSI dental benefit claims directly at our front desk.","Teeth Whitening Cost":"Our Philips Zoom professional whitening package is €295, including take-home maintenance trays."}},realestate:{badge:"Real Estate & Luxury Property",image:"/images/industry-realestate.jpg",title:"High-Ticket Investor & Buyer Acquisition",desc:"Precision Meta and Google Search campaigns, bespoke single-development landing pages, and 24/7 WhatsApp investor triage that qualifies budgets and schedules private viewings.",quote:'"Vuvuzela generated over €4.2M in qualified buyer pipeline for our luxury residential developments within 60 days of ad launch."',author:"— James Wilson, Principal Broker",agentName:"Liam — Luxury Property Concierge",agentPhone:"Property Acquisition Line Active",prompts:["Penthouse Listings","Schedule Viewing","Investment Returns","Project Brochure"],initialMessages:[{sender:"customer",text:"Hi, I saw your ad for the Waterfront Residences. Are there 3-bedroom penthouses available?"},{sender:"ai",text:"Good day! Yes, we have two 3-bedroom corner penthouses remaining with panoramic ocean views and private rooftop terraces."},{sender:"customer",text:"Can I schedule a private walkthrough this Friday?"},{sender:"ai",text:"Certainly! I have 11:30 AM or 3:00 PM open this Friday. Would 11:30 AM suit your schedule? I will also dispatch the architectural brochure to your WhatsApp."}],responses:{"Penthouse Listings":"We have 2 corner penthouses starting at €1.45M with bespoke Italian kitchens, smart automation, and private underground parking.","Schedule Viewing":"You're scheduled for Friday at 11:30 AM! Our development director will welcome you at the private presentation lounge.","Investment Returns":"Projected rental yields on this development sit between 7.2% and 8.4% annually, with full turnkey tenancy management provided.","Project Brochure":"The high-resolution architectural plans and specification brochure have been sent to your contact number."}},gotv:{badge:"Political, Civic & GOTV Campaigns",image:"/images/service-campaigns-gotv.jpg",title:"Strategic Voter Mobilization & Constituent Engagement",desc:"Battle-tested online mobilization frameworks, optimized campaign portals, targeted media blitzes, and high-capacity WhatsApp API broadcasting engineered to persuade voters and mobilize communities.",quote:`"Vuvuzela's GOTV digital campaign infrastructure reached over 350,000 constituents with a 98% WhatsApp open rate, swinging turnout by +18.4% on election day."`,author:"— Hon. K. Adeleke, Campaign Director General",agentName:"Ayo — Campaign Mobilization Hub",agentPhone:"Official WhatsApp Mobilization Line Active",prompts:["Polling Unit Locator","Volunteer Sign-up","Policy Manifesto","WhatsApp Broadcast"],initialMessages:[{sender:"customer",text:"Hello, where is my designated polling unit for Ward 4 and how can I join the volunteer team?"},{sender:"ai",text:"Welcome! Your Ward 4 polling station is Community Hall Center. Would you like the GPS directions dispatched to your phone?"},{sender:"customer",text:"Yes, and I would love to sign up for canvassing this weekend."},{sender:"ai",text:"Fantastic! You've been registered as an active Ward 4 Field Volunteer. You'll receive our campaign briefing kit and WhatsApp group invite immediately."}],responses:{"Polling Unit Locator":"Please reply with your voter registration card number or district name and we will display your exact polling station coordinates.","Volunteer Sign-up":"Thank you for standing up for progress! Our field coordinator will connect with you in 10 minutes with your local canvassing schedule.","Policy Manifesto":"Our 5-pillar civic agenda (Jobs, Infrastructure, Education, Healthcare, and Transparency) has been sent to your WhatsApp.","WhatsApp Broadcast":"Our direct constituent broadcast channel reaches 150,000+ verified supporters instantly with zero spam filters."}}};function K(){const t=M["ecommerce"];return`
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
              ${t.badge}
            </div>

            <!-- Contextual Industry Visual Banner -->
            <div class="ind-preview-media">
              <img id="indIndustryImg" src="${t.image}" alt="${t.badge}" class="ind-industry-img" loading="lazy" />
              <div class="ind-preview-tag">
                <span class="pulse-dot dot-green"></span>
                <span id="indTagLabel">${t.badge} Pipeline</span>
              </div>
            </div>

            <h3 style="font-size: 1.85rem; font-weight: 800; color: var(--text-primary); line-height: 1.25;">
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
  `}function Q(){let s="ecommerce";const t=document.querySelectorAll(".ind-tab-btn"),i=document.getElementById("indSectionTitle"),e=document.getElementById("indSectionDesc"),a=document.getElementById("indBadgeText"),o=document.getElementById("indQuoteText"),r=document.getElementById("indQuoteAuthor"),d=document.getElementById("chatAgentName"),c=document.getElementById("chatAgentPhone"),y=document.getElementById("indIndustryImg"),w=document.getElementById("indTagLabel"),u=document.getElementById("chatMessagesScroll"),g=document.getElementById("chatPromptsBar"),v=document.getElementById("chatDemoForm"),b=document.getElementById("chatDemoInput");if(!t.length||!u)return;function C(p){const n=M[p];n&&(s=p,i&&(i.textContent=n.title),e&&(e.textContent=n.desc),a&&(a.textContent=n.badge),o&&(o.textContent=n.quote),r&&(r.textContent=n.author),d&&(d.textContent=n.agentName),c&&(c.textContent=n.agentPhone),y&&(y.src=n.image,y.alt=n.badge),w&&(w.textContent=`${n.badge} Pipeline`),u.innerHTML=n.initialMessages.map(l=>`
      <div class="chat-msg ${l.sender==="customer"?"customer-msg":"ai-msg"}">
        ${l.text}
      </div>
    `).join(""),u.scrollTop=u.scrollHeight,g&&(g.innerHTML=n.prompts.map(l=>`
        <button type="button" class="chat-prompt-pill" data-prompt="${l}">${l}</button>
      `).join(""),m()))}function m(){g==null||g.querySelectorAll(".chat-prompt-pill").forEach(p=>{p.addEventListener("click",()=>{const n=p.getAttribute("data-prompt");k(n)})})}function k(p){if(!p||!p.trim())return;const n=document.createElement("div");n.className="chat-msg customer-msg",n.textContent=p,u.appendChild(n),u.scrollTop=u.scrollHeight;const l=M[s],f=l.responses[p]||`Thank you for asking! Our specialized ${l.badge} growth team will be delighted to audit your marketing.`;setTimeout(()=>{const x=document.createElement("div");x.className="chat-msg ai-msg",x.textContent=f,u.appendChild(x),u.scrollTop=u.scrollHeight},450)}t.forEach(p=>{p.addEventListener("click",()=>{t.forEach(l=>l.classList.remove("active")),p.classList.add("active");const n=p.getAttribute("data-industry");C(n)})}),v==null||v.addEventListener("submit",p=>{if(p.preventDefault(),!b)return;const n=b.value.trim();n&&(k(n),b.value="")}),m()}const h=[{quote:"Vuvuzela restructured our digital ad spend and connected our showroom WhatsApp. In month two, we generated 64 verified test drives at an acquisition cost 42% lower than our historical baseline.",author:"Mike Rodriguez",role:"Principal, Apex Automotive Group",metric:"4.2x ROAS | 64 Test Drives",avatar:"/images/avatar-mike.jpg"},{quote:"They completely re-engineered our Meta & TikTok ad creative and rebuilt our checkout funnels. Our monthly revenue surged from $45k to over $180k within 90 days.",author:"Sarah Chen",role:"Founder & CEO, Lumina DTC Apparel",metric:"+300% Revenue Lift",avatar:"/images/avatar-sarah.jpg"},{quote:"With Vuvuzela DMF, our conversion rates jumped by 85% and inbound LinkedIn/Google Search ad inquiries became our #1 corporate deal generator. The ROI was undeniable within 30 days.",author:"Michael Torres",role:"Managing Director, Vantage B2B Advisory",metric:"+85% Conversion Rate",avatar:"/images/avatar-michael.jpg"},{quote:"Their technical SEO and local Google ad strategy ranked our clinics #1 in our region. We went from struggling for private implant patients to a 3-week waiting list.",author:"Dr. Jennifer Walsh",role:"Clinical Director, City Dental Group",metric:"+140% Private Patients",avatar:"/images/avatar-jennifer.jpg"},{quote:"What sets Vuvuzela apart is their speed-to-lead automation. Every dollar we put into paid ads is captured in seconds on WhatsApp before the lead can cross-shop.",author:"David Kim",role:"VP of Growth, Horizon Retail",metric:"4.8x Blended ROAS",avatar:"/images/avatar-david.jpg"},{quote:"They engineered a high-intent Meta ad funnel and custom property landing page that generated two closed luxury home listings totaling €2.4M in our first quarter.",author:"James Wilson",role:"Principal Broker, Wilson & Co Real Estate",metric:"€2.4M Closed Pipeline",avatar:"/images/avatar-james.jpg"}];function Z(){const s=[h[0],h[1],h[2],h[0],h[1]],t=[h[3],h[4],h[5],h[3],h[4]],i=[h[2],h[5],h[1],h[2],h[5]],e=a=>`
    <div class="test-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.12); padding: 0.2rem 0.6rem; border-radius: 9999px; border: 1px solid rgba(16, 185, 129, 0.25);">
          ${a.metric}
        </span>
        <span style="color: #fbbf24; font-size: 0.85rem;">★★★★★</span>
      </div>
      <p class="test-body">"${a.quote}"</p>
      <div class="test-author-row">
        <img src="${a.avatar}" alt="${a.author}" class="test-avatar-img" loading="lazy" />
        <div>
          <div class="test-name">${a.author}</div>
          <div class="test-role">${a.role}</div>
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
            ${s.map(e).join("")}
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
  `}function _(){return`
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
  `}const S={NGN:{code:"NGN",symbol:"₦",presets:{ecommerce:{label:"E-Commerce & DTC Brands (₦85,000 avg order)",order:85e3,min:1e4,max:5e5,step:5e3},b2b:{label:"B2B & Professional Services (₦1,500,000 avg retainer)",order:15e5,min:25e4,max:1e7,step:5e4},clinics:{label:"Private Healthcare & Clinics (₦250,000 avg patient)",order:25e4,min:5e4,max:3e6,step:25e3},realestate:{label:"Real Estate & Property (₦5,000,000 avg commission/deal)",order:5e6,min:5e5,max:25e6,step:1e5},saas:{label:"SaaS & Tech Subscriptions (₦150,000 avg MRR)",order:15e4,min:25e3,max:2e6,step:1e4}}},USD:{code:"USD",symbol:"$",presets:{ecommerce:{label:"E-Commerce & DTC Brands ($85 avg order)",order:85,min:25,max:1e3,step:5},b2b:{label:"B2B & Professional Services ($1,500 avg retainer)",order:1500,min:300,max:5e3,step:50},clinics:{label:"Private Healthcare & Clinics ($250 avg patient)",order:250,min:50,max:2e3,step:25},realestate:{label:"Real Estate & Property ($3,500 avg deal)",order:3500,min:500,max:1e4,step:100},saas:{label:"SaaS & Tech Subscriptions ($150 avg MRR)",order:150,min:30,max:2500,step:25}}}};function X(){try{const s=Intl.DateTimeFormat().resolvedOptions().timeZone||"";if(s.toLowerCase().includes("lagos")||s.toLowerCase().includes("nigeria")||(navigator.languages||[navigator.language||""]).some(e=>e&&e.toLowerCase().includes("-ng")))return"NGN"}catch{}return"USD"}function J(){const s=document.getElementById("businessSectorSelect"),t=document.getElementById("sliderVisitors"),i=document.getElementById("sliderConversion"),e=document.getElementById("sliderOrder"),a=document.getElementById("valVisitors"),o=document.getElementById("valConversion"),r=document.getElementById("valOrder"),d=document.getElementById("sliderOrderMinLabel"),c=document.getElementById("sliderOrderMaxLabel"),y=document.getElementById("kpiLeads"),w=document.getElementById("kpiMonthlyRev"),u=document.getElementById("kpiLift"),g=document.getElementById("kpiAnnualRev");if(!t||!i||!e||!s)return;let v=X();function b(n="ecommerce"){const l=S[v];s.innerHTML=Object.entries(l.presets).map(([f,x])=>`
          <option value="${f}" ${f===n?"selected":""}>
            ${x.label}
          </option>
        `).join("")}function C(){const n=S[v],l=s.value||"ecommerce";b(l);const f=n.presets[l]||n.presets.ecommerce;e.min=f.min,e.max=f.max,e.step=f.step,e.value=f.order,d&&(d.textContent=`${n.symbol}${Number(f.min).toLocaleString()}`),c&&(c.textContent=`${n.symbol}${Number(f.max).toLocaleString()}`),m()}function m(){const n=S[v],l=parseInt(t.value,10),f=parseFloat(i.value),x=parseInt(e.value,10);a.textContent=Number(l).toLocaleString(),o.textContent=`${f.toFixed(1)}%`,r.textContent=`${n.symbol}${Number(x).toLocaleString()}`;const E=l*(f/100),A=35,B=Math.round(E*(A/100)),I=Math.round(B*x),R=I*12;y.textContent=`+${B.toLocaleString()}`,w.textContent=`+${n.symbol}${I.toLocaleString()}`,u.textContent=`+${A.toFixed(1)}%`,g.textContent=`${n.symbol}${R.toLocaleString()}`}s.addEventListener("change",()=>{const n=S[v],l=n.presets[s.value];l&&(e.min=l.min,e.max=l.max,e.step=l.step,e.value=l.order,d&&(d.textContent=`${n.symbol}${Number(l.min).toLocaleString()}`),c&&(c.textContent=`${n.symbol}${Number(l.max).toLocaleString()}`),m())}),t.addEventListener("input",m),i.addEventListener("input",m),e.addEventListener("input",m),C();const k=new AbortController,p=setTimeout(()=>k.abort(),2500);fetch("https://api.country.is/",{signal:k.signal}).then(n=>n.json()).then(n=>{if(clearTimeout(p),n&&n.country){const l=n.country==="NG"?"NGN":"USD";l!==v&&(v=l,C())}}).catch(()=>{fetch("https://ipapi.co/json/",{signal:k.signal}).then(n=>n.json()).then(n=>{if(n&&n.country_code){const l=n.country_code==="NG"?"NGN":"USD";l!==v&&(v=l,C())}}).catch(()=>{})})}const ee=[{id:"faq-1",question:"What are the 9 core services offered by Vuvuzela Digital Marketing Factory Inc.?",answer:"We deliver 9 core capabilities: 1) Eye-catching Logos & Brand Identity; 2) Everyday Websites & E-Commerce CRO Funnels; 3) Online Video & Lifecycle Content Marketing; 4) PPC (Pay-Per-Click) Google & Meta Ads; 5) Digital PR for Private Individuals; 6) Strategic Social Media Marketing; 7) Online Reputation Management (ORM) & Brand Defense; 8) Mobile Application Development (iOS & Android); and 9) Strategic Digital Campaigns (GOTV & Civic Mobilization)."},{id:"faq-2",question:"How do your Strategic Digital Campaigns and GOTV (Get Out To Vote) services work?",answer:"Our political and civic campaign practitioners build a battle-tested framework: we develop optimized campaign websites, deploy targeted online media blitzes across Google and Meta, integrate high-capacity WhatsApp APIs (achieving 98%+ open rates), and establish Constituent Relationship Management systems to build awareness, persuade voters, and mobilize supporters."},{id:"faq-3",question:"What does your Online Reputation Management (ORM) service cover?",answer:"Our ORM framework actively protects brands and high-profile individuals against counterfeit goods, fake product listings, defamatory attacks, and negative review spikes. Using proprietary online redeeming tools, negative search suppression, and proactive sentiment defense, we rehabilitate and safeguard your digital perception."},{id:"faq-4",question:"What technology stacks do you use for Websites and Mobile App Development?",answer:"For web and e-commerce, we engineer custom platforms with Vite, Next.js, Shopify, and WordPress engineered for 99+ Lighthouse scores and psychological CRO funnels. For mobile apps, we develop native, hybrid, and cross-platform solutions for iOS and Android (React Native / Flutter) backed by scheduled test & App Store release management."},{id:"faq-5",question:"How quickly do we see measurable results and pipeline growth?",answer:"Paid advertising campaigns on Meta and Google typically start generating qualified leads within the first 7 to 14 days of launch. Bespoke web engineering and CRO funnels are launched within 2 to 4 weeks, while organic technical SEO compounding begins demonstrating strong ranking acceleration within 60 to 90 days."},{id:"faq-6",question:"How does Vuvuzela guarantee return on ad spend (ROAS)?",answer:"Unlike traditional agencies that report on vanity clicks and impressions, our media campaigns are held strictly accountable to closed-revenue and qualified inquiry KPIs. We implement conversion API tracking, real-time lead validation, and continuous high-velocity creative testing, maintaining an average blended client ROAS of 4.2x."}];function te(){const s=`
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
          ${ee.map((i,e)=>{const a=e===0;return`
              <div class="faq-item ${a?"open":""}" data-faq-id="${i.id}">
                <button type="button" class="faq-question" aria-expanded="${a?"true":"false"}" aria-controls="${i.id}-answer" id="${i.id}-question">
                  <span class="faq-question-text">${i.question}</span>
                  <div class="faq-toggle" aria-hidden="true">
                    ${a?t:s}
                  </div>
                </button>
                <div class="faq-answer" id="${i.id}-answer" role="region" aria-labelledby="${i.id}-question" style="${a?"max-height: 400px;":"max-height: 0px;"}">
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
  `}function ie(){const s=document.getElementById("faqAccordion");if(!s)return;const t=`
    <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,i=`
    <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,e=s.querySelectorAll(".faq-item"),a=s.querySelector(".faq-item.open");if(a){const o=a.querySelector(".faq-answer");o&&(o.style.maxHeight=o.scrollHeight+30+"px")}e.forEach(o=>{const r=o.querySelector(".faq-question"),d=o.querySelector(".faq-answer"),c=o.querySelector(".faq-toggle");r==null||r.addEventListener("click",y=>{if(y.preventDefault(),o.classList.contains("open")){o.classList.remove("open"),r.setAttribute("aria-expanded","false"),d.style.maxHeight="0px",c.innerHTML=t;return}e.forEach(u=>{if(u!==o&&u.classList.contains("open")){u.classList.remove("open");const g=u.querySelector(".faq-question"),v=u.querySelector(".faq-answer"),b=u.querySelector(".faq-toggle");g==null||g.setAttribute("aria-expanded","false"),v&&(v.style.maxHeight="0px"),b&&(b.innerHTML=t)}}),o.classList.add("open"),r.setAttribute("aria-expanded","true"),d.style.maxHeight=d.scrollHeight+30+"px",c.innerHTML=i})})}function ae(){return`
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
  `}class ne{constructor(t="appRoot"){this.rootContainer=document.getElementById(t),this.transitionOverlay=document.getElementById("pageTransitionOverlay"),this.currentPath=this.normalizePath(window.location.pathname)}normalizePath(t){return"/"}init(){document.addEventListener("click",t=>{const i=t.target.closest("a");if(!i)return;const e=i.getAttribute("href");if(!e||e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:")||i.target==="_blank")return;if(e.startsWith("#")){t.preventDefault(),this.scrollToAnchor(e);return}const a=i.getAttribute("data-route")||e,o=this.normalizePath(a);if(o!==this.currentPath)t.preventDefault(),this.navigateTo(o);else if(e.includes("#")){t.preventDefault();const r=e.substring(e.indexOf("#"));this.scrollToAnchor(r)}}),window.addEventListener("popstate",()=>{this.renderRoute("/",!1)}),this.renderRoute("/",!1),window.location.hash&&setTimeout(()=>{this.scrollToAnchor(window.location.hash)},200)}navigateTo(t){this.isNavigating||(this.isNavigating=!0,this.transitionOverlay&&this.transitionOverlay.classList.add("is-active"),setTimeout(()=>{window.history.pushState({},"","/"),this.renderRoute("/",!0),window.scrollTo(0,0),setTimeout(()=>{this.transitionOverlay&&this.transitionOverlay.classList.remove("is-active"),this.isNavigating=!1},100)},220))}renderRoute(t,i){if(!this.rootContainer)return;let e="";e+=F(),document.title="Vuvuzela DMF — Performance Digital Marketing Agency & Web Engineering",e+=$(),e+=N(),e+=Y(),e+=K(),e+=Z(),e+=_(),e+=te(),e+=ae(),e+=se(),this.rootContainer.innerHTML=e,H(),j(),U(),Q(),J(),ie()}scrollToAnchor(t){const i=document.querySelector(t);if(i){const a=i.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:Math.max(0,a-90),behavior:"smooth"})}}}document.addEventListener("DOMContentLoaded",()=>{z(),O("auroraCanvas");const s=document.getElementById("modalMount");s&&(s.innerHTML=q(),D());const t=document.getElementById("whatsappMount");t&&(t.innerHTML=V()),new ne("appRoot").init()});
