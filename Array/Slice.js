// Note: array.slice(start, end)

let arr = ['item1', 'item2', 'item3', 'item4']

let res_1 = arr.slice(1, 3) // [ 'item2', 'item3' ]

let res_2 = arr.slice(1)    // [ 'item2', 'item3', 'item4' ]

let res_3 = arr.slice(-2)   // [ 'item3', 'item4' ]

let res_4 = arr.slice()     // [ 'item1', 'item2', 'item3', 'item4' ]
