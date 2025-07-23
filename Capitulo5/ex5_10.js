const prompt = require("prompt-sync")();
const valor = +prompt("Digite o valor");
const NumParC = +prompt("Numero de parcelas");

const ValorPARC = Math.floor(valor / NumParC);

const ValorFim = ValorPARC + (valor * NumParC);

for (let i = 1; i < NumParC; i++) {
    console.log(`${i} parcelas : de R$${ValorPARC.toFixed(2)}`);
}

console.log(`${NumParC} parcela : ${ValorFim.toFixed(2)}`);