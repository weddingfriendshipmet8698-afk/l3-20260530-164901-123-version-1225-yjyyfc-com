(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function initMenu() {
    var button = document.querySelector("[data-menu-button]");
    var panel = document.querySelector("[data-mobile-panel]");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
  }

  function initHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    if (!slides.length) {
      return;
    }
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === current);
        dot.setAttribute("aria-current", i === current ? "true" : "false");
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5000);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(current - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
        start();
      });
    }
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-hero-dot")) || 0);
        start();
      });
    });
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function initSearchForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-search-form]"));
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector("input[name='q']");
        if (!input || !input.value.trim()) {
          event.preventDefault();
          window.location.href = "./search.html";
        }
      });
    });
  }

  function initSearchPage() {
    var grid = document.querySelector("[data-search-grid]");
    var pageForm = document.querySelector("[data-page-search]");
    if (!grid || !pageForm) {
      return;
    }
    var input = pageForm.querySelector("input[name='q']");
    var empty = document.querySelector("[data-search-empty]");
    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-search-card]"));
    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q") || "";
    if (input) {
      input.value = initial;
    }

    function filter() {
      var value = input ? input.value.trim().toLowerCase() : "";
      var matched = 0;
      cards.forEach(function (card) {
        var keywords = card.getAttribute("data-keywords") || "";
        var ok = !value || keywords.indexOf(value) !== -1;
        card.classList.toggle("is-hidden", !ok);
        if (ok) {
          matched += 1;
        }
      });
      if (empty) {
        empty.classList.toggle("show", matched === 0);
      }
    }

    if (input) {
      input.addEventListener("input", filter);
    }
    pageForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var query = input ? input.value.trim() : "";
      var url = query ? "./search.html?q=" + encodeURIComponent(query) : "./search.html";
      window.history.replaceState(null, "", url);
      filter();
    });
    filter();
  }

  window.initPlayer = function (src) {
    var player = document.querySelector("[data-player]");
    if (!player) {
      return;
    }
    var video = player.querySelector("video");
    var button = player.querySelector("[data-play-button]");
    var hlsInstance = null;
    if (!video || !button) {
      return;
    }

    function attach() {
      if (video.getAttribute("data-ready") === "1") {
        return;
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false
        });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
      } else {
        video.src = src;
      }
      video.setAttribute("data-ready", "1");
    }

    function play() {
      attach();
      button.classList.add("is-hidden");
      var attempt = video.play();
      if (attempt && attempt.catch) {
        attempt.catch(function () {});
      }
    }

    button.addEventListener("click", play);
    video.addEventListener("click", function () {
      if (video.paused) {
        play();
      }
    });
    window.addEventListener("pagehide", function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  };

  ready(function () {
    initMenu();
    initHero();
    initSearchForms();
    initSearchPage();
  });
})();
