// http é quando geralmente vamos utilizar uma api local, já o https, é quando vamos utilizar uma api externa
// lembrando que utilizamos o .then para quando a promisse for resolvida cair nesse bloco de código
// Convertendo a resposta para json usando o .json()
const response = fetch("http://localhost:3333/products")
.then((response)=>response.json())
.then((data)=> console.log(data))
