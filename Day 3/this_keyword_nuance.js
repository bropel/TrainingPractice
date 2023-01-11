/*
    The 'this' keyword behaves differently in anon funcs and arrow funcs because of the way each type of func receives its meaning of 'this'

    In anon funcs, 'this' refers to the object that the function is invoked on

    In arros funcs, 'this' is inherited from the 'this' in the surrounding scope; 'lexically scoped' - it is determined by the location where the func is defined

*/

const person = {
    "firstName": 'Bryce',
    "lastName": 'Opel',
    "greet": function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
    }

}
//this === person inside the anon func when executed
person.greet(); //prints fine

const person2 = {
    "firstName": 'John',
    "lastName": 'Doe',
    "greet": () => {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
    //'this' refers to the global object in arrow funcs, not person2 or the object it is called on
    //it is lexically scoped to the global scope inside this arrow func
}

person2.greet(); //global object; undefined undefined
//an arrow func inside another func will give 'this' function scope

const person3 = {
    "firstName": 'Pablo',
    "lastName": 'De La Cruz'
}

person3.greet = person.greet;

person3.greet();