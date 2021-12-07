function getAllworkers(){
    let workers = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300}
    ]
    return workers;
}

function logFirstAvailable(workers):void{
    let numberWorkers: number = workers.length;
    console.log(`Number of workers = ${numberWorkers}`);
    for (const worker of workers)
    {
        if (worker.available === true)
        {
            console.log(`${worker.name} ${worker.surname}`);
        }
    }
}

let workers = getAllworkers();

logFirstAvailable(workers);