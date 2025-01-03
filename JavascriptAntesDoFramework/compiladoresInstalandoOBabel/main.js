class Usuario {
    constructor({email}){
        this.email = email
    }

    sendMessage(){
        console.log("mensagem enviada para:", this.email)
    }
}

const usuario = new Usuario({email: "pablohenriqueadm94@gmail.com"})
usuario.sendMessage()