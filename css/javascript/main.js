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
console.log(`${demo} ans ${demo2} is a +ve number`)