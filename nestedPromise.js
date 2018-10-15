//First Task
function nestedPromse(note) {
    console.log("Nested promise started");
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject({
                failure: note
            });
        }, 2000);
    });
};

function anotherPromise(note) {
    return new Promise(function(resolve, reject) {
        var a = "abc";
        setTimeout(function() {
            if (a) {
                resolve({
                    Success: note
                })
            } else {
                reject('Here at failure')
            }

        }, 3000);
    });

};

var b = nestedPromse("nested promise");
b.then(function(result) {
        console.log("Success", result);
    })
    .catch(function(err) {
        console.log("Error here", err);
    });

var c = anotherPromise("another promise");

c.then(function(result) {
    console.log("Another result", result);
}, function(err) {
    console.log("Another error", err);
});

console.log("Doing another stuff");