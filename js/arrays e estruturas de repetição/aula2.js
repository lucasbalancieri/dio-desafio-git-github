// iterando string
const palavra = 'um';

for (let i = 0; i < palavra.length; i++) {
        console.log(palavra[i]);
}

//  iterando array
const notas = [];
let somaNotas = 0;
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    somaNotas = somaNotas + nota;
}

console.log(somaNotas/notas.length);



