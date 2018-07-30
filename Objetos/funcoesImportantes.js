const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))    // mostra as chaves, ou seja, nome do atributo
console.log(Object.values(pessoa))  // mostra os values, ou seja, o valor de cada atributo
console.log(Object.entries(pessoa)) // valor da chave e do tributo dentro de array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
// Nome da propriedade: dataNascimento
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // não enumera
    writeble: false, // não altera
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

// Concatenação dos objetos em um só
const obj = Object.assign(dest, o1, o2)  // pega todos os atributos e joga dentro de um objeto
console.log(obj)

// Congela o objeto e não pode ser alterado
Object.freeze(obj)
obj.c = 1234
console.log(obj)

