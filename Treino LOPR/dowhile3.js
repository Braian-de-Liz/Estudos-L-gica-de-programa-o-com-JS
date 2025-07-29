const prompt = require("prompt-sync")();
let sair = false;
sair = prompt("você quer sair responda SIM/NÃO");

do {
    let nota = +prompt("me diga uma nota, ");
    console.log("está era sua nota " + nota)

    if(sair === "SIM"){
        
    }
} while (sair = false);