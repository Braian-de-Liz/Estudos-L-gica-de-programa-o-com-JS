const prompt = require("prompt-sync")();
const pessoas = +prompt('Numero de pessoas');
const peixes = +prompt('Numero de peixes');


let pagar

if(peixes <= pessoas){
    pagar = pessoas * 20;

}else{
    pagar = pessoas * 20 + (peixes - pessoas) * 12;
}

console.log(`Valor a pagar: R$ ${pagar.toFixed(2)}`);   
