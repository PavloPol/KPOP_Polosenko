enum Category {Business_analyst = 1000, Developer = 1200, Designer = 1300, QA, Scrum_master = 1400};


interface Worker1 {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
}


function getAllworkers(): Worker1[]{
    let workers: Worker1[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Business_analyst},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Developer},
        {id: 4, name: 'Evgen', surname: 'Zhucov', available: true, salary: Category.Developer}
    ]
    return workers;
}

function getWorkerByID(workers, id: Worker1["id"]){
    let num = workers.find(elem => elem.id == id);
    return num;
}

function PrintWorker(worker: Worker1 | undefined){
    if(typeof worker === "undefined")
    {
        console.log("Error not found");
    }
    else
    {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
    }
}

let workers = getAllworkers();
let worker = getWorkerByID(workers, 1);
PrintWorker(worker);
worker = getWorkerByID(workers, 8);
PrintWorker(worker);

