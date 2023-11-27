/*Exemplos Funções em js*/
function sayMyName(name) {
    console.log('Your name is: ' + name);
}

function quadrado(valor) {
    return valor * valor;
}


function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

function main() {
    const quadradoDeDez = quadrado(10);
    sayMyName('Lucas');
    console.log('10² = ' + quadradoDeDez);
    console.log(incrementarJuros(100, 10));
    console.log(incrementarJuros(100, 15));
}

main();