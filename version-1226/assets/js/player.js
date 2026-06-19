(function () {
    function showMessage(shell, text) {
        var message = shell.querySelector('[data-player-message]');
        if (!message) {
            return;
        }
        message.textContent = text;
        message.classList.add('is-visible');
    }

    function hideMessage(shell) {
        var message = shell.querySelector('[data-player-message]');
        if (message) {
            message.classList.remove('is-visible');
        }
    }

    function setupPlayer(shell) {
        var video = shell.querySelector('video[data-hls-src]');
        var button = shell.querySelector('[data-play-button]');
        if (!video || !button) {
            return;
        }

        var source = video.getAttribute('data-hls-src');
        var hlsInstance = null;

        function playVideo() {
            hideMessage(shell);
            var promise = video.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(function () {
                    showMessage(shell, '浏览器阻止了自动播放，请再次点击视频播放按钮。');
                });
            }
        }

        function loadSource() {
            if (!source) {
                showMessage(shell, '当前影片没有可用播放源。');
                return;
            }

            if (video.dataset.ready === 'true') {
                playVideo();
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(video);
                hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    video.dataset.ready = 'true';
                    playVideo();
                });
                hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
                    if (data && data.fatal) {
                        showMessage(shell, '播放源加载失败，请稍后重试。');
                    }
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
                video.dataset.ready = 'true';
                video.addEventListener('loadedmetadata', playVideo, { once: true });
                video.load();
            } else {
                video.src = source;
                video.dataset.ready = 'true';
                playVideo();
            }
        }

        button.addEventListener('click', loadSource);
        video.addEventListener('play', function () {
            shell.querySelector('.video-shell').classList.add('is-playing');
        });
        video.addEventListener('pause', function () {
            shell.querySelector('.video-shell').classList.remove('is-playing');
        });
        window.addEventListener('beforeunload', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-player-shell]'), setupPlayer);
    });
})();
