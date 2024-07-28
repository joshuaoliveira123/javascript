const compose = (f, g, p) => x => p(f(g(x)))

const toUpperCase = x => x.toUpperCase()
const exclam = x => `${x}!`
const print = x => console.log(x)

const angry = compose(toUpperCase, exclam, print)

angry('aaaaahhhhhh')
angry('estou irritado')