const form = document.querySelector('form');
const Resp1 = document.getElementById('Resp1');


form.addEventListener("submit", (e) => {
    const Quilo = +form.InQuilo.value;
    const Consumo = +form.InConsumo.value;

    const ValorCobrar = (Quilo/1000) * Consumo;

    Resp1.innerText = `Sua Refeição Custou : R$${ValorCobrar}`

    e.preventDefault();
});