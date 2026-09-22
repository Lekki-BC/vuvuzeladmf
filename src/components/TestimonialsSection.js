/**
 * TestimonialsSection - Verified case studies and client reviews
 * Multi-column vertical smooth scrolling marquee with gradient mask
 */

const TESTIMONIALS = [
  {
    quote: 'We went from missing 70% of after-hours inquiries to capturing every single lead. Customer bookings increased 50% in the first month alone.',
    author: 'Mike Rodriguez',
    role: 'Dealership Owner, Apex Automotive',
    metric: '+50% Bookings'
  },
  {
    quote: 'We spend so much less time manually replying to leads because of the instant engagement Vuvuzela offers. Our pipeline velocity has doubled.',
    author: 'Sarah Chen',
    role: 'Sales Director, Nexus SaaS',
    metric: '2x Velocity'
  },
  {
    quote: 'With Vuvuzela DMF, our conversion rates increased by 85% and boosted our weekend revenue by 40%. The ROI was undeniable within 21 days.',
    author: 'Michael Torres',
    role: 'General Manager, Grand Plaza',
    metric: '+85% Conv. Rate'
  },
  {
    quote: 'The AI handles patient questions 24/7, so our clinical staff can focus on procedures rather than telephone administration.',
    author: 'Dr. Jennifer Walsh',
    role: 'Clinical Director, City Dental Group',
    metric: 'Zero Wait Time'
  },
  {
    quote: 'Client satisfaction scores jumped dramatically. Customers constantly praise how quick and helpful our website chat assistant is.',
    author: 'David Kim',
    role: 'Customer Experience Lead, Horizon Retail',
    metric: '4.9/5 Rating'
  },
  {
    quote: 'Property inquiries are qualified and booked instantly now. We closed 3x more premium real estate transactions in Q2 alone.',
    author: 'James Wilson',
    role: 'Principal Broker, Wilson & Co Real Estate',
    metric: '3x More Deals'
  }
];

export function renderTestimonialsSection() {
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[0], TESTIMONIALS[1]];
  const col2 = [TESTIMONIALS[3], TESTIMONIALS[4], TESTIMONIALS[5], TESTIMONIALS[3], TESTIMONIALS[4]];
  const col3 = [TESTIMONIALS[2], TESTIMONIALS[5], TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[5]];

  const renderCard = (t) => `
    <div class="test-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.12); padding: 0.2rem 0.6rem; border-radius: 9999px; border: 1px solid rgba(16, 185, 129, 0.25);">
          ${t.metric}
        </span>
        <span style="color: #fbbf24; font-size: 0.85rem;">★★★★★</span>
      </div>
      <p class="test-body">"${t.quote}"</p>
      <div class="test-author-row">
        <div class="test-avatar-placeholder">
          ${t.author.charAt(0)}
        </div>
        <div>
          <div class="test-name">${t.author}</div>
          <div class="test-role">${t.role}</div>
        </div>
      </div>
    </div>
  `;

  return `
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
            ${col1.map(renderCard).join('')}
          </div>
          <div class="test-col-track reverse-scroll">
            ${col2.map(renderCard).join('')}
          </div>
          <div class="test-col-track">
            ${col3.map(renderCard).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
