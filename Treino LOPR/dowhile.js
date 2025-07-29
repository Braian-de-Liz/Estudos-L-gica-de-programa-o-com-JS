const prompt = require("prompt-sync")();

const numUser = +prompt("Digite um numero de 10 a 99: ");
let numAlea

const gerarNumero = () => {
    let numero;

    do {
        numero = Math.floor(Math.random() * 100) + 10; 
    } while (numero % 11 === 0); 


    return numero;
}


do {
    numAlea = gerarNumero();
    console.log(numAlea);
} while (numAlea !== numUser);
