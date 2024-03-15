main()

function estruturasDeCondicaoComposta() {
    // Primeiro método:

    if (condition) {
        // bloco de código ...
    } else if (condition) {
        // bloco de código ...
    } else if (condition) {
        // bloco de código ...
    } else {
        // bloco de código ...
    }

    // Segundo método: EVITAR

    if (condition) {
        // bloco de código ...
    } else {
        if (condition) {
            // bloco de código ...
        } else {
            if (condition) {
                // bloco de código ...
            } else {
                // bloco de código ...
            }
        }
    }

    // Terceiro método:

    switch (key) {
        case value:
            // bloco de código ...
            break;

        case value:
            // bloco de código ...
            break;

        case value:
            // bloco de código ...
            break;

        default:
            // bloco de código ...
            break;
    }
}

function main() {
    var idade = 85

    if (idade < 16) {
        console.log('Não vota.')
    } else if (idade < 18 || idade > 65) {
        console.log('Pode votar se quiser.')
    } else {
        console.log('Deve Votar!')
    }
}