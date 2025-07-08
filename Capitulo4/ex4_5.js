const form = document.querySelector('form');
const Resp = document.getElementById('Resp');


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = +document.getElementById("Numero").value;

    const raiz = Math.sqrt(numero);

    if(Number.isInteger(raiz)){
        Resp.innerText = `Seu número tem a raiz quadrada de ${raiz}`;
        Resp.style.color = "red";
    }else{
        Resp.innerText = `Não existe raiz exata para o numero, mas a raiz real é ${raiz}`;
    }
});