function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName  = lastName
}

Person.prototype.getFullName = function () {
	return `*** ${this.firstName} ${this.lastName} ***`
}

function SuperHero(fName, lName) {
	Person.call(this, fName, lName)
	this.isSuperHero = true
}
SuperHero.prototype = Object.create(Person.prototype)

const person1 = new SuperHero('Batman', 'Superman')

console.log(person1.getFullName()) // *** Batman Superman ***
