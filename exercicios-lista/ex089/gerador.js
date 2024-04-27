// 89) Crie um programa que melhore o procedimento Gerador() da questão anterior 
// para que o programador possa escolher uma entre três bordas: 
//  
                        //    +-------=======------+ Borda 1 
                        //    ~~~~~~~~:::::::~~~~~~~ Borda 2 
                        //    <<<<<<<<------->>>>>>> Borda 3 
//  
// Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2) 
// ~~~~~~~~:::::::~~~~~~~ 
//   Portugol Studio 
//   Portugol Studio 
//   Portugol Studio 
// ~~~~~~~~:::::::~~~~~~~

import { randomNum } from '../../exercicios/numero-aleatorio.js'

const borda = (esc = 1) => {
    let line
    switch (esc) {
        case 1:
            line = '+-------=======-------+'
            break
        
        case 2:
            line = '|----------~----------|'
            break

        case 3:
            line = '._____________________.'
            break

        case 4:
            line = '~~~~~~~~:::::::~~~~~~~'
            break

        case 5:
            line = '<<<<<<<<------->>>>>>>'
            break
    
        default:
            line = '|---|---|---|---|---|'
            break
    }
    return console.log(line)
}

function gerador(txt = 'Olá, mundo!', n = 4, escolhaBorda = randomNum(6)) {
    borda(escolhaBorda)
    for (let i = 0; i < n; i++) {
        console.log(txt)
    }
    borda(escolhaBorda)
}

gerador()