// Print “Alpha Intern” 5 times using loop
for(let i=0;i<5;i++){
    console.log("Alpha Intern");
}
//Print number from 1 to 100 using loop
for(let j=1;j<101;j++){
    console.log(j);
}
//Print all even number from between 1 to 100 using loop
for(let k=1;k<=101;k++){
    if(k%2===0){
        console.log(k);
    }
}

// Print the table of 19 using loop.
for(let h=1;h<11;h++){
    console.log(19*h);
}

//Print all numbers from 1 to 100 that are divisible by 3
for(let l=1;l<=100;l++){
    if(l%3===0){
        console.log(l);
    }
}

//WAP to check weather a number prime or not.
const prompt=require('prompt-sync')();
let num=parseInt(prompt("Enter number"));

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