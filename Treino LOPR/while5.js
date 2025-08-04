const numero1 = parseInt(process.argv[2]);
const numero2 = parseInt(process.argv[3]);

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: Digite dois números válidos como argumentos!");
    console.log("Exemplo: node validador.js 5 10");
    process.exit();
}

let n1 = numero1;
let n2 = numero2;

while (n1 !== n2) {
    console.log(n1 + " --- " + n2);

    if (n1 < n2) {
        n1++;
    } else {
        n2--;
    }
}



console.log("Números iguais:", n1);