/* 
    OBJETO
        - uma coleção de dados e/ou funcionalidades;
        - podem ter propriedades e métodos;
*/

// criando um objeto vazio

const obj = {}

// Criar um objeto com propriedades e métodos

const user = {
    
    email: "devpabloh.gmail.com",
    age: 30,
    name: { // chamado de estrutura de objeto aninhado, um objeto dentro do outro.
        first_name: "Pablo",
        lastName: "Henrique",
    },
    adress: {
        street: "Rua Belo Horizonte",
        number: "90",
        city:"Olinda",
        postal_code: "53040-110",
    },
    message: ()=>{
        console.log(`Oi ${user.name.first_name}`)
    }
}

// acessando propriedades e métodos usando a notação de ponto
console.log(user.email)

//acessando propriedade de objetos
console.log(user.name.lastName) 

//executando o método do objeto
user.message()

//Outra forma de acessar é através da notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()

const product = {
    name: "Teclado",
    quantity: 100,
}

console.log(product.name)
//atualizando o valor de uma propriedade
product.name = "Mouse"
console.log(product.name)

console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

//atualizando o valor das propriedades utilizando a notação dos colchetes
product["quantity"] = "80"
console.log(product["quantity"])

/* 
    OPTIONAL CHAINING (?.) - encadeamento opcional se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando não existe garantia de existência de determinadas propriedades obrigatórias.
*/

const user1 = {
    id: 1,
    name:"Pablo",
    /*  address: {
        street: "Av. Brasil",
        city: "São Paulo",
        geo:{
            latitude: 47.8080,
            longitude: 17.5674, 
        },
    }, */
    message: function(){
        console.log(`${this.name}`)
    }
}

console.log(user1?.address?.street)
user1.message?.()

/* 
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operador do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operador do lado esquerdo.
*/

let content = null
console.log(content ?? "conteúdo padrão")

const user3 = {
    name: "Pablo",
    avatar: undefined,
}

console.log(user3.avatar ?? "default.png")

// FUNÇÃO CONSTRUTORA

function createProduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }
    return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

let mensagem = "Estou estudando os fundamentos do javascript"

console.log(mensagem.toLocaleLowerCase())
console.log(mensagem.toUpperCase())
console.log(mensagem.length)

let password = "123456"

if(password.length < 6){
    console.log(" A senha deve ter ao menos 6 caracteres")
}else{
    console.log("A senha está correta")
}

let value= 123456

console.log(toString(value).length)

// substituindo parte de um texto

console.log(mensagem.replace("os fundamentos do javascript", "Métodos de string"))

// Remove espaços em branco no inicio e no final da string.
let textWithSpace = "    Texto de exemplo   "
console.log(textWithSpace.length)

console.log(textWithSpace.trim().length)

//Separando e unindo strings
let text = "pablo, Henrique, Ferreira"
let separate = text.split(",")
console.log(separate)

let mensagem1 = "Estou aprendendo javascript"
console.log(mensagem1.split(" "))

// Unindo strings
let joined = separate.join(" - ")
console.log(joined)

// Obtém a posição da palavra.
console.log(mensagem1.indexOf("aprendendo"))

//verificar se existe aquela palavra na string
console.log(mensagem1.includes("javascript"))

// CRIANDO UM ARRAY COM CONSTRUTOR 
const newArray = new Array()

//vendo o tamanho do Array
console.log(newArray.length)

// [] - Array
// {} - Objects

// Cria o Array com 10 posições vazias.
const available = new Array(10)
console.log(available)
console.log(available.length)

// cria o Array
let fruits = ["apple", "Banana", "Laranja"]
console.log(fruits)
fruits.push("Café")
console.log(fruits)

// acessando o item pelo índice.
console.log(fruits[1])

//retornando o nome do ultimo item da lista de forma dinâmica
console.log(fruits[fruits.length - 1])

// Convertendo uma string para Array
let fullName = "Pablo Henrique Ferreira de França"
console.log(fullName)

// Cria um Array com os nomes separando pelo espaço
console.log(fullName.split(" "))

//cria um Array com as letras
console.log(Array.from(fullName))

users = []

// adicionando um item no final do Array
users.push("Pablo")
users.push("Henrique")
users.push("Ferreira")

console.log(users)
// adiciona um item no inicio do Array
users.unshift("França")
console.log(users)

// remove o primeiro item do Array
users.shift()
console.log(users)

// remove o último item do Array
users.pop()
console.log(users)

// Usando o índices

// Encontra e retorna o índice do Array
let frutas = ["Apple", "Watermelon", "Strawberry", "Lemon"]
let position = frutas.indexOf("Watermelon")
console.log(frutas)
console.log(position)

/* frutas.splice(1,2) */
frutas.splice(position, 1)
console.log(frutas)

// Para saber se existe ou não um item no array
console.log(frutas.includes("Apple"))
console.log(frutas.includes("Orange"))

let myArray = ["Um texto", 10, true, function (){console.log("função dentro do Arry")},{name: "Pablo", email: "pablohenriqueadm94@gmail.com"}]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]()
console.log(myArray[4].name)
console.log(myArray[4].email)

