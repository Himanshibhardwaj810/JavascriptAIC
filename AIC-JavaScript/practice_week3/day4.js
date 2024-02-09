//Highorder function
function callbackFunction() {
    console.log('Callback function executed after passing to the highorder function as a parameter.');
}

function higherOrderFunction(callback) {
    console.log('Higher-order function is about to call the callback.');
    callback();
}

higherOrderFunction(callbackFunction);

//setTimeout()method 
function greet(){
    console.log("Hello Himanshi")
}
setTimeout(greet,3000);

//setInterval() method
function hello(name){
    return "Hello "+name;
}
console.log(hello("Himanshi"));
setInterval(hello, 2000);

//for each
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number ** 2);
});

//map () method
const num = [16,25,56,34,11];

const doubledNumbers = num.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); 
//filter()
const integers = [11, 42, 53, 14, 95];

const evenNumbers = integers.filter(function(integers) {
    return integers % 2 === 0;
});

console.log(evenNumbers); 
