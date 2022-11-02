/*  Type conversion (explicit conversion)   */

let num=6
console.log(num,typeof num);   //  6 number
// number to string
let num1=String(6)
console.log(num,typeof num1);  // 6 string
//  string to number
let num2=Number("134")
console.log(num,typeof num2)  // 6 number
//  number to boolean\
console.log(Boolean(7));     // true
console.log(Boolean(0));    // false



/*     Type coercion : based on user requirement it convert it for user.*/
let x
console.log(x,typeof x);   // undefined undefined
x=8
console.log(x,typeof x);    // 8 number
x=x + ""
console.log(x,typeof x);   // 8 string
// x= +x + 2
// console.log(x,typeof x);  // 10 number
// x=x+2
// console.log(x,typeof x);   //  82 string
x=x-2
console.log(x,typeof x); //  6 number 
x=!x
console.log(x,typeof x);   //  false boolean


let x1="123 akansha"
console.log(x1,typeof x1);   //  123 akansha string
let x11=Number("123 akansha")
console.log(x11,typeof x11);  //  NaN  number
let x2=parseInt("123 akansha")
console.log(x2,typeof x2)  //  123 number
