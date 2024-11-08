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
        firstName: "Pablo",
        lastName: "Henrique"
    },
    adress: {
        street: "Rua Belo Horizonte",
        number: "90",
        city:"Olinda",
        postal_code: "53040-110",
        message: ()=>{
            console.log(`Oi ${name.firstName}`)
        }
    }
}

console.log(user.name)