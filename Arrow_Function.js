let greet=function(user)
{
    console.log("hey "+user);
    return 1;
}
console.log(greet("Akansha"))
// this function can be written as using arrow function
let greet1=(user) =>
{
    console.log("hey "+user);
    return 1;
}
console.log(greet("Akansha"));


// add two number.
let add=(num1,num2) => num1 + num2;
result=add(5,6);
console.log(result)

let add1 = function(n1,n2)
{
  n1 = Math.abs(n1)
  n2 = Math.abs(n2)
    return n1 +  n2;
}
 let sum = add1(5,-6)
 console.log(sum)


 