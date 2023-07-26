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

// document.getElementById('item-one').addEventListener('click', ()=> {
//     console.log('My Item button was clicked');
// })

// SUBMIT BUTTON --- always reload the page when clicked (default property by html)
// document.getElementById('submitBtn').addEventListener('click', (T)=>{
//     T.preventDefault()
//     console.log('My submit botton was clicked');
// })

// document.getElementById("text-input").addEventListener('mouseenter', ()=>{
//     console.log('Cursor entered the elemnet');
// })
// document.getElementById("text-input").addEventListener('mouseleave', ()=>{
//     console.log('Cursor leave the elemnet');
// })

// document.getElementById('item-one').addEventListener('click', ()=>{
//     document.getElementById('item-two').style.backgroundColor = 'yellow'})

//KeyBoard Events
// document.getElementById("text-input").addEventListener('copy', ()=>{
//         console.log('text was copied');
// })
// document.getElementById("text-input").addEventListener('paste', ()=>{
//         console.log('text was paste');
// })
// document.getElementById("text-input").addEventListener('cut', ()=>{
//         console.log('text was cut');
// })
// document.getElementById("text-input").addEventListener('keydown', ()=>{
//         console.log(' key was down');
// })
// document.getElementById("text-input").addEventListener('keypress', ()=>{
//         console.log('key was pressed');
// })
// document.getElementById("text-input").addEventListener('keypress', (e)=>{  // this will print the run time value in console...
//         console.log(e.target.value)
// })
// this will print the value written in text box after run time
// document.getElementById('submitBtn').addEventListener('click',(e) => {
//     e.preventDefault()
//      console.log(document.getElementById('text-input').value)
// })



// Javascrippt is timebound langauge as it is interpreted it compile code line by line but if there is delay on any line to compile then it will
// run next line... this can be explained with example given below...
// as there is delay of 3s so it compile next line and then comeback again after the delay...
// setTimeout( ()=> {
//     console.log('Callback was excellent..');
// },3000)
// console.log('callback after excellent...');




