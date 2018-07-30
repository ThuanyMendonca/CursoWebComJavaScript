 const sequencia = {
    // convenção de variável acessada apenas internamente 
    _valor: 1,
    
    // acessando valor em cima de uma função
    get valor(){ return this._valor++ },
    
    // com parametros
    set valor(valor) { 
        // só atribuir o valor se for maior que o valor atual
        if(valor > this._valor){
            this._valor = valor
        }         
    }
 }
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 1000
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 900  // ignora esse valor pq entra dentro da validação
 console.log(sequencia.valor, sequencia.valor)
 

