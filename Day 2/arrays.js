/*
An array is a data structure that represents an ordered collection of values

In most languages, arrays are fixed in size
In JS, arrays function like lists which are expandable

Arrays are indexed starting at 0 up to array.length-1

A single array in JS can store a variety of datatypes but normally they are used to store one type of data

*/

let colors = ['red','green','blue'];
let numbers = [4,8,15,16,23,42];

//Accessing values from an array
console.log(colors[2]);//prints blue at index 2
console.log(numbers[5]);//prints 42

console.log(colors.length);//3
console.log(numbers.length);//6

/*
 commons array methods
 1.push(item): adds new value to end of array
 2.Unshift(item): adds new value to beginning or array
 3. pop(): removes last value in an array and returns removed value
 4. shift(): removes value at beginning of array and returns removed value

 5. splice(startIndex, deleteCount): removes the specified number of values from an array starting at a specified index and returns an array of the removed values
 6. slice(start,end): returns a copy of a portion of the array (start index to end index)
 7. concat(array1,array2,...): returns new array containing values of arrays passed in as arguments
 8. join(separator): returns a string that represents the array values, separated by the specified separator
    ->colors.join(', ') "red, green, blue" in a single string
9.indexOf(item,start): returns the index of the first occurrence of the specified item starting from the specified index    returns -1 if item not found
10. lastIndexOf(item, start): returns the index of the last occurrence of the specified item in the array starting from the specified index      returns -1 if item not found

*/

colors.push('purple'); //add 'purple' to right end of array
console.log(colors);
console.log(colors.pop());//purple //removes entry at end of array
console.log(colors);

colors.unshift('pink');
console.log(colors);

console.log(colors.shift());
console.log(colors);

console.log(numbers.splice(1,2));
console.log(numbers);
