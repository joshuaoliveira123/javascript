const students = [
    { name: 'Anna', grade: 6},
    { name: 'John', grade: 4},
    { name: 'Maria', grade: 9}
]

const teachers = [
    { name: 'Carlos', salary: 6000},
    { name: 'Jennifer', salary: 2540},
    { name: 'Antony', salary: 10900}
]

const byName = (obj) => obj.name
const byNames = (list) => list.map(byName)

const studentsNames = byNames(students)
const teachersNames = byNames(teachers)

console.log(studentsNames) // [ 'Anna', 'John', 'Maria' ]
console.log(teachersNames) // [ 'Carlos', 'Jennifer', 'Antony' ]