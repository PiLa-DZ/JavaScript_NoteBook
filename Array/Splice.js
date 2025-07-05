// Note: array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

// Removing Elements. --------------------------------------
let arr_1 = ['item1', 'item2', 'item3', 'item4']
let res_1 = arr_1.splice(1, 2)
console.log(arr_1) // [ 'item1', 'item4' ]
console.log(res_1) // [ 'item2', 'item3' ]

// Adding Elements. --------------------------------------
let arr_2 = ['item1', 'item2', 'item3', 'item4']
let res_2 = arr_2.splice(1, 0, 'item5', 'item6')
console.log(arr_2) // [ 'item1', 'item5', 'item6', 'item2', 'item3', 'item4' ]
console.log(res_2) // []

// Replacing elements. --------------------------------------
let arr_3 = ['item1', 'item2', 'item3', 'item4']
let res_3 = arr_3.splice(1, 1, 'item5', 'item6')
console.log(arr_3) // [ 'item1', 'item5', 'item6', 'item3', 'item4' ]
console.log(res_3) // [ 'item2' ]
