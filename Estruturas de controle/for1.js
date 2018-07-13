let contador = 1

while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10;i++){
    console.log(i)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// se colocar o i ou var, fora do bloco for ele vai imprimir o valor de i
for(let i = 0; i < notas.length;i++){
    console.log(`nota = ${notas[i]}`)
}

//console.log(i)