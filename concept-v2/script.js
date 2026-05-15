document.addEventListener('DOMContentLoaded', () => {
  // Simple scroll reveal for glass cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    observer.observe(card);
  });

  // Parallax effect for hero visual
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual img');
    if (heroVisual) {
      heroVisual.style.transform = `translateY(${scroll * 0.3}px)`;
    }
  });
});
