import { H as Hls } from "./vendor/hls-vendor-dru42stk.js";

function setupPlayer(shell) {
  var video = shell.querySelector("video");
  var button = shell.querySelector("[data-play-button]");
  var source = video ? video.getAttribute("data-hls") : "";

  if (!video || !button || !source) {
    return;
  }

  var hlsInstance = null;

  function loadAndPlay() {
    button.classList.add("is-hidden");

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      video.play().catch(function () {});
      return;
    }

    if (Hls && Hls.isSupported()) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });

      hlsInstance.loadSource(source);
      hlsInstance.attachMedia(video);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play().catch(function () {});
      });

      hlsInstance.on(Hls.Events.ERROR, function (event, data) {
        if (!data || !data.fatal) {
          return;
        }

        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          hlsInstance.startLoad();
          return;
        }

        if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          hlsInstance.recoverMediaError();
          return;
        }

        hlsInstance.destroy();
      });

      return;
    }

    video.src = source;
    video.play().catch(function () {});
  }

  button.addEventListener("click", loadAndPlay);

  video.addEventListener("play", function () {
    button.classList.add("is-hidden");
  });

  video.addEventListener("pause", function () {
    if (video.currentTime === 0 || video.ended) {
      button.classList.remove("is-hidden");
    }
  });

  window.addEventListener("beforeunload", function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
}

document.querySelectorAll("[data-player-shell]").forEach(setupPlayer);
