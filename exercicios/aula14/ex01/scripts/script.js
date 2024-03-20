function contar() {
    var ini = Number(document.getElementById('numIni').value)
    var fim = Number(document.getElementById('numFim').value)
    var salto = Number(document.getElementById('numSalto').value)
    var result = document.getElementById('BOX2')

    if (salto == 0) {
        alert('[AVISO] Número de salto vai ser interpretado como 1!')
        salto = 1
    }

    if (ini > fim || salto < 0) {
        alert('[ERROR] Digite um intervalo possivel para contagem.')

        if (ini > fim) {
            result.innerHTML = '<p>O número do inicio da contagem é maior que o número final!</p>'
        }

        if (salto < 0) {
            result.innerHTML += '<p>O número do salto é negativo. Coloque um número inteiro maior que 0 (zero)!</p>'
        }

        result.innerHTML += '<p>Lembre-se, estamos realizando a contagem apenas de forma positiva. Exemplo: 0 até 10 pulando de 2 em 2.</p>'

    } else {
        result.innerHTML = ''
    
        for (let i = ini; i <= fim; i += salto) {
            // Da pra simplesmente colocar o emote
            result.innerHTML += `${i} 👉 `
        }
    
        // Para colocar usando código: &#x + (código sem o 'U +' do emote em unicode)
        result.innerHTML += '&#x1F3C1;'
    }
    
}