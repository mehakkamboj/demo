// DOM -> Document  Object Model

console.dir(document)
console.log(document.URL)
console.log(document.all)

const myHeading = document.all[4];
document.all[4].textContent = "Welcome to DOM"
console.log(myHeading)
console.log(document.all[18]);

// IDENTIFIER METHOD
// 1. getElementById()
// const myHeader = document.getElementById("header-title")
// console.log(myHeader);

// 2.getElementsByClassName
const listItems = document.getElementsByClassName('list-group-item')
console.log(listItems);

//3. getElementsByTagName
const myForm = document.getElementsByTagName('Form')
console.log(myForm);

// 4. querySelector(id/className/tagName)
const myHeader = document.querySelector('#header-title')
console.log(myHeader);

console.log(document.querySelector('.list-group-item')); 

// 5. querySelectorAll
console.log(document.querySelectorAll('.list-group-item'));
