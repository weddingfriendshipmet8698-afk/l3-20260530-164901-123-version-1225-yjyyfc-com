(function () {
    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name) || '';
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function cardTemplate(movie) {
        var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
            return '<span class="tag">' + escapeHtml(tag) + '</span>';
        }).join('');

        return [
            '<article class="movie-card movie-card-compact">',
            '  <a class="poster-link" href="' + escapeHtml(movie.url) + '">',
            '    <img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + ' 海报" loading="lazy">',
            '    <span class="card-year">' + escapeHtml(movie.year) + '</span>',
            '    <span class="card-score">热度 ' + escapeHtml(movie.score) + '</span>',
            '  </a>',
            '  <div class="card-body">',
            '    <div class="card-meta">',
            '      <a href="category/' + escapeHtml(movie.categorySlug) + '.html">' + escapeHtml(movie.categoryName) + '</a>',
            '      <span>' + escapeHtml(movie.type) + '</span>',
            '    </div>',
            '    <h3><a href="' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>',
            '    <p>' + escapeHtml(movie.oneLine) + '</p>',
            '    <div class="tag-row">' + tags + '</div>',
            '  </div>',
            '</article>'
        ].join('');
    }

    function setupSearch() {
        var data = window.MOVIE_SEARCH_DATA || [];
        var form = document.querySelector('[data-search-form]');
        var input = document.querySelector('[data-search-input]');
        var category = document.querySelector('[data-search-category]');
        var year = document.querySelector('[data-search-year]');
        var type = document.querySelector('[data-search-type]');
        var results = document.querySelector('[data-search-results]');
        var count = document.querySelector('[data-search-count]');

        if (!results || !input) {
            return;
        }

        input.value = getParam('q');

        function apply() {
            var keyword = normalize(input.value);
            var categoryValue = normalize(category ? category.value : '');
            var yearValue = normalize(year ? year.value : '');
            var typeValue = normalize(type ? type.value : '');

            var matched = data.filter(function (movie) {
                var haystack = normalize([
                    movie.title,
                    movie.year,
                    movie.type,
                    movie.region,
                    movie.genre,
                    movie.categoryName,
                    (movie.tags || []).join(' '),
                    movie.oneLine
                ].join(' '));

                var okKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                var okCategory = !categoryValue || normalize(movie.categorySlug) === categoryValue;
                var okYear = !yearValue || normalize(movie.year).indexOf(yearValue) !== -1;
                var okType = !typeValue || normalize(movie.type).indexOf(typeValue) !== -1;
                return okKeyword && okCategory && okYear && okType;
            });

            matched.sort(function (a, b) {
                return Number(b.score) - Number(a.score);
            });

            var display = matched.slice(0, 240);
            results.innerHTML = display.map(cardTemplate).join('') || '<p class="empty-result">没有找到匹配影片，请换一个关键词。</p>';
            if (count) {
                count.textContent = '找到 ' + matched.length + ' 部，当前显示 ' + display.length + ' 部';
            }
        }

        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                var url = new URL(window.location.href);
                url.searchParams.set('q', input.value);
                window.history.replaceState({}, '', url.toString());
                apply();
            });
        }

        [input, category, year, type].forEach(function (element) {
            if (element) {
                element.addEventListener('input', apply);
                element.addEventListener('change', apply);
            }
        });

        apply();
    }

    document.addEventListener('DOMContentLoaded', setupSearch);
})();
