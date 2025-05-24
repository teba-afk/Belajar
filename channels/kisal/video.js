const manifestUri = "https://unifi-live07.secureswiftcontent.com/UnifiHD/live06.mpd";

function initApp() {
  shaka.polyfill.installAll();
  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error("Browser not supported!");
  }
}

async function initPlayer() {
  const video = document.getElementById("video");
  const player = new shaka.Player(video);

  window.player = player;

  try {
    await player.load(manifestUri);
    console.log("The video has now been loaded!");
  } catch (e) {
    console.error("Error loading video", e);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
