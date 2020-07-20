let given_number = document.getElementById("givenNumber");

let submit_btn = document.getElementById("submit");

let outputScreen = document.getElementById("output");

let output = ['<p>'];

let fizz = "<span class='fizz'>fizz";

let buzz = "<span class='buzz'>buzz";

let fizzbuzz = "<span class='fizzbuzz'>fizzbuzz";


function showNumber() {

    let number = Number(given_number.value);

    console.log(number + " => type = " + typeof number);

    for (let index = 1; index <= number; index++) {

        if (index % 3 === 0 && index % 5 === 0) {
            output += fizzbuzz + ', </span>';
        } else if (index % 3 === 0) {
            output += fizz + ', </span>';
        } else if (index % 5 === 0) {
            output += buzz + ', </span>';
        } else {
            output += '<em>' + index + ',</em> ';
        }

        if (index % 10 === 0) {
            output += '</p><p>'
        }
    }

    outputScreen.innerHTML = output;
}


submit_btn.addEventListener("click", showNumber);