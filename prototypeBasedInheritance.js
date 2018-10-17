function Vegetable() {
    this.name = "potato";
}
Vegetable.prototype.status = "fresh";
Vegetable.prototype.getDetails = function() {
    return "This is " + this.name + " it is " + this.status;
}

function Fruits() {
    this.name = "Banana";
}
Fruits.prototype.color = "Yellow";
Fruits.prototype.type = "Seasonal";
var ff = new Fruits();
console.log("Fruits is :", ff);
console.log("Color is :", ff.color);
console.log("Type is :", ff.type);
Fruits.prototype = new Vegetable();
var f = new Fruits();
console.log(f.getDetails());