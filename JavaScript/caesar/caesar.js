const caesar = function(text, x) {

    let shift;
    (x > 26 || x < -26) ? shift = x % 26 : shift = x;

    let positions = [];
    for ( let i = 0; i < text.length; i++ ) {
        let charCode = text.charCodeAt( i );
        if ( charCode >= 97 && charCode <= 122 ) {
            let lower = charCode + shift;
            (lower < 97 || lower > 122) ? (lower < 97) ? lower += 26 : (lower > 122) ? lower -= 26 : 0 :  0;
            // 3 if statements in 1 line !!!
            positions.push(String.fromCharCode(lower));
        } else if ( charCode >= 65 && charCode <= 90 ) {
            let upper = charCode + shift;
            (upper < 65 || upper > 90) ? (upper < 65) ? upper += 26 : (upper > 90) ? upper -= 26 :  0 :  0;
            // 3 if statements in 1 line !!!
            positions.push(String.fromCharCode(upper));
        } else if (charCode >= 32 && charCode <= 64 || charCode >= 91 && charCode <= 96 || charCode >= 123 && charCode <= 126) {
            positions.push(String.fromCharCode(charCode));
        }
    }
    let caesar =
        positions
            .toString()
            .replace(/,,/g, '\.')
            .replace(/,/g, '')
            .replace(/\. /g, ', ');
            // you need to work around to change ',, ' back to ', ' so that not every open space is replaced with ', '
    console.log(caesar);
    return caesar;
};

caesar('A', 1);
caesar('Aaa', 1);
caesar('Hello, World!', 5);
caesar('Mjqqt, Btwqi!', -5)
caesar('Z.', 1);
caesar('Hello, World!', 75);
caesar('Hello, World!', -29);
caesar('What @ crazy "day" [weekend]!', 2);

module.exports = caesar;