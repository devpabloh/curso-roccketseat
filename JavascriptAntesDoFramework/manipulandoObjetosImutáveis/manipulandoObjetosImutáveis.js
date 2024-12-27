const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}

const updatedBook = {
    ...book,
    title: "Criando um front-end moderno com HTML",
    category: "HTML",
    type: "programming",
}

console.log(book) // Original intacto
console.log(updatedBook) // Modificado


// Utilizando operador de desestruturação (rest operator) para remover propriedades.

const {category, ...updatedBook2} = book
console.log(updatedBook2)