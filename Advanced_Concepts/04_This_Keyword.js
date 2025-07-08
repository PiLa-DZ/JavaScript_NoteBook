// Implicit binding -------------------------------
const obj = {
	name: 'Batman',
	sayMyName: function () {
		console.log(`Your Name is ${this.name}`)
	}
}
obj.sayMyName() // Your Name is Batman

// Explicit binding -------------------------------
function sayMyName() {
	console.log(`Your Name is ${this.name}`)
}
sayMyName.call(obj) // Your Name is Batman

// New binding ------------------------------------
function Person(name) {
	this.name = name
}
const p1 = new Person('SuperMan')
const p2 = new Person('Batman')
console.log(p1.name) // SuperMan
console.log(p2.name) // Batman

// Default binding --------------------------------
//const name = 'GlobalThis'
globalThis.name = 'GlobalThis'
sayMyName() // GlobalThis
