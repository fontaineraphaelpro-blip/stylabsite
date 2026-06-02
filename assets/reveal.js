(function (global) {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js-reveal");

  var reduced = false;
  var activated = false;
  var bootY = 0;
  var io = null;
  var scrollItems = [];

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
    return rect.top < vh * 0.86 && rect.bottom > vh * 0.12;
  }

  function scanScrollItems() {
    if (!activated && !reduced) return;
    scrollItems.forEach(function (el) {
      if (!isShown(el) && inView(el)) show(el);
    });
  }

  function activate() {
    if (activated) return;
    activated = true;
    scanScrollItems();
  }

  function maybeActivate() {
    if (activated || reduced) return;
    if (Math.abs(global.scrollY - bootY) > 36) activate();
  }

  function collectScrollItems() {
    return Array.prototype.slice
      .call(document.querySelectorAll("[data-reveal], .reveal"))
      .filter(function (el) {
        return !inHero(el);
      });
  }

  function boot() {
    if ("scrollRestoration" in global.history) {
      global.history.scrollRestoration = "manual";
    }
    global.scrollTo(0, 0);
    bootY = global.scrollY || 0;

    scrollItems = collectScrollItems();
    var header = document.getElementById("siteHeader");

    if (reduced) {
      scrollItems.forEach(show);
      if (header) show(header);
      return;
    }

    if (header) {
      global.setTimeout(function () {
        show(header);
      }, 20);
    }

    if ("IntersectionObserver" in global) {
      io = new IntersectionObserver(
        function (entries) {
          if (!activated) return;
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            show(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
      );

      scrollItems.forEach(function (el) {
        io.observe(el);
      });
    }

    var ticking = false;
    function onScroll() {
      maybeActivate();
      if (!activated) return;
      if (ticking) return;
      ticking = true;
      global.requestAnimationFrame(function () {
        scanScrollItems();
        ticking = false;
      });
    }

    global.addEventListener("scroll", onScroll, { passive: true });
    global.addEventListener(
      "wheel",
      function () {
        maybeActivate();
      },
      { passive: true }
    );
    global.addEventListener(
      "touchmove",
      function () {
        maybeActivate();
      },
      { passive: true }
    );
    global.addEventListener("keydown", function (e) {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        maybeActivate();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
