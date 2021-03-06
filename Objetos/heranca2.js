Object.prototype.attr0 = 'Z'  // não é recomendado
// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
// atribuindo avo no objeto pai
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)  // procurando no avo
console.log(filho.attr0)  // avo aponta para Object.prototype
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324  // shadowing
}

const volvo = {
    modelo: 'V40',
    // utiliza super para refenciar o prototipo
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
// estabelece relação de ferrari com carro
// primeiro coloca o objeto e o protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

// toString -> converte objeto em string

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())