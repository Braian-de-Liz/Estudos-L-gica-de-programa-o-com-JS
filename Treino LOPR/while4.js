const prompt = require("prompt-sync")();

const numero = +prompt("me diga um número entre 1 a 10");
let i;


while (i !== numero) {
    i = Math.ceil(Math.random() * 10);

    console.log(i + '\n');
}