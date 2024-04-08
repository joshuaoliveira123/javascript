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

const km = require('./medidas/km.js')
const hm = require('./medidas/hm.js')
const dam = require('./medidas/dam.js')
const dm = require('./medidas/dm.js')
const cm = require('./medidas/cm.js')
const mm = require('./medidas/mm.js')

const metros = function(m = 0) {
    console.log(`m: ${m}`)
    linhaHorizontal(10)
    console.log(`km: ${km.conversao(m)}`)
    console.log(`hm: ${hm.conversao(m)}`)
    console.log(`dam: ${dam.conversao(m)}`)
    console.log(`dm: ${dm.conversao(m)}`)
    console.log(`cm: ${cm.conversao(m)}`)
    console.log(`mm: ${mm.conversao(m)}`)
}

const linhaHorizontal = n => console.log(''.padStart(n,'-'))

metros(100)