// Sintaxe do try-catch:
    // try {
        // 
    // } catch (error) {
        // 
    // }

try {
    throw "teste"
    throw 21 // não executa
    throw true // não executa
} catch (err) {
    console.log(err)
}