//  function
 function greet()
 {
    console.log("HELLO WORLD");
 }
 greet()
 console.log("Hey")
 greet()
 greet()

//  how a function return value
function greet1()
 {
    return "HELLO Akansha"
 }
 let str=greet1()
 console.log(str);


 function greet2(user)
 {
    return `HELLO ${user}!!`  
 }
 let user='Akansha';
 let str1=greet2(user)
 console.log(str1);
 

//  function expression
// expression: simple mean of expression is that first evaluate and then assigned a value to a particular variable.
//  Javascript treat functions as an object.

let add=function(num1,num2)
        {
            return num1+num2;
        }
result=add(5,6);
console.log(result)

 