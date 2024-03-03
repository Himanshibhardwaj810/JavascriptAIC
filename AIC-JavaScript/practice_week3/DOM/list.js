//To access div
let div = document.querySelector("div");
console.dir(div);
//innerText returns pure text content and change the content as ewll
//innerHTML returns HTML CONTENT CONTAINING ELEMENTS
//div.innerText="<div><h1>HEloo</h1></div>";
// div.innerHTML = <i>Hello Everyone</i>;
//through which we can convert the formatting to bold,italic etc.
let h2=document.querySelector("h2");
console.dir(h2);
//textContent gives the content of hidden elements
let h3=document.querySelector("h3");
console.dir(h3);
h3.innerText= h3.innerText+" From MMDU";

let divs=document.querySelectorAll(".box");

divs[0].innerText="HI";
divs[1].innerText="KUNAL";
divs[2].innerText="BHARDWAJ";
let idx=1;
for(div of divs){
    div.innerText=`New ${idx}`;
    idx++;
}