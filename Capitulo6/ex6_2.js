const form = document.querySelector("#Formulario");
const RespChances = document.getElementById("out_Chances");
const RespErros = document.getElementById("outErros");
const RespDica = document.getElementById("Dica");

const erros = [];
const sorteio = Math.floor(Math.random() * 100) + 1;
const chances = 6;

function dicacao(numeroSorteio, numeroUser) {
    const Dica = numeroSorteio < numeroUser ? "menor" : "maior";
    RespDica.style.color = "red";
    RespDica.innerText = `Tente um número ${Dica} que ${numeroUser} `;

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = +form.numero.value;

    if (numero === sorteio) {
        RespDica.innerText = `Parabéns! Número sorteado: ${sorteio}`;
        form.Submetedor.disabled = true;
        form.btNovo.className = "exibe";
        form.btNovo.focus()
    }
    else {
        if (erros.includes(numero)) {
            alert(`Você já tentou o número ${numero}`);
        }
        else {
            erros.push(numero);
            const NumChances = chances - erros.length;

            dicacao(sorteio, numero);

            RespErros.innerText = `${erros.length} (${erros.join(", ")})`;
            RespChances.innerText = ` ${NumChances}`;

            if (NumChances === 0) {
                form.Submetedor.disabled = true;
                form.btNovo.className = "exibe";
                RespDica.innerText = `Game Over! O número era ${sorteio}`;
            }
        }
    }

    form.numero.value = "";
    form.numero.focus();
});

form.btNovo.addEventListener("click", () => {
    location.reload();
});