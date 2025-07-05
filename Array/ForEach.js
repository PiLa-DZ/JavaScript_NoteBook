let arr_1 = ['User_1', 'User_2', 'User_3', 'User_4']
arr_1.forEach(e => console.log(e))
/* Output:
User_1
User_2
User_3
User_4
*/

arr_1.forEach((e, i) => console.log(e, i))
/* Output:
User_1 0
User_2 1
User_3 2
User_4 3
*/
