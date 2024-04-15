/*
Introduction to Arrays:

1- Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a variable called populations.

2- Log to the console whether the array has 4 elements or not (true or false).

3- Create an array called percentages containing the percentages of the world population for these 4 population values. 
Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

let worldPopulation = 7900

let describePopulation = function (country, population) {
    percentage = percentageOfWorld1(worldPopulation, population)
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}

let percentageOfWorld1 = function (population) {
    percentage = (population / worldPopulation) * 100
    return percentage
}

let populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(percentages);