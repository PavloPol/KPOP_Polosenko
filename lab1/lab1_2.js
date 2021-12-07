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
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category[0] },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category[1] },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category[2] },
        { name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300, category: Category[0] }
    ];
    return workers;
}
function getWorkersNamesByCategory(workers, type) {
    var workerCategory = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === Category[type]) {
            var newLength = workerCategory.push(worker.surname);
        }
    }
    return workerCategory;
}
function logWorkersNames(surnames) {
    var output = surnames.join(" ");
    console.log(output);
}
var workers = getAllworkers();
var type = Category.Business_analyst;
var surnames = getWorkersNamesByCategory(workers, type);
logWorkersNames(surnames);
