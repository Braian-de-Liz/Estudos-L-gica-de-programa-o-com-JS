document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('trianguloForm');
    const Resp = document.getElementById('Resp');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obter valores e converter para número
        const lado1 = Number(document.getElementById('lado1').value);
        const lado2 = Number(document.getElementById('lado2').value);
        const lado3 = Number(document.getElementById('lado3').value);

        // Validações
        if ([lado1, lado2, lado3].some(isNaN)) {
            showMessage("Por favor, digite apenas números válidos!", "black");
            return;
        }

        if ([lado1, lado2, lado3].some(val => val <= 0)) {
            showMessage("Os lados devem ser maiores que zero!", "black");
            return;
        }

        // Verificação do triângulo
        if (formaTriangulo(lado1, lado2, lado3)) {
            showMessage("Estes lados FORMAM um triângulo!", "green");
        } else {
            showMessage("Estes lados NÃO FORMAM um triângulo!", "red");
        }
    });

    function formaTriangulo(a, b, c) {
        return a + b > c && a + c > b && b + c > a;
    }

    function showMessage(msg, color) {
        Resp.style.color = color;
        Resp.textContent = msg;
    }
});