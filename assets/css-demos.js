/** Install theater + versus product variant */
(function () {
  'use strict';

  function initInstallTheater() {
    var track = document.getElementById('installTheater');
    if (!track) return;
    var steps = track.querySelectorAll('.install-step');
    if (!steps.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ms = reduced ? 0 : 2400;
    var idx = 0;

    function resetToggles() {
      track.querySelectorAll('.dc-tog').forEach(function (t) {
        t.classList.remove('is-on');
      });
    }

    function activateStep(step) {
      resetToggles();
      var toggles = step.querySelectorAll('.dc-tog');
      toggles.forEach(function (t, i) {
        setTimeout(function () {
          t.classList.add('is-on');
        }, 280 + i * 380);
      });
      var installBtn = step.querySelector('.dc-install-cta');
      if (installBtn) {
        installBtn.classList.remove('is-clicked');
        setTimeout(function () {
          installBtn.classList.add('is-clicked');
        }, 500);
      }
    }

    function show(i) {
      steps.forEach(function (s, n) {
        s.classList.toggle('is-active', n === i);
      });
      activateStep(steps[i]);
      idx = i;
    }

    show(0);
    if (ms < 400) return;
    setInterval(function () {
      show((idx + 1) % steps.length);
    }, ms);
  }

  function setVersusProduct(key) {
    var garment = key === 'hoodie' ? 'hoodie' : 'jersey';
    document.querySelectorAll('[data-versus-product]').forEach(function (el) {
      el.setAttribute('data-versus-product', garment);
    });
  }

  window.setVersusProduct = setVersusProduct;

  initInstallTheater();

  document.querySelectorAll('.versus-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      setVersusProduct(tab.getAttribute('data-versus') || 'jersey');
    });
  });
  setVersusProduct('jersey');
})();
