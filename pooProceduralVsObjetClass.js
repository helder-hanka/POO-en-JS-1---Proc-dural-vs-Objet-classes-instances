class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName () {
        console.log(`I am ${this.name}.`)
    }
    tellMyage () {
        console.log(`I am ${this.age} years old`)
    }
}

const john = new Person ('Jhon', '40');
john.tellMyName()
john.tellMyage()