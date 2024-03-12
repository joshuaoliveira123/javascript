function trocarCores() {
    var divArea = document.getElementById('area').style

    if (divArea.backgroundColor === 'var(--verde)') {
        divArea.backgroundColor = 'var(--azul)'
    } else if (divArea.backgroundColor === 'var(--azul)'){
        divArea.backgroundColor = 'var(--roxo)'
    } else {
        divArea.backgroundColor = 'var(--verde)'
    }
}


function clicou() {
    var area2 = document.querySelector('#area2')

    area2.innerText = 'Clicou!'
}


function clicouDuasVezes() {
    var click = document.getElementById('area')

    if (click.innerHTML === 'Clique-me') {
        click.innerText = 'Fez um double click!'
    } else {
        click.innerText = 'Clique-me'
    }
}