const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5) break   // para quando chega na condição, ou seja, no indice 5
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue  // quando tem a condição ele pula o indice 5 e continua a executar
    }
    console.log(`${y} = ${nums[y]}`)
}

// Rótulo

externo: 

for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break  // está associado ao for que ele está próximo
            console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')