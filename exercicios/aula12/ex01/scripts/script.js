function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var styleBody = document.body.style
    var principal = document.getElementsByClassName('main')[0]
    var box1 = document.getElementById('BOX1')
    var box2 = document.querySelector('#BOX2')
    var situacao = 'Bom Dia!'
    var imagem = '<img src="../imagens/dia.jpg" alt="flores">'

    if (hora >= 0 && hora < 6) {
        situacao = 'Boa Madrugada!'
        imagem = '<img src="../imagens/madrugada.jpg" alt="lua">'
        styleBody.backgroundColor = 'var(--cor-madrugada)'
        principal.style.boxShadow = 'var(--sombra-caixa-branca)'
    } else if (hora < 12) {
        situacao = 'Bom Dia!'
        imagem = '<img src="../imagens/dia.jpg" alt="flores">'
        styleBody.backgroundColor = 'var(--cor-dia)'
    } else if (hora <= 18) {
        situacao = 'Boa Tarde!'
        imagem = '<img src="../imagens/tarde.jpg" alt="praia">'
        styleBody.backgroundColor = 'var(--cor-tarde)'
    } else {
        situacao = 'Boa Noite'
        imagem = '<img src="../imagens/noite.jpg" alt="noite estrelada">'
        styleBody.backgroundColor = 'var(--cor-noite)'
    }

    box1.innerHTML = `<p>Agora são ${hora}h${minuto}min</p>`
    box1.innerHTML += `<p>${situacao}</p>`
    box2.innerHTML = imagem
}
