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

// 巻き戻し
function repeat() {
  music.currentTime = 0;
}

// 一時停止
function pause() {
    music.pause();
}

// 曲送り
function next() {
  load("./music/Rally Go Round.mp3");
}

// 曲読み込み
function load(music_path) {
  music.src = music_path;
  music.load();
}

init();
