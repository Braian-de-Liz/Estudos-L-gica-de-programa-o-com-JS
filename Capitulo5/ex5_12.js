const form = document.querySelector("form");
const Resp = document.getElementById("Resp");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const QuantCh = +document.getElementById("NumChi").value;
    const Anos = +document.getElementById("anos").value;

    Resp.innerText = '';
    let totalChi = QuantCh;

    for (let i = 1; i <= Anos; i++) {
        totalChi *= 3;
        Resp.innerText += `Ano ${i}: ${totalChi} chihuahuas\n`;
    }
});