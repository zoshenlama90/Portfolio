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
});
