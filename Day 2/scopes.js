//Variable scope refers to the part of the program in which a variable is visible and can be accessed 

//3 scopes in JS
//global scope
//  -a variable defined outside of any function or block of code
// - accessible from the global level or inside functions and blocks
//function scope
// -a variable defined with a function
//  -accessible only with that function and blocks within the function
//block scope (added in ES6)
//  -a variable defined within a block of code (loops, ifs, etc.)
//  -only accessible within that block

//declaration keywords:
//var -> global scope or function scope (No block scope)
//let -> global scope, function , or block
//const -> global, function , or block


//****In general it is recommended to use const whenever possible, because it helps to prevent accidental reassignments and can make the code more predictable in nature

//use let when you need to reassign a variable

//try to avoid using var in all cases; can lead to confusing behavior without block scope



var a = 100;//global scoped
let b = 111;//global scoped

if(true){
    var x = 10;//global scoped
    let y = 13; //block scoped; only accessible within the block
    console.log(a);//100
    console.log(y);//13
    console.log(b);//111
}

console.log(x); //10


function myFunction(){
    console.log(x); //10
    console.log(a); //100

    var z = -123;//function scoped

    console.log(z);// -123

    if (true){
        console.log(z); //-123

        var w = 'a string';//a string
    }
}

myFunction();

//console.log(z); //undefined, since z was defined within the function