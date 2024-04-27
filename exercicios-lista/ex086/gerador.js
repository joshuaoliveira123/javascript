// 86) Crie um programa que tenha um procedimento Gerador() que, quando chamado, 
// mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas) 
// Ex: Ao chamar Gerador() aparece: 
// +-------=======------+ 
//   Olá, Mundo!         
// +-------=======------+

const borda = () => console.log('+-------========-------+')

function gerador() {
    borda()
    console.log('Olá, mundo!')
    borda()
}

gerador()