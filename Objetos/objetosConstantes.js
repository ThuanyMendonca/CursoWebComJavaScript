// A variável aponta para um endereço que aponta para o objeto
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
// O endereço é o mesmo, o que altera é o valor do objeto
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }   // só pode atribuir um objeto apenas uma vez com o const

// Congelando o objeto: não edita, não adiciona nem exclui
Object.freeze(pessoa)
// Ignora a tentativa abaixo
pessoa.nome = 'Maria'
console.log(pessoa.nome)

// Objeto criado com congelamento, não consegue alterar nada
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)