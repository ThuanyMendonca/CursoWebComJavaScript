const escola = 'Cod3r'

// Pega o valor do caracter da posição 4
console.log(escola.charAt(4))
console.log(escola.charAt(5))
// charCodeAt retorna o valor do caracter na tabela asci
console.log(escola.charCodeAt(3))
// contrário do primeiro o indice dele
console.log(escola.indexOf('3'))
// a partir do indice 1 até o final
console.log(escola.substring(1))
// do indice 0 até o 3
console.log(escola.substring(0,3))
// Concatenar
console.log('Escola '.concat(escola).concat("!"))
// Substitui o 3 por e na palavra Cod3r
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
// Gera um array com as virgulas
console.log('Ana,Maria,Pedro'.split(','))

