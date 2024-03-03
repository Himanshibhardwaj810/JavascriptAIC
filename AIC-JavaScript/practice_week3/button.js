let submit_button=document.querySelector("#click");
submit_button.onclick=(e) => {
    console.log("Your form has been submitted on clicking");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX,e.clientY);
};


let form=document.querySelector("h1");
form.onmouseover =() =>{
    console.log("You are on the form submission page");
};
 let cancel=document.querySelector("#click1");
 cancel.addEventListener("click", (evt) =>{
    console.log("Form has been canceled");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);

 });
 cancel.addEventListener("click", () =>{
    console.log("Handler1");
 });

 cancel.addEventListener("click", () =>{
    console.log("Handler2");
 });
 let handler3=() =>{
    console.log("Handler3");
 };
 cancel.addEventListener("click",handler3); 
 cancel.addEventListener("click", () =>{
    console.log("Handler4");
 });
 cancel.removeEventListener("click",handler3);   //removing a specific event listener from an event