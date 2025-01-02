// (1) Executa o código de forma sícrona e o valor 1 é impresso imediatamente no console.
console.log(1)

// (3) As microtasks são executadas antes de temporizadores e promisses.
queueMicrotask(()=>{
    console.log(2)
})


// (5) Macrotask que aguarda o evento de temporizador ser adiconado.
setTimeout(()=>{
    console.log(3)
}, 1000)

// (2) Executa o código de forma sícrona e o valor 4 é impresso imediatamente no console.
console.log(4)

// (4) Adiciona uma microtask quando a promisse é resolvida
Promise.resolve(true).then(()=>{
    console.log(5)
})