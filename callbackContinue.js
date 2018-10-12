//First Task
function firstTask(task1, callback) {
    setTimeout(function() {
        callback({
            First_task: task1
        })
    }, 2000);
}

function secondTask(task2, callback) {
    setTimeout(function() {
        callback({
            Secon_task: task2
        })
    }, 3000);
}

console.log("Start task");

firstTask("Starting first task", function(result) {

    console.log("first takes 2 second to start", result);

    secondTask("Second Task begun", function(result) {

        console.log("Second tast takes 3 second to start")
    });
});

console.log("Doing other task");