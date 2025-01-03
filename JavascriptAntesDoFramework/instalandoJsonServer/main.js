// http é quando geralmente vamos utilizar uma api local, já o https, é quando vamos utilizar uma api externa.
// lembrando que utilizamos o .then para quando a promisse for resolvida cair nesse bloco de código.
// Convertendo a resposta para json usando o .json().

// Consumindo API usando o fetch() com o .then().
/* const response = fetch("http://localhost:3333/products")
.then((response)=>response.json())
.then((data)=> console.log(data)) */

// Utilizando o fetch com async/await.
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

async function fetchProductById(id){
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

//fetchProducts()
//fetchProductById(2)

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event)=>{
    event.preventDefault()

    await fetch("http://localhost:3333/products", {
        method: "POST", 
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        })
    })
})


