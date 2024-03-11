function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2

    res.innerHTML += `<p>Resultado = ${soma}</p>`
}

function limpar() {
    var res = document.querySelector('#result')

    res.innerHTML = ''
}