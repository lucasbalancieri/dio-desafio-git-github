/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
sua média e a sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota 3)

Classificação:

- Média menor que 5, reprovação.
- Média entre 5 e 7, recuperação.
- Média acima de 7, aprovado.
*/

//  Minha resolução

const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;

if ((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10)) {
    console.log('Uma ou mais nota(s) inválida(s)');
} else {
    if (media < 5) {
        console.log('Média: ' + media.toFixed(2) + '\nReprovado');
    } else if ((media >= 5) && (media <= 7)) {
        console.log('Média: ' + media.toFixed(2) + '\nRecuperação');
    } else {
        console.log('Média: ' + media.toFixed(2) + '\nAprovado');
    }
}

