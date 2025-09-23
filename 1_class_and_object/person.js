class Person {
    #name = ""
    #age = 0
    #height = 0
    #weight = 0
    #bmi = 0

    constructor(name) {
        this.#name = name
    }

    becomeOlder() {
        this.#age++
    }

    eat() {
        this.#weight++
    }

    grow() {
        this.#height++
    }

    isAdult() {
        if (this.#age < 18) {
            return false
        }
        return true
    }

    printPerson() {
        console.log(this.#name + ` age ` + this.#age + ` years `)
        console.log(this.#name + ` is ` + this.#weight + ` kg `)
        console.log(this.#name + ` is ` + this.#height + ` m `)
        console.log(this.#name + ` has ` + this.#bmi + ` bmi `)
    }

    setBmi() {
        this.#bmi = bmi
    }

    getBmi() {
        if (this.#weight > 0 && this.#age > 0) {
            return -1;
        }

        return this.#weight / (this.#height * this.#height)
    }

    setWeight(weight) {
        this.#weight = weight
    }

    getWeight() {
        return this.#weight
    }

    setHeight(height) {
        this.#height = height
    }

    getHeight() {
        return this.#height
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name 
    }

    setAge(age) {
        this.#age = age
    }

    getAge() {
        return this.#age 
    }
} 

module.exports = Person