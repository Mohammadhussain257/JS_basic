var address = "Bhaktapur";

//function within function is a closure concept
function welcome(name) {
    var greeting = "Hello";
    return greeting + " " + name + " welcome to " + address;

    function hello() {
        return 'Hello', name;
    }
}
var a = welcome("Mohammad");
console.log(a);