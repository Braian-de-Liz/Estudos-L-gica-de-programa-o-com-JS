const prompt = require("prompt-sync")();
const Valor = +prompt("Valor da Compra");
const aux = Math.floor(Valor/20);
const parcelas = aux == 0 ? 1: aux > 6 ? 6: aux;

const ValorParcela = Valor/parcelas;

console.log(`Pode pagar em ${parcelas} x de R$${ValorParcela.toFixed(2)}`);
