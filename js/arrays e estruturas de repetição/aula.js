const aluno = 'João';
const aluno2 = {nome: 'João'} //objeto literal
const alunos = ['João', 'Vitor', 'Marina'] //listas

console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]); // undefined, não existe;


alunos.push('Renan') // adiciona elemento no final da fila;
console.log(alunos[3]);

alunos[4] = 'Vinicius'; // adiciona elemento na posição indicada;
console.log(alunos[4]);

// uma lista pode ter elementos de diferentes tipos
alunos.push(10);
console.log(alunos);

console.log(alunos.pop()); // retira o último item da lista, é possivel utilizar o valor retirado
console.log(alunos);

console.log(alunos.shift()); // retira o primeiro item da lista, é possivel utilizar o valor retirado
console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);