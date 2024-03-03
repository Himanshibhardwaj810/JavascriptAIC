//Take positive integer input and tell if it is a three-digit number or not
const prompt = require('prompt-sync')();
var num = parseInt(prompt("Enter a positive integer: "));

if (num>99&&num<1000 ) {
    console.log(num + " is a three-digit number.");
} else {
    console.log(num + " is not a three-digit number.");
}

// Take positive integer input and tell if it is divisible by 5 and 3

let number=parseInt(prompt("Enter a positive integer for checking divisibility "));
if(number%5===0&&number%3===0){
    console.log(number+" is divisible by both 5 and 3");
}
else{
    console.log(number+ "is not divisible by both 5 and 3");
}

// Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15
let num2=parseInt(prompt("Enter a positive integer for checking divisibility "));
if((num2%5===0||num2%3===0)&& num2%15!==0){
    console.log(num2+" is divisible by 5 or 3 but not divisible by 15");
}
else{
    console.log(num2+ "doesn't meet the criteria");
}

//Take positive integer input and tell if it is divisible by 5 or 3.
let number3=parseInt(prompt("Enter a positive integer for checking divisibility "));
if(number3%5===0||number3%3===0){
    console.log(number3+" is divisible by both 5 and 3");
}
else{
    console.log(number3+ "is not divisible by both 5 and 3");
}

//Take 3 positive integers input and print the greatest of them.
let x=parseInt(prompt("Enter first positive integer: "));
let y=parseInt(prompt("Enter second positive integer: "));
let z=parseInt(prompt("Enter second positive integer: "));
if(x>y&&x>z){
    console.log("The largest number is "+x);
}
else if(y>z&&y>x){
    console.log("The largest number is "+y);
}
else{
    console.log("The largest number is "+z);
}

/* Any year is input through the keyboard. Write a program to determine whether the year 
is a leap year or not. (Considering leap year occurs after every 4 years).*/
let year=parseInt(prompt("Enter year"));
if((year%4===0&&year%100!==0)){
    console.log(year +" is a leap year") ;
}
else if((year%100===0&&year%400===0)){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year");
}