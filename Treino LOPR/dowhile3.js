const prompt = require("prompt-sync")();

let nota;
let valorNota = 0;
let sair = prompt("Você quer sair SIM/NÃO").toUpperCase();
let contador = 0;

do {
    contador++
    nota = +prompt("Diga uma nota");
    valorNota += nota;
    sair = prompt("quer adicionar mais? SIM/NÃO").toUpperCase();


} while (sair === "SIM");

if (contador > 0) {
    let media = valorNota / contador;
    console.log(`A média das notas é ${media}`);
} else {
    console.log(    );
}


