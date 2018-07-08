// Hoisting -> apesar de não ter declarado depois, imprimiu como undefined
console.log('A =', a)
var a = 2
console.log('A =', a)

function teste(){
    console.log('A =', a)
    var a = 2
    console.log('A =', a) 
}
teste()
console.log('A =', a) 

// console.log('B = ', b)
let b = 2
console.log('B =', b)
