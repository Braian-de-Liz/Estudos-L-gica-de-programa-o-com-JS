document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    const Resp = document.getElementById("Resp");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const Veloquery = parseFloat(document.getElementById("Veloquery").value);
        const VelociCondu = parseFloat(document.getElementById("VeloCondu").value);

        if (isNaN(Veloquery) || isNaN(VelociCondu)) {
            Resp.style.color = "black";
            Resp.innerText = "Por favor, insira valores numéricos válidos!";
            return;
        }

        if (VelociCondu <= Veloquery) {
            Resp.style.color = "green";
            Resp.innerText = `Sua velocidade (${VelociCondu}km/h) está dentro do permitido (${Veloquery}km/h)`;
        }
        else if (VelociCondu <= Veloquery * 1.2) {
            Resp.style.color = "orange";
            Resp.innerText = `Sua velocidade (${VelociCondu}km/h) foi levemente acima (${Veloquery}km/h)`;
        }
        else {
            Resp.style.color = "red";
            Resp.innerText = `MULTADO! Você estava a ${VelociCondu}km/h (limite: ${Veloquery}km/h)`;
        }
    });
});