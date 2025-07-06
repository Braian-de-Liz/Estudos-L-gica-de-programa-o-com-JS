const form = document.querySelector('form');
const Resp1 = document.getElementById("Resp1");
const Resp2 = document.getElementById("Resp2");


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = document.getElementById("InNome").value;
    const nota1 = +document.getElementById("1nota").value;
    const nota2 = +document.getElementById("2nota").value;

    const media = (nota1+nota2)/2

    if(media>7){
        Resp1.style.color = "red";
        Resp2.style.color = "red";
        Resp1.innerText = `Você passou ${nome} parabéns`;
        Resp2.innerText = `Sua média foi de ${media.toFixed(1)}..`;
    }
    else if(media >=5) {
        Resp1.style.color = "yellowgreen";
        Resp2.style.color = "yellowgreen";
        Resp1.innerText = "Ficou de Exame Burrão";
        Resp2.innerText = `Receba essa coisa ai ${media}`;
    }
    else{
        
        Resp1.innerText = `Reprovado seu otário`;
        Resp2.innerText = `Média de ${media.toFixed(1)} seu nojento`;
    }

    
});