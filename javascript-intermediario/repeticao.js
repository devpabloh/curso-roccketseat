// Executa um bloco de código várias vezes de acordo com uma condição específica

// WHILE: executa até que a condição seja verdadeira.


/* 
    FOR repete até que a condição especificada seja falsa

    - Variável de controle
    - condição
    - incremento ou decremento da variável de controle
*/
let number = 7
for(let step = 0; step <= 10; step++){
    console.log(`${number} x ${step} = ${number*step}`)
}

/* FOR...IN executa iteraçãoes a partir de um objeto e percorre as propriedades */

let person = {
    name: "Pablo",
    surname: "Henrique",
    email: "pablohenriqueadm94@gmail.com"
}

for( let property in person){
    // Exibe o nome da propriedade.
    console.log(property)
    //Exibe o conteúdo da propriedade.
    console.log(person[property])
}

/* FOR...OF itera sobre valores de um objeto iterável */

let students = ["Pablo", "Antonio", "Daniel"]

for(let student of students ){
    console.log(student)
}

let user = [
    {
        name: "Pablo",
        email: "pablohenriqueadm94@gmail.com"
    }
]

for(let value of user){
    console.log(value.email)
}

/* SWITCH CASE */
let option = 2
switch (option) {
    case 1:
        console.log("Cadastrar")
        break;
    case 2:
        console.log("Atualizar")
        break;
    case 3:
        console.log("Remover")
        break;
    default:
        console.log("Opção invalida.")
        break;
}