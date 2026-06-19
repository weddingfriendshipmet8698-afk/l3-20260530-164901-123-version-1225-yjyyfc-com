
(function () {
  "use strict";

  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }
    document.addEventListener("DOMContentLoaded", callback);
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function setupMobileMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-site-nav]");
    var search = document.querySelector(".header-search");

    if (!toggle || !nav || !search) {
      return;
    }

    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      search.classList.toggle("is-open");
    });
  }

  function setupHeaderSearch() {
    document.querySelectorAll("form[data-site-search]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";

        if (!query) {
          return;
        }

        event.preventDefault();
        var action = form.getAttribute("action") || "search.html";
        window.location.href = action + "?q=" + encodeURIComponent(query);
      });
    });
  }

  function setupHeroSlider() {
    var root = document.querySelector("[data-hero-slider]");

    if (!root) {
      return;
    }

    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-hero-dot]"));
    var current = 0;
    var timer = null;

    function show(index) {
      if (!slides.length) {
        return;
      }

      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = Number(dot.getAttribute("data-hero-dot"));
        show(index);
        start();
      });
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function setupImageFallbacks() {
    document.querySelectorAll("img[data-fallback-title]").forEach(function (image) {
      image.addEventListener("error", function () {
        image.classList.add("image-missing");
      }, { once: true });
    });
  }

  function setupMovieFilters() {
    document.querySelectorAll("[data-search-page]").forEach(function (page) {
      var input = page.querySelector("[data-movie-search]");
      var category = page.querySelector("[data-category-filter]");
      var year = page.querySelector("[data-year-filter]");
      var cards = Array.prototype.slice.call(page.querySelectorAll(".movie-card"));
      var counter = page.querySelector("[data-result-count]");
      var params = new URLSearchParams(window.location.search);
      var initialQuery = params.get("q") || "";

      if (input && initialQuery) {
        input.value = initialQuery;
      }

      function applyFilters() {
        var query = normalize(input ? input.value : "");
        var categoryValue = category ? category.value : "";
        var yearValue = year ? year.value : "";
        var visible = 0;

        cards.forEach(function (card) {
          var searchText = normalize(card.getAttribute("data-search"));
          var cardCategory = card.getAttribute("data-category") || "";
          var cardYear = card.getAttribute("data-year") || "";
          var matchesQuery = !query || searchText.indexOf(query) !== -1;
          var matchesCategory = !categoryValue || cardCategory === categoryValue;
          var matchesYear = !yearValue || cardYear === yearValue;
          var shouldShow = matchesQuery && matchesCategory && matchesYear;

          card.classList.toggle("is-filter-hidden", !shouldShow);
          if (shouldShow) {
            visible += 1;
          }
        });

        if (counter) {
          counter.textContent = String(visible);
        }
      }

      [input, category, year].forEach(function (control) {
        if (control) {
          control.addEventListener("input", applyFilters);
          control.addEventListener("change", applyFilters);
        }
      });

      applyFilters();
    });
  }

  function loadHlsVideo(video) {
    var source = video.getAttribute("data-hls");

    if (!source || video.getAttribute("data-loaded") === "true") {
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(source);
      hls.attachMedia(video);
      video._hlsInstance = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
    } else {
      var fallbackSource = document.createElement("source");
      fallbackSource.src = source;
      fallbackSource.type = "application/x-mpegURL";
      video.appendChild(fallbackSource);
    }

    video.setAttribute("data-loaded", "true");
  }

  function setupPlayers() {
    document.querySelectorAll(".video-frame").forEach(function (frame) {
      var video = frame.querySelector(".hls-video");
      var button = frame.querySelector(".play-overlay");

      if (!video) {
        return;
      }

      function play() {
        loadHlsVideo(video);
        if (button) {
          button.classList.add("is-hidden");
        }
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            video.controls = true;
          });
        }
      }

      if (button) {
        button.addEventListener("click", play);
      }

      video.addEventListener("click", function () {
        loadHlsVideo(video);
      });

      video.addEventListener("play", function () {
        if (button) {
          button.classList.add("is-hidden");
        }
      });
    });
  }

  ready(function () {
    setupMobileMenu();
    setupHeaderSearch();
    setupHeroSlider();
    setupImageFallbacks();
    setupMovieFilters();
    setupPlayers();
  });
})();
