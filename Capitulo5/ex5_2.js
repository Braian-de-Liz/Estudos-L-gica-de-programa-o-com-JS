const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const NumeroDEC = +document.getElementById('NumeroDEC').value;
<<<<<<< HEAD
    let respota = `a sequência a partir de ${NumeroDEC} é  `;

    for (let i = NumeroDEC; i > 0; i--) {


        respota = respota + i + ",";
    }

    Resp.innerText = `${respota} \n`;
=======
    
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
>>>>>>> acb5473a82ebe30bbd95786094961a3d75c3a617
});