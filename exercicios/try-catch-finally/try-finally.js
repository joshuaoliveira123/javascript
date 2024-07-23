import { linha } from '../linha.js'

const l = () => linha(63)

function exemple() {
    try {
        try {
            throw new Error('ExceptionExemple')
        } finally {
            console.log('Encerrando alguns processos que fechariam de qualquer jeito...')
        }
    } catch (err) {
        console.log(`ERROR: ${err.message}`)
    } finally {
        console.log('Encerrando programa...')
    }
}

// relançando o error
function exempleElse() {
    try {
        try {
            throw new Error('ExceptionExemple')
        } catch (err) {
            console.log(`ERROR (inner): ${err.message}`)
            throw err
        } finally {
            console.log('Encerrando alguns processos que fechariam de qualquer jeito...')
        }
    } catch (err) {
        console.log(`ERROR (outer): ${err.message}`)
    } finally {
        console.log('Encerrando programa...')
    }
}

function exempleElseAgain() {
    try {
        try {
            throw new Error('ExceptionExemple')
        } catch (err) {
            console.log(`ERROR (inner): ${err.message}`)
            throw err
        } finally {
            console.log('Encerrando alguns processos que fechariam de qualquer jeito...')
            return
        }
    } catch (err) {
        console.log(`ERROR (outer): ${err.message}`) // ignorado pois um 'return' foi efetuado no bloco 'finally'
    } finally {
        console.log('Encerrando programa...')
    }
}

l()
exemple()
l()
exempleElse()
l()
exempleElseAgain()