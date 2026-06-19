(function () {
    function toggleMobileMenu() {
        var toggle = document.querySelector('[data-menu-toggle]');
        var nav = document.querySelector('[data-site-nav]');
        if (!toggle || !nav) {
            return;
        }
        toggle.addEventListener('click', function () {
            nav.classList.toggle('is-open');
        });
    }

    function setupHeroCarousel() {
        var hero = document.querySelector('[data-hero]');
        if (!hero) {
            return;
        }

        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var thumbs = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-thumb]'));
        if (slides.length <= 1) {
            return;
        }

        var activeIndex = 0;
        var timer = null;

        function show(index) {
            activeIndex = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === activeIndex);
            });
            thumbs.forEach(function (thumb, thumbIndex) {
                thumb.classList.toggle('is-active', thumbIndex === activeIndex);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(activeIndex + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        thumbs.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                var index = Number(thumb.getAttribute('data-hero-thumb')) || 0;
                show(index);
                start();
            });
        });

        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
        start();
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function setupLocalFilters() {
        var input = document.querySelector('.js-filter-input');
        var selects = Array.prototype.slice.call(document.querySelectorAll('.js-filter-select'));
        var cards = Array.prototype.slice.call(document.querySelectorAll('.js-filter-card'));
        var count = document.querySelector('[data-filter-count]');

        if (!cards.length || (!input && !selects.length)) {
            return;
        }

        function applyFilters() {
            var keyword = normalize(input ? input.value : '');
            var activeFilters = {};
            selects.forEach(function (select) {
                var key = select.getAttribute('data-filter-key');
                var value = normalize(select.value);
                if (key && value) {
                    activeFilters[key] = value;
                }
            });

            var visible = 0;
            cards.forEach(function (card) {
                var haystack = normalize([
                    card.getAttribute('data-title'),
                    card.getAttribute('data-year'),
                    card.getAttribute('data-type'),
                    card.getAttribute('data-genre'),
                    card.getAttribute('data-keywords')
                ].join(' '));

                var matchesKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var matchesSelects = Object.keys(activeFilters).every(function (key) {
                    return normalize(card.getAttribute('data-' + key)).indexOf(activeFilters[key]) !== -1;
                });
                var show = matchesKeyword && matchesSelects;
                card.classList.toggle('is-hidden', !show);
                if (show) {
                    visible += 1;
                }
            });

            if (count) {
                count.textContent = String(visible);
            }
        }

        if (input) {
            input.addEventListener('input', applyFilters);
        }
        selects.forEach(function (select) {
            select.addEventListener('change', applyFilters);
        });
        applyFilters();
    }

    document.addEventListener('DOMContentLoaded', function () {
        toggleMobileMenu();
        setupHeroCarousel();
        setupLocalFilters();
    });
})();
