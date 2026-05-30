/** Stylab — pro motion (reveals, sticky CTA, stagger) */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Sticky install bar ─────────────────────────────────── */
  var sticky = document.getElementById('stickyCta');
  if (sticky) {
    function updateSticky() {
      sticky.classList.toggle('is-visible', window.scrollY > 240);
    }
    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
    if (reduced) sticky.classList.add('is-visible');
  }

  /* ── Reduced motion: reveal everything immediately ──────── */
  if (reduced) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  /* ── Ambient parallax ───────────────────────────────────── */
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

  /* ── Stagger child elements ─────────────────────────────── */
  var staggerGroups = [
    '.pp-ba-card',
    '.hiw-step',
    '.price-card',
    '.faq-item',
    '.proof-metrics div'
  ];

  staggerGroups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      /* inline delay so CSS transition is staggered */
      el.style.transitionDelay = (i % 4) * 0.10 + 's';
    });
  });

  /* ── IntersectionObserver — add .visible on scroll ──────── */
  if (!('IntersectionObserver' in window)) {
    /* Fallback: show everything instantly */
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
    io.observe(el);
  });

  /* ── Featured pricing card tilt (pointer: fine only) ────── */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.price-card.featured').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          'perspective(900px) rotateY(' + (x * 4) + 'deg) ' +
          'rotateX(' + (-y * 4) + 'deg) translateY(-2px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }
})();
