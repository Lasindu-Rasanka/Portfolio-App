document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initialize animations
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add fade-in class to sections for scroll animations
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    // Add delay classes to create staggered animations
    if (index > 0) {
      section.classList.add(`delay-${index % 3}`);
    }
  });
  
  // Project card hover effect enhancement
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('h3').style.color = 'var(--primary-dark)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('h3').style.color = 'var(--primary)';
    });
  });
  
  // Console greeting
  console.log('%c👋 Hello! Thanks for checking out my portfolio.', 'color: #2563eb; font-size: 16px; font-weight: bold;');
  console.log('%cBuilt with ♥ by Lasindu Rasanka', 'color: #64748b; font-size: 14px;');
});