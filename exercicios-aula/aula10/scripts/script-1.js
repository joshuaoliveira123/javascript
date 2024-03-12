a = document.getElementById('area')
a2 = document.querySelector('#area2')

a.addEventListener('click', trocarCores)
a.addEventListener('dblclick', clicouDuasVezes)
a2.addEventListener('click', clicou)
a2.addEventListener('dblclick', clicouDuasVezes)
a2.addEventListener('mousewheel', trocarCores)

function trocarCores() {

    if (a.style.backgroundColor === 'var(--verde)') {
        a.style.backgroundColor = 'var(--azul)'
    } else if (a.style.backgroundColor === 'var(--azul)'){
        a.style.backgroundColor = 'var(--roxo)'
    } else {
        a.style.backgroundColor = 'var(--verde)'
    }
}


function clicou() {
    area2.innerText = 'Clicou!'
}


function clicouDuasVezes() {
    if (a.innerHTML === 'Clique-me ...') {
        a.innerText = 'Fez um double Click!'
    } else {
        a.innerText = 'Clique-me ...'
    }
}