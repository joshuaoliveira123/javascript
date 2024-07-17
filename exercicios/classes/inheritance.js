class Animal {
    constructor(name) {
        this._name = name
    }

    speak() {
        console.log(`${this._name} makes a noise`)
    }
}

// Usando o 'extends' é possivel herdar as caracteristicas da classe pai
class Dog extends Animal {
    speak() {
        console.log(`${this._name} barks`)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this._name} meows`)
    }
}

const bee = new Animal('Bee')
bee.speak()

const dog = new Dog('Toby')
dog.speak()

const cat = new Cat('Pearl')
cat.speak()