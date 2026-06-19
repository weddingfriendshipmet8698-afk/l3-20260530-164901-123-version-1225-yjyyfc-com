(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  ready(function () {
    var menuButton = document.querySelector('[data-menu-button]');
    var mobileNav = document.querySelector('[data-mobile-nav]');

    if (menuButton && mobileNav) {
      menuButton.addEventListener('click', function () {
        mobileNav.classList.toggle('is-open');
      });
    }

    var hero = document.querySelector('[data-hero]');
    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
      var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
      var current = 0;
      var timer = null;

      function showSlide(index) {
        if (!slides.length) {
          return;
        }

        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle('is-active', slideIndex === current);
        });
        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle('is-active', dotIndex === current);
        });
      }

      function restartTimer() {
        if (timer) {
          window.clearInterval(timer);
        }
        timer = window.setInterval(function () {
          showSlide(current + 1);
        }, 5200);
      }

      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
          restartTimer();
        });
      });

      showSlide(0);
      restartTimer();
    }

    Array.prototype.slice.call(document.querySelectorAll('img')).forEach(function (image) {
      image.addEventListener('error', function () {
        image.classList.add('is-missing-image');
      });
    });

    var listing = document.querySelector('[data-listing]');
    if (listing) {
      var input = listing.querySelector('[data-search-input]');
      var cards = Array.prototype.slice.call(listing.querySelectorAll('[data-card]'));
      var buttons = Array.prototype.slice.call(listing.querySelectorAll('[data-filter]'));
      var resultCount = listing.querySelector('[data-result-count]');
      var activeFilter = 'all';

      var params = new URLSearchParams(window.location.search);
      var q = params.get('q');
      if (q && input) {
        input.value = q;
      }

      function cardText(card) {
        return normalize([
          card.getAttribute('data-title'),
          card.getAttribute('data-region'),
          card.getAttribute('data-type'),
          card.getAttribute('data-year'),
          card.getAttribute('data-category'),
          card.getAttribute('data-tags'),
          card.textContent
        ].join(' '));
      }

      function updateListing() {
        var query = normalize(input ? input.value : '');
        var visible = 0;

        cards.forEach(function (card) {
          var text = cardText(card);
          var matchesQuery = !query || text.indexOf(query) !== -1;
          var matchesFilter = activeFilter === 'all' || text.indexOf(normalize(activeFilter)) !== -1;
          var shouldShow = matchesQuery && matchesFilter;

          card.classList.toggle('is-hidden', !shouldShow);
          if (shouldShow) {
            visible += 1;
          }
        });

        if (resultCount) {
          resultCount.textContent = '当前显示 ' + visible + ' 部 / 共 ' + cards.length + ' 部';
        }
      }

      if (input) {
        input.addEventListener('input', updateListing);
      }

      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          buttons.forEach(function (item) {
            item.classList.remove('is-active');
          });
          button.classList.add('is-active');
          activeFilter = button.getAttribute('data-filter') || 'all';
          updateListing();
        });
      });

      updateListing();
    }
  });
})();
