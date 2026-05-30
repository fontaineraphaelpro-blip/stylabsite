/** Stylab — lightweight motion (orbs parallax, stagger, tilt) */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var orbs = document.querySelectorAll('.orb');
  if (orbs.length) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY * 0.04;
      orbs.forEach(function (orb, i) {
        orb.style.transform = 'translateY(' + (y * (i + 1) * 0.3) + 'px)';
      });
    }, { passive: true });
  }

  document.querySelectorAll('.diff-grid .diff-card, .reviews-grid .review-card, .hub-grid .hub-card').forEach(function (card, i) {
    card.classList.add('reveal');
    if (i % 4 === 1) card.classList.add('stagger-1');
    if (i % 4 === 2) card.classList.add('stagger-2');
    if (i % 4 === 3) card.classList.add('stagger-3');
  });

  document.querySelectorAll('.hiw-step').forEach(function (step, i) {
    step.classList.add('reveal', 'stagger-' + (i + 1));
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.price-card.featured, .trial-box').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }
})();
