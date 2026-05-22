(function () {
    var header = document.getElementById('header');
    var menuBtn = document.getElementById('menuBtn');
    var drawer = document.getElementById('mobileDrawer');

    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', function () { drawer.classList.toggle('open'); });
        drawer.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { drawer.classList.remove('open'); });
        });
    }

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
