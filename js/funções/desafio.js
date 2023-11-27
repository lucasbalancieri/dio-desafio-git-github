// Refatorar o exercício 3 da lista.

function calcularDesconto(precoEtiquetaProduto, desconto){
    return precoEtiquetaProduto - (precoEtiquetaProduto * desconto);
}

function calcularAcrescimo(precoEtiquetaProduto, desconto){
    return precoEtiquetaProduto + (precoEtiquetaProduto * desconto);
}

function definirAcressimoDesconto(condPagamento){
    let desconto = 0;
    if(condPagamento === 101) {
        desconto = 0.10;
    }else if(condPagamento === 102){
        desconto = 0.15;
    }else if(condPagamento === 103){
        desconto = 0;
    }else if (condPagamento === 104){
        desconto = 0.10;
    }else {
        return 'Condição Inválida';
    }
    return desconto;
}

function calcularPrecoFinal(precoEtiquetaProduto, condPagamento){
    const desconto = definirAcressimoDesconto(condPagamento);

    if(condPagamento === 101 || condPagamento === 102){
        return calcularDesconto(precoEtiquetaProduto, desconto);
    }else if (condPagamento === 104){
        return calcularAcrescimo(precoEtiquetaProduto, desconto);
    }else if(condPagamento === 103){
        return precoEtiquetaProduto;
    }else{
        return 'Condição Inválida';
    }
}

(function () {
    const precoEtiquetaProduto = 100.00;
    const condPagamento = 105;
    const precoFinal = calcularPrecoFinal(precoEtiquetaProduto, condPagamento);

    console.log(precoFinal);
})();