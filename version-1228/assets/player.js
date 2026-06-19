(function () {
  var players = Array.prototype.slice.call(document.querySelectorAll('.js-player'));

  players.forEach(function (video) {
    var box = video.closest('.player-box');
    var button = box ? box.querySelector('[data-play-button]') : null;
    var stream = video.getAttribute('data-stream');
    var ready = false;
    var hls = null;

    function prepare() {
      if (ready || !stream) {
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
        ready = true;
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        hls = new Hls({
          maxBufferLength: 30,
          enableWorker: true
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
        ready = true;
        return;
      }

      video.src = stream;
      ready = true;
    }

    function startPlayback() {
      prepare();

      if (button) {
        button.classList.add('is-hidden');
      }

      var playPromise = video.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {
          if (button) {
            button.classList.remove('is-hidden');
          }
        });
      }
    }

    if (button) {
      button.addEventListener('click', startPlayback);
    }

    video.addEventListener('click', function () {
      if (video.paused) {
        startPlayback();
      }
    });

    video.addEventListener('play', function () {
      if (button) {
        button.classList.add('is-hidden');
      }
    });
  });
})();
