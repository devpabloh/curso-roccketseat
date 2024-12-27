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
}

console.log(updatedBook)