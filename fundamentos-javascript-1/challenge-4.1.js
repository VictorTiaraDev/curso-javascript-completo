/*Challenge #4 - Condicionais.

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country,
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1-Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...
else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const firstName = "Steven"
let bill = 430;
let tip1 = 15 / 100 * bill;
let tip2 = 20 / 100 * bill;

result1 = (bill + tip1);
result2 = (bill + tip2);

if (bill >= 50 && bill <= 300) {
    console.log(`Total s/ gorjeta: R$${bill.toFixed(2)} 
    
 + 15% de gorjeta: R$${tip1.toFixed(2)} 
    
 Total: R$${result1.toFixed(2)} 
    
 Sr. ${firstName}, obrigado pela preferência!`);

} else if (bill < 50) {
    console.log(`Total s/ gorjeta: R$${bill.toFixed(2)} 
    
 + 20% de gorjeta: R$${tip2.toFixed(2)} 
    
 Total: R$${result2.toFixed(2)} 
    
 Sr. ${firstName}, obrigado pela preferência!`);

} else {
    console.log(`Total s/ gorjeta: R$${bill.toFixed(2)}
    
 + 20% de gorjeta: R$${tip2.toFixed(2)}

 Total: R$${result2.toFixed(2)} 
    
 Sr. ${firstName}, obrigado pela preferência!`);
}