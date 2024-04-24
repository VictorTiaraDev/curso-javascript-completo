//Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
//perímetro.

const prompt = require("prompt-sync")();

let base = Number(prompt("Informe o valor da base: ", ""));
let altura = Number(prompt("Informe o valor da altura: ", ""));
console.log(base, altura);


function area(base, altura) {
    return base * altura;
}

function perimetro(base, altura) {
    return (base * 2) + (altura * 2);
}

if (altura > base) {
    let areaRetangulo = area(base, altura);
    let perimetroRetangulo = perimetro(base, altura);
    console.log(`Area = ${areaRetangulo} Perimetro = ${perimetroRetangulo}`);
} else {
    console.log('Olha, voce não informou as dimensões de um retangulo.');
}


