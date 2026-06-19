(function () {
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
    let current = 0;
    let timer = null;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === current);
      });
    }

    function startTimer() {
      if (slides.length <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      timer = window.setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        if (timer) {
          window.clearInterval(timer);
        }
        showSlide(index);
        startTimer();
      });
    });

    showSlide(0);
    startTimer();
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function fillSelect(select, cards, field) {
    const values = Array.from(new Set(cards.map(function (card) {
      return card.dataset[field] || '';
    }).filter(Boolean))).sort(function (a, b) {
      return String(b).localeCompare(String(a), 'zh-Hans-CN');
    });

    values.forEach(function (value) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function setupFilters() {
    const input = document.querySelector('[data-filter-input]');
    const selects = Array.from(document.querySelectorAll('[data-filter-select]'));
    const cards = Array.from(document.querySelectorAll('[data-card]'));
    const count = document.querySelector('[data-filter-count]');

    if (!cards.length) {
      return;
    }

    selects.forEach(function (select) {
      fillSelect(select, cards, select.dataset.field);
    });

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');
    if (initialQuery && input) {
      input.value = initialQuery;
    }

    function applyFilter() {
      const query = normalize(input ? input.value : '');
      const criteria = {};
      selects.forEach(function (select) {
        if (select.value) {
          criteria[select.dataset.field] = select.value;
        }
      });

      let visible = 0;
      cards.forEach(function (card) {
        const haystack = normalize([
          card.dataset.title,
          card.dataset.region,
          card.dataset.type,
          card.dataset.year,
          card.dataset.tags
        ].join(' '));

        const queryMatch = !query || haystack.includes(query);
        const selectMatch = Object.keys(criteria).every(function (field) {
          return card.dataset[field] === criteria[field];
        });
        const shouldShow = queryMatch && selectMatch;
        card.style.display = shouldShow ? '' : 'none';
        if (shouldShow) {
          visible += 1;
        }
      });

      if (count) {
        count.textContent = '显示 ' + visible + ' / ' + cards.length + ' 部';
      }
    }

    if (input) {
      input.addEventListener('input', applyFilter);
    }
    selects.forEach(function (select) {
      select.addEventListener('change', applyFilter);
    });
    applyFilter();
  }

  setupFilters();
})();
