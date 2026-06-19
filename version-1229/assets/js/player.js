import { H as Hls } from './hls-vendor-dru42stk.js';

function ready(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

ready(function () {
  var shell = document.querySelector('[data-player]');
  if (!shell) {
    return;
  }

  var video = shell.querySelector('video');
  var startButton = shell.querySelector('[data-player-start]');
  var note = shell.querySelector('[data-player-note]');
  var source = shell.getAttribute('data-src');
  var hlsInstance = null;

  function setNote(message) {
    if (note) {
      note.textContent = message;
    }
  }

  function attachSource() {
    if (!video || !source) {
      setNote('当前影片暂未绑定可用播放源。');
      return Promise.resolve(false);
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
      return Promise.resolve(true);
    }

    if (Hls && Hls.isSupported()) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90
      });

      hlsInstance.loadSource(source);
      hlsInstance.attachMedia(video);

      hlsInstance.on(Hls.Events.ERROR, function (_, data) {
        if (data && data.fatal) {
          setNote('播放器遇到网络或媒体错误，可刷新页面后重试。');
        }
      });

      return Promise.resolve(true);
    }

    setNote('当前浏览器不支持 HLS 播放，请更换支持 m3u8 的浏览器。');
    return Promise.resolve(false);
  }

  if (startButton) {
    startButton.addEventListener('click', function () {
      startButton.disabled = true;
      attachSource().then(function (readyToPlay) {
        if (!readyToPlay) {
          startButton.disabled = false;
          return;
        }

        startButton.classList.add('is-hidden');
        setNote('正在加载播放源，请稍候。');

        var playPromise = video.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.then(function () {
            setNote('正在播放。');
          }).catch(function () {
            startButton.classList.remove('is-hidden');
            startButton.disabled = false;
            setNote('浏览器阻止了自动播放，请再次点击播放按钮。');
          });
        }
      });
    });
  }

  window.addEventListener('beforeunload', function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
});
