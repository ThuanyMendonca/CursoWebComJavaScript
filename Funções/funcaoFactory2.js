function criarProduto(nome,preco){
    return {
        // nome: nome  não precisa porque tem o mesmo nome
        nome,
        preco,
        vdesconto: Math.round(preco - (preco * 0.1)),
        valordesc: Math.round(preco * 0.1)
    }
}

console.log(criarProduto('Camiseta', 59.90))
console.log(criarProduto('Calça', 79.90))