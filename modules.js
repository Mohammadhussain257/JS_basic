//import
//export

//for export
module.exports = function promiseDemo(note) {
    return new Promise(function(resolve, reject) {
        reject("Reject")
    });

};