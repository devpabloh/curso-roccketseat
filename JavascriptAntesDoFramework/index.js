// O strict mode (modo estrito): ativando esse modo, os erros que eram selecionados passa a gerar exceções no javascript.

// quando colocado fora da função ele vai funcionar para todo o documento (escopo global), quando está dentro da função ele vai apenas funcionar ali dentro (escopo local).
/* "use strict" */ 

function showMessage(){
    let persoName = "Pablo Henrique"
    console.log("Olá" + persoName)
}

showMessage()

class Student {
    get point(){
        return 7
    }
}

let student = new Student()

// student.point = 10

// Quando passamos parâmetros duplicados.
function sum(a, a, b){
    return a + a + b
}

const result = sum(1,3,2)
console.log(result)

// destructuring assignment (desestruturação) permite extrair dados de arrays ou de objetos em variáveis distintas.
const data = ["Pablo Henrique", "devpabloh@gmail.com"]

// Desestruturando array
const [userName, email] = data
console.log(userName) // Pablo Henrique
console.log(email) // devpabloh

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somento o primeiro.
const [banana] = fruits
console.log(banana)

// ignorando o primeiro na desestruturação, o uso do _ é feito para ignorar posições e pegar apenas o que a gente quer
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação, você também pode ignorar posições usando a virgula para cada um que você quer que seja ignorado
const [ , ,orange] = fruits
console.log(orange)

// Desestruturando objetos

const product = {
    description: "Teclado",
    price: "150,00"
}

const {description, price} = product
console.log(`Essa é a descrição ${description}`)
console.log(`Esse é o preço ${price}`)

function newProduct({description, price}){
    console.log("### Novo produto ###")
    console.log(`Essa é a descrição ${description}`)
    console.log(`Esse é o preço R$ ${price}`)
}

newProduct({description: "Notbook", price: 70})

// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values(a, ...rest){
    console.log(a)
    console.log(rest)
}

values(1,2,3)

// Spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandida para ser usado onde zero ou mais argumentos.

const numbers = [1,2,3]
console.log(numbers)

// Spread
console.log(...numbers)  

// Criando objeto           
const data1 = [{
    name: "Pablo Henrique", 
    email: "devpabloh@gmail",
    avatar: "r.png"
},{
    name: "Pablo Henrique", 
email: "devpabloh@gmail",
avatar: "r.png"
}]

console.log(data1)

// Utilizando o spread no array com objetos.
console.log(...data1)

// O método map() chama a função callback recebida por parâmetro para cada elemento do Array Original, em ordem, e constrói um novo Array com base nos retornos de cada chamada. E no final, devolve um novo Array.

const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do Array, essa sintaxe completa é usada quando se quer além de percorrer, fazer algo com aqueles dados, como fazer alguma lógica e etc
products.map((product) => {console.log(product)})

// Sintaxe reduzida
products.map(product => console.log(product))

// Utilizando o novo objeto retornado.
const formatted = products.map((product)=>{
    /* return product.toUpperCase() */

    return {
        id: Math.random(),
        description: product
    }
})

console.log(formatted)

// Método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["Java", "Javascript", "Python", "PHP", "C", "HTML", "CSS", "Web"]
const result1 = words.filter((word)=> word.length > 4)
console.log(result1)

const products1 = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 50, promotion: false},
    {description: "Monitor", price: 900, promotion: true},
    {description: "Fonte", price: 100, promotion: false},
]

const promotion = products1.filter((product)=> product.promotion === true)

console.log(promotion)

// O método findIndex() retorna o índice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values1 = [4,6,8,12]

// Obtendo o primeiro índice do elemento que o valor é maior do que 4
const index =(values1.findIndex((value) => value > 4))


console.log(index)
console.log(values1[index]) // obtendo o valor que está naquele indice que foi achado

//Exemplo de quando o método findIndex() não encontra
console.log(values1.findIndex((value) => value > 12)) // Já que não tem, ele retorna -1

// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado.

const values2 = [2,12,8,130,44]

// Retorna o primeiro elemento que o valor é maior que 10
const found = values2.find((value)=> value > 10)
console.log(found) // retorna 12, que é o primeiro item que ele achou no qual satisfaz a condição que foi passada

// Exemplo com objetos

const fruits1 = [
    {name: "Apple", quantidade: 23},
    {name: "Bananas", quantidade:25},
    {name: "Laranjas", quantidade:52},
    {name: "Mamão", quantidade:60},
]

const result2 = fruits1.find((fruits)=>  fruits.name === "Bananas")
console.log(result2)

// O método every() teste se todos os elementos do array passam na condição e retorna um valor boolean (true ou false).

// Exemplo de Arrays de idades.
const ages = [15,30,39,50, 29]

// Verificar se todas as idades são iguais ou maiores que 18.
const result3 = ages.every((age)=> age >= 18)

console.log(result3) // retorna false, porque o número 15 não passa na codição estabelecida.


// O método some() testa se ao menos um dos elementos do Array passa na condição e retorna um valor true ou false.
const ages1 = [15, 30, 39, 29]

const result4 = ages1.some((age) => age < 18)
console.log(result4)

/* 
    O método reduce é utilizado para reduzir um Array a um único valor.

    Parâmetros:
    - Array original (values)
    - Acumulador (accumulator)
    - Valor da iteração (currentValue)
    - Valor inicial (0)
    - Index (index da iteração atual - opcional)

*/

const values3 = [1, 2, 3, 4, 5]

const sum2 = values3.reduce((accumulator, currentValue, index)=>{
    console.log("Acumulador", accumulator)
    console.log("Valor da iteração", currentValue)
    console.log("Index da iteração atual", index)

    console.log("Soma", accumulator + currentValue)
    console.log("#######################")

    return accumulator + currentValue
}, 0)

console.log(sum2)



