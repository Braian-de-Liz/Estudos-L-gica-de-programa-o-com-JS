const form = document.querySelector('form');
const Resp = document.getElementById("Resp");


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const NumeroVer = +document.getElementById("EliasNumero").value;

    if(NumeroVer % 2 === 0){
        Resp.style.color = "blue";
        Resp.innerText = `Seu número é par ${NumeroVer}`;
    } else{
        Resp.style.color = "red";
        Resp.innerText = `Seu número ${NumeroVer} não é par `;
    }

/*     const resultado = NumeroVer % 2 === 0 ? `Seu número ${NumeroVer} é par` : `Seu Numero ${NumeroVer} é impar`;

    Resp.innerText = NumeroVer; */
});