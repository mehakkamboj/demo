// CLIENT SERVER ARCHITECTURE

// client ----> server 
// 1.  one way communication( only client send request to server), 
// the communication starts by client sending request to server and server responds to client request
// i.e the communication never starts from server end
// 2. Server can reject the client request (this could be due to server faliure (500) or bad request from client(400-490))

// ANY HTTP REQUEST CONATIN Two major block 
// 1. REQUEST HEADER (contain meta data related to request body and request types)
// 2. REQUEST BODY (body containing any addition info to be added or removed)

// HTTP METHODS
// There are 4 methods out of which we can create a request
// 1. GET (READ ANY RESOURCE FROM SERVER)
// 2. POST ( ADD A NEW RESOURCE TO A SERVER)
// 3. PUT/ PATCH ( EDIT ANY EXISTING RESOURCE TO THE SERVER)
// 4. DELETE ( DELETE A SPECIFIC RESOURCE FROM THE SERVER)
// NOTE--> The request body conatins value like resource to be added, resource to be edited , resource to be deleted


//Response CODE
// 1. Informational responses (100 – 199)
// 2. Successful responses (200 – 299) --> when request is accepted it is given (code 200 mean okay if we get code 200 our req is accepted)
// 3. Redirection messages (300 – 399)
// 4. Client error responses (400 – 499)-->(bad request, unauthorized etc.)
// 5. Server error responses (500 – 599)-->(internal server error, gateway timout etc.)
// Class 2, 4, 5, are the most important class which is to be used

// XMLHttpRequest: readyState property
// VALUE |  STATE                | DESCRIPTION
//     0 |	UNSENT	             | Client has been created. open() not called yet.
//     1 |	OPENED	             | open() has been called.
//     2 |	HEADERS_RECEIVED	 | send() has been called, and headers and status are available.(additional step rarely used)
//     3 |	LOADING	Downloading; | responseText holds partial data.
//     4 |	DONE	             | The operation is complete.

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==-

//AJAX (asynchronous Javascript and XML)
// A technique to integrate an API to a FE application

// Step 1. -> Create an object of XMLHttpRequest()
const xhr = new XMLHttpRequest();  //Use XMLHttpRequest (XHR) objects to interact with servers   // will be executed 1st and a object xhr is created  and ready state will be 0
const url = 'https://api.github.com/users'
console.log(`First ready state --> ${xhr.readyState}`);
// READY STATE = 0

// Step 2. -> Open the portal of communication b/w client & server
xhr.open('GET', url)  // we call open function and two parameters are passed method and url
console.log(`Second ready state --> ${xhr.readyState}`);
// RAEDY STATE = 1
//ADDITIONAL step - set your request headers --> setRequestHeaders

// Step 3. -> Perform an action over request state change
// we use onreadystatechange  act as callback which waits for callback from server and this will automatically calls the send() 
// and a status is fromed along with response text function and send the request
xhr.onreadystatechange = () => {
    // in this ready state will change from 2 -> 3 -> 4.
    // after readyState we chechk the response of the server is 200 or not if yes we get a response from server in from of
    // RESPONSETEXT (which returns a response as a text)
    console.log(`Remaining ready state --> ${xhr.readyState}`);
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Send the request    
        const jsonRes = xhr.responseText
        const res = JSON.parse(jsonRes)

        // using DOM to write in html 
        const userImg = document.createElement('img')
        userImg.setAttribute('src', res[0].avatar_url)
        const userName = document.createElement('h4')
        userName.textContent = res[0].login
        console.log(userName);
        console.log(userImg);
        
        console.log(res);
    }
}
xhr.send() // helps to send the request 