/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto.
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// Minha resolução

const precoEtiquetaProduto = 100.00;
const condPagamento = 104;
let precoFinalProduto = 0;

if (condPagamento === 101) {
    precoFinalProduto = precoEtiquetaProduto - (precoEtiquetaProduto * 0.10);
    console.log('À vista Débito\nPreço Final: R$ ' + precoFinalProduto.toFixed(2));
} else if (condPagamento === 102) {
    precoFinalProduto = precoEtiquetaProduto - (precoEtiquetaProduto * 0.15);
    console.log('À vista no Dinheiro ou PIX\nPreço Final: R$ ' + precoFinalProduto.toFixed(2));
} else if (condPagamento === 103) {
    precoFinalProduto = precoEtiquetaProduto;
    console.log('Em duas vezes\nPreço Final: R$ ' + precoFinalProduto.toFixed(2));
} else if (condPagamento === 104) {
    precoFinalProduto = precoEtiquetaProduto + (precoEtiquetaProduto * 0.10);
    console.log('Acima de duas vezes\nPreço Final: R$ ' + precoFinalProduto.toFixed(2));
} else {
    console.log('Condição de pagamento inválida');
}

