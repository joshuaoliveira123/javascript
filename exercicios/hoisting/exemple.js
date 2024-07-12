foo()
bar()
baz()

function foo() {
    console.log(a)
    var a = 2
}

function bar() {
    let a = 3
    console.log(a)
}

// Na documentação do MDN, isso deveria funcionar, mas da erro, não sei do porquê. Mas acho que isso é bom.
function baz() {
    // num = 5
    // console.log(num)
    // let num
}