// Print “Alpha Intern” 5 times using loop
function Alpha(){
for(let i=0;i<5;i++){
    console.log("Alpha Intern");
}
}
Alpha();
//Print number from 1 to 100 using loop
function count(){
for(let j=1;j<101;j++){
    console.log(j);
}
}
count();
//Print all even number from between 1 to 100 using loop
function even(){
for(let k=1;k<=101;k++){
    if(k%2===0){
        console.log(k);
    }
}
}
even();
// Print the table of 19 using loop.
function table(){
for(let h=1;h<11;h++){
    console.log(19*h);
}
}
table();
//Print all numbers from 1 to 100 that are divisible by 3
function divisible(){
for(let l=1;l<=100;l++){
    if(l%3===0){
        console.log(l);
    }
}
}
divisible();

//WAP to check weather a number prime or not.
function prime(num){

for(let m=2;m<num;m++){
    if(m<num){
        if(num % m === 0) {
        console.log("Not prime number");
        break;
    }
    else{
        console.log("Prime number");
        break;
    }
}
}
}
prime(78);