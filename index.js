// Esta função irá calcular o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível do jogador através dessa estrutura de decisão com o valor obtido no cálculo.
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando saldo e o nível
    return { saldoVitorias, nivel };
}

// Uso da função
const vitorias = 15;
const derrotas = 4;

const resultado = calcularRank(vitorias, derrotas);

// Exibindo mensagem final
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);