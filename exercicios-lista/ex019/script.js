// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0).

const media = (n1, n2) => (n1 + n2) / 2

const aprovado = function(media) {
    return (media >= 7) ? 'APROVADO' : 'REPROVADO'
}

const situacao = function(nota1, nota2) {
    const n1 = nota1
    const n2 = nota2
    const mediaNotas = media(n1, n2)

    console.log(`Nota2: ${n2}`)
    console.log(`Nota1: ${n1}`)
    console.log(`Média: ${mediaNotas}`)
    console.log(`Situação do aluno(a): ${aprovado(mediaNotas)}`)
}

situacao(5,9)