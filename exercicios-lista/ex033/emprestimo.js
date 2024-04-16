// 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra 
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que 
// ela não pode exceder 30% do salário ou então o empréstimo será negado.
// Desconsidere taxas de juros e apenas divida igualmente o valor do imóvel pelo
// tempo passado.

const emprestimo = function(valorImovel = 0, salario = 0, tempoAnos = 0) {
    const valorMaximo = salario * 0.3
    const prestacao = valorImovel / (tempoAnos * 12)
    return (valorMaximo >= prestacao) ? true : false
}

const emprestimo_copy = (valorImovel = 0, salario = 0, tempoAnos = 0) => ((salario*0.3) >= (valorImovel / (tempoAnos * 12))) ? true : false

console.log(emprestimo(100000, 2778, 10))

console.log(emprestimo_copy(500000, 4630, 30))