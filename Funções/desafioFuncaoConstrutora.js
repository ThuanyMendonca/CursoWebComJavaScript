// Função construtora com parametro estático
function Pessoa(){
    // atributo privado
    let nome = 'Thuany'
    // método público
    this.falar = function (){
        return nome
    }
}

const p1 = new Pessoa

console.log(p1.falar())

// Segundo exemplo com parametro dinamico
function PessoaTeste(){
    this.falar1 = function(nome){
        return nome
    }
}

const p3 = new PessoaTeste()
console.log(p3.falar1('Nome Teste'))

// Correção desafio
function PessoaDesafio(nome){
    this.nome = nome

    this.falar2 = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const pessoa1 = new PessoaDesafio('Desafio')
pessoa1.falar2()