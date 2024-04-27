// 77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No 
// final, mostre uma listagem com todos os nomes informados, na ordem inversa 
// daquela em que eles foram informados.

function principal() {
    const nomes = []
    for (let i = 0; i < 7; i++) {
        nomes[i] = prompt(`Nome ${i}:`)
    }
    alert(nomes.join(', '))
}