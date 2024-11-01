/* if (se) */

let hour = 11

if(hour > 10){
    console.log("Que sono!")
}

/* if (se) else (se não) */

age = 16

if(age >= 18){
    console.log(" Você pode dirigir!")
} else{
    console.log("Você não pode dirigir!")
}

/* if - else if - else */

hour = 20

if(hour <= 12){
    console.log("Bom dia!")
}else if(hour >= 18 ){
    console.log("Boa noite!")
}else{
    console.log("Boa tarde!")
}

/* switch case */

let option = 5

switch(option){
    case 1:
        console.log("Consultar pedido")
        break;
    case 2:
        console.log("Falar com atendente")
        break;
    case 3:
        console.log("Nenhuma das opções anteriores")
        break;
    default:
        console.log("Escolhe essa porra direito!")
}

/* Tratamento de excessões  */

try{
/* Tenta executar algo */
console.log(result)

}catch(error){
/* Captura o erro para tratar */
    console.log(error)
}finally{
    console.log("Fim!")
}

result = 1

try {
    if(result == 0){
        throw new Error("O valor é igual a zero!")
    }
} catch (error) {
    
}finally{
    console("Fim!")
}