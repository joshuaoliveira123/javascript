import { createInterface } from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const rl = createInterface({ input, output })

rl.question(
    'Diga seu nome: ', res => {
        console.log(`Olá, ${res}!`)
        rl.close()
    }
)