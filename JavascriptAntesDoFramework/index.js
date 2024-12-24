// O strict mode (modo estrito): ativando esse modo, os erros que eram selecionados passa a gerar exceções no javascript.

// quando colocado fora da função ele vai funcionar para todo o documento (escopo global), quando está dentro da função ele vai apenas funcionar ali dentro (escopo local).
/* "use strict" */ 

function showMessage(){
    let persoName = "Pablo Henrique"
    console.log("Olá" + persoName)
}

showMessage()

class Student {
    get point(){
        return 7
    }
}

let student = new Student()

// student.point = 10

// Quando passamos parâmetros duplicados.
function sum(a, a, b){
    return a + a + b
}

const result = sum(1,3,2)
console.log(result)