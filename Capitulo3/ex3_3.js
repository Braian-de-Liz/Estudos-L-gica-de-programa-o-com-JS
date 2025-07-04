const prompt = require("prompt-sync")();

const salario = +prompt("Salário R$: ");
const tempo = +prompt("Tempo em anos ");
const quadrilhos = Math.floor(tempo/4);

const acrescimo = salario*quadrilhos/100;

console.log(`Quadrilhos : ${quadrilhos}`);
console.log(`Salário Final ${salario+acrescimo}`);