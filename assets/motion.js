/** Stylab — fast motion (reveals, sticky CTA, stagger) */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var APP = 'https://apps.shopify.com/try-on-stylelab';

  /* ── Sticky install bar — visible after hero, stronger after demo ─ */
  var sticky = document.getElementById('stickyCta');
  var stickyMobileMq = window.matchMedia('(max-width: 768px)');
  if (sticky) {
    function updateSticky() {
      if (!stickyMobileMq.matches) {
        sticky.classList.remove('is-visible', 'is-urgent');
        return;
      }
      var demoDone = false;
      try { demoDone = !!sessionStorage.getItem('stylab_demo_done'); } catch (e) {}
      var show = window.scrollY > 280;
      sticky.classList.toggle('is-visible', show);
      sticky.classList.toggle('is-urgent', demoDone);
      var label = document.getElementById('stickyCtaLabel');
      var link = document.getElementById('stickyCtaPrimary');
      if (label) label.textContent = demoDone ? 'Install free now →' : 'Install free';
      if (link && demoDone) link.href = APP;
    }
    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
    stickyMobileMq.addEventListener('change', updateSticky);
    if (reduced && stickyMobileMq.matches) sticky.classList.add('is-visible');
  }

  if (reduced) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var ambient = document.querySelector('.ambient');
  if (ambient) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ambient.style.transform = 'translate3d(0,' + (window.scrollY * 0.018) + 'px,0)';
        ticking = false;
      });
    }, { passive: true });
  }

  var staggerGroups = [
    '.versus-col',
    '.demo-flow-step',
    '.guide-step-row',
    '.install-step',
    '.testimonial-card',
    '.why-card',
    '.pp-proof-card',
    '.pp-ideal-card',
    '.pp-objection-card',
    '.hiw-step',
    '.faq-item',
    '.install-strip'
  ];

  staggerGroups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      el.style.transitionDelay = (i % 6) * 0.055 + 's';
    });
  });

  if (!('IntersectionObserver' in window)) {
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
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
    io.observe(el);
  });

  /* Hero device float */
  var device = document.querySelector('.hero-device');
  if (device && window.matchMedia('(pointer: fine)').matches) {
    device.classList.add('hero-device--float');
  }

  /* Showcase card tilt */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.showcase-card--hero, .pp-final-box').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          'perspective(900px) rotateY(' + (x * 3) + 'deg) rotateX(' + (-y * 3) + 'deg)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }
})();
