// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
// na tela a sua média na disciplina. 
// Ex:  
// Nota 1: 4.5 
// Nota 2: 8.5 
// A média entre 4.5 e 8.5 é igual a 6.5

const media = (nota1, nota2) => {
    console.log(`Nota 1: ${nota1}`)
    console.log(`Nota 2: ${nota2}`)
    console.log(`Média: ${mediaNotas(nota1, nota2)}`)
}

const mediaNotas = (n1, n2) => (n1 + n2) / 2

media(4.5, 8.5)