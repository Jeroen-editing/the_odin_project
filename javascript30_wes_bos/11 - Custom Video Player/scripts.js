/* Get our elements +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

console.log(video);

/* Our functions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// function togglePlay() {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updatePlayButton() {
    const icon = this.paused ? '▶' : '❚ ❚';
    toggle.textContent = icon;
    console.table('Update that button man!' + icon);
}


/* Hook up the event listeners ++++++++++++++++++++++++++++++++++++++++++++ */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

toggle.addEventListener('click', togglePlay);