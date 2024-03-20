function contar() {
    let result = document.getElementById('BOX2')
    
    let ini = document.getElementById('numIni')
    let fim = document.getElementById('numFim')
    let salto = document.getElementById('numSalto')
    
    if (ini.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        alert('ERROR | Preencha todos os campos acima!')
    } else {
        let numIni = Number(ini.value)
        let numFim = Number(fim.value)
        let numSalto = Number(salto.value)

        if (numSalto <= 0) {
            alert('ERROR | Número de salto igual ou menor que 0 (zero). Portanto iremos considera-lo igual a 1!')
            numSalto = 1
        }
        
        // Limpar a div para inserir a contagem
        result.innerHTML = ''

        if (numIni <= numFim) {

            // Contagem crescente
            for (let i = numIni; i <= numFim; i += numSalto) {
                // Da pra usar o código do unicode: \u{code}
                result.innerHTML += `${i} \u{1f449} `
            }
        
            // Para colocar usando código: &#x + (código sem o 'U +' do emote em unicode)
            result.innerHTML += '&#x1F3C1;'
        } else {

            // Contagem regressiva
            for (let i = numIni; i >= numFim; i -= numSalto) {
                // Da pra simplesmente colocar o emote
                result.innerHTML += `${i} 👉 `
            }
        
            // Para colocar usando código: &#x + (código sem o 'U +' do emote em unicode)
            result.innerHTML += '&#x1F3C1;'
        }
    }
}