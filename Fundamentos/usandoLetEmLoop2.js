const funcs = []

for(let i = 0; i < 10;i++){
    funcs.push(function() {
        console.log(i)
    })
}
/* 
    O Let guarda na memória os valores das posições, 
    diferente do var que guarda o valor de quando saiu do loop
*/

funcs[2]()
funcs[6]()
funcs[8]()
