function getAllworkers() {
    var workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300 }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    var numberWorkers = workers.length;
    console.log("Number of workers = " + numberWorkers);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available === true) {
            console.log(worker.name + " " + worker.surname);
        }
    }
}
var workers = getAllworkers();
logFirstAvailable(workers);
