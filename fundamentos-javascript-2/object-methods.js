//Object Methods

//Jonas is a 46-year old teacher, and he has a driver's license.

const jonas = {

    firstName: 'Jonas',
    lasName: 'Schmedtmann',
    birtheYeah: 1991,
    job: 'Teacher',
    friends: ['Michael', ' Peter', ' Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birtheYeah
        return this.age;
    },

    getSumary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.getSumary());

/*
1- Add a method called describe to the myCountry object. This method will log a string to the console, 
similar to the string logged in the previous assignment, but this time using the 'this' keyword.

2- Call the describe method.

3- Add a method called checkIsland to the myCountry object. 
This method will set a new property on the object, called isIsland. 
isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

const myCountry = {

    country: "Brasil",
    capitalCity: 'Brasilia',
    population: 210,
    language: 'portugues',
    neighbours: ['Argnetina', 'Uruguai', 'Chile'],
    isIsland: true,

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);