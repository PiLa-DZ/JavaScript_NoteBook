// Example 1 ---------------------------------------------
let arr_1 = [40, 100, 1, 5, 25, 10];
arr_1.sort() // [ 1, 10, 100, 25, 40, 5 ]

// Example 2 ---------------------------------------------
let arr_2 = [40, 100, 1, 5, 25, 10];
arr_2.sort((a, b) => a - b) // [ 1, 5, 10, 25, 40, 100 ]

// Example 3 ---------------------------------------------
let arr_3 = [40, 100, 1, 5, 25, 10];
arr_3.sort((a, b) => b - a) // [ 100, 40, 25, 10, 5, 1 ]

// Example 4 ---------------------------------------------
let arr_4 = [
	{name: 'Batman', age: 33},
	{name: 'Spiderman', age: 20},
	{name: 'Superman', age: 25},
]
arr_4.sort((a, b) => a.age - b.age)
console.log(arr_4)
/* Output:
[
  { name: 'Spiderman', age: 20 },
  { name: 'Superman', age: 25 },
  { name: 'Batman', age: 33 }
]
*/
