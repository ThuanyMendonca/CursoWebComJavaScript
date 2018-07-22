// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1(){ }

// Armazenar em uma variável
const fun2 = function () { }

const array = [function (a, b){ return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

// Passando uma função por parametro para a função run()
run(function () { 
    console.log('Executando...') 
})

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// Armazenar na variável o valor da soma da função
const cincoMais = soma(2, 3)
cincoMais(4)
