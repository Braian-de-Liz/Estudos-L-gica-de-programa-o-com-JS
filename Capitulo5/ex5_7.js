const form = document.querySelector("form");
const Resp1 = document.getElementById("Resp1");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let estrelas = "";
    const numero = +document.getElementById("NuemroSym").value;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1){
            estrelas = estrelas + "*";
        }
        else{
            estrelas = estrelas + "-";
        }
    }
    Resp1.innerText = estrelas;
});

//Elias está orgulhoso;
