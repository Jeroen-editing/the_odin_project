/* Get our elements +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//const player = document.querySelector('.player');
const player = document.querySelector('.tv__box');
const tvLight =  document.querySelector('.player');
// selector changed (extra div) to add some extra's
const video = player.querySelector('.viewer');
const controlBar = player.querySelector('.player__controls');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const light = player.querySelector('.play__warning');

const fulscreen = player.querySelector('.fullscreen');

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
    const icon = this.paused ? '❚ ❚' : '▶';
    toggle.textContent = icon;
    //console.table('Update that button man!' + icon);

    const buttonColor = this.paused ? (toggle.style.background='rgba(179,0,18,0.22)') : (toggle.style.background='rgba(0,153,33,0.22)');
    toggle.innerContent = buttonColor;
    //console.table('Update that light button man!' + buttonColor);
    //rgba(179,0,18,0.6)  rgba(0,153,33,0.6)

    const warning = this.paused ? (light.style.background="#780400") : (light.style.background='#04571A');
    light.innerContent = warning;
    //console.table('Update that light man!' + warning);
    // #B30012 #009921

    const backLight = this.paused ? (tvLight.style.boxShadow='0 0 16px 2px #000000') : (tvLight.style.boxShadow='0 0 16px 2px #555555');
    tvLight.innerContent = backLight;
    console.log(tvLight);
}

function skip() {
    //console.log(this.dataset.skip);
    video.currentTime += Number(this.dataset.skip);
    // this.dataset.skip is passing a string so need to convert to a number or float
    // in tutorial he use parseFloat, but Number also works
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.table(this.name);
    // console.log(this.value);
}

function handleProgress() {
    const precent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${precent}%`;
}
console.log(progress);

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(scrubTime);
}

fulscreen.innerHTML = '<img class="fullscreenIcon" src="./img/full-screen-1-white.png" height="25px" width="25px" alt="">';

function fullscreenMode() {
    fulscreen.innerHTML = '';
    fulscreen.innerHTML = '<img class="fullscreenIcon" src="./img/full-screen-exit-white.png" height="25px" width="25px" alt="">';
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
    //video.
    // controlBar.style.marginTop = '-60px';
    // controlBar.style.position = 'fixed';
    // controlBar.style.bottom = '20px';
}

/* Hook up the event listeners ++++++++++++++++++++++++++++++++++++++++++++ */

video.addEventListener('click', togglePlay);
video.addEventListener('keydown', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//let mousedown = false;
progress.addEventListener('click', scrub);
// classic code
// progress.addEventListener('mousemove', () => {
//     if(mousedown) {
//         scrub();
//     }
// });
// short arrowfunction
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = true);

fulscreen.addEventListener('click', fullscreenMode);