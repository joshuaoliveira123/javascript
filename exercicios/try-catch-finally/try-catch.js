
function syntaxTryCatch() {
    try {
        // trecho de código que pode gerar erros
    } catch (err) {
        switch (true) {
            case err instanceof ExceptionExemple:
                // tratamento especifico para uma exception lançada pelo 'ExceptionExemple'
                break
            case err instanceof ExceptionExempleElse:
            // tratamento especifico para uma exception lançada pelo 'ExceptionExempleElse'
                break
            default:
                // tratamento genérico para ademais erros
                break
        }
    } finally {
        // trecho de código que será executado idependente se foi ocasionado um erro ou não
    }
}

function throwExempleErrors() {
    try {
        throw "teste"
        throw 21 // não executa
        throw true // não executa
    } catch (err) {
        console.log(err)
    } finally {
        console.log('FIM DO PROGRAMA...')
    }
}

throwExempleErrors()