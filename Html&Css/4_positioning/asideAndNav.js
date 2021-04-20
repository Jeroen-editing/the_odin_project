/* ASIDE BAR - pop-up */
let asideMenuBtn = document.querySelector(".menuIcon");

let asideBar =  document.getElementById("sideBar");

function showAside() {
    
    asideBar.classList.replace("asideMenu_hidden", "asideMenu_shown");

}

function hideAside() {
    
    asideBar.classList.replace("asideMenu_shown", "asideMenu_hidden");

}

asideMenuBtn.addEventListener('click', showAside);

asideBar.addEventListener('mouseleave', hideAside);



/* POP-UP NAV */
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
    /*console.log(bottomOfImage, window.scrollY);*/

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
};

document.addEventListener('scroll', switchNav);


/* subject disapear */

let subject = document.getElementById("subject");

console.log(subject);

function subjectHide() {
    
    setTimeout( function() {
        subject.classList.replace("subject_shown", "subject_hidden");
    }, 4000);
}
function subjectShow() {
    subject.classList.replace("subject_hidden", "subject_shown");
    
    setTimeout( function() {
        subject.classList.replace("subject_shown", "subject_hidden");
    }, 4000);
}

window.onload = subjectHide();
document.addEventListener('scroll', subjectShow);