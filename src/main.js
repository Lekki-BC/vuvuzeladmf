/**
 * VUVUZELA DIGITAL MARKETING FACTORY (vuvuzeladmf)
 * Application Entry Point - Cliste Template Architecture
 */

import { initAuroraBg } from './components/AuroraBg.js';
import { renderBriefModal, initBriefModal } from './components/BriefModal.js';
import { renderWhatsAppWidget } from './components/WhatsAppWidget.js';
import { AppRouter } from './components/Router.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Aurora ambient canvas background
  initAuroraBg('auroraCanvas');

  // 2. Render and initialize Brief / Demo Modal
  const modalContainer = document.getElementById('modalMount');
  if (modalContainer) {
    modalContainer.innerHTML = renderBriefModal();
    initBriefModal();
  }

  // 3. Render Fixed Floating WhatsApp Direct Contact Widget
  const whatsappContainer = document.getElementById('whatsappMount');
  if (whatsappContainer) {
    whatsappContainer.innerHTML = renderWhatsAppWidget();
  }

  // 4. Initialize Client-side Router and Page Rendering
  const router = new AppRouter('appRoot');
  router.init();
});
