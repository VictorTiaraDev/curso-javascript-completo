const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peater', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // leitura da matriz jonas array
    console.log(jonas[i], typeof jonas[i]);

    //preenchendo tipos de array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    age = 2037 - years[i]
    ages.push(age);
}
console.log(ages);

 //continue and break
console.log('--- ONLY STRINGS ---');

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;
    
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;
    
    console.log(jonas[i], typeof jonas[i]);
}
