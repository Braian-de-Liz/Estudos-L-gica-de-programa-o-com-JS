const form = document.querySelector("form");
const Resp = document.getElementById("RespL");
const RespList = document.getElementById("Listinha");

const pacientes = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomePac = document.getElementById("nome").value;

    pacientes.push(nomePac);
    let Lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        Lista += `${i + 1}. ${pacientes[i]} \n`;
    }

    RespList.innerText = Lista;
    form.nome.value = "";
    form.nome.focus();

});

form.Urgência.addEventListener("click", () => {
    if (!form.checkValidity()) {
        alert("Informe o paciente de urgência RÁPIDO");
        form.nomePac.focus();
        return;
    }

    const nomePac = document.getElementById("nome").value;
    pacientes.unshift(nomePac);
    let Lista = "";

    pacientes.forEach((paciente, i) => {
        Lista += `${i + 1}. ${paciente}\n`;
    });
    RespList.innerText = Lista;
    form.nome.value = "";

});