// Objects: It represemt the real world in virtual world.

// Objectr literal
let input='name'
let alien = { name:'akansha', tech:'JS','work experience':4}
console.log(alien)    //  { name: 'akansha', tech: 'JS' }
console.log(typeof alien)  // object
console.log(alien.name)   //  akansha
console.log(alien['tech'])  //  JS
console.log(alien[input])  //  akansha
console.log(alien.input)   //  undefined


// complex objects : having an object inside an object
let alien1 = { 
    name:'akansha',
    tech:'JS',
    laptop:{
          cpu:'17', ram:4,brand1:'Asus' 
    }
}
console.log(alien1.laptop)   //  { cpu: '17', ram: 4, brand: 'Asus' }
console.log(alien1.laptop.brand1)    // Asus
console.log(alien1.laptop.brand1.length)   //   4

// NULLISH COALESCING OPERATOR is denoted (??) double question mark.
console.log(alien1.laptop.brand)  // undefined
// console.log(alien1.laptop.brand.length)  // error
console.log(alien1.laptop.brand?.length) // undefined
  
// delete the property
delete alien1.laptop
console.log(alien1);  // { name: 'akansha', tech: 'JS' }


// 'for in' loop is used to print the values one by one.
let alien2 = { 
    name:'akansha',
    tech:'JS',
    laptop:{
          cpu:'17', ram:4,brand1:'Asus' 
    }
}
for(let key in alien  )  
{
    console.log(key, alien[key])
    console.log(key, alien.laptop[key])
}