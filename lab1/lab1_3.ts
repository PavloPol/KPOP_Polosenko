enum Category {Business_analyst, Developer, Designer, QA, Scrum_master};

function getAllworkers(){
    let workers = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category[0]},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category[1]},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category[2]},
        {id: 4, name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300, category: Category[0]}
    ]
    return workers;
}

function getWorkerByID(workers, id:number){
    let num = workers.find(elem => elem.id == id);
    return [num.name, num.surname, num.salary];
}


let workers = getAllworkers();

workers.forEach(worker => worker.category === Category[1] ? console.log(`${worker.name} ${worker.surname}`) : 0);

let worker = getWorkerByID(workers, 1);
console.log(`${worker[0]} ${worker[1]} salary: ${worker[2]}`);
