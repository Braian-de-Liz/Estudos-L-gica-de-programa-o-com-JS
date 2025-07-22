const form = document.querySelector("form");
const Resp1 = document.getElementById("Resp1");

function numeroEprimo(numero) {
    if (numero <= 1) return false;
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }

        if (divisores > 2) {
            break
        }
    }

    return divisores == 2;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = +document.getElementById("numero").value;

    if (numeroEprimo(numero)) {
        Resp1.style.color = "green";
        Resp1.innerText = `${numero} é um número primo`;
    } else {
        Resp1.style.color = "red";
        Resp1.innerText = `${numero} não é um número primo`;
    }

    form.numero.focus();
});