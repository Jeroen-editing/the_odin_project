const reverseString = function(word) {

    let reversedString = word.split('').reverse().join('');
    console.log(reversedString);
    return reversedString;
}

module.exports = reverseString
