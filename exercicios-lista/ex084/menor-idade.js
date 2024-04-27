// 84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses 
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem 
// contendo apenas os dados das pessoas menores de idade.

function principal() {
    const NUM_PESSOAS = 3
    const pessoas = {
        'nomes': [],
        'idades': []
    }

    let nomesMenores = []
    let idadesMenores = []
    let j = 0

    for (let i = 0; i < NUM_PESSOAS; i++) {
        pessoas['nomes'[i]] = prompt('Nome: ')
        pessoas['idades'[i]] = parseInt(prompt('Idade: '))
    }

    for (let i = 0; i < NUM_PESSOAS; i++) {
        if (pessoas['idades'[i]] < 18) {
            nomesMenores[j] = pessoas['nomes'[i]]
            idadesMenores[j] = pessoas['idades'[i]]
            j++
        }
    }

    alert(`Nomes: | ${nomesMenores.join(' | ')} |\nIdades: | ${idadesMenores.join(' | ')} |`)
}