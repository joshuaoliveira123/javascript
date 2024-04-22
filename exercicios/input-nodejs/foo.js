const readline = require('node:readline')
const { stdin: input, stdout: output} = require('node:process')

const rl = readline.createInterface({ input, output })

rl.question(
    'Diga seu nome: ', res => {
        console.log(`Olá, ${res}!`)
        rl.close()
    }
)