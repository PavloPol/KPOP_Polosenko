var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
;
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category[0] },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category[1] },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category[2] },
        { id: 4, name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300, category: Category[0] }
    ];
    return workers;
}
function getWorkerByID(workers, id) {
    var num = workers.find(function (elem) { return elem.id == id; });
    return num;
}
function getWorkersNamesByCategory(workers, type) {
    if (type === void 0) { type = Category.Designer; }
    var workerCategory = ["name"];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === Category[type]) {
            var newLength = workerCategory.push(worker.surname);
        }
    }
    var deleted = workerCategory.shift();
    return workerCategory;
}
function logWorkersNames(surnames) {
    var output = surnames.join(" ");
    console.log(output);
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    var numberWorkers = workers.length;
    console.log("Number of workers = " + numberWorkers);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available === true) {
            console.log(worker.name + " " + worker.surname);
        }
    }
}
function createCustomer(name, age, city) {
    if (age && city) {
        console.log(name + " " + age + " " + city);
    }
    else if (age) {
        console.log(name + " " + age);
    }
    else {
        console.log("" + name);
    }
}
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var workers = getAllworkers();
    var result = [];
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        var num = getWorkerByID(workers, id);
        if (num.available === true)
            result.push(num.name + " " + num.surname);
    }
    console.log(customer);
    return result;
}
createCustomer('Ivan');
createCustomer('Ivan', 25);
createCustomer('Ivan', 25, 'Kyiv');
var workers = getAllworkers();
var surnames = getWorkersNamesByCategory(workers);
surnames.forEach(function (element) { return console.log(element); });
logFirstAvailable();
var myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(function (element) { return console.log(element); });
