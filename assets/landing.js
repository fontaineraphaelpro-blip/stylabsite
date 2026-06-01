/** Homepage — interactions */
(function () {
  var isFr = document.documentElement.lang === 'fr' || /\/fr(\/|$)/.test(location.pathname);

  var versusCopyEn = {
    jersey: {
      beforeScore: 28,
      afterScore: 92,
      delta: '↑ +64 buy-intent score',
      beforeQuote: 'They want the jersey — but can\'t picture it on them. Tab closed, cart empty.',
      afterQuote: 'They see the kit on their body in ~30s — confidence spikes, add to cart.',
      product: 'jersey'
    },
    hoodie: {
      beforeScore: 31,
      afterScore: 89,
      delta: '↑ +58 buy-intent score',
      beforeQuote: 'Size chart opened, doubt wins. They leave to "think about it."',
      afterQuote: 'Hoodie on their silhouette — fewer returns, faster checkout.',
      product: 'hoodie'
    },
    mobile: {
      beforeScore: 24,
      afterScore: 94,
      delta: '↑ +70 buy-intent score',
      beforeQuote: 'Thumb-scroll traffic with zero body context — bounce before ATC.',
      afterQuote: 'Selfie → full-screen preview → cart. Native mobile flow.',
      product: 'jersey'
    }
  };

  var versusCopyFr = {
    jersey: {
      beforeScore: 28,
      afterScore: 92,
      delta: '↑ +64 pts intention',
      beforeQuote: 'Il veut le maillot — mais ne se le voit pas. Onglet fermé, panier vide.',
      afterQuote: 'Il se voit avec le maillot en ~30s — confiance, ajout au panier.',
      product: 'jersey'
    },
    hoodie: {
      beforeScore: 31,
      afterScore: 89,
      delta: '↑ +58 pts intention',
      beforeQuote: 'Guide des tailles ouvert — le doute gagne, il repart « réfléchir ».',
      afterQuote: 'Hoodie sur sa silhouette — moins de retours, checkout plus rapide.',
      product: 'hoodie'
    },
    mobile: {
      beforeScore: 24,
      afterScore: 94,
      delta: '↑ +70 pts intention',
      beforeQuote: 'Trafic mobile sans contexte corps — rebond avant le panier.',
      afterQuote: 'Selfie → aperçu plein écran → panier. Flux mobile natif.',
      product: 'jersey'
    }
  };

  var versusCopy = isFr ? versusCopyFr : versusCopyEn;

  var tabs = document.querySelectorAll('.versus-tab');
  var panel = document.querySelector('.versus-panel.active') || document.querySelector('.versus-panel');

  function animateScore(el, target) {
    if (!el) return;
    var start = parseInt(el.textContent, 10) || 0;
    var duration = 700;
    var t0 = performance.now();
    function frame(now) {
      var p = Math.min(1, (now - t0) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function setVersus(key) {
    var d = versusCopy[key];
    if (!d || !panel) return;
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-versus') === key;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panel.setAttribute('data-versus', key);
    var grid = panel.querySelector('.versus-grid');
    if (grid) grid.setAttribute('data-versus-product', d.product);
    if (window.setVersusProduct) window.setVersusProduct(d.product);
    var beforeQ = panel.querySelector('[data-versus-quote="before"]');
    var afterQ = panel.querySelector('[data-versus-quote="after"]');
    var delta = panel.querySelector('[data-versus-delta]');
    if (beforeQ) beforeQ.textContent = d.beforeQuote;
    if (afterQ) afterQ.textContent = d.afterQuote;
    if (delta) delta.textContent = d.delta;
    animateScore(panel.querySelector('[data-score="before"]'), d.beforeScore);
    animateScore(panel.querySelector('[data-score="after"]'), d.afterScore);
    if (window.setVersusProduct) window.setVersusProduct(d.product);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setVersus(tab.getAttribute('data-versus'));
    });
  });

  if (tabs.length) setVersus('jersey');

  var flowSteps = document.querySelectorAll('.demo-flow-step');
  var progressBar = document.querySelector('.demo-progress-bar');
  var flowIdx = 0;
  var flowDuration = 2200;

  function setFlowStep(i) {
    flowSteps.forEach(function (el, idx) {
      el.classList.toggle('active', idx === i);
    });
    if (progressBar) {
      progressBar.style.width = '0%';
      requestAnimationFrame(function () {
        progressBar.style.transition = 'width ' + flowDuration + 'ms linear';
        progressBar.style.width = '100%';
      });
    }
    flowIdx = i;
  }

  if (flowSteps.length) {
    setFlowStep(0);
    setInterval(function () {
      setFlowStep((flowIdx + 1) % flowSteps.length);
    }, flowDuration);
  }

  var guideRows = document.querySelectorAll('.guide-step-row');
  function setGuideStep(n) {
    guideRows.forEach(function (row) {
      var s = parseInt(row.getAttribute('data-guide'), 10);
      row.classList.toggle('active', s === n);
      row.classList.toggle('done', s < n);
    });
  }
  setGuideStep(1);
  window.addEventListener('stylab-funnel-step', function (e) {
    if (e.detail && e.detail.step) setGuideStep(Math.min(3, e.detail.step));
  });

  var versusSection = document.getElementById('versus');
  if (versusSection && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var active = document.querySelector('.versus-tab.active');
          setVersus(active ? active.getAttribute('data-versus') : 'jersey');
          vio.disconnect();
        }
      });
    }, { threshold: 0.2 });
    vio.observe(versusSection);
  }
})();
