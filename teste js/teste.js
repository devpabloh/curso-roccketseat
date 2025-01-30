function trasParaFrente(){
    let palavra = "Javascript"
    palavra.split().reverse().join()
    return palavra
}

console.log(trasParaFrente())

palavra = "javascript"
palavra = palavra.split("").reverse().join("")
console.log(palavra) 

segundaPalavra = "caralho"
segundaPalavra = segundaPalavra.split("").reverse().join("")
console.log(segundaPalavra) 

function save(){
    console.log("Hello World!")
}