/*Write a program to demonstrate the results of comparison operators. Note that both the 
truth and false condition for each operator must be specified*/
let x = 45
let y = 67
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x != y);
let u = 56
let k = "56"
console.log(u == k);
console.log(u === k);
console.log(u != k);
console.log(u !== k);
/*. Write a program of traffic control that accepts the traffic light displayed and prints the 
message. If the traffic light is red print the vehicles must stop*/
let trafficlight="red"
if (trafficlight == "red") {
    console.log("Vehicles must stop");
}
else if (trafficlight === "green") { 
      console.log("Vehicles must go"); 
}
else{
    console.log("Vehicles must wait");
}
//Write a program to print the largest of 2 numbers. And 4 numbers
let h=45,m=56
if(h>m){
    console.log("The largest no is "+h);
}
else{
    console.log("The largest no is "+m);
}

let a=34,b=45,c=18,d=32
if((a>b&&a>c)&&a>d){
    console.log("The largest number is "+a);
}
else if((b>a&& b>c)&&b>d){
    console.log("The largest number is "+b);
}
else if((c>a&&c>b)&&c>d){
    console.log("The largest number is "+c);
}
else{
    console.log("The largest number is "+d);
}

/*. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and 
outputs the number of days until the weekend.*/

let dayOfWeek = "sunday";
let daysUntilWeekend;

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

//WAP to print even and odd number
let n=67
if(n%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

/*If cost price and selling price of an item is input through the keyboard, write a program 
to determine whether the seller has made profit or incurred loss. Also determine how 
much profit he made or loss he incurred.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the cost price: ", (costPriceInput) => {
    rl.question("Enter the selling price: ", (sellingPriceInput) => {
        let costPrice = parseFloat(costPriceInput);
        let sellingPrice = parseFloat(sellingPriceInput);

       
        let profitOrLoss = sellingPrice - costPrice;

        
        if (profitOrLoss > 0) {
            console.log("Profit of $" + profitOrLoss);
        } else if (profitOrLoss < 0) {
            console.log("Loss of $" + profitOrLoss);
        } else {
            console.log("No profit, no loss");
        }

        rl.close();
    });
});

