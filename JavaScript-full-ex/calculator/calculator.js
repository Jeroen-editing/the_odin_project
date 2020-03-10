function add (...arguments) {
	let arrayOfNumbers = [...arguments];
	let sum = +arrayOfNumbers[0];

	for (let i = 1; i < arrayOfNumbers.length; i++) {
		sum += +arrayOfNumbers[i];

	}
	console.log(sum);
	return sum;
} // made it a bit more complicated to allow more numbers (arguments in stead of x and y)

function subtract (...arguments) {
	let arrayOfNumbers = [ ...arguments];

	let substraction = arrayOfNumbers[0];
	for (let i = 1; i < arrayOfNumbers.length; i++) {
		substraction -= arrayOfNumbers[i];
	}
	console.log(substraction);
	return substraction;
} // made it a bit more complicated to allow more numbers (arguments in stead of x and y)

function sum (arguments) {
	let arrayOfNumbers = arguments;
	let sum;

	(arrayOfNumbers.length < 1) ? sum = 0 : calculateSum();

	function calculateSum() {
		sum = +arrayOfNumbers[0];

		for (let i = 1; i < arrayOfNumbers.length; i++) {
			sum += +arrayOfNumbers[i];
			console.log(sum);
		}
		return sum;
	}
	console.log(sum);
	return sum;
}

function multiply (arguments) {
	let arrayOfNumbers = arguments;
	let multiplication;

	(arrayOfNumbers.length < 1) ? multiplication = 0 : makeMultiplication();

	function makeMultiplication() {
		multiplication = +arrayOfNumbers[0];

		for (let i = 1; i < arrayOfNumbers.length; i++) {
			multiplication *= +arrayOfNumbers[i];
		}
		return multiplication;
	}
	console.log(multiplication);
	return multiplication;
}

function power(x,y) {
	let power = x;
	for (let i = 1; i < y; i++) {
		power *= x;
	}
	console.log(power);
	return power;
}

function factorial(x) {
	let factorial = 1;
	(x <= 1) ? factorial += 0 : calculateFactorial();

	function calculateFactorial() {
		for (let i = 1; i <= x; i++) {
			factorial *= i;
		}
		return factorial;
	}
	console.log(factorial);
	return factorial;
}

add(0,0);
add(2,2);
add(2,6);
add(2,4,6,8,10,12);

subtract(10,4);
subtract(100,4,20);

sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);

multiply([]);
multiply([2,4]);
multiply([2,4,6,8,10,12,14]);

power(4,3);
power(2,8);
power(-6,9)

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
