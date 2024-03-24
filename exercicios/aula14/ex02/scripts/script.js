function tabuadaPorMim() {
    let strNum = document.querySelector('#idNum')
    let res = document.querySelector('#tabuada')
    
    if (strNum.value.length == 0) {
        alert('Digite um número!')
    } else {
        let num = Number(strNum.value)

        res.innerHTML = `<option value="num${num}">Tabuada do ${num}</option>`

        for (let i = 0; i <= 10; i++) {
            let calc = i * num
            res.innerHTML += `<option value="mul${i}">${num} x ${i} = ${calc}</option>`
        }
    }

}

function tabuada() {
    let strNum = document.getElementById('idNum')
    let res = document.getElementById('tabuada')

    if (strNum.value.length == 0) {
        alert('Digite um número!')
    } else {
        let num = Number(strNum.value)
        
        res.innerHTML = ''

        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `item${i}`
            res.appendChild(item)
        }
    }
}

function exemple() {
    let variavel1 = document.querySelector('#demonstracao')
    let variavel2 = document.querySelector('.box-container')

    if (testaSeEscreveu(variavel1)) {
        mostraNumeros(variavel1, variavel2)
    }
}