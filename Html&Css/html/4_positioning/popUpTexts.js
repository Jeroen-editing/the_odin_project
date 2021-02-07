/* POP-UP TEXT on images */

let banner_One = document.querySelector(".bannerOne");
let banner_Two = document.querySelector(".bannerTwo");
let banner_Three = document.querySelector(".bannerThree");
let banner_Four = document.querySelector(".bannerFour");

let textOverflowOne = document.getElementById("textPopUpOne");
let textOverflowTwo = document.getElementById("textPopUpTwo");
let textOverflowThree = document.getElementById("textPopUpThree");
let textOverflowFour = document.getElementById("textPopUpFour");

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

    if (window.scrollY > (banner_Four.offsetTop - 780) && window.scrollY < (banner_Four.offsetTop + 40)) {

        textOverflowFour.classList.replace("textoverflow_hidden", "textoverflow_shown");

    } else {

        textOverflowFour.classList.replace("textoverflow_shown", "textoverflow_flowOut");
        setTimeout(function () {
            textOverflowFour.classList.replace("textoverflow_flowOut", "textoverflow_hidden");
        }, 2000);
    }
};

document.addEventListener('scroll', textShown);