const prompt = require("prompt-sync")();


const Medicamento = prompt("Qual o seu medicamento");
const Preco = +prompt("qual o preço do medicamento");
const quantidade = +prompt("Quantas unidades");


let ValorCobrar = (Preco * quantidade);

if(quantidade>2){
    const desconto = ValorCobrar*0.1;
    ValorCobrar -= desconto;
}

console.log(`Você deve pagar R$${ValorCobrar} pelo medicamento ${Medicamento}`);