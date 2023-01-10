//type coercion is the automatic conversion of one type to another when performing some operation

console.log('5' == 5); //true
console.log('5' + 123); //5123; a number added to the string is converted into to a string and then concatenated on the end of the first string

console.log(true > -1); //true; true is a value of 1 when converted to a number, false is 0

console.log(false == 0); //true
console.log(false === 0); //false

//Using a non-boolean value in a boolean context
//truthy and falsy
//everything is truthy except for 0, null, undefined, NaN, ''(empty string)
if (10){
    console.log('10 is considered a true value');
}

if (0) {
    console.log('testing');//false; 0 is considered a false value
}

//Type conversion
//we can convert between different types explicitly

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
//etc. with all falsy values

console.log(Number(true)); //1
console.log(Number('15')); //15

console.log(String(15)); //'15'

let x = 'test';
console.log(typeof(x)); //string