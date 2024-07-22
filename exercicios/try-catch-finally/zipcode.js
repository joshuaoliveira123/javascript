/**
 * Cria um objeto ZipCode.
 *
 * Formatos aceitos para o CEP são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Se o argumento passado para o construtor do ZipCode não atende
 * a um desses padrões uma exceção é lançada.
 * 
 * Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
 */

function ZipCode(zip) {
    zip = new String(zip)
    const pattern = /[0-9]{5}([- ]?[0-9]{4})?/
    if (pattern.test(zip)) {
        // o valor do CEP será a primeira combinação na string
        this.value = zip.match(pattern)[0]
        this.valueOf = () => this.value
        this.toString = () => String(this.value)
    } else {
        throw new ZipCodeFormatException(zip)
    }
}

function ZipCodeFormatException(value) {
    this.value = value
    this.message = 'does not conform to the expected format for a zip code'
    this.toString = () => `${this.value} | ${this.message}`
}

/**
 * Isso poderia estar em um script que valida dados de endereços
 * para os endereços dos Estados Unidos.
 */

function verifyZipCode(z) {
    const ZIPCODE_INVALID = -1
    const ZIPCODE_UNKNOWN_ERROR = -2

    try {
        z = new ZipCode(z)
    } catch (e) {
        if (e instanceof ZipCodeFormatException) {
            return console.log(ZIPCODE_INVALID)
        } else {
            return console.log(ZIPCODE_UNKNOWN_ERROR)
        }
    }

    return console.log(`${z} | ${z.valueOf()} | ${z.toString()}`)
}

const a = verifyZipCode(95060)
const b = verifyZipCode(9560)
const c = verifyZipCode("a")
const d = verifyZipCode("95060")
const e = verifyZipCode("95060 1234")
const f = verifyZipCode("87565-000")
const g = verifyZipCode("87565-1234")