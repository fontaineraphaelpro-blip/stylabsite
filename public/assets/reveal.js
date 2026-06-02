(function (global) {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js-reveal");

  var reduced = false;
  var activated = false;
  var bootY = 0;
  var io = null;
  var scrollItems = [];
  var staggerGroups = [];

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
    if (!el || isShown(el)) return;
    global.requestAnimationFrame(function () {
      global.requestAnimationFrame(function () {
        if (isShown(el)) return;
        el.classList.add("is-inview");
        el.classList.add("visible");
      });
    });
  }

  function showStaggerGroup(group) {
    var kids = group.querySelectorAll(":scope > [data-reveal], :scope > .reveal");
    if (!kids.length) {
      kids = group.querySelectorAll("[data-reveal], .reveal");
    }
    Array.prototype.forEach.call(kids, function (el) {
      if (inHero(el)) return;
      show(el);
    });
  }

  function inView(el) {
    var rect = el.getBoundingClientRect();
    var vh = global.innerHeight || document.documentElement.clientHeight || 800;
    return rect.top < vh * 0.88 && rect.bottom > vh * 0.1;
  }

  function scanScrollItems() {
    if (!activated && !reduced) return;
    scrollItems.forEach(function (el) {
      if (!isShown(el) && inView(el)) show(el);
    });
    staggerGroups.forEach(function (group) {
      if (inView(group)) showStaggerGroup(group);
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

  function isStaggerChild(el) {
    var group = el.closest("[data-reveal-stagger]");
    return Boolean(group && group.contains(el));
  }

  function collectScrollItems() {
    return Array.prototype.slice
      .call(document.querySelectorAll("[data-reveal], .reveal"))
      .filter(function (el) {
        return !inHero(el) && !isStaggerChild(el);
      });
  }

  function bootHero() {
    var hero = document.querySelector(".hero");
    if (!hero || reduced) return;
    global.requestAnimationFrame(function () {
      global.requestAnimationFrame(function () {
        hero.classList.add("is-hero-ready");
      });
    });
  }

  function bindParallax() {
    if (reduced) return;
    var ticking = false;
    function updateParallax() {
      root.style.setProperty("--scroll-y", String(global.scrollY || 0));
      ticking = false;
    }
    global.addEventListener(
      "scroll",
      function () {
        if (!activated) return;
        if (ticking) return;
        ticking = true;
        global.requestAnimationFrame(updateParallax);
      },
      { passive: true }
    );
  }

  function boot() {
    if ("scrollRestoration" in global.history) {
      global.history.scrollRestoration = "manual";
    }
    global.scrollTo(0, 0);
    bootY = global.scrollY || 0;

    scrollItems = collectScrollItems();
    staggerGroups = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal-stagger]")
    );
    var header = document.getElementById("siteHeader");

    if (reduced) {
      scrollItems.forEach(show);
      staggerGroups.forEach(showStaggerGroup);
      if (header) show(header);
      var hero = document.querySelector(".hero");
      if (hero) hero.classList.add("is-hero-ready");
      return;
    }

    bootHero();
    bindParallax();

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
            var target = entry.target;
            io.unobserve(target);
            if (target.hasAttribute("data-reveal-stagger")) {
              showStaggerGroup(target);
            } else {
              show(target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      scrollItems.forEach(function (el) {
        io.observe(el);
      });
      staggerGroups.forEach(function (group) {
        io.observe(group);
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
    global.addEventListener("wheel", maybeActivate, { passive: true });
    global.addEventListener("touchmove", maybeActivate, { passive: true });
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
