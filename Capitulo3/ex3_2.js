const prompt = require("prompt-sync")();

const veiculo = prompt("Veiculo: ");
const preco = +prompt("Preço R$: ");

const entrada = preco*0.50;
const vezes = +prompt("quantas parcelas quer fazer?");
const parcela =(preco * 0.5)/vezes;

console.log(`promoção do Veiculo ${veiculo}`);
console.log(`Entrada de R$${entrada}`);
console.log(`+${vezes}x de R$${parcela}`);