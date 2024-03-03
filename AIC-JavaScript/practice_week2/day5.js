//Store two integers in two variables x and y. Print the sum of the two.
function sum(x,y){
    console.log("The sum of given numbers "+(x+y));
}
sum(89,90);
//Store two integers in two variables x and y. Print the product of the two.
function multiply(z,k){
console.log("The product of given numbers "+z*k);
}
multiply(87,34);
//Calculate the average of 5 subjects
let English = 85
let Hindi = 90
let Math= 78
let Science = 92
let SST = 88
let n=5
function average(){
let totalMarks = English + Hindi + Math + Science +SST
let average=totalMarks/n
console.log("Average marks of all subject is :"+average);
}
average();
//Calculate Area of a Circle, square, rectangle, triangle
let radius=67
let length=56
let breadth =65
let height=76
let base =89
let side=35
function area(){
console.log("The area of square is "+(side**2));
console.log("The area of circle is "+(3.14*radius*radius));
console.log("The area of triangle is "+(0.5*height*base));
console.log("The area of rectangle is "+(length*breadth));
}
area();
//Calculate the simple interest
let principal=6500
let interest_rate =4
let time =3
function simple_interest(){
let Si=(principal*interest_rate*time)/100
console.log("The simple interest is "+Si);
}
simple_interest();
//Calculate the circumference of circle
function circle(r){
console.log("The Circumference of the circle is "+(2*3.14*r));
}
circle(45);
/* Write a program to perform all the arithmetic operations [except increment and
decrement operators] of JavaScript of any two numbers stored in the variables num1
and num2. Also, print the results to the console*/
let num1 = 10;
let num2 = 5;
function arithmetic(){
let sum = num1 + num2;
console.log("Sum:", sum);

let difference = num1 - num2;
console.log("Difference:", difference);

let product = num1 * num2;
console.log("Product:", product);


let quotient = num1 / num2;
console.log("Quotient:", quotient);

let remainder = num1 % num2;
console.log("Remainder:", remainder);


let exponentiation = num1 ** num2;
console.log("Exponentiation:", exponentiation);
}
arithmetic();

