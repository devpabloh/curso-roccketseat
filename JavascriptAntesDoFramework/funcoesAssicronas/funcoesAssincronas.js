// Função que retorna uma Promisse.

function asyncFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

        // Simulando uma operação assincrona
        const inSucess = false;

        if(inSucess){
            resolve("A operação foi concluída com sucesso!");
        }else{
            reject("Algo deu errado")
        }
    },3000) // Simula uma operação assicrona que eleva 3 segundos
    })
}

console.log("Executando função assicrona")

asyncFunction().then((response)=>{
    console.log(`Sucesso: ${response}`)
}).catch((error)=>{
    console.log(`Erro: ${error}`)
}).finally(()=>{
    console.log("Fim da execução!")
})