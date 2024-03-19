function verificarIdade() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtAno')
    var res = document.getElementById('BOX2')

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        alert('ERROR: Confira novamente os dados e tente novamente.')
    } else {
        var radio = document.getElementsByName('radSexo')
        var idade = anoAtual - anoNasc.value
        var genero = ''

        // Criando uma tag <img>
        var imagem = document.createElement('img')
        
        // Adicionando atributos a tag <img>: <img id="foto">
        imagem.setAttribute('id', 'foto')

        if (radio[0].checked) {
            genero = 'Masculino'

            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', '../imagens/bebe-homem.jpg')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', '../imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', '../imagens/adulto-homem.jpg')
            } else if (idade < 140) {
                // Idoso
                imagem.setAttribute('src', '../imagens/idoso-homem.jpg')
            } else {
                // Morto, no momento, nenhum ser humano está vivo, a partir de 140 anos de idade
                imagem.setAttribute('src', '../imagens/morto.jpg')
            }

        } else if (radio[1].checked) {
            genero = 'Feminino'

            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', '../imagens/bebe-mulher.jpg')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', '../imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', '../imagens/adulto-mulher.jpg')
            } else if (idade < 140) {
                // Idoso
                imagem.setAttribute('src', '../imagens/idoso-mulher.jpg')
            } else {
                // Morto, no momento, nenhum ser humano está vivo, a partir de 140 anos de idade
                imagem.setAttribute('src', '../imagens/morto.jpg')
            }
        } else {
            genero = '[ERROR] Gênero diferente de Masculino e Feminino.'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos o gênero ${genero} com ${idade} anos de idade.</p>`
        res.appendChild(imagem)
    }
}