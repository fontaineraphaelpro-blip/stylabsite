(function () {
  var currentStep = 1;

  function setStep(n) {
    currentStep = Math.max(1, Math.min(2, n));
    document.querySelectorAll('.pp-step-tab').forEach(function (tab) {
      var s = parseInt(tab.getAttribute('data-step'), 10);
      tab.classList.toggle('active', s === currentStep);
      tab.classList.toggle('done', s < currentStep);
      tab.setAttribute('aria-selected', s === currentStep ? 'true' : 'false');
    });
    document.querySelectorAll('.pp-step-panel').forEach(function (panel) {
      panel.classList.toggle('active', parseInt(panel.getAttribute('data-step'), 10) === currentStep);
    });
    if (window.setFunnelStep) window.setFunnelStep(currentStep >= 2 ? 4 : 2);
  }

  document.querySelectorAll('.pp-step-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      setStep(parseInt(tab.getAttribute('data-step'), 10));
    });
  });

  var demoObserver = new MutationObserver(function () {
    if (document.querySelector('.vton-result-image, .vton-modal--result, #vton-panel-result.active, .vton-modal-content.has-result')) {
      setStep(2);
      if (window.showPostDemo) window.showPostDemo();
    }
  });
  demoObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

  if (sessionStorage.getItem('stylab_demo_done')) setStep(2);
  else setStep(1);

  window.ppSetJourneyStep = setStep;

  var counter = document.getElementById('ppLiveCounter');
  if (counter) {
    counter.textContent = String(40 + (new Date().getHours() % 12) * 3);
  }
})();
