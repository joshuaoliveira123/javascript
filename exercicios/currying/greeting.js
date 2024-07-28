const greeting = greet => name => console.log(`${greet} ${name}`)

const hello = who => greeting('Hello')(who)

const helloWorld = hello('World')
const helloPerson = hello('John')