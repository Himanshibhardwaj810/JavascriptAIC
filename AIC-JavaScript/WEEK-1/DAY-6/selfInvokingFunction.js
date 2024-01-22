(function(){
    var message="Hello everyone! ";
    console.log(message);
})();
//with parameters
(function(Name){
    var msz="HELLO "+Name
    console.log(msz);

})("Himanshi");
//Another example
var result=(function(x,y){
    return x/y;
})(5,10);
console.log("The division of x and y is "+result);