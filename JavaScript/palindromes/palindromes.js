const palindromes = function(string) {
    let givenString = string.toString();
    let stringOnlyLetters =
        givenString
            .replace(/ /g,'')
            .replace(/,/g, '')
            .replace(/!/g, '')
            .replace(/\./g, '');
    let stringLowercase = stringOnlyLetters.toLowerCase();
    //console.log(typeof stringLowercase, stringLowercase);
    let palindrome;

    for(let i = 0; i < stringLowercase.length; i++) {
        // if (stringLowercase[i] === stringLowercase[stringLowercase.length - 1 - i]) {
        //     palindrome = true;
        // } else {
        //     palindrome = false;
        // }
        palindrome = stringLowercase[i] === stringLowercase[stringLowercase.length - 1 - i];
    }
    console.log(palindrome);
    return palindrome;
};


palindromes('racecar');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maraca.');

module.exports = palindromes;