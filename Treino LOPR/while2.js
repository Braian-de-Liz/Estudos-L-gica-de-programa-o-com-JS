const prompt = require("prompt-sync")();

let contagem = 30;
let i = 1;

while (contagem >= i) {
    if (contagem % 4 === 0) {
        console.log(`[${contagem}]` + "\n");
    }
    else {
        console.log(contagem + "\n");
    }
    
    contagem--;
}

