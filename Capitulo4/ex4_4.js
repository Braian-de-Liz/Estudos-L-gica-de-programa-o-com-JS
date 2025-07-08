const form = document.querySelector('form');
const Resp = document.getElementById('Resp1');

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const HoraBrasil = +document.getElementById('HoraBrasil').value;
    let HoraFranca = HoraBrasil + 5;

    if(HoraFranca > 24){
        HoraFranca = HoraFranca - 24;
    }

    Resp.innerText = `Hora Agora na França é ${HoraFranca.toFixed(2)}`;


});