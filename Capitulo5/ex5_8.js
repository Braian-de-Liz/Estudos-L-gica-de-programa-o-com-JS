const prompt = require("prompt-sync")(); 

console.log("Programa Elias de Anos Copas do Mundo, digite 0 para sair");
console.log("---------------------------------------------");

do {
    const ano = +prompt("digite o Ano");

    if (ano === 0) {
        break;
    }
    else if (ano == 1942 || ano == 1946) {
        console.log(`Esse ano de ${ano} não houve copa do mundo pois era 2º guerra ou pós`);
    }

    else if (ano >= 1930 && ano % 4 == 0){
        console.log(`EM ${ano} teve copa do mundo sim`);
    }
    else{
        console.log(`Não ${ano} não foi ano de copa do mundo seu arrombado`);
    }
}while (true);

