/**
 * VUVUZELA DIGITAL MARKETING FACTORY
 * Case Studies Filter Engine
 */

export function initCaseStudyFilters() {
  const filterButtons = document.querySelectorAll('.case-filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  if (!filterButtons.length || !caseCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      caseCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
