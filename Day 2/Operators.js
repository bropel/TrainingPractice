//An operator is a symbol that is used to operate on a value or values

//artihmetic operators
// + - addition
// - - subtraction
// * - multiplication
// / - division
// % - modulus
// ** - exponents

console.log(5 % 2); //1
//% 2 commonly used to check if a number is odd (1) or even (2)
console.log(2**3); //8


//Assignment operators
//used to assign values to a variable

// = 
let x = 10;
console.log(x); //10

// += 
// add a number to a variable
x += 2;
console.log(x); //12

// -=
// *=
// /=
// %=
// **=
//these all follow the same logic as their basic arithmetic counterparts but reassign the variable


//comparison operators
//used to compare 2 values; evaluates to a boolean datatype

// >
// >=
// <
// <=
// == ; equal to
// === ; also means equal to; without type coercion -> strict equality
console.log('5' === 5) //false; the string does not equal the number; must be the same type
// != ; not equal to
// !==; similar to ===; without type coercion
console.log('5' !== 5); //true


//Logical Operators
//used to evaluate two booleans against each other
// && (and)
// || (or)

// ! (not)
//used to flip the value of a boolean

let isPrecipitating = true;
let temperature = -5; //celsius

//and example
if (isPrecipitating && temperature <= 0) {
    console.log("It is snowing");
} else if (isPrecipitating && temperature > 0) {
    console.log("It is raining");
}

//or example
let day = 'Tuesday';
if (day === 'Saturday' || day === 'Sunday'){
    console.log("It is the weekend!");
} else {
    console.log("It is a weekday");
}

