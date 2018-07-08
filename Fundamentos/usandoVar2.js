var numero = 1

{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

/*
*   Nesse exemplo de declaração com var o resultado a ser impresso será 2,
*   pois a declaração da variável dentro das chaves sobreescreve a variável número
*   que havia sido declarada no começo.
*/