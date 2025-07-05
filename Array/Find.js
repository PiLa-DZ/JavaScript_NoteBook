let arr_1 = [1, 2, 3, 4, 5, 6]

let res_1 = arr_1.find(e => e > 3) // 4

let res_2 = arr_1.find((e, i) => e > 3 && i > 3) // 5
