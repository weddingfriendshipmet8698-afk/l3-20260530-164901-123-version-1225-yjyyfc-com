
(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return (value || '').toString().trim().toLowerCase();
  }

  function setupMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    var panel = document.querySelector('[data-mobile-panel]');
    if (!button || !panel) {
      return;
    }
    button.addEventListener('click', function () {
      panel.classList.toggle('is-open');
      button.classList.toggle('is-open');
    });
  }

  function setupHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var prev = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
        start();
      });
    });
    if (prev) {
      prev.addEventListener('click', function () {
        show(index - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        show(index + 1);
        start();
      });
    }
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function setupImageFallback() {
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () {
        img.classList.add('image-missing');
        img.style.opacity = '0';
      });
    });
  }

  function setupCardFilters() {
    var panels = document.querySelectorAll('[data-card-filter]');
    panels.forEach(function (panel) {
      var scope = panel.parentElement || document;
      var list = scope.querySelector('[data-movie-list]') || document.querySelector('[data-movie-list]');
      if (!list) {
        return;
      }
      var input = panel.querySelector('[data-filter-input]');
      var category = panel.querySelector('[data-filter-category]');
      var year = panel.querySelector('[data-filter-year]');
      var genre = panel.querySelector('[data-filter-genre]');
      var empty = scope.querySelector('[data-empty-state]') || document.querySelector('[data-empty-state]');
      var cards = Array.prototype.slice.call(list.querySelectorAll('.movie-card'));
      var params = new URLSearchParams(window.location.search);
      var query = params.get('q');
      if (query && input) {
        input.value = query;
      }

      function apply() {
        var q = normalize(input && input.value);
        var c = normalize(category && category.value);
        var y = normalize(year && year.value);
        var g = normalize(genre && genre.value);
        var visible = 0;
        cards.forEach(function (card) {
          var text = normalize([
            card.dataset.title,
            card.dataset.category,
            card.dataset.year,
            card.dataset.region,
            card.dataset.genre,
            card.dataset.tags
          ].join(' '));
          var matches = true;
          if (q && text.indexOf(q) === -1) {
            matches = false;
          }
          if (c && normalize(card.dataset.category) !== c) {
            matches = false;
          }
          if (y && normalize(card.dataset.year) !== y) {
            matches = false;
          }
          if (g && normalize(card.dataset.genre).indexOf(g) === -1 && normalize(card.dataset.tags).indexOf(g) === -1) {
            matches = false;
          }
          card.classList.toggle('is-hidden-by-filter', !matches);
          if (matches) {
            visible += 1;
          }
        });
        if (empty) {
          empty.classList.toggle('is-visible', visible === 0);
        }
      }

      [input, category, year, genre].forEach(function (control) {
        if (control) {
          control.addEventListener('input', apply);
          control.addEventListener('change', apply);
        }
      });
      apply();
    });
  }

  function setupLocalFilter() {
    var input = document.querySelector('[data-local-filter]');
    var list = document.querySelector('[data-filter-list]');
    if (!input || !list) {
      return;
    }
    var items = Array.prototype.slice.call(list.querySelectorAll('[data-filter-card]'));
    input.addEventListener('input', function () {
      var q = normalize(input.value);
      items.forEach(function (item) {
        var text = normalize([item.dataset.title, item.dataset.kind, item.textContent].join(' '));
        item.classList.toggle('is-hidden-by-filter', q && text.indexOf(q) === -1);
      });
    });
  }

  function setupPlayer() {
    document.querySelectorAll('[data-player]').forEach(function (panel) {
      var shell = panel.querySelector('.player-shell');
      var video = panel.querySelector('video[data-src]');
      var button = panel.querySelector('.play-overlay');
      if (!shell || !video || !button) {
        return;
      }
      var source = video.getAttribute('data-src');
      var hls = null;
      var initialized = false;

      function initialize() {
        if (initialized || !source) {
          return;
        }
        initialized = true;
        shell.classList.add('is-ready');
        if (window.Hls && window.Hls.isSupported && window.Hls.isSupported()) {
          hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hls.loadSource(source);
          hls.attachMedia(video);
          if (window.Hls.Events && window.Hls.Events.ERROR) {
            hls.on(window.Hls.Events.ERROR, function (event, data) {
              if (!data || !data.fatal) {
                return;
              }
              if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
                hls.startLoad();
              } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
                hls.recoverMediaError();
              } else {
                hls.destroy();
              }
            });
          }
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
        } else {
          video.src = source;
        }
      }

      function playVideo() {
        initialize();
        var promise = video.play();
        if (promise && promise.catch) {
          promise.catch(function () {});
        }
      }

      button.addEventListener('click', playVideo);
      video.addEventListener('click', function () {
        if (video.paused) {
          playVideo();
        } else {
          video.pause();
        }
      });
      video.addEventListener('play', function () {
        shell.classList.add('is-playing');
        button.classList.add('is-hidden');
      });
      video.addEventListener('pause', function () {
        shell.classList.remove('is-playing');
        button.classList.remove('is-hidden');
      });
      window.addEventListener('beforeunload', function () {
        if (hls && hls.destroy) {
          hls.destroy();
        }
      });
    });
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupImageFallback();
    setupCardFilters();
    setupLocalFilter();
    setupPlayer();
  });
})();
