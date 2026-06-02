(function (global) {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js-reveal");

  var reduced = false;
  var scrollReady = false;
  var SCROLL_MIN = 48;

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
    global.requestAnimationFrame(function () {
      global.requestAnimationFrame(function () {
        if (isShown(el)) return;
        el.classList.add("is-inview");
        el.classList.add("visible");
      });
    });
  }

  function inView(el) {
    var rect = el.getBoundingClientRect();
    var vh = global.innerHeight || document.documentElement.clientHeight || 800;
    return rect.top < vh * 0.88 && rect.bottom > vh * 0.1;
  }

  function canRevealOnScroll(el) {
    if (reduced) return true;
    if (!scrollReady && global.scrollY < SCROLL_MIN) return false;
    return inView(el);
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

    function markScrollReady() {
      if (scrollReady) return;
      scrollReady = true;
      scanScrollItems();
    }

    function scanScrollItems() {
      scrollItems.forEach(function (el) {
        if (!isShown(el) && canRevealOnScroll(el)) show(el);
      });
    }

    var io = null;
    if ("IntersectionObserver" in global) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            if (!canRevealOnScroll(entry.target)) return;
            show(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      scrollItems.forEach(function (el) {
        io.observe(el);
      });
    }

    var ticking = false;
    function onScroll() {
      if (global.scrollY >= SCROLL_MIN) scrollReady = true;
      if (ticking) return;
      ticking = true;
      global.requestAnimationFrame(function () {
        scanScrollItems();
        ticking = false;
      });
    }

    global.addEventListener("scroll", onScroll, { passive: true });
    global.addEventListener("resize", onScroll, { passive: true });
    global.addEventListener("wheel", markScrollReady, { passive: true, once: true });
    global.addEventListener("touchmove", markScrollReady, { passive: true, once: true });
    global.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") markScrollReady();
    });

    global.setTimeout(function () {
      scrollItems.forEach(function (el) {
        if (!isShown(el) && inView(el)) show(el);
      });
    }, 6000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
