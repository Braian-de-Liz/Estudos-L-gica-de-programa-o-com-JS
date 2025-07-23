const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Fruta = document.getElementById("Fruta").value;
    const Numero = document.getElementById("numero").value;
    
    Resp.innerText = '';
    
    for(let i = 0; i <= Numero; i++){
        Resp.innerText += Fruta + '\n'; 
    }

    form.Fruta.focus();
});