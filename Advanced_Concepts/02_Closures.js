function fun1() {
	let cont = 0
	return function () {
		cont++
		console.log(cont)
	}
}

const fun2 = fun1()
fun2() // 1
fun2() // 2


