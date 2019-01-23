// Isso não será exportado para o outro arquivo
let a = 0;
// Só exports não funciona
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}