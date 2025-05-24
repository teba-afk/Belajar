window.onload = function () {
  const manifestUri = "https://unifi-live07.secureswiftcontent.com/UnifiHD/live06.mpd";

  shaka.polyfill.installAll();

  if (shaka.Player.isBrowserSupported()) {
    const video = document.getElementById("video");
    const player = new shaka.Player(video);

    player.load(manifestUri).then(function () {
      console.log("Video loaded!");
    }).catch(function (e) {
      console.error("Error loading video", e);
    });
  } else {
    console.error("Browser not supported!");
  }
};
