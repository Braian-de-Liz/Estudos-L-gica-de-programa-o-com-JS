const prompt = require("prompt-sync")();
const produtos = prompt("Digite o produto");
const numero = +prompt("Numero de Etiquetas");

for (let i = 1; i <= numero / 2; i++) {
    console.log(`${produtos.padEnd(30)} ${produtos.padEnd(30)}`);
}
if (numero % 2 == 1){
    console.log(produtos);
}
//hááááááá´;