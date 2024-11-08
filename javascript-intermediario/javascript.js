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