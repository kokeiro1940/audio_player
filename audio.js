var music = new Audio();

function init() {
  music.preload = "auto";
  music.src = "./music/05 運命線上のアリア.mp3";
  music.load();

  music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  }, false);
}

// 再生
function play() {
  music.loop = true;
  music.play();
}

// 巻き戻し停止
function stop() {
  music.pause();
  music.currentTime = 0;
}

// 一時停止
function pause() {
    music.pause();
  }

init();
