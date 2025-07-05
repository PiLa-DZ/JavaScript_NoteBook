// Example 1 ---------------------------------------------------
let arr_1 = [1, 2, 3]
let initialValue = 10
let res_1 = arr_1.reduce((accumulator, currentValue) => {
	return accumulator - currentValue
}, initialValue)
console.log(res_1) // 4
// Note: 10 - 1 - 2 - 3 = 4

// Example 2 ---------------------------------------------------
let arr_2 = [1, 2, 3]
let res_2 = arr_2.reduce((Total, elm) => Total + elm, 0)
console.log(res_2) // 6
// Note: 1 + 2 + 3 = 6
