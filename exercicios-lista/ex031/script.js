// 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

function joKenPo(play) {
    const randomNumber = (min, max)=> Math.floor(Math.random() * (max - min) + min)
    let cpu = randomNumber(1,4) /* 4 - 1 = 3 |1,2,3(4) */
    let player = play
    let winner

    if (player === cpu) {
        winner = 'Empate!'
    } else if (whoWon(player, cpu)) {
        winner = 'Player -> Venceu!'
    } else {
        winner = 'CPU -> Venceu!'
    }

    console.log(`Player: ${showPlay(player)}`)
    console.log(`CPU: ${showPlay(cpu)}`)
    console.log(winner)
}

function showPlay(play) {
    switch (play) {
        case 1:
            play = 'Pedra'
            break

        case 2:
            play = 'Papel'
            break

        case 3:
            play = 'Tesoura'
            break

        default:
            play = `${play} é uma jogada inválida! [1, 2 ou 3]`
            break
    }
    return play
}

function whoWon(player, cpu) {
    // Pedra = 1
    // Papel = 2
    // Tesoura = 3

    let won = 0
    switch (player) {
        case 1:
            won = (cpu === 3 && player !== cpu) ? true : false
            break
        
        case 2:
            won = (cpu === 1 && player !== cpu) ? true : false
            break

        case 3:
            won = (cpu === 2 && player !== cpu) ? true : false
            break
    
        default:
            console.log('ERROR | Jogada inválida')
            break
    }

    return won
}

// Faça sua jogada! -> [1, 2 ou 3]
    // Pedra = 1
    // Papel = 2
    // Tesoura = 3
joKenPo(1)
