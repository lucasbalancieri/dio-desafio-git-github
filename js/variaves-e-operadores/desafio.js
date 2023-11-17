/*  Faça um programa para calcular o valor de uma viagem.
    Você terá 3 variáveis:
    1 - Preço do Combustível;
    2 - Gasto médio de combustível do carro por KM; (isso aqui está confuso, é a média em Litros)
    3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar está viagem.
*/

// Minha resolução.
const precoCombustivel = 5.79;
const mediaConsumo = 2.00; //(x litros por KM, ex: 10 litros = 1 KM)
const distancia = 100.00;
console.log('R$: ' + (distancia * mediaConsumo) * precoCombustivel)

