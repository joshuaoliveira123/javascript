// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores 
// relativos em outras medidas. 
// Ex:  
// Digite uma distância em metros: 185.72 
// A distância de 85.7m corresponde a: 
// 0.18572Km 
// 1.8572Hm 
// 18.572Dam 
// 1857.2dm 
// 18572.0cm 
// 185720.0mm
// 
// obs: fazer usando varias funções e modulos.

import { linha } from '../../exercicios/linha.js'
import { km } from "./medidas/km.js"
import { hm } from "./medidas/hm.js"
import { dam } from "./medidas/dam.js"
import { dm } from "./medidas/dm.js"
import { cm } from "./medidas/cm.js"
import { mm } from "./medidas/mm.js"

// const km = require('./medidas/km.js')
// const hm = require('./medidas/hm.js')
// const dam = require('./medidas/dam.js')
// const dm = require('./medidas/dm.js')
// const cm = require('./medidas/cm.js')
// const mm = require('./medidas/mm.js')

const metros = function(m = 0) {
    console.log(`m: ${m}`)
    linha()
    console.log(`km: ${km(m)}`)
    console.log(`hm: ${hm(m)}`)
    console.log(`dam: ${dam(m)}`)
    console.log(`dm: ${dm(m)}`)
    console.log(`cm: ${cm(m)}`)
    console.log(`mm: ${mm(m)}`)
}

metros(100)