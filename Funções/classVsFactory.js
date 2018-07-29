class Pessoa {
    constructor(nome){
        // inicialização de variáveis
        this.nome = nome
    }
    // Método
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        // Aqui não precisa do this
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
