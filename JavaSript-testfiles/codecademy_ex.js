/*
// objects & obj properties
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot._energyLevel = 'high';

robot.recharge();

// getters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,

    get energyLevel() {

        if(typeof (this._energyLevel) == "number") {
            return 'My current energy level is ' + this._energyLevel;
        } else {
            return "System malfunction: cannot retrieve energy level"
        }
    }
};

console.log(robot.energyLevel);

// setters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },

    set numOfSensors(num){
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else  {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);


// Factory functions (to create multiple objects)
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};

const tinCan = robotFactory('P-500', true);
console.log(tinCan.beep());


// destructuring: shorthand way of creating factory functions
const robotFactory = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};

const tinCan = robotFactory('P-500', true);
console.log(tinCan.beep());


// destructured assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot;
functionality.beep();


// Built-in obj-methods
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = {
    laserBlaster: true,
    voiceRecognition: true};

Object.assign(newRobot, robot);

console.log(newRobot);
*/

// 'this' in obj. methods
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.firstName + ' ' + this.lastName + ', age: ' + this.age);
    }
};

user.sayHi(); // John