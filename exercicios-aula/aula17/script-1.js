// Objetos

const amigo = {
    nome: 'Pedro',
    idade: 20,
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        // O 'this.' se refere ao proprio 'amigo.'
        this.peso += p
        console.log(`${this.nome} engordou ${p} quilos`)
        console.log(`Agora ${this.nome} pesa ${this.peso} kg!`)
        // Como não tem um 'return', aparece um 'undefined' porque o javascript coloca um return automático com o valor indefinido.
    },
    dizOla: function() {
        let pessoaFala = console.log(`${this.nome} diz Olá!`)
        return pessoaFala
    },
    dizTchau: () => console.log(`${amigo.nome} diz Tchau!`), // Se usar um this. em uma arrow function, não funciona. Retorno undefined
    falaTexto(text) {
        console.log(text)
    }
}

console.log(`O ${amigo.nome} tem ${amigo.idade} anos de idade.`)
console.log(`Considera seu gênero [${amigo.sexo}] e pesa ${amigo.peso} kg`)

console.log(amigo.engordar(5))

// Confirmando que amigo.peso realmente foi modificado com uma função dentro do objeto!
console.log(amigo.peso)

console.log(amigo.dizOla())
console.log(amigo.dizTchau())
console.log(amigo.falaTexto('TEXTO TEXTO TEXTO'))