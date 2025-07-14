const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const NumeroDEC = +document.getElementById('NumeroDEC').value;
    
    if (isNaN(NumeroDEC)) {
        Resp.style.color = "red";
        Resp.textContent = "Por favor, digite um número válido!";
        return;
    }
    
    if (NumeroDEC < 1) {
        Resp.style.color = "red";
        Resp.textContent = "O número deve ser maior que zero!";
        return;
    }

    let resultado = `Entre ${NumeroDEC} e 1:\n`; 
    
    for (let i = NumeroDEC; i >= 1; i--) {
        resultado += `${i}\n`; 
    }
    
    Resp.style.color = "red";
    Resp.style.whiteSpace = "pre";
    Resp.innerText = resultado;
});