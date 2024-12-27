const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "Pablo",
        email: "devpabloh@gmail.com"
    }
}

// O javascript em si não impõe restrições à modificação dos objetos.
// book.category = "HTML"

// Congela o objeto e impede a modificação.
Object.freeze(book) // aqui você coloca o object.freeze(objeto que você quer congelar), lembrando que ele não congela os objetos aninhados, porque ele é um shallow freezing (um congelamento razo)
book.category = "CSS"

console.log(book.category)