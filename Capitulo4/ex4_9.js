const prompt = require("prompt-sync")();
const numero = +prompt("digite um numero");

if(numero<100 || numero >= 1000){
    console.log("numero não pertence as centenas");
    return false;
}

const num1 = Math.floor(numero/100);
const sobra = numero % 100;

const num2 = Math.floor(sobra/10);
const num3 = sobra % 10;

console.log(`Sei lá ${num3}, ${num2},  ${num1}`)