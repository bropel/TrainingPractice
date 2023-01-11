//A function is a block of code that performs a specific task and can be reused multiple times in a program

//functions are often used to encapsulate a piece of logic or a set of related tasks, making it easier to understand and maintain large programs

//functions can take input values, called arguments, when the function is being called

//the input values are stored in variables with the function known as parameters

//function v Method
//- a method is a special function that belongs to an object


//Here we declare a function with a single parameter called name

function greet(name){
    console.log(`Hello, ${name}`);
}

greet("Greg");
greet("Bob");

//functions can also have a return value
//we can return a value from a function using a return keyword

function createGreetingMessage(name){
    return `Hello there ${name}!`;
}

let greeting = createGreetingMessage('John');
console.log(greeting);

/*

Types of functions in JS
1.Named functions
    - use function keyword
    - a function that has a name, specified when the function is defined
2.Anonymous functions
    -use function keyword
    -unnamed functions that can be assigned to a variable, passed as arguments, returned from other functions, etc.
3. Arrow functions
    - don't use function keyword
    - use shorthand syntax for defining a function
    -also unnamed functions
    -utilize => syntax
*/

function myNamedFunction(){

}

let anonymousFunction = function() {//this anon function is being stored in a variable

}

const z = function(){
    console.log('anonymous function');

}

z();

//if you don't use declare const, you can change z to not be a function at a later time
//anonymous functions can take arguments

let w = (param1,param2) => {
    return param1 + param2;
}

console.log(w(3,4));

function calculateRectangleArea(length = 0,width = 0){//=0 setting a default parameter
    return length * width;
}
console.log(calculateRectangleArea(4,5)); //4*5=20
console.log(calculateRectangleArea(undefined, 10));//length = 0, width = 10