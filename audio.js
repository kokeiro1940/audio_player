var music = new Audio();

function init() {
  music.preload = "auto";
  music.src = "./music/shining star.mp3";
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

// 巻き戻し
function repeat() {
  music.currentTime = 0;
}

// 一時停止
function pause() {
    music.pause();
}

init();
