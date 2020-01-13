const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = Math.floor((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(secondsDegrees);

    const minutes = now.getMinutes();
    const minutesDegrees = Math.floor((minutes/ 600) * 360);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutesDegrees);
}

setInterval(setDate, 1000);

