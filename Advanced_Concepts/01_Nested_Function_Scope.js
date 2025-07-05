let a = 10
function fun1() {
	let b = 20
	function fun2() {
		let c = 30
		console.log(a, b, c) // 10 20 30
	}
	fun2()
}
fun1()
