/** Conversion funnel — sticky bar, scroll stages, post-demo unlock */
(function () {
  'use strict';

  var isFr = document.documentElement.lang === 'fr' || /\/fr(\/|$)/.test(location.pathname);
  var APP = 'https://apps.shopify.com/try-on-stylelab';
  var MAX = 4;

  var copy = isFr
    ? {
        cta: [
          { long: 'Voir le parcours', short: 'Parcours', href: '#versus' },
          { long: 'Essayer sur moi', short: 'Essayer', href: '#journey' },
          { long: 'Voir mon résultat', short: 'Résultat', href: '#journey' },
          { long: 'Installer gratuit →', short: 'Installer', href: APP, external: true }
        ],
        sticky: ['Installer gratuit', 'Installer maintenant →']
      }
    : {
        cta: [
          { long: 'See how it works', short: 'How', href: '#versus' },
          { long: 'Try it on you', short: 'Try', href: '#journey' },
          { long: 'See your result', short: 'Result', href: '#journey' },
          { long: 'Install free →', short: 'Install', href: APP, external: true }
        ],
        sticky: ['Install free', 'Install free now →']
      };

  var funnelSteps = document.querySelectorAll('[data-funnel-step]');
  var funnelBarCta = document.getElementById('funnelBarCta');
  var funnelBarEl = document.getElementById('funnelBar');
  var postDemoCta = document.getElementById('postDemoCta');
  var stickyLabel = document.getElementById('stickyCtaLabel');
  var demoDone = false;
  var currentFunnel = 1;

  try {
    demoDone = !!sessionStorage.getItem('stylab_demo_done');
  } catch (e) {}

  function applyCta(cfg) {
    if (!funnelBarCta || !cfg) return;
    funnelBarCta.href = cfg.href;
    if (cfg.external) {
      funnelBarCta.target = '_blank';
      funnelBarCta.rel = 'noopener';
    } else {
      funnelBarCta.removeAttribute('target');
      funnelBarCta.removeAttribute('rel');
    }
    funnelBarCta.innerHTML =
      '<span class="long">' + cfg.long + '</span><span class="short">' + cfg.short + '</span>';
  }

  function setFunnelStep(step) {
    currentFunnel = Math.max(1, Math.min(MAX, step));
    if (demoDone && currentFunnel < MAX) currentFunnel = MAX;

    funnelSteps.forEach(function (el) {
      var n = parseInt(el.getAttribute('data-funnel-step'), 10);
      el.classList.toggle('active', n === currentFunnel);
      el.classList.toggle('done', n < currentFunnel);
    });

    applyCta(copy.cta[currentFunnel - 1]);

    if (stickyLabel) {
      stickyLabel.textContent = demoDone || currentFunnel >= MAX ? copy.sticky[1] : copy.sticky[0];
    }

    try {
      window.dispatchEvent(
        new CustomEvent('stylab-funnel-step', { detail: { step: Math.min(3, currentFunnel) } })
      );
    } catch (e) {}
  }

  function showPostDemo() {
    if (demoDone) return;
    demoDone = true;
    try {
      sessionStorage.setItem('stylab_demo_done', '1');
    } catch (e) {}
    if (postDemoCta) postDemoCta.hidden = false;
    var trialBox = document.getElementById('trialBox');
    if (trialBox) trialBox.classList.remove('demo-highlight');
    setFunnelStep(MAX);
    if (window.ppSetJourneyStep) window.ppSetJourneyStep(2);
  }

  function hasTryOnResult() {
    return !!document.querySelector(
      '.vton-result-image, .vton-modal--result, #vton-panel-result.active, .vton-modal-content.has-result'
    );
  }

  function updateFunnelOnScroll() {
    if (demoDone) {
      setFunnelStep(MAX);
      return;
    }

    var vh = window.innerHeight * 0.45;
    var step = 1;
    var versus = document.getElementById('versus');
    var journey = document.getElementById('journey');
    var showcase = document.getElementById('showcase');
    var install = document.getElementById('install');

    if (versus && versus.getBoundingClientRect().top < vh) step = 1;
    if (journey && journey.getBoundingClientRect().top < vh) step = 2;
    if (hasTryOnResult()) step = 3;
    if (
      (showcase && showcase.getBoundingClientRect().top < vh) ||
      (install && install.getBoundingClientRect().top < vh)
    ) {
      step = 4;
    }

    setFunnelStep(step);
  }

  if (demoDone) {
    if (postDemoCta) postDemoCta.hidden = false;
    setFunnelStep(MAX);
  } else {
    setFunnelStep(1);
  }

  if (funnelBarEl) {
    function toggleFunnelBar() {
      funnelBarEl.classList.toggle('is-visible', window.scrollY > 48);
    }
    toggleFunnelBar();
    window.addEventListener('scroll', toggleFunnelBar, { passive: true });
  }

  window.addEventListener('scroll', updateFunnelOnScroll, { passive: true });
  updateFunnelOnScroll();

  var demoObserver = new MutationObserver(function () {
    if (hasTryOnResult()) showPostDemo();
  });
  demoObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });

  window.setFunnelStep = setFunnelStep;
  window.showPostDemo = showPostDemo;
})();
