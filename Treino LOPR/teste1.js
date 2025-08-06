const elias = [1, 74, 10, 7];
let soma = 0;

for(let i = 0; i < elias.length; i++){
    soma += elias[i];

}

let media = soma/elias.length;

console.log(`A média dos vetor é ${media}`);