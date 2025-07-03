// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active'); // Close menu on mobile after clicking
    }
  });
});

// Dark Mode Toggle (press "D" key)
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'd') {
    document.body.classList.toggle('dark-mode');
  }
});
