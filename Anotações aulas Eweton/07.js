const elias = +document.getElementById('trtrtrt').value;


const Tia = "Mãe do Elias";

const carro = {
    ano:5,
    modelo: "Gol" ,
    marca: "Volks",
    filho : "Golf",
    pai : "Gol quadrado",
    o_melor_carro : `Fusca da ${Tia}`
}

for(let Elias in carro){
    console.log(Elias +': '+ carro[Elias]);
}
