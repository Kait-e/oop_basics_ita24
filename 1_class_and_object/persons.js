const Person = require(`./person.js`)
const bob = new Person(`Bob`)
const brian = new Person(`Brian`)
const alice = new Person(`Alice`)

const persons = [bob, brian, alice]

while (bob.getAge() < 15) {
    bob.becomeOlder()
}

for (let i = 0; i < 20; i++) {
    brian.becomeOlder()
}

while (bob.getWeight() < 200) {
    bob.eat()
}

while (bob.getHeight() < 1.8) {
    bob.grow()
}

persons.forEach(person => {
    if (person.isAdult()) {
        console.log(person.getName() + ` is adult`)
    } else {
        console.log(person.getName() + ` is not adult`)
    }
})

persons.forEach(person => {
    console.log(person.printPerson())
}) 


