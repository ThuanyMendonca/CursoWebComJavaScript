let isAtivo = false

console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
// ! passa a ser falso
console.log(!isAtivo)
// !! passa a ser verdadeiro
console.log(!!isAtivo)

console.log('os verdadeiros... ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
// retorna o primeiro valor verdadeiro
console.log(!!('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')
