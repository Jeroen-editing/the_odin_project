/* Calculate height of image and set switchpoi nav at 2/3 of height */

let switchMark = document.querySelector(".mainImage");

let bottomOfImage = Math.round(switchMark.offsetTop + 2 * (switchMark.height/3));


/* ------- LEFTNAV variables--------------------------------------- */

let navLeftFirst = document.getElementById("navLeftOrigenal");
let navLeftSecond = document.getElementById("navLeftReplace");

/* ------- MIDDLENAV variables------------------------------------- */

let navMiddleFirst = document.getElementById("navMiddleOrigenal");
let navMiddleSecond = document.getElementById("navMiddleReplace");

/* ------- RIGHTNAV variables-------------------------------------- */

let navRightFirst = document.getElementById("navRightOrigenal");
let navRightSecond = document.getElementById("navRightReplace");


function switchNav() {
    
    console.log(bottomOfImage, window.scrollY);

    if (window.scrollY >= bottomOfImage) {

        /* ------- LEFTNAV classSwitch ----------------------------- */

        navLeftFirst.classList.replace("navLeft", "hiddenLeftNav");

        navLeftSecond.classList.replace("hiddenLeftNav", "replacedLeftNav");

        /* ------- MIDDELNAV classSwitch --------------------------- */

        navMiddleFirst.classList.replace("navMiddle", "hiddenMiddleNav");

        navMiddleSecond.classList.replace("hiddenMiddleNav", "replacedMiddleNav");

        /* ------- RIGHTNAV classSwitch ---------------------------- */
        
        navRightFirst.classList.replace("navRight", "hiddenRightNav");

        navRightSecond.classList.replace("hiddenRightNav", "replacedRightNav");

    } else {

        /* ------- LEFTNAV classSwitch ----------------------------- */

        navLeftFirst.classList.replace("hiddenLeftNav", "navLeft");

        navLeftSecond.classList.replace("replacedLeftNav", "hiddenLeftNav");

        /* ------- MIDDELNAV classSwitch --------------------------- */

        navMiddleFirst.classList.replace("hiddenMiddleNav", "navMiddle");

        navMiddleSecond.classList.replace("replacedMiddleNav", "hiddenMiddleNav");

        /* ------- RIGHTNAV classSwitch ---------------------------- */

        navRightFirst.classList.replace("hiddenRightNav", "navRight");

        navRightSecond.classList.replace("replacedRightNav", "hiddenRightNav");

    }
}

window.addEventListener('scroll', switchNav);