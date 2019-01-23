const moduloA = require ('./moduloA');
const moduloB = require ('./moduloB');

// Objeto que está no módulo A
console.log(moduloA);
console.log(moduloA.ola);
console.log(moduloA.bemVindo);

// Executando a função do objeto
console.log(moduloB.boaNoite());
console.log(moduloB);