var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 1000] = "Business_analyst";
    Category[Category["Developer"] = 1200] = "Developer";
    Category[Category["Designer"] = 1300] = "Designer";
    Category[Category["QA"] = 1301] = "QA";
    Category[Category["Scrum_master"] = 1400] = "Scrum_master";
})(Category || (Category = {}));
;
function getAllworkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Developer },
        { id: 4, name: 'Evgen', surname: 'Zhucov', available: true, salary: Category.Developer }
    ];
    return workers;
}
function getWorkerByID(workers, id) {
    var num = workers.find(function (elem) { return elem.id == id; });
    return num;
}
function PrintWorker(worker) {
    if (typeof worker === "undefined") {
        console.log("Error not found");
    }
    else {
        console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
    }
}
var workers = getAllworkers();
var worker = getWorkerByID(workers, 1);
PrintWorker(worker);
worker = getWorkerByID(workers, 8);
PrintWorker(worker);
