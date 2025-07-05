// Return (Elements by length) -----------------------------
let arr_1 = ['ABCDEFG', 'ABCDEF', 'ABCDE', 'ABCD']
let res_1 = arr_1.filter(e => e.length < 5) // [ 'ABCD' ]

// Return (Elements by index) ------------------------------
let arr_2 = ['User_0', 'User_1', 'User_2', 'User_3', 'User_4', 'User_5']
let res_2 = arr_2.filter((e, i) => i > 0 && i < 4) // [ 'User_1', 'User_2', 'User_3' ]

// CallBack Function ---------------------------------------
let fun_3 = (element, index) => {
	return element > index
}
// index     0  1   2  3   4  5   6  7  8  9
let arr_3 = [0, 1, 12, 3, 14, 5, 16, 7, 8, 9]
let res_3 = arr_3.filter(fun_3) // [ 12, 14, 16 ]

// Retrun if Element == true -------------------------------
let arr_4 = [false, true, false, true, false, true, false] 
let res_4 = arr_4.filter(e => e) // [ true, true, true ]
