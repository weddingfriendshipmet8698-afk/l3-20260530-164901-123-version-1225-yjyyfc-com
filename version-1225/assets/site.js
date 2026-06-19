(function () {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");

  if (header && menuToggle) {
    menuToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const sliders = document.querySelectorAll("[data-hero-slider]");

  sliders.forEach(function (slider) {
    const slides = Array.from(slider.querySelectorAll(".hero-slide"));
    const dots = Array.from(slider.querySelectorAll(".slider-dots button"));
    let index = 0;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        show(dotIndex);
      });
    });

    if (slides.length > 1) {
      setInterval(function () {
        show(index + 1);
      }, 5200);
    }
  });

  const filterForms = document.querySelectorAll("[data-filter-form]");

  filterForms.forEach(function (form) {
    const scope = document.querySelector(form.getAttribute("data-filter-form"));
    if (!scope) {
      return;
    }

    const cards = Array.from(scope.querySelectorAll(".movie-card"));
    const keyword = form.querySelector("[data-filter-keyword]");
    const year = form.querySelector("[data-filter-year]");
    const genre = form.querySelector("[data-filter-genre]");
    const note = document.querySelector(form.getAttribute("data-filter-note"));

    function normalize(value) {
      return String(value || "").trim().toLowerCase();
    }

    function apply() {
      const q = normalize(keyword ? keyword.value : "");
      const y = normalize(year ? year.value : "");
      const g = normalize(genre ? genre.value : "");
      let visible = 0;

      cards.forEach(function (card) {
        const text = normalize([
          card.dataset.title,
          card.dataset.region,
          card.dataset.genre,
          card.dataset.tags,
          card.dataset.year
        ].join(" "));
        const matchedKeyword = !q || text.indexOf(q) !== -1;
        const matchedYear = !y || normalize(card.dataset.year) === y;
        const matchedGenre = !g || normalize(card.dataset.genre).indexOf(g) !== -1 || normalize(card.dataset.tags).indexOf(g) !== -1;
        const matched = matchedKeyword && matchedYear && matchedGenre;
        card.style.display = matched ? "" : "none";
        if (matched) {
          visible += 1;
        }
      });

      if (note) {
        note.textContent = visible > 0 ? "筛选结果已更新" : "没有找到匹配影片";
      }
    }

    ["input", "change"].forEach(function (eventName) {
      form.addEventListener(eventName, apply);
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      apply();
    });

    apply();
  });

  const searchRoot = document.querySelector("[data-search-page]");

  if (searchRoot && typeof movieIndex !== "undefined") {
    const form = searchRoot.querySelector("form");
    const input = searchRoot.querySelector("input[name='q']");
    const results = searchRoot.querySelector("[data-search-results]");
    const params = new URLSearchParams(location.search);
    const initial = params.get("q") || "";

    function buildCard(movie) {
      return [
        "<a class=\"movie-card\" href=\"./" + movie.link + "\" data-title=\"" + escapeHtml(movie.title) + "\">",
        "  <div class=\"poster\">",
        "    <img src=\"" + movie.cover + "\" alt=\"" + escapeHtml(movie.title) + "海报\" loading=\"lazy\">",
        "    <div class=\"poster-mask\">",
        "      <span class=\"year-badge\">" + escapeHtml(movie.year) + "</span>",
        "      <strong>" + escapeHtml(movie.title) + "</strong>",
        "    </div>",
        "  </div>",
        "  <div class=\"movie-card-body\">",
        "    <h3>" + escapeHtml(movie.title) + "</h3>",
        "    <p>" + escapeHtml(movie.one) + "</p>",
        "    <div class=\"card-meta\"><span>" + escapeHtml(movie.region) + "</span><span>" + escapeHtml(movie.genre) + "</span></div>",
        "  </div>",
        "</a>"
      ].join("");
    }

    function escapeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function render(query) {
      const q = String(query || "").trim().toLowerCase();
      const source = movieIndex || [];
      const matched = q
        ? source.filter(function (movie) {
            return [
              movie.title,
              movie.region,
              movie.genre,
              movie.tags,
              movie.year,
              movie.one
            ].join(" ").toLowerCase().indexOf(q) !== -1;
          }).slice(0, 120)
        : source.slice(0, 48);

      if (!results) {
        return;
      }

      if (!matched.length) {
        results.innerHTML = "<div class=\"empty-state\">没有找到匹配影片</div>";
        return;
      }

      results.innerHTML = "<div class=\"movie-grid\">" + matched.map(buildCard).join("") + "</div>";
    }

    if (input) {
      input.value = initial;
    }

    render(initial);

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const value = input ? input.value : "";
        const url = new URL(location.href);
        if (value.trim()) {
          url.searchParams.set("q", value.trim());
        } else {
          url.searchParams.delete("q");
        }
        history.replaceState(null, "", url.toString());
        render(value);
      });
    }
  }

  const players = document.querySelectorAll(".movie-player");

  players.forEach(function (player) {
    const video = player.querySelector("video");
    const layer = player.querySelector(".poster-layer");
    const button = player.querySelector(".player-start");
    const state = player.querySelector(".player-state");

    if (!video) {
      return;
    }

    const src = video.getAttribute("data-video");
    let ready = false;
    let hlsInstance = null;

    function setState(text) {
      if (state) {
        state.textContent = text;
      }
    }

    function hideLayer() {
      if (layer) {
        layer.classList.add("is-hidden");
      }
    }

    function init() {
      if (ready || !src) {
        return;
      }

      ready = true;
      setState("正在加载");

      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          setState("");
        });
        hlsInstance.on(window.Hls.Events.ERROR, function (eventName, data) {
          if (data && data.fatal) {
            setState("视频加载失败");
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener("loadedmetadata", function () {
          setState("");
        }, { once: true });
      } else {
        setState("视频加载失败");
      }
    }

    function play() {
      init();
      const promise = video.play();
      if (promise && typeof promise.then === "function") {
        promise.then(hideLayer).catch(function () {
          setState("点击播放");
        });
      } else {
        hideLayer();
      }
    }

    if (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        play();
      });
    }

    if (layer) {
      layer.addEventListener("click", function (event) {
        event.preventDefault();
        play();
      });
    }

    video.addEventListener("play", hideLayer);
    video.addEventListener("pause", function () {
      if (layer && video.currentTime === 0) {
        layer.classList.remove("is-hidden");
      }
    });

    init();
  });
})();
