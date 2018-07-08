let a = 3

global.b = 123
this.c = 456
console.log(this.a)  // Undefined
console.log(global.b) //123
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // True
console.log(module.exports)

// Criando uma variável sem var e let
abc = 3 // Não faça isso
console.log(global.abc)
