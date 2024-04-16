import { hello } from '../ambiente-3/bar.js'
import * as bar from './bar.js'
import * as baz from './baz.js'

// from ambiente-3/bar.js
console.log(hello)

// from bar.js
console.log(bar.bye)
console.log(bar.text('Texto, texto, texto!'))

// from baz.js
console.log(baz.sum(1,2,3,4,5,6))
console.log(baz.pi)
console.log(baz.pi.toFixed(5))
console.log(baz.pi.toPrecision(5))
console.log(baz.billao.toExponential(5))