// O objeto em js é uma coleção DINÂMICA de chave e valor
const pessoa = {
    nome: 'Pessoa1',
    idade: 28,
    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.72;
console.log(pessoa);

pessoa.descrever();

delete pessoa.nome;
console.log(pessoa);
