// 34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
// indivíduo dentro de certas faixas. 
//  
//    - abaixo de 18.5: Abaixo do peso 
//    - entre 18.5 e 25: Peso ideal 
//    - entre 25 e 30: Sobrepeso 
//    - entre 30 e 40: Obesidade 
//    - acima de 40: Obseidade mórbida 
//  
// Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado 
// da altura

import { linha } from '../../exercicios/linha.js'

const situacao = function(peso = 0, altura = 0) {
    const imc = peso / (altura ** 2)
    console.log(`IMC: ${imc.toFixed(2)}`)

    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso ideal'
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso'
    } else if (imc >= 30 && imc < 40) {
        return 'Obesidade'
    } else if (imc >= 40){
        return 'Obesidade móbida'
    } else {
        return 'ERROR | Confira os dados inseridos e tente novamente!'
    }
}

// peso: quilogramas (kg) -> 53 kg
// altura: metros (m) -> 1.68 m
console.log(situacao(53, 1.68))
linha()