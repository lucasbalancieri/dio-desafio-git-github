// Classe sem construtor
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

// Classe com construtor
class PessoaComConstructor {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

// Sem construtor
const pessoa1 = new Pessoa();
pessoa1.nome = 'Pessoa 1';
pessoa1.idade = 25;

const pessoa2 = new Pessoa();
pessoa2.nome = 'Pessoa 2';
pessoa2.idade = 30;

// Com Construtor
const pessoa3 = new PessoaComConstructor('Pessoa 3', 28);

// Saída
pessoa1.descrever();
pessoa2.descrever();
pessoa3.descrever();