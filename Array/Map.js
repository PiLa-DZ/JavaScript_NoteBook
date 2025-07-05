// ----------------------------------------------------------
// Return (Element) * 2 -------------------------------------
let arr_1 = [1, 2, 3]
let arr_2 = arr_1.map(e => e * 2) // [2, 4, 6]

// Return (User Name) ---------------------------------------
let arr_3 = [
	{name: 'A1', age: 25},
	{name: 'A2', age: 26},
	{name: 'A3', age: 27}
]
let arr_4 = arr_3.map(e => e.name) // [ 'A1', 'A2', 'A3' ]

// Return (index) -------------------------------------------
let arr_5 = [1, 2, 3]
let arr_6 = arr_5.map((e, i) => i) // [ 0, 1, 2 ]

// Convert to number ----------------------------------------
let arr_7 = ['1', '2', '3'].map(Number) // [ 1, 2, 3 ]

// CallBack Function ----------------------------------------
let callBack = (element, index) => {
	return {id: index, name: element}
}
let arr_8 = ['User_1', 'User_2', 'User_3']
let arr_9 = arr_8.map(callBack)
/* Output: console.log(arr_9)
[
  { id: 0, name: 'User_1' },
  { id: 1, name: 'User_2' },
  { id: 2, name: 'User_3' }
]
*/
