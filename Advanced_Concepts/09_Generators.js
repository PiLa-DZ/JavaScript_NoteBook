function* generator() {
	yield 'Hello'
	yield 'World'
}

const genObj = generator()

for (const word of generator()) console.log(word)
for (const word of genObj) console.log(word)
