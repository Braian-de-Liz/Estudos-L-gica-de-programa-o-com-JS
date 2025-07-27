const prompt = require("prompt-sync")();

function Teste(string) {

    return string;
}


const numero1 = +prompt("Digite seu primeiro Número");
const numero2 = +prompt("Digite seu Segundo Número");

function soma(num1, num2) {
    num1 += num2;
    
    return num1
}
const nome = numero1 > numero2 ? "Braian" : "Elias";

console.log(Teste(nome), soma(numero1, numero2));


