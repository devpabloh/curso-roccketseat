const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    autor: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}

function deepFreeze(object){
    // Obtém um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object)

    // Itera sobre todas as propriedades do objeto.
    for(const prop of props){
        // Obtém o valor associado à propriedade atual.
        const value = object[prop]

        // Verifica se  o valor é um objeto ou função para continuar aplicando o deepfreeze em objetos aninhados.
        if(value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }

        return Object.freeze(object)
    }
}

// Chama a função para começar o objeto com o deep freeze (congelamento profundo)
deepFreeze(book)
console.log(book)