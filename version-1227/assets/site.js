(function () {
  "use strict";

  function rootPrefix() {
    return document.body.getAttribute("data-root") || "./";
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        mobileNav.classList.toggle("is-open");
      });
    }

    document.querySelectorAll("[data-search-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";

        if (query) {
          window.location.href = rootPrefix() + "search.html?q=" + encodeURIComponent(query);
        }
      });
    });

    initHero();
    initPageFilter();
    initSorter();
  });

  function initHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }

    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var active = 0;
    var timer = null;

    function show(index) {
      active = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === active);
      });

      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === active);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        restart();
      });
    });

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }

      timer = window.setInterval(function () {
        show(active + 1);
      }, 5200);
    }

    if (slides.length > 1) {
      restart();
    }
  }

  function initPageFilter() {
    var input = document.querySelector("[data-page-filter]");
    var count = document.querySelector("[data-visible-count]");
    var empty = document.querySelector("[data-empty-state]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));

    if (!input || !cards.length) {
      return;
    }

    function applyFilter() {
      var query = input.value.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var text = (card.getAttribute("data-search") || "").toLowerCase();
        var match = !query || text.indexOf(query) !== -1;

        card.style.display = match ? "" : "none";

        if (match) {
          visible += 1;
        }
      });

      if (count) {
        count.textContent = String(visible);
      }

      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    }

    input.addEventListener("input", applyFilter);
    applyFilter();
  }

  function initSorter() {
    var select = document.querySelector("[data-sort-select]");
    var grid = document.querySelector("[data-sort-grid]");

    if (!select || !grid) {
      return;
    }

    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-movie-card]"));

    select.addEventListener("change", function () {
      var mode = select.value;
      var sorted = cards.slice();

      sorted.sort(function (a, b) {
        if (mode === "title") {
          return (a.getAttribute("data-title") || "").localeCompare(b.getAttribute("data-title") || "", "zh-Hans-CN");
        }

        if (mode === "score") {
          return Number(b.getAttribute("data-score") || 0) - Number(a.getAttribute("data-score") || 0);
        }

        return Number(b.getAttribute("data-year") || 0) - Number(a.getAttribute("data-year") || 0);
      });

      sorted.forEach(function (card) {
        grid.appendChild(card);
      });
    });
  }
})();
