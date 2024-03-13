function multado() {
    txtvel = document.getElementById('velocidade')
    vel = Number(txtvel.value)
    res = document.getElementById('result')

    res.innerHTML = `<p>Sua velocidade atual é de ${vel} km/h.</p>`

    if (vel > 60) {
        res.innerHTML += '<p>MULTADO!!!! O limite é 60 km/h.</p>'
    } else {
        res.innerHTML += '<p>De boa parceiro!</p>'
    }
}