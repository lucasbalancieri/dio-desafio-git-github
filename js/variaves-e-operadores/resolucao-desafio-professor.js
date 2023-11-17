/*  Faça um programa para calcular o valor de uma viagem.
    Você terá 3 variáveis:
    1 - Preço do Combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar está viagem.
*/

// Resolução do prefessor.
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

