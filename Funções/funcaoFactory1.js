// Função que retorna um objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// Com parametro
function cadastrarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(cadastrarPessoa('Thuany','Mendonça'))