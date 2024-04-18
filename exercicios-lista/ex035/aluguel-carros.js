// 35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O 
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para 
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa 
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e 
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a 
// tabela a seguir: 
//  
//    - Carros populares (aluguel de R$90 por dia) 
    //   - Até 100Km percorridos: R$0,20 por Km 
    //   - Acima de 100Km percorridos: R$0,10 por Km 
//    - Carros de luxo (aluguel de R$150 por dia) 
    //   - Até 200Km percorridos: R$0,30 por Km 
    //   - Acima de 200Km percorridos: R$0,25 por Km

import { moeda } from '../../exercicios/dinheiro-brl/moeda.js'

const aluguel = function(modelo, distancia = 0, dias = 1) {
    switch (modelo) {
        case 1:
            if (distancia <= 100) {
                return (distancia * 0.2) + (dias * 90)
            } else {
                return (distancia * 0.1) + (dias * 90)
            }

        case 2:
            if (distancia <= 200) {
                return (distancia * 0.3) + (dias * 150)
            } else {
                return (distancia * 0.25) + (dias * 150)
            }

        default:
            console.log('ERROR | Escolha um veículo válido!')
            break
    }
    return 0
}

// Carro popular: 1   | Carro luxo: 2
// -------------------+-------------------
// valor dia: 90      | valor dia: 150
// valor km(100): 0.2 | valor km(200): 0.3
// valor km: 0.1      | valor km: 0.25

const moedaBRL = a => a.toLocaleString('pt-br', moeda('brl'))

const carro1 = aluguel(2,100,2)
const carro2 = aluguel(1,100,6)
const carro3 = aluguel(1,356)

console.log(moedaBRL(carro1))
console.log(moedaBRL(carro2))
console.log(moedaBRL(carro3))