var myNamedFunction = function myFunctionName() {
    console.log("This is a named function expression.");
};


myNamedFunction(); 
console.log(myNamedFunction.name); 

// Named function expression for a recursive function
var factorial = function calculateFactorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
};

console.log(factorial(5)); 

