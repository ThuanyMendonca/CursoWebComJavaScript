// Var -> escopo global e de função
{
    {
        {
            {
                 var sera = 'Será???' 
            }
        }
    }
}
/* 
    A variável var fica visível mesmo fora do bloco de códigos, 
    exceto quando se trata de uma função
*/
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local)