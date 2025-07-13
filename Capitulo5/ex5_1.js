const form =document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const numero = +document.getElementById("numeroTaubatebo").value;

    let resposta = "";

    for(let i = 1; i<=15;i++){
        resposta = `${resposta} ${numero} x ${i} = ${numero * i}\n`
    }

    Resp.innerText = resposta
});