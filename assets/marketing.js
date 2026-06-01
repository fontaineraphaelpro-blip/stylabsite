(function () {
    var header = document.getElementById('header');
    var menuBtn = document.getElementById('menuBtn');
    var drawer = document.getElementById('mobileDrawer');

    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 24);
        }, { passive: true });
        header.classList.toggle('scrolled', window.scrollY > 24);
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

    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach(function (el) {
            el.classList.add('visible');
        });
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
            io.observe(el);
        });
    }

    /* Sticky install bar on subpages (not homepage) */
    if (!document.querySelector('.pp-layout') && !document.getElementById('stickyCta')) {
        var bar = document.createElement('div');
        bar.className = 'subpage-cta-bar';
        bar.setAttribute('role', 'region');
        bar.setAttribute('aria-label', 'Install Stylab');
        bar.innerHTML =
            '<div class="wrap">' +
            '<a href="https://apps.shopify.com/try-on-stylelab" class="btn btn-primary" target="_blank" rel="noopener">' +
            '<img class="shopify-icon" src="' + assetBase() + 'shopify-icon-logo.svg" alt="" width="20" height="20" aria-hidden="true">' +
            'Install free on Shopify</a></div>';
        document.body.appendChild(bar);
        document.body.classList.add('has-subpage-cta');

        function updateBar() {
            bar.classList.toggle('is-visible', window.scrollY > 320);
        }
        updateBar();
        window.addEventListener('scroll', updateBar, { passive: true });
    }

    function assetBase() {
        var icon = document.querySelector('.shopify-icon[src]');
        if (icon) {
            var src = icon.getAttribute('src') || '';
            return src.replace(/shopify-icon-logo\.svg.*$/, '');
        }
        return '/assets/';
    }
})();
