const sumAll = function(x, y) {

    let biggest;
    let smallest;
    let sum = 0;

    if( typeof x === "number" && x > 0 && typeof y === "number" && y > 0) {

        if (x > y) {
            biggest = +x;
            smallest = +y;

        } else {
            biggest = +y;
            smallest = +x;
        }

        for(let i = smallest; i  <= biggest; i++) {
            sum += smallest;
            smallest++;
            // console.log('i: ' + i);
            // console.log('sum: ' + sum);
        }

        //console.log(sum);
        return sum;
    } else {
        //console.log("ERROR");
        return "ERROR";
    }
};

module.exports = sumAll;

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
sumAll(14000, 145);