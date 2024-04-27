// 92) Crie uma lógica que leia um número inteiro e passe para um procedimento 
// ParOuImpar() que vai verificar e mostrar na tela se o valor passado como 
// parâmetro é PAR ou ÍMPAR.

const parImpar = a => console.log(`${a} -> ${(a % 2 === 0) ? 'PAR' : 'IMPAR'}`)

parImpar(5)
parImpar(0)
parImpar(123)
parImpar(50)
parImpar(-5)
parImpar(-20)