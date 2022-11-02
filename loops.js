//  types of loops are:  for,while,do-while loop
//  we use loop if we want to perform some operation repeatedly.
// while and do-while difference :-   'while loop' first check the conditions and then execute the block , while 'do-while loop' first execute the block and then check the conditions.
// syntax: initialize,condition,increment


// WHILE LOOP: 
let i=1;
while(i<=5)
{
    console.log("HI...........  ",i);
    i++;   // post increment
}
console.log(i);

// do while
let j=10
do{
    console.log("HELLO",j)
    j++;
}
while(j<=5); 
  
// FOR LOOP
for(let i1=5;i1>0;i1--)
{
    console.log("HEY....",i1)
}

// nested loop
for(let k=5;k>0;k--)
{
    console.log("HEY....",k);
    for(let k1=1;k1<=5;k1++)
        console.log("hello",k1)
}


//  for loop is best when we know the starting and ending point
//  while loop is best when we don't know the ending point
//  reverse of a number
let num=123456
let rev=0;
while(num>0)
{
        rev=rev*10+ num%10;
        num=parseInt(num/10)
        
}
console.log(rev);