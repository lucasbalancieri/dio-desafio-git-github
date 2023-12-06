class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Nome: ' + this.nome + '\nIdade: ' + this.idade + '\nAno de Nascimento: ' + this.anoDeNascimento);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const pessoa1 = new Pessoa('Pessoa 1', 28);
const pessoa2 = new Pessoa('Pessoa 2', 30);

compararPessoas(pessoa1, pessoa2);
