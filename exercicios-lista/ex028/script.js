// 28) Faça um programa que leia a largura e o comprimento de um terreno 
// retangular, calculando e mostrando a sua área em m². O programa também 
// devemostrar a classificação desse terreno, de acordo com a lista abaixo: 
//    - Abaixo de 100m² = TERRENO POPULAR 
//    - Entre 100m² e 500m² = TERRENO MASTER 
//    - Acima de 500m² = TERRENO VIP

const terreno = function(lar=0, com=0) {
    const area = (lar,com) => lar * com
    let situacao

    if (area(lar, com) <= 0) {
        situacao = 'TERRENO INVÁLIDO!'
    } else if (area(lar, com) < 100) {
        situacao = 'TERRENO POPULAR'        
    } else if (area(lar, com) < 500) {
        situacao = 'TERRENO MASTER'
    } else if (area(lar, com) >= 500){
        situacao = 'TERRENO VIP'
    } else {
        situacao = 'ERROR!'
        console.log('ERROR | Dados inválidos!')
    }

    return situacao
}

const largura = 10
const comprimento = 8
console.log(`Terreno de largura ${largura} metros e comprimento ${comprimento} metros é um ${terreno(largura, comprimento)}!`)