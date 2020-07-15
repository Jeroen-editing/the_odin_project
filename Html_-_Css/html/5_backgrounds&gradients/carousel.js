let photo = document.getElementById("mainPhoto");

let photoArray = ["your_verse_hero.jpg", "ipadMap.jpg", "iPadPhoto.jpg", "iMac.jpg"];
let maxIndex = photoArray.length - 1;
let photoIndex = 0;

function showPhoto() {
    photo.src = "assets/images/" + photoArray[photoIndex];
}

function startInterval() {
    
    setInterval(() => {
        if (photoIndex > maxIndex) {
            photoIndex = 0;
        }
        showPhoto();
        photoIndex += 1;
    }, 6000);
  
}

window.onload = startInterval();