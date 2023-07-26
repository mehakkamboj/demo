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
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems);

//3. getElementsByTagName
// const myForm = document.getElementsByTagName('Form')
// console.log(myForm);

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('#header-title')
// console.log(myHeader);

// console.log(document.querySelector('.list-group-item')); 

// 5. querySelectorAll
// console.log(document.querySelectorAll('.list-group-item'));

//  DOM MANIPULATION METHODS
// const heading = document.querySelector('#header-title')

// 1. TextContent --> changes text in b/w (opening nad closing tag) of the <> and </> of the Element
// heading.textContent = "Welcome to DOM"
// document.querySelector('#my-div').textContent = "<P>Hemloooo</P>"
// document.querySelector('#my-div').innerHTML = "<p>Hemloooo</p>"

// 2. InnerHTML -->  adds a child to given element
//heading.innerHTML = "<h2>Welcome to Dom</h2>"

// CSS with Javascript (.style)
// const secondHeading = document.querySelector('#second-heading')
// secondHeading.style.backgroundColor = 'purple'
// secondHeading.style.color = 'white'

// JS FUNCTION -
// Syntax-- setTimeOut(callfn, timeoutdelay(in ms))
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welocme to DOM</h2>"
// }, 5000)

// const listItems = document.getElementsByClassName('list-group-item')
// for (let i = 0; i < listItems.length; i++) 
// {
//     if (i % 2 != 0) 
//     {
//         listItems[i].style.backgroundColor = '#f4f4f4'
//     }
// }
//-- another method using array methods
// const listArray = []
// for (let i = 0; i < listItems.length; i++) {
//     listArray.push(listItems[i])
// }
// listArray.forEach((item, index)=>  {
//     if (index %  2 != 0) {
//         listArray[index].style.backgroundColor = '#f4f4f4'
//     }
// })

// EVENTS IN DOM

const myBtn = document.getElementById('btn')
// Element.addEventListner( eventName, () => {})
// Element.addEventListener(eventName, functionName)

// ES5 synatx
// const clickEventHandler = function() {
//     console.log('My Button was Clicked!');
// }

// 1. CLICK EVENT
// myBtn.addEventListener('dblclick', () =>{
//     console.log('My Button was Clicked!');
// })

// 2. DOUBLE CLICK EVENT
// myBtn.addEventListener('dblclick', () =>{
//     console.log('My Button was Clicked!');
// })


// myBtn.addEventListener('click',(clickEventHandler))
// different evennts-- copy, cut, keyup, keydown, keypress, click, doubleClick(dbl)

document.getElementById('item-one').addEventListener('click', ()=> {
    console.log('My Item button was clicked');
})

// SUBMIT BUTTON --- always reload the page when clicked (default property by html)
document.getElementById('submitBtn').addEventListener('click', ()=>{
    console.log('My submit botton was clicked');
})

