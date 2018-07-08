let num1 = 1
let num2 = 2

num1++
console.log(num1)  // 2
--num1
console.log(num1)

console.log(++num1 === num2--)  // True pq ainda n fez o decremento
console.log(num1 === num2)  // false pq fez o decremento