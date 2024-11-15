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

let date = new Date("2024-07-02T14:30:10")

// Dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDay())

// Dia do mês (0 à 30)
console.log(date.getDate())

// Mês (0 à 11)
console.log(date.getMonth() + 1)

// Ano
console.log(date.getFullYear())

// Horas
console.log(date.getHours())

// Minutos
console.log(date.getMinutes())

// Segundos
console.log(date.getSeconds())

//modificar o ano
date.setFullYear(2030)

//modificar o mês
date.setMonth(2)

//modificar o dia
date.setDate(10)

//modificar a hora
date.setHours(18)

//modificar os minutos
date.setMinutes(15)

