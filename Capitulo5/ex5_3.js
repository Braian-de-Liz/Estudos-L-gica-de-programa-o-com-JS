let num;

do {
    num = +prompt("digite o numero:");
    if (num == 0 || isNaN(num)) {
        alert("numero inválido");
    }
} while (num == 0 || isNaN(num))
let pares = `Pares entre 1 até  ${num} são  `;

for (let i = 2; i <= num; i = i + 2) {
    pares = pares + i + ', ';

    
}




alert(pares);