/*
 1 - Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor, um gasto médio de combustivel por kilometro rodado.
 Crie um metodo que dado a quantidade de kilometros e o preço do combustivel nos dê o valor gasto em reais
 para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    combustivelPorKm; // 2 litros por km rodado

    constructor(marca, cor, combustivelPorKm, precoCombustivel, kmPercurso) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    calcularValorPercurso(kmPercurso, precoCombustivel) {
        return (kmPercurso * this.combustivelPorKm) * precoCombustivel;
    }
}


const nome = 'Volks';
const cor = 'Amarelo';
const combustivelPorKm = 1 / 12;


const carro1 = new Carro(nome, cor, combustivelPorKm);

//console.log(carro1.valor());

console.log(carro1.calcularValorPercurso(70, 5).toFixed(2));