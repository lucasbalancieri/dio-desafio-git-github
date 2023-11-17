/*  Faça um programa para calcular o valor de uma viagem.
    Você terá 5 variáveis:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM.
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar está viagem.
*/

// Minha resolução.
const precoEtanol = 3.64;
const precoGasolina = 5.82;
const tipoCombustivel = 'gasolina';
const mediaConsumo = 1.00; // (x litros por KM, ex: 10 litros = 1 KM)
const distancia = 100.00;

if (tipoCombustivel === 'etanol') {
    console.log('R$: ' + (distancia * mediaConsumo) * precoEtanol);
} else if (tipoCombustivel === 'gasolina') {
    console.log('R$: ' + (distancia * mediaConsumo) * precoGasolina);
} else {
    console.log('Combustível inválido');
}



