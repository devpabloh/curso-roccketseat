const address1 = {
    street: "Av. Brasil",
    number: 20
}

// Isso não é uma cópia. É uma referência, isso quer dizer que quando estamos manipulando o objeto que recebeu a referência o mesmo também será alterado.
/* const address2 = address1
address2.number = 30 */

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1 (opção 1).
//const address2 = {...address1}
//address2.number = 30

const address2 = {...address1, number: 30} // lembrando que nessa opção, temos que colocar em ordem para alterar, se não vai apenas sobrepor e não alterar

console.log(address1, address2)

// Também funciona com arrays
const fruits = ["Banana", "Maça"]

const fruits2 = fruits
fruits2.push("Melão")
console.log(fruits,fruits2) // podemos perceber que assim como no exemplo de objetos, os dois arrays foram alterados, porque não criamos uma cópia e sim uma referência

const fruits3 = [...fruits]
fruits3.push("Abacaxi")
console.log(fruits,fruits3) // aqui criamos uma cópia e apenas foi alterada aquela cópia que criamos.


