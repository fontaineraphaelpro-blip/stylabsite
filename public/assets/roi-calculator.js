(function () {
  var form = document.getElementById('roi-form');
  if (!form) return;

  var viewsEl = document.getElementById('roi-views');
  var adoptionEl = document.getElementById('roi-adoption');
  var adoptionVal = document.getElementById('roi-adoption-val');
  var convEl = document.getElementById('roi-conv');
  var liftEl = document.getElementById('roi-lift');
  var liftVal = document.getElementById('roi-lift-val');
  var aovEl = document.getElementById('roi-aov');
  var outTryons = document.getElementById('out-tryons');
  var outPlan = document.getElementById('out-plan');
  var outCost = document.getElementById('out-cost');
  var outExtra = document.getElementById('out-extra');
  var outNote = document.getElementById('out-note');

  var PLANS = [
    { name: 'Free', limit: 10, price: 0 },
    { name: 'Starter', limit: 300, price: 19 },
    { name: 'Growth', limit: 1000, price: 49 },
    { name: 'Scale', limit: 4000, price: 149 },
  ];

  function pickPlan(tryons) {
    for (var i = 0; i < PLANS.length; i++) {
      if (tryons <= PLANS[i].limit) return PLANS[i];
    }
    return PLANS[PLANS.length - 1];
  }

  function fmt(n) {
    return Math.round(n).toLocaleString();
  }

  function fmtMoney(n) {
    return '$' + Math.round(n).toLocaleString();
  }

  function recalc() {
    var views = parseFloat(viewsEl.value) || 0;
    var adoption = (parseFloat(adoptionEl.value) || 0) / 100;
    var conv = (parseFloat(convEl.value) || 0) / 100;
    var lift = (parseFloat(liftEl.value) || 0) / 100;
    var aov = parseFloat(aovEl.value) || 0;

    adoptionVal.textContent = adoptionEl.value + '%';
    liftVal.textContent = liftEl.value + '%';

    var tryons = Math.round(views * adoption);
    var plan = pickPlan(tryons);
    var baselineOrders = views * conv;
    var incrementalOrders = tryons * conv * lift;
    var extraRevenue = incrementalOrders * aov;

    outTryons.textContent = fmt(tryons);
    outPlan.textContent = plan.name + ' (' + fmt(plan.limit) + '/mo)';
    outCost.textContent = fmtMoney(plan.price) + '/mo';
    outExtra.textContent = fmtMoney(extraRevenue) + '/mo (est.)';
    outNote.textContent = 'Estimate only. Assumes ' + liftEl.value + '% relative lift on try-on sessions at your baseline ' + convEl.value + '% conversion. Results vary.';
  }

  form.addEventListener('input', recalc);
  recalc();
})();
