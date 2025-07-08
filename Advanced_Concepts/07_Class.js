// ------------------------------------------------------------
class Person {
	constructor(fName, lName){
		this.firstName = fName
		this.lastName  = lName
	}

	sayMyName() {
		return `*** ${this.firstName} ${this.lastName} ***`
	}
}

const person1 = new Person('Black', 'Pink')

console.log(person1.sayMyName()) // *** Black Pink ***

// ------------------------------------------------------------
class SuperHero extends Person {
	constructor(fName, lName) {
		super(fName, lName)
		this.isSuperHero = true
	}
}
const person2 = new SuperHero('Batman', 'Superman')
console.log(person2.sayMyName()) // *** Batman Superman ***
