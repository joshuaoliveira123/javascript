// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média, 
// mostrando uma mensagem no final, de acordo com a média atingida: 
//    - Média até 4.9: REPROVADO 
//    - Média entre 5.0 e 6.9: RECUPERAÇÃO 
//    - Média 7.0 ou superior: APROVADO

function notas(n1, n2) {
    const media = (n1 + n2)/2
    let msg

    if (media <= 10) {
        msg = 'APROVADO'
    } else if (media < 6) {
        msg = 'RECUPERAÇÃO'
    } else if (media < 5 && media >= 0){
        msg = 'REPROVADO'
    } else {
        msg = 'ERROR | Nota inválida!'
    }

    return msg
}

const msg = notas(5,8)
console.log(msg)