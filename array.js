//array is mutable 
var fruits = [];
console.log("fruits now :", fruits);

fruits.push("apple");
fruits.push("orange"); //push elements towards last index
console.log("Fruits after push :", fruits);

fruits.unshift("Banana"); //insert elements to first index

console.log("Fruits after unshift:", fruits);

//retrieve elements from array
fruits.pop(); //pop of the array elements from last index

console.log("Array after pop : ", fruits);

//shift the array elements from first index
fruits.shift();
console.log("Array after shift :", fruits);

var index = fruits.indexOf("Kiwi"); //here index of kiwi is -1 as there is no such fruits in array
console.log("index of kiwi", index);

var bike = [{
    name: "pulaser",
    color: "Red",
    price: 250000
}, {
    name: "Ducati",
    color: "Black",
    price: 700000
}, {
    name: "KTM",
    color: "Orange",
    price: 700000
}];

bike.forEach(function(items) {
    console.log(items);
});