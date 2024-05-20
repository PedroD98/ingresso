
let qtdCadeiraSuperior = document.getElementById('qtd-superior').innerHTML;
let qtdCadeiraInferior = document.getElementById('qtd-inferior').innerHTML;


function comprar() {
let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
let qtd = document.getElementById('qtd').value;

if (!tipoDeIngresso || tipoDeIngresso.trim() == '') {
    alert ('Escolha um tipo de ingresso valido');
}


if (qtd <= 0 || isNaN(qtd)) {
    console.log('Escolha a quantidade de ingressos que deseja comprar.')
    
}

if (tipoDeIngresso == 'pista'){
    comprarPista(qtd);
} else if (tipoDeIngresso == 'superior') {
    comprarSuperior(qtd);
} else {
    comprarInferior(qtd);
}

document.getElementById('qtd').value = ''
}



function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista ) {
        alert('Quantidade indisponível no momento');
        return;
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior ) {
        alert('Quantidade indisponível no momento');
        return;
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior ) {
        alert('Quantidade indisponível no momento');
        return;
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}