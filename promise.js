function functionPromise(note) {
    return new Promise(function(resolve, reject) {
        //The three stage of promise
        //pending
        //resolve
        //reject

        //body
        //reject("Here at rejected");

        //asynchronous task running
        resolve("Here at resolve");
        //either reject or resolve can be called.
    });
};

functionPromise("promise funtion").then(function(data) {
    console.log("here at success");
}, function(err) {
    console.log("Here at failure");
});