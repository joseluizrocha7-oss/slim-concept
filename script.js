document.addEventListener('DOMContentLoaded', () => {
  // ===== HERO VIDEO LOOP (20s - 35s) =====
  const heroVid = document.getElementById('hero-video');
  if (heroVid) {
    const startLoop = () => {
      heroVid.currentTime = 20;
      heroVid.play().catch(e => console.log('Autoplay blocked:', e));
    };
    if (heroVid.readyState >= 1) startLoop();
    else heroVid.addEventListener('loadedmetadata', startLoop);

    heroVid.addEventListener('timeupdate', () => {
      if (heroVid.currentTime >= 35) heroVid.currentTime = 20;
    });
  }

  // Toggle removido para estilo LC3D (Dark mode only)

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ===== FADE-UP ON SCROLL =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== HAMBURGER & MOBILE MENU =====
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // ===== AUTO-HIDE HEADER ON SCROLL =====
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Don't hide header if we're at the very top
    if (currentScroll <= 0) {
      header.classList.remove('hidden');
      return;
    }
    
    // Don't hide if menu is open
    if (nav && nav.classList.contains('active')) {
      return; 
    }

    if (currentScroll > lastScroll && currentScroll > 68) {
      // Scroll Down -> Hide
      header.classList.add('hidden');
    } else {
      // Scroll Up -> Show
      header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  });
});
