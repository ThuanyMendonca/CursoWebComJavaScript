/* 
    Map percorre um array e transforma 
    em outro array do mesmo tamanho 
*/

const nums = [1, 2, 3, 4, 5]

// gerando array com o dobro do array nums
let resultado = nums.map(function(e){
    return e * 2
})
