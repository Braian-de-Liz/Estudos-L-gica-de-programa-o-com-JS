const prompt = require("prompt-sync")();

function Teste(string) {

    return string;
}


const elias = "elias";

const numero1 = +prompt("Digite seu primeiro Número");
const numero2 = +prompt("Digite seu Segundo Número");


function soma(num1, num2) {
    num1 += num2;

    return num1
}
/* 
const ELias = () => {
    console.log("ELIAS");
}
 */
console.log(Teste(elias), soma(numero1, numero2));

ELias();