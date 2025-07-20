/* const prompt = require('prompt-sync')();

let numero = +prompt("digite numero");

for(let i = 1; i<=10; i++){
    console.log(`${numero} x ${i} - ${numero * i}`);
} */

const form = document.querySelector("form");
const Resp1 = document.getElementById("Resp1");
const Resp2 = document.getElementById("Resp2");

let resposta = "";
let numcontas = 0;
let valorFI = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const Descricao = document.getElementById("Descricao")
    const Valor = document.getElementById("Valor_Pagar").value;

    numcontas++;
    valorFI += Valor;

    resposta = resposta + Descricao + "R$:" + Valor.toFixed(2)+"\n";


    Resp1.innerText = `${resposta} -------------------------`;
    Resp2.innerText = `${numcontas} Conta(s) - Total R$:${valorFI.toFixed(2)}`;

    Descricao.value = "";
    Valor.value = "";
    Descricao.focus();
});