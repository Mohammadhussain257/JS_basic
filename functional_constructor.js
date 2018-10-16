//functional constructor is a funtion which does not have return and called using new keyword.

//For example 
function car() {
    this //this is constructor
}
//When a functional constructor called constructor get initiated using new keyword. 

function bike(args) {
    this.color = args.color;
    this.model = args.model;
    this.price = args.price;
}
var obj = new bike({
    color: 'Red',
    model: 'RTR',
    price: 350000
});

var obj1 = {
    color: "Blue",
    model: "R15",
    price: 400000
}
console.log("obj now :", obj);
var a = new bike(obj1);
console.log(a);