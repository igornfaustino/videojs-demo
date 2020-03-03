const video_master = videojs("video1");
const video_slave = videojs("video2");

let isVideoSlaveReady = false;
let playing = false;

video_slave.ready(() => {
  console.log("Oii");
  document.getElementById("playPauseBtn").removeAttribute("disabled");
});

const play = () => {
  video_master.play();
  video_slave.play();
};

const pause = () => {
  video_master.pause();
  video_slave.pause();
};

const handlePlayPause = () => {
  playing = !playing;
  if (playing) {
    play();
  } else {
    pause();
  }
};
