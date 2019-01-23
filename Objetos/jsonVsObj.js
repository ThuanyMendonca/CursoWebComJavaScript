// JSON -> formato textual de dados (não tem função)
// Objeto -> 
// Criando objeto e transformando em JSON
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }
// convertendo objeto em JSON utiliza o stringify, ele não mostra a função
console.log(JSON.stringify(obj))
// Criando um JSON e transformando em Objeto utiliza o parse
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d":{}, "e": []}'))
