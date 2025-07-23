const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = +form.querySelector("#numeroV").value;
    let divisores = "";  
    let soma = 0;        

    
    for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            divisores += (divisores ? ", " : "") + i; 
            soma += i;
        }
    }

    Resp.style.color = "red";
    Resp.innerHTML = `
        <p>Divisores: ${divisores || "1"}</p>
        <p>Soma: ${soma}</p>
        <p>${soma === numero ? "É perfeito! ✅" : "Não é perfeito ❌"}</p>
    `;
    form.numero.focus();
});