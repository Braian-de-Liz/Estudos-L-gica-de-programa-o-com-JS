const prompt = require("prompt-sync")();

function soma(num1, num2) {
    let resultadoSO = num1 + num2;

    return resultadoSO;
}

function subtrair(num1, num2) {
    let resultadoSUB = num1 - num2;

    return resultadoSUB;
}

function multiplicar(num1, num2) {
    let resultadoMult = num1 * num2;

    return resultadoMult;
}

function dividir(num1, num2) {
    let resultadoDIV = num1 / num2;

    return resultadoDIV;
}

let num1 = +prompt("digite um numero");
let num2 = +prompt("digite outro numero");
let decisao

do {

    decisao = +prompt("O que quer fazer? aperte [1, para somar] [2, subtrair] [3, multiplicar] [4, dividir] [5, para sair]");
    if (decisao == 5) {
        console.log("saindo...");
        break;
    }

    switch (decisao) {
        case 1:
            console.log(soma(num1, num2));
            break
        case 2:
            console.log(subtrair(num1, num2));
            break
        case 3:
            console.log(multiplicar(num1, num2));
            break
        case 4:
            console.log(dividir(num1, num2));
            break
        default:
            console.log("invalido");
    }
    num1 = +prompt("digite um numero");
    num2 = +prompt("digite outro numero");
    decisao = +prompt("O que quer fazer? aperte [1, para somar] [2, subtrair] [3, multiplicar] [4, dividir] [5, para sair]");

} while (decisao !== 5);
