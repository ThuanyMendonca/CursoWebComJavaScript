const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

// Array final geralmente é menor ou igual, mas nunca pode ser maior
console.log(produtos.filter(function(p){
    // Não vai estar no final do array, todos são filtrados não terá o elemento
    // return false;
    // Vai ter todos os elementos, ou seja, não vai filtrar vai ter o elemento
    // return true;
    // return p.preco > 2400
}));

// Video
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

// Meu jeito
const verifica = produtos.filter(function (prod){
    return prod.preco >= 500
}).filter(function(e){
    return e.fragil
})

console.log(verifica);