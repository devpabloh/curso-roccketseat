class Usuario {
    constructor({email}){
        this.email = email
    }

    sendMessage(){
        console.log("Mensagem enviada para:", this.email)
    }
}

const usuario = new Usuario({email: "pablohenriqueadm94@gmail.com"})
usuario.sendMessage()