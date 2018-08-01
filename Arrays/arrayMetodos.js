const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remove ultimo elemento do array
pilotos.pop()  // massa quebrou o carro!
console.log(pilotos)

// adiciona elemento no array
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) //massa quebrou :(
console.log(pilotos)

// slice -> retorna um novo array
const algunsPilotos1 = pilotos.slice(2)  // a partir da posição 2
console.log(algunsPilotos1)
// primeiro elemento é o indice até indice final
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)