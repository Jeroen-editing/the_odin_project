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



/* POP-UP TEXT on images */

let banner_One = document.querySelector(".bannerOne");
let banner_Two = document.querySelector(".bannerTwo");
let banner_Three = document.querySelector(".bannerThree");

let textOverflowOne = document.getElementById("textPopUpOne");
let textOverflowTwo = document.getElementById("textPopUpTwo");
let textOverflowThree = document.getElementById("textPopUpThree");

function textShown() {
    let top = banner_Two.offsetTop - 600;
    let bottom = banner_Two.offsetTop - 150;
    let numbers = "top:" + top + "/ bottom: " + bottom + "/ y: " + scrollY;

    console.log(numbers);
    
    if (window.scrollY > (banner_One.offsetTop - 780) && window.scrollY < (banner_One.offsetTop + 40)) {

        textOverflowOne.classList.replace("textoverflow_hidden", "textoverflow_shown");

    } else {

        textOverflowOne.classList.replace("textoverflow_shown", "textoverflow_flowOut");
        setTimeout(function () {
            textOverflowOne.classList.replace("textoverflow_flowOut", "textoverflow_hidden");
        }, 2000);
    }
    
    if (window.scrollY > (banner_Two.offsetTop - 800) && window.scrollY < (banner_Two.offsetTop)) {

        textOverflowTwo.classList.replace("textoverflow_hidden", "textoverflow_shown");

    } else {

        textOverflowTwo.classList.replace("textoverflow_shown", "textoverflow_flowOut");
        setTimeout(function () {
            textOverflowTwo.classList.replace("textoverflow_flowOut", "textoverflow_hidden");
        }, 2000);
    }
    
    if (window.scrollY > (banner_Three.offsetTop - 780) && window.scrollY < (banner_Three.offsetTop + 40)) {

        textOverflowThree.classList.replace("textoverflow_hidden", "textoverflow_shown");

    } else {

        textOverflowThree.classList.replace("textoverflow_shown", "textoverflow_flowOut");
        setTimeout(function () {
            textOverflowThree.classList.replace("textoverflow_flowOut", "textoverflow_hidden");
        }, 2000);
    }
};

document.addEventListener('scroll', textShown);