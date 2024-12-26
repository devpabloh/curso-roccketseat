// Shallow copy (cópia superficial): Não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students: [{name: "Rodrigo", email: "rodrigo@gmail.com"}]
}

/* 
const jsCourse = {
...htmlCourse, 
course: "Javascript",

}

*/

// Vai modificar o students do htmlCourse também já que o mesmo é uma referência e não uma cópia.
// jsCourse.students.push({name: "joão", email: "joao@gmail.com"})

// Deep copy (cópia profunda)

//primeira forma de fazer
/* const jsCourse = {
    ...htmlCourse,
    students: [...htmlCourse.students, {name: "João", email: "joao@gmail.com"}],
} */

// Segunda forma de fazer
/* const jsCourse = {
    ...htmlCourse,
    students: [...htmlCourse.students],
}

jsCourse.students.push({name: "João", email: "joao@gmail.com"}) */

// Terceira forma de fazer
const jsCourse = {
    ...htmlCourse, 
    course: "Javascript",
}

jsCourse.students = [
    ...htmlCourse.students,
    {name: "João", email: "joao@gmail.com"}
]

console.log(htmlCourse, jsCourse)