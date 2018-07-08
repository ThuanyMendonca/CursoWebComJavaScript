// Novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 21,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//console.log(pessoa.nome)

// Operador destructuring

// Tira do objeto pessoa o nome e idade
const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep = 123 } } = pessoa
console.log(logradouro, numero, cep)