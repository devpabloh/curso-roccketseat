// setInterval() executa uma função após um intervalo de tempo especificado. Diferente do Timeout que é apenas uma vez, o setInverval vai ficar spamando naquele determinado período de tempo.

let value = 10

const interval = setInterval(()=>{
    console.log(value)
    value --

    if( value === 0){
        console.log("Feliz ano novo!")
        clearInterval(interval)
    }
}, 1000)