const fibonacci = function(x) {

    let beforelast = 1;
    let last = 1;
    let fibonacciNumbre = 0;
    let fibonacci = [0, 1, 1];

    if (x >= 0) {
        for (let i = 0; i <= +x - 3; i++) {
            fibonacciNumbre = beforelast + last;
            fibonacci.push(fibonacciNumbre);
            beforelast = last;
            last = fibonacciNumbre;
        }
        console.table(fibonacci[x]);
        return fibonacci[x];

    } else {
        console.log('"OOPS"');
        return "OOPS";
    }
};

fibonacci(4);
fibonacci(0);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");
fibonacci("48");

module.exports = fibonacci;

//(x === 2 || x >= 1) ? fibonacci.push(1) : (x === 0) ? fibonacci.push(0) :