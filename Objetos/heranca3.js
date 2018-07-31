const pai = { nome: 'Pedro', corCabelo: 'preto' }

// aponta para o objeto pai e não para o Object.prototype
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// passa o protótipo do objeto que estou criando
const filha2 = Object.create(pai, {
    nome : { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    // console.log(key)
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança`)
}