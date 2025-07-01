const form = document.querySelector('form');
const Resp1 = document.getElementById('outraResp1');
const Resp2 = document.getElementById('outraResp2');
const Resp3 = document.getElementById('outraResp3');


form.addEventListener("submit", (e) =>{
    const Veiculo = form.InVeiculo.value;
    const Preco = +form.InPreco.value;


    const entrada = Preco * 0.5;
    const parcela = entrada / 12;


    Resp1.innerText = `Promoção No ${Veiculo}`;
    Resp2.innerText = `Entrada de R$ ${Preco}`;
    Resp3.innerText = `12x de R$ ${parcela}`;

    e.preventDefault();
})