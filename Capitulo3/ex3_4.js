const prompt = require("prompt-sync")();

const pesoRacao = +prompt('Quantos KG que quer?');
const consumoRacao = +prompt('Consumo de ração por dia');

const pesoGrama = pesoRacao*1000;
const Dura = Math.floor(pesoGrama/consumoRacao);
const sobra = pesoGrama % consumoRacao;


function elias (a, b){
    
}

console.log(`A ração durará ${Dura} dias`);
console.log(`E as sobras serão de ${sobra}`);