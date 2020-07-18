const repeatString = function(word, times) {

    let string = '';
    (times < 0) ? string += 'ERROR' : makeString();

    function makeString() {
        for(let i = 0; i < times; i++) {
            string += word;
        }
    }
    console.log(string);
    return string;
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);

module.exports = repeatString;
