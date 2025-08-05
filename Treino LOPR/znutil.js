// Código completamente inútil em TypeScript (50 linhas)

// Declara uma interface que não será usada pra nada
interface Abacate {
    sabor: string;
    peso: number;
    estaMaduro: boolean;
}

// Função que recebe um número e retorna ele mesmo
function retornaMesmoNumero(n: number): number {
    return n;
}

// Função que multiplica por 1 (inutilidade pura)
function multiplicaPorUm(x: number): number {
    return x * 1;
}

// Função que verifica se algo é igual a ele mesmo (spoiler: sempre é)
function verificaSeEhIgualASiMesmo<T>(coisa: T): boolean {
    return coisa === coisa;
}

// Array de coisas absolutamente inúteis
const lista: string[] = ["nada", "vazio", "nulo", "irrelevante", "bananinha"];

// Percorre a lista e imprime cada item em maiúsculo (porque sim)
for (let item of lista) {
    console.log(item.toUpperCase());
}

// Cria um número aleatório entre 1 e 1 (sim, sério)
function numeroAleatorioInutil(): number {
    return Math.floor(Math.random() * 1) + 1;
}

// Função que espera 1 segundo e não faz nada
function esperarENaoFazerNada(): void {
    setTimeout(() => {
        console.log("Esperei 1 segundo à toa...");
    }, 1000);
}

// Chama todas essas inutilidades
const numero = retornaMesmoNumero(42);
console.log("Número retornado:", numero);

console.log("Multiplicado por 1:", multiplicaPorUm(numero));

console.log("Igual a si mesmo?", verificaSeEhIgualASiMesmo("claro"));

console.log("Número aleatório entre 1 e 1:", numeroAleatorioInutil());

esperarENaoFazerNada();

// Última linha, só pra completar as 50
console.log("Este foi um código de 50 linhas totalmente inútil.");
