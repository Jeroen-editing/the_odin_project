const removeFromArray = function(array, ...arguments) {

    let arrayArguments = [...arguments]; // make array of arguments string
    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        if (!arrayArguments.includes(array[i])) {

            console.log(!arrayArguments.includes(array[i]));
            newArray.push(array[i]);
        }
    }
    return newArray;
};

module.exports = removeFromArray;


removeFromArray([1, 2, 3, 4], 3 );
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);