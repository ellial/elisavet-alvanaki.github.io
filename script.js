// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after choosing a destination
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// News category filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.news-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    newsItems.forEach((item) => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

// BibTeX toggles
document.querySelectorAll('.bibtex-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const bibtex = button.closest('.pub').querySelector('.bibtex');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    bibtex.hidden = expanded;
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
