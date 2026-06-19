(function () {
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
    var activeIndex = 0;

    function setSlide(index) {
      if (!slides.length) {
        return;
      }

      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === activeIndex);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === activeIndex);
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        setSlide(index);
      });
    });

    window.setInterval(function () {
      setSlide(activeIndex + 1);
    }, 5200);
  }

  var searchInput = document.querySelector('[data-search-input]');
  var filterSelect = document.querySelector('[data-filter-select]');
  var categorySelect = document.querySelector('[data-category-select]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'));
  var emptyState = document.querySelector('[data-empty-state]');

  function normal(value) {
    return String(value || '').toLowerCase().trim();
  }

  function applyFilters() {
    if (!cards.length) {
      return;
    }

    var query = normal(searchInput ? searchInput.value : '');
    var year = normal(filterSelect ? filterSelect.value : '');
    var category = normal(categorySelect ? categorySelect.value : '');
    var visible = 0;

    cards.forEach(function (card) {
      var text = normal(card.getAttribute('data-query'));
      var cardYear = normal(card.getAttribute('data-year'));
      var cardCategory = normal(card.getAttribute('data-category'));
      var matched = true;

      if (query && text.indexOf(query) === -1) {
        matched = false;
      }

      if (year && cardYear !== year) {
        matched = false;
      }

      if (category && cardCategory !== category) {
        matched = false;
      }

      card.style.display = matched ? '' : 'none';

      if (matched) {
        visible += 1;
      }
    });

    if (emptyState) {
      emptyState.classList.toggle('is-visible', visible === 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', applyFilters);
  }

  if (categorySelect) {
    categorySelect.addEventListener('change', applyFilters);
  }
})();
