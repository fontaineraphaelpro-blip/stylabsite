(function (global) {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js-reveal");

  var reduced = false;
  try {
    reduced = global.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  function inHero(el) {
    return Boolean(el.closest && el.closest(".hero"));
  }

  function isShown(el) {
    return el.classList.contains("is-inview") || el.classList.contains("visible");
  }

  function show(el) {
    if (isShown(el)) return;
    void el.offsetWidth;
    el.classList.add("is-inview");
    el.classList.add("visible");
  }

  function viewportGate(el) {
    var rect = el.getBoundingClientRect();
    var vh = global.innerHeight || document.documentElement.clientHeight || 800;
    return rect.top < vh * 0.92 && rect.bottom > vh * 0.06;
  }

  function collect() {
    return Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal], .reveal")
    );
  }

  function boot() {
    var items = collect();
    var header = document.getElementById("siteHeader");
    var heroItems = [];
    var scrollItems = [];

    items.forEach(function (el) {
      if (inHero(el)) heroItems.push(el);
      else scrollItems.push(el);
    });

    if (reduced) {
      items.forEach(show);
      if (header) show(header);
      return;
    }

    if (header) {
      global.setTimeout(function () {
        show(header);
      }, 30);
    }

    heroItems.forEach(function (el, i) {
      global.setTimeout(function () {
        show(el);
      }, 60 + i * 100);
    });

    function scan() {
      scrollItems.forEach(function (el) {
        if (!isShown(el) && viewportGate(el)) show(el);
      });
    }

    scan();

    if ("IntersectionObserver" in global) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            show(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px -40px 0px" }
      );

      scrollItems.forEach(function (el) {
        if (!isShown(el)) io.observe(el);
      });
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      global.requestAnimationFrame(function () {
        scan();
        ticking = false;
      });
    }

    global.addEventListener("scroll", onScroll, { passive: true });
    global.addEventListener("resize", onScroll, { passive: true });
    global.addEventListener("load", scan, { once: true });

    global.setTimeout(scan, 120);
    global.setTimeout(scan, 600);
    global.setTimeout(function () {
      scrollItems.forEach(function (el) {
        if (!isShown(el) && viewportGate(el)) show(el);
      });
    }, 1800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
