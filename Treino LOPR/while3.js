const prompt = require("prompt-sync")();

let i = +prompt("Quantos números você quer analisar");
while (i > 0) {
    let numero = Math.floor(Math.random() * 100);

    if(numero % 2 === 0){
        console.log(numero + " PAR" + "\n");
    }else{
        console.log(numero + " IMPAR" + "\n");
    }
    i--;
}