// 87) Crie um programa que melhore o procedimento Gerador() da questão anterior 
// para que mostre uma mensagem personalizada, passada como parâmetro. 
// Ex: Ao chamar Gerador("Aprendendo Portugol") aparece: 
// +-------=======------+ 
//   Aprendendo Portugol         
// +-------=======------+

const borda = () => console.log('+-------========-------+')

function gerador(txt = 'Olá, Mundo!') {
    borda()
    console.log(txt)
    borda()
}

gerador('Texto maneiro!')