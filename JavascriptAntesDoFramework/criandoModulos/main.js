import * as calc from "./calc.js" // quando a gente usa as {} é porque vamos importar de forma especifica por nome
// Quando importamos utilizando o * que significa all (tudo) tudo o que está sendo exportado do outro documento, damos um nome para essa importação que no caso aqui foi o calc, e para usar devemos usar o calc. no qual será mostrado tudo o que está sendo importado do outro arquivo.

console.log("4 + 6 = ", calc.sum(4,6))

console.log("4 * 6 = ", calc.multiply(4,6))