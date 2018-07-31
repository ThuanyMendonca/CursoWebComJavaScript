// Object.preventExtensions -> previne o aumento de atributos nos objetos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
// Pode motificar e excluir, não pode aumentar
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'

delete produto.tag
console.log(produto)

// Object.seal -> não consegue adicionar nem excluir, mas consegue modificar o valor
const pessoa = { nome: 'Juliana', idade: 18 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

// Não adiciona
pessoa.sobrenome = 'Silvia'
// Não deleta
delete pessoa.nome
// Altera o valor da idade
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
