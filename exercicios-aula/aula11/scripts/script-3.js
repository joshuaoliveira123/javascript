function nacionalidade() {
    var pais = document.getElementById('pais').value
    var res = document.getElementById('result')

    res.innerHTML = `Seu país de origem é: ${pais}`

    if (pais == 'Brasil' || pais == 'brasil') {
        res.innerHTML += '<p>Você é Brasileiro!!</p>'
    } else {
        res.innerHTML += '<p>Você é Estrangeiro.</p>'      
    }
}