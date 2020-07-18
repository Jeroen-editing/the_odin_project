const leapYears = function(year) {

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
        //console.log(true);

    } else return year % 400 === 0; // SAME AS:

// else if (year % 400 === 0) {
//         return true;
//         //console.log(true);
//     } else {
//         return false;
//         //console.log(false);
//     }
};

console.log(
leapYears(1996),
leapYears(1997),
leapYears(34992),
leapYears(1900),
leapYears(1600),
leapYears(700));

module.exports = leapYears;