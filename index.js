// console.log('Hello world');
// let name = 'Mohammad';
// console.log(name);

//Closure
var welcome = function(name) {
    var greeting = 'Welcome';

    var display = function(location) {

        return greeting + " " + name + " to " + location;
    }
    return display;
}

var a = welcome('Mohammad');

console.log(a('KTM'));

var number1 = function(num1) {
    var number2 = function(num2) {
        return "Result is :" + num1 * num2;
    }
    return number2;
}
var ans = number1(20);
console.log(ans(100));