
import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',throttle(onStart, 1000));

function onStart(time) {
localStorage.setItem("videoplayer-current-time", time.seconds)
}

if (localStorage.getItem("videoplayer-current-time") ?? "") {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

