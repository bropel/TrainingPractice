/*
**JavaScript datatypes

1. Number (primitive)

2. String (primitive)

3. Boolean (primitive) Represents true or false.
 Booleans are mainly used in the context of conditionals
  or loops. true represents a condition that is met, 
  false represents a condition that is not met

4. Null: The null datatype is used to represent a null/empty
value. It is often used to indicate that a variable has
no value

5. Undefined: The undefined datatype is used to represent a value
that has not been assigned yet to a newly declared variable
6. Object

**Variable declaration

1. var - the oldest keyword in JS; the original way of declaring
variables; no longer recommended for use because it does
not support block-scope

2. let - a newer keyword introduced in ES6(2015) that added
the ability for variables to be block-scoped

3. const - a newer keyword introduced in ES6 that added the ability
for constants and block-scope; Basically the constant
version of let



*/

let aNumber = 10; //semi-colons are optional in JS
let aNumber2 = 3.14;

let aString = "This is a string using double quotes"
let aString2 = 'This is a string using single quotes'
let aString3 = `This is a string using template literals. It is special because I can
do things like this: aNumber + aNumber2 = ${aNumber+aNumber2}`

console.log(aString3);

//Boolean datatype
let aBoolean = true;
let aBoolean2 = false;

if (aBoolean){
    console.log('aBoolean is true');
}
if (aBoolean2){
    console.log('aBoolean2 is true');
} else {
    console.log('aBoolean2 is false');
}

//null datatype
let x = 10;
console.log(x); //10
x = null;
console.log(x); //null

//undefined datatype
let y = undefined;
console.log(y); // undefined


//object datatype - most complex datatype in JS
//collections of key-value pairs

let person = {
    firstName: "Bryce",
    lastName: "Opel",
    age: 28,
    isRetired: false,
    greet: function(){
        console.log(`Hello World, my name is ${this.firstName} ${this.lastName}`)
    }
}

console.log(person.firstName);//Bryce
console.log(person['lastName']); //Opel

person.greet();//calling the greet function
