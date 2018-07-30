const a = 1
const b = 2
const c = 3

// quando o atributo for diferente do parametro
const obj1 = { a: a, b: b, c: c }

// quando o atributo é igual o parametro
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    // forma antiga
    funcao1: function(){
        // ...
    },
    funcao2(){
        // atualmente declara funcao assim
    }
}

console.log(obj5)

