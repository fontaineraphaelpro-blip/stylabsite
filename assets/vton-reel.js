/** VTON Reel — caption sync + install filmstrip */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initReelCaptions(reel) {
    var captions = reel.querySelectorAll('.vton-reel__captions li');
    if (!captions.length || reduced) return;

    var dur = parseFloat(getComputedStyle(reel).getPropertyValue('--reel-dur')) || 7.5;
    var steps = captions.length;
    var stepMs = (dur * 1000) / steps;
    var idx = 0;

    function tick() {
      captions.forEach(function (c, n) {
        c.classList.toggle('is-live', n === idx);
      });
      idx = (idx + 1) % steps;
    }

    tick();
    setInterval(tick, stepMs);
  }

  document.querySelectorAll('.vton-reel--shopper').forEach(initReelCaptions);

  var film = document.getElementById('vtonFilm');
  if (film && !reduced) {
    var cards = film.querySelectorAll('.vton-film__card');
    var ms = 2800;
    var fi = 0;

    function showFilm(i) {
      cards.forEach(function (c, n) {
        c.classList.toggle('is-active', n === i);
      });
      fi = i;
    }

    showFilm(0);
    setInterval(function () {
      showFilm((fi + 1) % cards.length);
    }, ms);
  }
})();
