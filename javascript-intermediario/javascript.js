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