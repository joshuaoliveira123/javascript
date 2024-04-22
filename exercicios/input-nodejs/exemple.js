// Criando um input simples no console do javascript!
const readline = require('node:readline')
const { stdin: input } = require('node:process')
const { stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`)
    rl.close()
})