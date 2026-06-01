(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    var revealEls = document.querySelectorAll("[data-reveal], .reveal");
    var isSubpage = document.body.classList.contains("page-sub");

    if (reducedMotion || isSubpage) {
      revealEls.forEach(function (el) {
        el.classList.add("is-revealed");
        el.classList.add("visible");
      });
      if (header) header.classList.add("is-revealed");
      return;
    }

    if (header) {
      header.classList.add("is-revealed");
    }

    if (document.body.classList.contains("home") && !isSubpage) {
      revealEls.forEach(function (el) {
        el.classList.add("is-revealed");
        el.classList.add("visible");
      });
      if (header) header.classList.add("is-revealed");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-revealed");
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
        el.classList.add("visible");
        observer.unobserve(el);
      }
    });
  }

  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      },
      { passive: true }
    );
  }

  if (menuBtn && mobileNav) {
    function setMenu(open) {
      mobileNav.classList.toggle("is-open", open);
      document.body.classList.toggle("drawer-open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    menuBtn.addEventListener("click", function () {
      setMenu(!mobileNav.classList.contains("is-open"));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  if (
    document.body.classList.contains("page-sub") &&
    document.querySelector(".sticky-cta")
  ) {
    document.body.classList.add("has-sticky");
  }
  initReveal();

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", "#" + id);
    });
  });

  document.querySelectorAll(".faq__item").forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.querySelectorAll(".trial-thumbs button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = btn.getAttribute("data-src");
      var main = document.getElementById("mainImage");
      if (main && src) main.src = src;
      document.querySelectorAll(".trial-thumbs button").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
    });
  });

  var postDemo = document.getElementById("postDemo");
  if (postDemo) {
    window.showPostDemo = function () {
      postDemo.classList.add("is-visible");
      try {
        sessionStorage.setItem("stylab_demo_done", "1");
      } catch (e) {}
    };
    var demoObserver = new MutationObserver(function () {
      if (
        document.querySelector(
          ".vton-result-image, .vton-modal--result, #vton-panel-result.active, .vton-modal-content.has-result"
        )
      ) {
        window.showPostDemo();
      }
    });
    demoObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  try {
    localStorage.setItem(
      "vton-widget-config",
      JSON.stringify({
        widgetText: "Try it on",
        widgetBg: "#ffffff",
        widgetColor: "#09090b",
      })
    );
  } catch (e) {}
})();
