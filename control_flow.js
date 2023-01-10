/*

    Control flow is all about controlling what gets executed when a certain condition is met/not met
    This is ultimately how decisions are made in applications

    -If, else if, else
    -switch
    -for loops
    -while loops
    -do-while loops

*/

//If statement used to execute a block of code if a certain condition is true

let x = 10;

if (x>5){
    console.log('x is greater than 5');
}

//we can use an else block to specify an alternative block of code if the condition returns false

let y = 4;

if (y>5){
    console.log('y is greater than 5');
} else {
    console.log('y is not greater than 5');
}

//we can use multiple else..if statements to specify additional conditions to be checked

let z = 'Monday';

if (z==='Sunday'){
    console.log('First day of the week');
} else if (z === 'Monday'){
    console.log('Second day of the week');
} else if (z === 'Tuesday'){
    console.log('Third day of the week');
} else if (z === 'Wednesday'){
    console.log('Fourth day of the week');
} else if (z === 'Thursday'){
    console.log('Fifth day of the week');
} else if (z === 'Friday'){
    console.log('Sixth day of the week');
} else if (z === 'Saturday'){
    console.log('Seventh day of the week');
} else {
    console.log('Invalid day')
}

//switch statements are used to execute a block of code based on the value of a variable
//you can specify multiple casees to be checked and specify different actions to be taken

switch (z) {
    case 'Sunday':
        console.log('First day of the week');
        break;
    case 'Monday':
        console.log('Second day of the week');
        break;
    default:
        console.log('Invalid day');
}

//Loops

//Loops are used in programming to execute a block of code multiple times

//for loop is used to execute a block, specifying 3 parts
//for (initialization; condition; update){...}
//1. initialization executed at the beginning of the loop once, used to initialize a counter variable
//2. condition: evaluated at the beginning of each iteration. If true, block is executed; if false, loop is terminated
//3. udpate: executed at end of each iterations. Used to update the counter variable

for (let i = 0; i < 5; i++){
    console.log(i);
}
//print number 0-4

//A while loop only has a condition. while the condition is true the block will execute until false
//be careful of infinite loops

let a = 0;

while (a< 10){
    console.log(a);
    a++;
}

//a do-while loop similar to while, except a do-while always executes at least once regardless of condition

let b = 0;
do {
    console.log(b);
    b++;
} while (b > 7);