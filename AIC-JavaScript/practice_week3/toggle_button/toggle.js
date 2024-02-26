let modebtn=document.querySelector("#mode");
let currentmode= "light";
let body=document.querySelector("body");
modebtn.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currentmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }
    console.log(currentmode);
});