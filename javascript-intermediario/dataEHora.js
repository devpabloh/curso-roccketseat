// Exibe a data e hora atual.
console.log(new Date())

//Exibe a data e hora de referência (considera o fuso)
console.log(new Date(0))

//Exibe o número de milissegundos
console.log(new Date().getTime())

// a sequência é ano, mês(inicia em 0, ou seja, ano de 0 a 11), dia
console.log(new Date(2024, 6, 23)) 

// Define data(ano, mês e dia) e hora, minuto e segundo
console.log(new Date(2024,6,3,14,30,0))

// Outra maneira de definiar data e hora
//definindo data e hora com string
console.log(new Date("2024-07-03T17:05:00"))

console.log(new Date("july 3, 2032 17:06:00"))