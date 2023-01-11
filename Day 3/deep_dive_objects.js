//to create objects in JS, we do not need to use "new" keyword, though you will encounter this

//the easiest way to create an object is to use object literals {}
const myObj = {} //stored in memory

//you can add properties to an objecct at any time, not restricted to a defined blueprint

myObj.name = 'Bryce';

myObj['age'] = 27;//property is added for the first time
myObj.age = 28; //property is modified to a new value

console.log(myObj);

//you can create an object with initial properties

const myObj2 = {
    firstName: 'Bryce', //firstName is a key
    'lastName': 'Opel' //lastName is a key (string quotes are optional)
};

console.log(myObj2);

/*
    Function constructors

    A function constructor is a function that is used to create objects that we would like to share similar characteristics more easily. The function constructor is used to set the properties' values for that object

    Naming Convention: Capitalize (PascalCase)
*/

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //this.greet = function(){
      //  console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
        //this greet functions is a waste of memory because each person object has a copy of this function
    }

    //this keyword refers to the object we are creating


//functions are also objects, which means we can modify/add properties to a function
//there is a prototype property that belongs to each constructor function that is also an object itself. All objects created from the constructor function inherit all of the properties from the .prototype object

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
}

//JS makes use of prototypal inheritance

const person1 = new Person('G', 'smith', 69);
const person2 = new Person('S', 'smith', 21);
console.log(person1);
console.log(person2);

person1.greet();
person2.greet();

//Manual inheritance

const anObject = {
    greet: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
}

const p1 = {
    firstName: 'Test',
    lastName: 'Testy'
}

// __proto__ is a property of an object that refers to the object's prototype (think of as parent)
p1.__proto__ = anObject;//p1 is now inheriting from anObject

p1.greet();

//  Classes in JS

//Classes were added in ES6. Provides a cleaner and more easily understandable format for creating object 'blueprint' rather than utilizing function constructors
//classes in JS are not really 'true classes'. they are more like syntactic sugar (frill; looks nice)

//classes have a constructor block and any functions that we would like to have associated with that object

class Car {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    //Methods
    drive(){
        console.log(`Driving the ${this.year} ${this.make} ${this.model}.`);
    }

}
const car1 = new Car('Ford', 'Mustang', 2022);
car1.drive();