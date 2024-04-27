// 88) Crie um programa que melhore o procedimento Gerador() da questão anterior 
// para que mostre uma mensagem vário 
// Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece: 
// +-------=======------+ 
//   Aprendendo Portugol  
//   Aprendendo Portugol  
//   Aprendendo Portugol  
//   Aprendendo Portugol  
// +-------=======------+

const borda = () => console.log('+-------========-------+')

function gerador(txt = 'Olá, mundo!', n = 4) {
    borda()
    for (let i = 0; i < n; i++) {
        console.log(txt)
    }
    borda()
}

gerador('Texto, maneiro', 3)