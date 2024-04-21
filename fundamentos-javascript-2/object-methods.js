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