// --> not completely oops 
// ---> any thing and everything we see in javascript is objects
// ----->interpreted language
// ECMA IS RESPONSIBLE for providing syntax to java script 
// it  has two version --1. ES5     2. ES6
// print value in the console
// 1. console.log
// 2. console.warn -- shows output as an warning in yellow color
// 3. console.error-- shows output as an error in red color
console.log("hemlooo")
console.warn("hemlooo")
console.error("hemlooo")
// Data types 
// 1. primitive data types(PDTs):-
// i. undefined -- the variable which does not exist
// ii. null -- its value is object when we check data type
// iii. boolean
// iv. string
// v. number
// QUES-- DIFFERNCE B/W NULL AND UNDEFINED DATA TYPE 
// null means the variable exist but the content of the variable does 
// not exist while the other hand in undefined the variable does not exist
variable_one = null
console.log(typeof(variable_one))


// CONDITIONAL STATEMENTS

// ES5 SYNTAX
demo = 10
if ( demo >= 0)
{
    console.log(demo + "is a +ve no.")
}
else
{
    console.log(demo + "is a -ve no")
}

// ES6 SYNTAX
// CONDITION ? TRUE : FALSE -- this can be use if our code is one line statement
demo = 10
demo >=0 ? console.log("+ve no") : console.log("-ve no")

// string can be written in three ways 1.''  2. ""  3. ``
demo2 = 100 
console.log(`${demo} and ${demo2} is a +ve number`)

// KEYWORD in javascript
// 1. let -- private keyword can be acess within a defined scope
// 2. var -- public once defined can be acessed anywhere 
// 3. const -- it should be declared as well as defined, and value can't be changed once defined
flag = true
if (flag) {
    var a = 100
}
else{
    b = 200
}
console.log(a);

// LOOPS
// 1. for loop
// for (let i = 0; i <= 7; i++) {
//     console.log(i);    
// }
// 2. while loop
// let i = 0;
// while ( i <= 4) {
//     console.log(i);
//     i++;
// }

// NON PREMITIVE DATATYPE (Non-PDTs)
// 1. Arrays
// let arr = [10, 20, 30, 40, 50]
// let ar = [];
// console.log(arr);
// let arrobj = new Array(10);
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
//     }
// console.log(typeof(arrobj));
// console.log(typeof(ar));
// console.log(typeof(arr));

let arr1 = [10, 20 , 30, 40, 50];
let arr2 = [...arr1] // (...)--> spread operator used to copy value from one array to another
arr2.push(60)
console.log(arr1);
console.log(arr2);

let ab = arr1.shift() // removing element from start
console.log(arr1);

arr1.unshift(10) // insert element at start
console.log(arr1);

let arr3 = arr1.concat(arr2) // concatenation of two or more array
console.log(arr3);