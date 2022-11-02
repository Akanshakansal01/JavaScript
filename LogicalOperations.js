// LOGICAL OPERATOR
// there aree three logical operators: 
// 1. AND: true when both conditions is true
// 2. OR: true when either one of the condition is true
// 3. NOT: it reverse the  result if it is true it become false and vice-versa  

let x=7,y=8,z=9
// let result=x>y   
let result= x<y && x<z
console.log(result)    // true
 let result1= x<y  || x<z
console.log(result1)   // true
let result2=!x
let result3=result2
console.log(result2,result3)    //  false   true
