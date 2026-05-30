/** Stylab — pro motion (smooth reveals, sticky CTA, no transform conflicts) */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky install bar — visible after hero scroll */
  var sticky = document.getElementById('stickyCta');
  if (sticky) {
    function updateSticky() {
      var show = window.scrollY > 240;
      sticky.classList.toggle('is-visible', show);
      document.body.classList.toggle('sticky-visible', show);
    }
    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
    if (reduced) sticky.classList.add('is-visible');
  }

  if (reduced) return;

  /* Subtle ambient parallax — does not fight orb CSS animations */
  var ambient = document.querySelector('.ambient');
  if (ambient) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ambient.style.transform = 'translate3d(0,' + (window.scrollY * 0.012) + 'px,0)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* Stagger reveals for key conversion blocks */
  var staggerSelectors = [
    '.proof-metrics div',
    '.pp-ba-card',
    '.hiw-step',
    '.price-card',
    '.faq-item',
    '.pp-final-box'
  ];

  staggerSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      if (i % 3 === 1) el.classList.add('stagger-1');
      if (i % 3 === 2) el.classList.add('stagger-2');
    });
  });

  /* Featured pricing card — gentle attention (no tilt on trial widget) */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.price-card.featured').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(900px) rotateY(' + (x * 4) + 'deg) rotateX(' + (-y * 4) + 'deg) translateY(-2px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }
})();
