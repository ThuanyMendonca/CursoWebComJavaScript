/* 
    Map percorre um array e transforma 
    em outro array do mesmo tamanho 

    Não modifica o array, ele gera um novo
*/

const nums = [1, 2, 3, 4, 5]

// gerando array com o dobro do array nums
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// primeiro faz a soma, triplo e paraDinnheiro
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)