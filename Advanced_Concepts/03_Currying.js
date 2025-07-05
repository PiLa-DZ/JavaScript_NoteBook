function fun(a) {
	return function (b) {
		return function (c) {
			return a + b + c
		}
	}
}

let sum = fun(1)(2)(3)
console.log(sum) // 6

let a = fun(1)
let b =   a(2)
let c =   b(3)
console.log(c) // 6
