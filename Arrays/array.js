// Array é um objeto especial em javascript
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])  //undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])

// inserir novo elemento dentro do array
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

console.log(aprovados[8] === undefined)  //true
console.log(aprovados[8] === null)   //false

// altera o array (ordena)
aprovados.sort()
console.log(aprovados)

// coloca undefined na posição do array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// a partir do indice, numero de elementos a ser excluido, adicionando elementos
aprovados.splice(1, 2, 'Adicionando')
console.log(aprovados)
