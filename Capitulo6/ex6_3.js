const form = document.querySelector("#idForm");
const Resp = document.querySelector("pre");
const carros = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Modelo = document.getElementById("Modelo").value;
    const Preco = +document.getElementById("preco").value;

    carros.push({ Modelo, Preco });

    form.Modelo.value = "";
    form.Preco.value = "";;

    Modelo.fucus();

    form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("não há carros na Lista");
        return;
    }

    const lista = carros.reduce((acumulador, carroAtual) => {
        return acumulador + " " + carroAtual.Modelo;  
    }, ""); 
});




document.createElement()