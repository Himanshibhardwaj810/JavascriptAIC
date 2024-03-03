/*Write a program to demonstrate the results of comparison operators. Note that both the 
truth and false condition for each operator must be specified*/
let x = 45
let y = 67
let u = 56
let k = "56"
function comparison() {
    console.log(x == y);
    console.log(x > y);
    console.log(x < y);
    console.log(x != y);

    console.log(u == k);
    console.log(u === k);
    console.log(u != k);
    console.log(u !== k);
}
comparison();
/*. Write a program of traffic control that accepts the traffic light displayed and prints the 
message. If the traffic light is red print the vehicles must stop*/
let trafficlight = "red"
function signal() {
    if (trafficlight == "red") {
        console.log("Vehicles must stop");
    }
    else if (trafficlight === "green") {
        console.log("Vehicles must go");
    }
    else {
        console.log("Vehicles must wait");
    }
}
signal();
//Write a program to print the largest of 2 numbers. And 4 numbers
let h = 45, m = 56
function two_no() {
    if (h > m) {
        console.log("The largest no is " + h);
    }
    else {
        console.log("The largest no is " + m);
    }
}
two_no();
let a = 34, b = 45, c = 18, d = 32
function four_no() {
    if ((a > b && a > c) && a > d) {
        console.log("The largest number is " + a);
    }
    else if ((b > a && b > c) && b > d) {
        console.log("The largest number is " + b);
    }
    else if ((c > a && c > b) && c > d) {
        console.log("The largest number is " + c);
    }
    else {
        console.log("The largest number is " + d);
    }
}
four_no();
/*. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and 
outputs the number of days until the weekend.*/

let dayOfWeek = "sunday";
let daysUntilWeekend;
function daystilWeekend() {
    if (dayOfWeek === "monday") {
        daysUntilWeekend = 5;
    } else if (dayOfWeek === "tuesday") {
        daysUntilWeekend = 4;
    } else if (dayOfWeek === "wednesday") {
        daysUntilWeekend = 3;
    } else if (dayOfWeek === "thursday") {
        daysUntilWeekend = 2;
    } else if (dayOfWeek === "friday") {
        daysUntilWeekend = 1;
    } else if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
        daysUntilWeekend = 0;
    } else {
        console.log("Invalid day of the week");

    }

    console.log("Number of days until the weekend: " + daysUntilWeekend);
}
daystilWeekend();
//WAP to print even and odd number
let n = 67
function even() {
    if (n % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
even();
/*If cost price and selling price of an item is input through the keyboard, write a program 
to determine whether the seller has made profit or incurred loss. Also determine how 
much profit he made or loss he incurred.*/

let costPrice ;
let sellingPrice ;

function profit(){
let profitOrLoss = sellingPrice - costPrice;


if (profitOrLoss > 0) {
    console.log("Profit of $" + profitOrLoss);
} else if (profitOrLoss < 0) {
    console.log("Loss of $" + profitOrLoss);
} else {
    console.log("No profit, no loss");
}
}
profit();


//Take positive integer input and tell if it is a three-digit number or not
function three(num){

if (num > 99 && num < 1000) {
    console.log(num + " is a three-digit number.");
} else {
    console.log(num + " is not a three-digit number.");
}
}
three(753);
// Take positive integer input and tell if it is divisible by 5 and 3

function divisible(number){
if(number%5===0&&number%3===0){
    console.log(number+" is divisible by both 5 and 3");
}
else{
    console.log(number+ "is not divisible by both 5 and 3");
}
}
divisible(675);
// Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15
function divisibility(num2){
if((num2%5===0||num2%3===0)&& num2%15!==0){
    console.log(num2+" is divisible by 5 or 3 but not divisible by 15");
}
else{
    console.log(num2+ "doesn't meet the criteria");
}
}
divisibility(8);

//Take positive integer input and tell if it is divisible by 5 or 3.
function int(number3){
if(number3%5===0||number3%3===0){
    console.log(number3+" is divisible by both 5 and 3");
}
else{
    console.log(number3+ "is not divisible by both 5 and 3");
}
}
int(678);
//Take 3 positive integers input and print the greatest of them.
function greatest(x,y,z){
if(x>y&&x>z){
    console.log("The largest number is "+x);
}
else if(y>z&&y>x){
    console.log("The largest number is "+y);
}
else{
    console.log("The largest number is "+z);
}
}
greatest(45,32,87);

/* Any year is input through the keyboard. Write a program to determine whether the year 
is a leap year or not. (Considering leap year occurs after every 4 years).*/
function leap(year){
if((year%4===0&&year%100!==0)){
    console.log(year +" is a leap year") ;
}
else if((year%100===0&&year%400===0)){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year");
}
}
leap();