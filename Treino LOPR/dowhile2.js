const prompt = require("prompt-sync")();

let numero1 = +prompt("me diz ai um numero");
let numero2 = +prompt("me diga outro numero")

if(numero1 > numero2){
    do{
        numero2++
    }while(numero2 < numero1);
}else{
    do{
        numero2--
    }while(numero2 > numero1);
}

console.log(`o seu 1º numero é ${numero1} e o 2º numero é ${numero2} `);