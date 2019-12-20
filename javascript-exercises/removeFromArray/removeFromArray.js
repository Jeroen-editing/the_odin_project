const removeFromArray = function(...Args) {

    let list = Args[0];
    let newList = [];

    list.forEach((item) => {

        if (!Args.includes(item)) {

            newList.push(item);

        }
    });
    return newList;

};

module.exports = removeFromArray;
