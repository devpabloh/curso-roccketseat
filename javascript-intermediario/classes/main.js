/* 

Quando você instancia uma classe, você está criando uma cópia, ou um exemplo, daquele objeto específico. Você está pegando aquele "modelo" de objeto e criando uma versão própria dele para usar no seu programa.

É como se você tivesse um molde de um brinquedo, e toda vez que você quisesse brincar com aquele brinquedo, você pegasse uma cópia do molde e fizesse um novo brinquedo igual. Cada brinquedo que você faz é uma instância daquele molde.

Então, instanciar uma classe é criar um novo objeto a partir daquela classe, uma cópia individual daquele "modelo" de objeto.

*/

class Person{
    constructor(name){
        console.log(`Olá ${name}`)
    }
}

const person = new Person("Pablo")

class Product{
    constructor(name){
        this.name = name
    }
}

const product1 = new Product("Vassoura")
console.log(product1.name)

const product2 = new Product("Rodo")
console.log(product2.name)

console.log(Product)

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log(`E-mail enviado para ${this.name}, no qual está cadastrado como ${this.email}`)
    }
}

const user = new User("Pablo", "pablohenriqueadm94@gmail.com")
user.sendEmail()

class User1{
    showMessage(){
        console.log("Essa é uma mensagem")
    }
}

const user1 = new User1()
user1.showMessage()

// métodos estáticos

class User2{
    showMessage(){
        console.log("Essa é outra mensagem")
    }
}

User2.showMessage() // Teremos um erro, para chamr ela dessa forma nos temos que instânciar primeiro ou passar o método static

class User3 {
    static showMessage() {
        console.log("Essa é outra mensagem 2")
    }
}

User3.showMessage() // Agora podemos acessar o método diretamente

// Aplicando HERANÇA

class Animal{
    constructor(name){
        this.name = name

    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {

}

const dog = new Dog()
dog.makeNoise()

