/*JavaScript Object Notation

JSON is specially formatted text used to send data between different languages
*/


//fs is a built-in node.js module
const fs = require('fs'); //require is a functino for node.js that allows us to import modules whether they are built-in node modules, npm packages that we install from the internet, or our own local modules

const obj = {
    firstName: 'Bryce',
    lastName: 'Opel'
};

const obj2 = {
    firstName: 'John',
    lastName: 'Doe'
}

const array = [obj, obj2];





const jsonString = JSON.stringify(array);
console.log(jsonString);

fs.writeFileSync('./jsondata.json', jsonString);//write JSON to a file
const jsonReadFromFile = fs.readFileSync('./jsondata.json', 'utf-8'); //Read JSON from a file

const obj3 = JSON.parse(jsonReadFromFile);//converts JSON string back into an object
console.log(typeof(obj3));//object
console.log(obj3);