function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName  = lastName
}

const person1 = new Person('red', 'blue')
const person2 = new Person('black', 'pink')

Person.prototype.getFullName = function () {
	return `*** ${this.firstName} ${this.lastName} ***`
}

console.log(person1.getFullName()) // *** red blue ***
console.log(person2.getFullName()) // *** black pink ***
