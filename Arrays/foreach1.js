const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
// passando callback a cada passagem pelo elemento do array  (o parametro indice é o segundo parametro do foreach)

// Parametros do foreach -> parametro1, indice, array
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
// usando arrow function
aprovados.forEach(nome => console.log(nome))

// armazenando função em uma variável
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

