import { H as Hls } from './hls-vendor-dru42stk.js';

function loadHls(video, source) {
  if (!source) {
    return Promise.reject(new Error('Missing HLS source.'));
  }

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
    return Promise.resolve();
  }

  if (Hls && Hls.isSupported()) {
    if (video._hlsInstance) {
      video._hlsInstance.destroy();
    }
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true
    });
    video._hlsInstance = hls;
    hls.loadSource(source);
    hls.attachMedia(video);
    return new Promise(function (resolve) {
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        resolve();
      });
    });
  }

  return Promise.reject(new Error('This browser does not support HLS playback.'));
}

function setupPlayer(shell) {
  const video = shell.querySelector('video[data-src]');
  const button = shell.querySelector('.js-play-button');

  if (!video || !button) {
    return;
  }

  button.addEventListener('click', function () {
    button.disabled = true;
    button.querySelector('strong').textContent = '正在加载';

    loadHls(video, video.dataset.src)
      .then(function () {
        button.classList.add('hidden');
        video.play().catch(function () {
          video.controls = true;
        });
      })
      .catch(function (error) {
        button.disabled = false;
        button.querySelector('strong').textContent = '播放失败，请重试';
        const hint = button.querySelector('small');
        if (hint) {
          hint.textContent = error.message;
        }
      });
  });
}

document.querySelectorAll('.js-player-shell').forEach(setupPlayer);
