(function () {
    var header = document.getElementById('header');
    var menuBtn = document.getElementById('menuBtn');
    var drawer = document.getElementById('mobileDrawer');

    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    function setDrawerOpen(open) {
        if (!drawer) return;
        drawer.classList.toggle('open', open);
        document.body.classList.toggle('drawer-open', open);
        if (menuBtn) menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', function () {
            setDrawerOpen(!drawer.classList.contains('open'));
        });
        drawer.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { setDrawerOpen(false); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setDrawerOpen(false);
        });
    }

    document.querySelectorAll('.nav-dropdown').forEach(function (drop) {
        var btn = drop.querySelector('.nav-dropdown-btn');
        if (!btn) return;
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = drop.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    });
    document.addEventListener('click', function () {
        document.querySelectorAll('.nav-dropdown.open').forEach(function (drop) {
            drop.classList.remove('open');
            var btn = drop.querySelector('.nav-dropdown-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    });

    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        reveals.forEach(function (el) { io.observe(el); });
    }
})();
