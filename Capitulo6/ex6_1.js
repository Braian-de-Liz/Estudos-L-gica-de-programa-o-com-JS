const form = document.querySelector("form");
const Resp = document.getElementById("Resp");
const RespList = document.getElementById("Listinha");

const pacientes = [];


const criarFodasse = () => {
    
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomePac = document.getElementById("Nome").value;

    pacientes.push(nomePac);
    let Lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        Lista += `${i + 1}. ${pacientes[i]} \n`;
    }

    RespList.innerText = Lista;
    document.getElementById("Nome").value = "";
    document.getElementById("Nome").focus();


});

document.getElementById("Urgência").addEventListener("click", () => {
    const nomePac = document.getElementById("Nome").value;

    if (!nomePac) {
        alert("Informe o paciente de urgência RÁPIDO");
        document.getElementById("Nome").focus();
    }

    pacientes.unshift(nomePac);
    let Lista = "";

    pacientes.forEach((paciente, i) => {
        Lista += `${i + 1}. ${paciente}\n`;
    });

    RespList.innerText = Lista;
    document.getElementById("Nome").value = "";
});