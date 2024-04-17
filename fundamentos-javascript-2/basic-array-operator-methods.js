let friends = ['Michael', 'Steven', 'Peter'];

//Add Elements
let newLength = friends.push('Jay');
console.log(newLength);

friends.unshift('John'); //add 1ª element
console.log(friends);

//Remove Elements
friends.pop(); //remove 5 element
console.log(friends)
let popped = friends.pop();
console.log(popped); //remove 
console.log(friends);

friends.shift(); // Remove element 1
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

/*
Basic Array Operator Methods

1- Create an array containing all the neighbouring countries of a country of your choice. 
Choose a country which has at least 2 or 3 neighbours. 
Store the array into a variable called neighbours.

2- At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, 
so add it to the end of the neighbours array.

3- Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

4- If the neighbours array does not include the country 'Germany', 
log to the console: 'Probably not a central european country :D'.

5- Change the name of one of your neighbouring countries. 
To do that, find the index of the country in the neighbours array, 
and then use that index to change the array at that index position. 
For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

let neighbours = ['Brasil', 'Argentina', 'Uruguai'];
neighbours.push('Utopia');
neighbours.pop('Utopia');


if (!neighbours.includes('Alemanha')) {
    console.log(`Provalemnte não é um país da Europa Central :D`);
}

neighbours[neighbours.indexOf('Uruguai')] = 'Chile';

console.log(neighbours);