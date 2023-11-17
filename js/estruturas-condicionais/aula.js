// Exemplo 1
const numeroEx1 = 12;
const numeroPar = (numeroEx1 % 2) === 0;
console.log('Exemplo 1:\n' + numeroPar + '\n');

// Exemplo 2
const numeroEx2 = 10;
const numeroDivisivelPor5 = (numeroEx2 % 5) === 0;

console.log('Exemplo 2:');
if (numeroDivisivelPor5) {
    console.log(numeroEx2 + ' é divisível por 5\n');
} else {
    console.log(numeroEx2 + ' não é divisível por 5\n');
}


//Exemplo 3
const numeroEx3 = 0;

console.log('Exemplo 3:')
if (numeroEx3 > 0) {
    console.log('Positivo');
} else if (numeroEx3 < 0) {
    console.log('Negativo');
} else {
    console.log('Neutro');
}


/*
    obs:
        = atribuição
        == desconsidera o tipo da variável
        === considera o tipo da variável, permite comparação apenas de variáveis do mesmo tipo
*/