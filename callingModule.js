//--->way of import in es6 //import myModule from './modules'//

var callModule = require('./modules');

console.log("My module :", callModule);


callModule("calling promise demo").then(function(result) {
    console.log("result", result);
}, function(err) {
    console.log(" error", err);
})