// 80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um 
// número (chave) e seu programa deve mostrar em que posições essa chave foi 
// encontrada. Mostre também quantas vezes a chave foi sorteada.

const randomNum = (max, min = 1) => Math.floor(Math.random() * ((max + 1) - min) + min)

function principal() {
    const nums = []
    for (let i = 0; i < 15; i++) {
        nums[i] = randomNum(100)
    }
    const escolha = prompt('Digite a chave do array (1 a 15)!')
    alert(`O número na posição ${escolha} é ${nums[escolha - 1]}`)
}