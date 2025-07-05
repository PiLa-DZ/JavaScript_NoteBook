// Note: array1.concat(value1, value2, ..., valueN)

let arr_1 = [1, 2];
let arr_2 = [3, 4];
let arr_3 = [5, 6];

let res_1 = arr_1.concat(arr_2)              // [ 1, 2, 3, 4 ]
let res_2 = arr_1.concat(arr_2, arr_3, 8, 9) // [ 1, 2, 3, 4, 5, 6, 8, 9 ]
