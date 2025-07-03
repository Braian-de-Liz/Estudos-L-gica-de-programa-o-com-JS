const form = document.querySelector('form');
const Resp1 = document.getElementById('Resp1');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Produto = document.getElementById('InProduto').value;
    const Quantidade = +document.getElementById('Quantidade').value;
    const Preco = +document.getElementById('Preco').value;


    let ValorCobrar = Preco * Quantidade;
    let desconto = 0;

    if (Quantidade >= 3) {

        desconto = Preco / 2;
        ValorCobrar -= desconto;

    }



    Resp1.innerText = `Você vai pagar ${ValorCobrar}, pois o ultimo item tem ${desconto} de desconto no produto ${Produto}`;


});