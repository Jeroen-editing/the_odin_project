const nameLink = document.querySelector('.name');
const textBox = document.querySelector('.tooltiptext');

function addText() {
    textBox.classList.add('visible');
}
function removeText() {
    textBox.classList.remove('visible');
}

nameLink.addEventListener('mouseover', addText);
nameLink.addEventListener('mouseout', removeText)


copyRight();

function copyRight() {
    let now = new Date();
    let time = `${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let day = '<em>' + days[now.getDay()] + '</em>, ' + now.getDate() + ' ';
    let monthAndYear = now.toLocaleString('en', { month: 'long' }) + ' ' + now.getFullYear() + '. ';
    document.getElementById("dayAndDate").innerHTML =  day + monthAndYear;
    document.getElementById("hour").innerHTML = '<span class="time"> ' + time + '</span>';
}

