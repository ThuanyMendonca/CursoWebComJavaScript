// a está apontando para o endereço da memória
const a = {name: 'Teste'}
console.log(a)

/*
    ATRIBUIÇÃO POR REFERÊNCIA
*/

// a e b tem o mesmo endereço
const b = a

b.name = 'Opa'
console.log(a)

// Tipo primitivo: é passado uma cópia
let c = 3
let d = c

d++
console.log(d)
console.log(c)

console.log('*****************')

let valor //não inicializado
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco // para deletar
console.log(produto)

produto.preco = null  // sem preço

console.log(!!produto.preco)
console.log(produto)