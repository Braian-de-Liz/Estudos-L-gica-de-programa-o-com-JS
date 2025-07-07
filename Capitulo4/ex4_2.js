const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = document.getElementById("NomeUser").value;
    const Homem = form.Homem.checked
    const altura = document.getElementById('Altura').value;

    let peso

    if(Homem){
        peso = 22 * Math.pow(altura,2);
    }
    else{
        peso = 21 * Math.pow(altura,2);
    }


    Resp.innerText = `${nome} : seu Peso ideal é de ${peso.toFixed(3)} kg`

});