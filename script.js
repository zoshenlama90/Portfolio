// Force page to load at top
window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const navToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
  });

  // Scroll-to-top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => { window.scrollTo({ top:0, behavior:'smooth' }); });

  // Animate skill bars
  const skills = document.querySelectorAll('.skill-level');
  function animateSkills() {
    const triggerBottom = window.innerHeight / 5 * 4;
    skills.forEach(skill => {
      const skillTop = skill.getBoundingClientRect().top;
      if(skillTop < triggerBottom){
        skill.style.width = skill.getAttribute('style').split('width:')[1];
      }
    });
  }
  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);

  // Smooth scroll offset for anchor links
  const navbar = document.querySelector('.navbar');
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      const offset = navbar.offsetHeight + 5; // small gap
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
      // Close mobile menu on click
      if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.display = 'none';
      }
    });
  });

  // Ensure page always loads at top
  window.onbeforeunload = function () { window.scrollTo(0, 0); };
});
