let article= document.getElementsByClassName("para");
console.dir(article);
console.log(article);

let div=document.getElementsByTagName("div");
console.log(div);

//QAccessing elements using query selector
//by class 
let element=document.querySelector(".para");
console.dir(element);

// let all_elements=document.querySelectorAll(".para");
// console.dir(all_elements);

//by id
let Sample=document.querySelector("#data");
console.dir(Sample);

let all_id=document.querySelectorAll("#data");
console.dir(all_id);

let click =document.querySelector("#b1");
console.dir(click);
//First child
let childrens=document.querySelector("div").children;
console.dir(childrens);