const form = document.querySelector('form');
const Resp1 = document.getElementById("Resp1");
const Resp2 = document.getElementById("Resp2");
const Resp3 = document.getElementById("Resp3");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Saque = +document.getElementById("Numero").value;


    if (Saque % 10 != 0) {
        alert('elias ');
        Saque.focus();
        return;
    }

    const NotasDCem = Math.floor(Saque / 100);
    let Resto = Saque % 100;


    const Notas50 = Math.floor(Resto / 50);
    Resto = Resto % 50;

    const Nota10 = Math.floor(Resto / 10);

    if (NotasDCem > 0) {
        Resp1.innerText = `Temos ${NotasDCem} Notas de R$100`;
        Resp1.style.color = "green"
    }

    if (Notas50 > 0) {
        Resp2.innerText = `E ${Notas50} notas de R$50`;
        Resp2.style.color = "blue"
    }

    if (Nota10 > 0) {
        Resp3.innerText = `E isso aqui de ${Nota10} Notas de R$10`;
        Resp3.style.color = "red"
    }
});