// Função que vai retornar um número aleatório

// No lugar de acessar obj.min e obj.max, ele já vai tirar de dentro do objeto sem a notação ponto

function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
// console.log(rand({ max: 50, min: 40}))
console.log(rand(obj))

console.log(rand({}))
