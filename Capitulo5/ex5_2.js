const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const NumeroDEC = +document.getElementById('NumeroDEC').value;
    let respota = `a sequência a partir de ${NumeroDEC} é  `;

    for (let i = NumeroDEC; i > 0; i--) {


        respota = respota + i + ",";
    }

    Resp.innerText = `${respota} \n`;
});