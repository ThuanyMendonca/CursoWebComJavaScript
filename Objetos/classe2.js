class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

// Uma função tem como protótipo a classe Avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        // chamando o constructor de Avo
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)