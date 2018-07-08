// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
// NaN  -> Not a Number
imprimirSoma(2)
imprimirSoma(2,10,4,5,6,7,8)
// NaN  -> Not a Number
imprimirSoma()

// Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2,3))
// Aqui ele soma 2 + b que é 1
console.log(soma(2))

