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
    return [num.name, num.surname, num.salary];
}
var workers = getAllworkers();
workers.forEach(function (worker) { return worker.category === Category[1] ? console.log(worker.name + " " + worker.surname) : 0; });
var worker = getWorkerByID(workers, 1);
console.log(worker[0] + " " + worker[1] + " salary: " + worker[2]);
