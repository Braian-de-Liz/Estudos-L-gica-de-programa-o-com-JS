const Form = document.querySelector("form");
const Resp1 = document.querySelector('h3');

Form.addEventListener('submit', (e) =>{
    const Medicamento = document.getElementById('InMedi').value;
    const Preco = +document.getElementById("InPreco").value;
    const unitd = +document.getElementById('UnidadesMedi').value;

    let ValorCobrar = Preco*unitd;

    if(unitd>2){
        const desconto = ValorCobrar * 0.1;

        ValorCobrar -= desconto;
    }


    Resp1.innerText = `Você vai pagar ${ValorCobrar.toFixed(2)} em ${unitd} de ${Medicamento}`;
    
    e.preventDefault();
});

