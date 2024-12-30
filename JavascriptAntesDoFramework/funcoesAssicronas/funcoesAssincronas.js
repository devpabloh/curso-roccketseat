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
// USANDO O THEN CATCH E FINALLY
/* console.log("Executando função assicrona")

asyncFunction()
    .then((response)=>{
        console.log(`Sucesso: ${response}`)
    })
    .catch((error)=>{
        console.log(`Erro: ${error}`)
    })
    .finally(()=>{
        console.log("Fim da execução!")
    }) */

// colocamos o async para dizer que vamos utilizar uma função assincrona, que nos permite o uso do await para esperar a sua finalização

/* async function fetch(){
    const response = await asyncFunction() // colocamos o await para o javascript esperar a execução da função
    console.log(response)
}   */ 

// Também podemos utilizar a função assincrona na notação de arow function
const fetch = async () => {
    try{
        const response = await asyncFunction()
        console.log("Sucesso", response)
    }catch(error){
        console.log("error: ", error)
    }finally{
        console.log("Fim da execução!")
    }
    
}

fetch()