// Let -> escopo global, de função e de bloco
let numero = 1
{
    let numero = 2
    console.log('Dentro: ',numero)
}
console.log('Fora: ',numero)

/*
 * O let procura o valor mais próximo de onde está chamando ele
 * Se dentro das chaves não tivesse a declaração let numero, ele iria
 * imprimir o número que foi declarado fora.  
*/