(function () {
  "use strict";

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function card(movie) {
    var tags = [movie.year, movie.region, movie.type, movie.category]
      .filter(Boolean)
      .map(function (item) {
        return "<span>" + escapeHtml(item) + "</span>";
      })
      .join("");

    return [
      "<article class=\"movie-card\" data-movie-card>",
      "  <a class=\"poster-frame\" href=\"" + escapeHtml(movie.url) + "\">",
      "    <img src=\"" + escapeHtml(movie.cover) + "\" alt=\"" + escapeHtml(movie.title) + "\" loading=\"lazy\">",
      "    <span class=\"card-badge\">" + escapeHtml(movie.type) + "</span>",
      "    <span class=\"card-score\">热度 " + escapeHtml(movie.score) + "</span>",
      "  </a>",
      "  <div class=\"card-body\">",
      "    <h3 class=\"card-title\"><a href=\"" + escapeHtml(movie.url) + "\">" + escapeHtml(movie.title) + "</a></h3>",
      "    <div class=\"card-meta\">" + tags + "</div>",
      "    <p class=\"card-desc\">" + escapeHtml(movie.oneLine) + "</p>",
      "  </div>",
      "</article>"
    ].join("\n");
  }

  function search(query) {
    var movies = window.MOVIE_INDEX || [];
    var words = query.toLowerCase().split(/\s+/).filter(Boolean);

    if (!words.length) {
      return movies.slice(0, 60);
    }

    return movies
      .map(function (movie) {
        var haystack = [
          movie.title,
          movie.year,
          movie.region,
          movie.type,
          movie.genre,
          movie.category,
          (movie.tags || []).join(" "),
          movie.oneLine
        ].join(" ").toLowerCase();

        var score = 0;
        words.forEach(function (word) {
          if (haystack.indexOf(word) !== -1) {
            score += 1;
          }

          if (String(movie.title || "").toLowerCase().indexOf(word) !== -1) {
            score += 3;
          }
        });

        return {
          movie: movie,
          score: score
        };
      })
      .filter(function (item) {
        return item.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score || b.movie.score - a.movie.score;
      })
      .slice(0, 120)
      .map(function (item) {
        return item.movie;
      });
  }

  function run() {
    var input = document.querySelector("[data-global-search-input]");
    var grid = document.querySelector("[data-search-results]");
    var count = document.querySelector("[data-search-count]");
    var empty = document.querySelector("[data-empty-state]");

    if (!input || !grid) {
      return;
    }

    var initial = params().get("q") || "";
    input.value = initial;

    function render() {
      var result = search(input.value.trim());

      grid.innerHTML = result.map(card).join("\n");

      if (count) {
        count.textContent = String(result.length);
      }

      if (empty) {
        empty.classList.toggle("is-visible", result.length === 0);
      }
    }

    input.addEventListener("input", render);
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
