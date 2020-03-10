let findTheOldest = function(array) {


    // let now = new Date();
    // let thisYear = now.getFullYear();
    //
    // let birthYear;
    // let deathYear;
    // let ages = [];
    // let oldest;
    // people.forEach((person) => {
    //     birthYear = person.yearOfBirth;
    //     deathYear = person.yearOfDeath;
    //     if (person.yearOfDeath === undefined) {
    //         deathYear = thisYear;
    //     }
    //     person.age = deathYear - birthYear;
    //     console.log(people);
    // });
    // console.log(ages);
    // oldest = ages.reduce(function (a, b) {
    //     return Math.max(a, b);
    // });

    let oldest =  array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge  = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });

    console.log(oldest);
    return  oldest;
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const people = [
    {
        name: 'Zompy',
        yearOfBirth: 1066,
        yearOfDeath: 3840
    },
    {
        name: 'Carly',
        yearOfBirth: 2018,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
    {
        name: 'Tom',
        yearOfBirth: 1962,
        yearOfDeath: 2020
    },
    {
        name: 'Bob',
        yearOfBirth: 1912,
        yearOfDeath: 1956
    },
    {
        name: 'His-sis',
        yearOfBirth: 0,
    },
];

findTheOldest(people).name;

module.exports = findTheOldest