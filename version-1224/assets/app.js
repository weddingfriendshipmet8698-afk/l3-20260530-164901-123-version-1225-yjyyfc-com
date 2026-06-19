(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
      return;
    }
    document.addEventListener("DOMContentLoaded", fn);
  }

  function setupMobileNav() {
    var button = document.querySelector(".mobile-toggle");
    var panel = document.querySelector(".mobile-panel");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function setupHeroSlider() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    if (slides.length <= 1) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 4800);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(parseInt(dot.getAttribute("data-hero-dot"), 10) || 0);
        start();
      });
    });

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    start();
  }

  function setupCardFilters() {
    var scopes = Array.prototype.slice.call(document.querySelectorAll("[data-filter-scope]"));
    scopes.forEach(function (scope) {
      var input = scope.querySelector(".card-filter");
      var chips = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-type]"));
      var cards = Array.prototype.slice.call(scope.querySelectorAll("[data-card]"));
      var activeType = "全部";

      function apply() {
        var query = input ? input.value.trim().toLowerCase() : "";
        cards.forEach(function (card) {
          var haystack = (card.getAttribute("data-search") || "").toLowerCase();
          var type = card.getAttribute("data-type") || "";
          var matchQuery = !query || haystack.indexOf(query) !== -1;
          var matchType = activeType === "全部" || type === activeType;
          card.classList.toggle("hidden-card", !(matchQuery && matchType));
        });
      }

      if (input) {
        input.addEventListener("input", apply);
      }

      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          activeType = chip.getAttribute("data-filter-type") || "全部";
          chips.forEach(function (item) {
            item.classList.toggle("active", item === chip);
          });
          apply();
        });
      });
    });
  }

  function getQueryValue(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
  }

  function createResultCard(movie) {
    var article = document.createElement("article");
    article.className = "movie-card";
    article.innerHTML = [
      '<a href="' + movie.url + '" class="movie-card-link">',
      '<div class="movie-cover">',
      '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '<div class="movie-cover-shade"><span>' + escapeHtml(movie.year) + '</span><strong>' + escapeHtml(movie.title) + '</strong></div>',
      '</div>',
      '<div class="movie-info">',
      '<h3>' + escapeHtml(movie.title) + '</h3>',
      '<p>' + escapeHtml(movie.oneLine) + '</p>',
      '<div class="movie-meta"><span>' + escapeHtml(movie.type) + '</span><span>' + escapeHtml(movie.region) + '</span></div>',
      '<small>' + escapeHtml(movie.genre) + '</small>',
      '</div>',
      '</a>'
    ].join("");
    return article;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setupSearchPage() {
    var page = document.querySelector("[data-search-page]");
    if (!page || !window.SEARCH_MOVIES) {
      return;
    }
    var input = document.getElementById("site-search-input");
    var category = document.getElementById("site-search-category");
    var type = document.getElementById("site-search-type");
    var results = document.getElementById("site-search-results");
    var initial = getQueryValue("q");
    if (input && initial) {
      input.value = initial;
    }

    function render() {
      var query = input ? input.value.trim().toLowerCase() : "";
      var cat = category ? category.value : "";
      var selectedType = type ? type.value : "";
      var matched = window.SEARCH_MOVIES.filter(function (movie) {
        var haystack = [
          movie.title,
          movie.oneLine,
          movie.region,
          movie.type,
          movie.genre,
          movie.category,
          movie.tags
        ].join(" ").toLowerCase();
        var matchQuery = !query || haystack.indexOf(query) !== -1;
        var matchCategory = !cat || movie.category === cat;
        var matchType = !selectedType || movie.type === selectedType;
        return matchQuery && matchCategory && matchType;
      }).slice(0, 120);
      results.innerHTML = "";
      matched.forEach(function (movie) {
        results.appendChild(createResultCard(movie));
      });
    }

    [input, category, type].forEach(function (element) {
      if (element) {
        element.addEventListener("input", render);
        element.addEventListener("change", render);
      }
    });
    render();
  }

  window.initSitePlayer = function (videoId, overlayId, source) {
    var video = document.getElementById(videoId);
    var overlay = document.getElementById(overlayId);
    if (!video || !overlay || !source) {
      return;
    }
    var attached = false;
    var hls = null;

    function attach() {
      if (attached) {
        return;
      }
      attached = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
        video.load();
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        return;
      }
      video.src = source;
      video.load();
    }

    function start() {
      attach();
      overlay.classList.add("is-hidden");
      video.setAttribute("controls", "controls");
      var promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(function () {
          overlay.classList.remove("is-hidden");
        });
      }
    }

    overlay.addEventListener("click", start);
    video.addEventListener("click", function () {
      if (video.paused) {
        start();
      }
    });
    video.addEventListener("play", function () {
      overlay.classList.add("is-hidden");
    });
    video.addEventListener("pause", function () {
      if (video.currentTime === 0 || video.ended) {
        overlay.classList.remove("is-hidden");
      }
    });
    window.addEventListener("beforeunload", function () {
      if (hls) {
        hls.destroy();
      }
    });
  };

  ready(function () {
    setupMobileNav();
    setupHeroSlider();
    setupCardFilters();
    setupSearchPage();
  });
})();
