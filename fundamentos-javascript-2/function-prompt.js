//Atividade Extra - Function and Prompt

function describleCountrys(country, population, capitalCity, language, isSlandStr) {

    return `${country} tem ${population} milhões de habitantes, sua capital é ${capitalCity}, idioma falado é ${language}, é uma ilha? ${isSlandStr}`;
}

const prompt = require("prompt-sync")();
let country = prompt('Qual país voce mora? ');
let population = Number(prompt('Quantos habitantes tem no seu país? '));
let capitalCity = prompt('Qual a capital do seu páis? ');
let language = prompt('Qual o idioma do seu país? ');
let isSlandStr = prompt('É uma ilha? ');
let isSland = false;

capitalCity = capitalCity.toLowerCase().trim().split(" ")
    .join("");
language = language.toLowerCase().trim().split(" ")
    .join("");
isSlandStr = isSlandStr.toLowerCase()

if (isSlandStr === "yes" || isSlandStr === "sim" || isSlandStr === "y" || isSlandStr === "s") {
    isSland = true;
} else {
    isSland = false;
}

console.log(describleCountrys(country, population, capitalCity, language, isSlandStr));