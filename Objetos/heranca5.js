// todos são função, ou seja, todos tem prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    // quebrando a string e transformando em caracter do array
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

// Criando a função de pegar o primeiro item do array
Array.prototype.first = function (){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a','b','c'].first())

// Não utilizar -> sobreescreve uma função que já existe no JS
String.prototype.toString = function (){
    return 'Lascou tudo'
}
// O console vai aparecer a frase lascou tudo invertida
console.log('Escola Cod3r'.reverse())
