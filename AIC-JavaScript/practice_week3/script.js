console.log("hello");
alert("hello");
console.log(window); 

console.dir(window.document);//it prints object properties and methods

console.dir(document.body);//to access body
console.log(document.body);

console.dir(document.head);//to access body
console.log(document.head);

document.body.style.backgroundColor="green"; //changing the background color of body to green using javascript

let heading =document.getElementById("greeting");
console.dir(heading);//it returns h1

let description=document.getElementsByClassName("detail");
console.dir(description);  //returns NodeList of HTML elements with class