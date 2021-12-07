enum Category {Business_analyst, Developer, Designer, QA, Scrum_master};

function getAllworkers(){
    let workers = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category[0]},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category[1]},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category[2]},
        {name: 'Evgen', surname: 'Zhucov', available: true, salary: 1300, category: Category[0]}
    ]
    return workers;
}

function getWorkersNamesByCategory(workers, type:Category){
    let workerCategory:Array<string> = [];
    for (const worker of workers)
    {
        if (worker.category === Category[type])
        {
            let newLength:number = workerCategory.push(worker.surname);
        }
    }
    return workerCategory;
}

function logWorkersNames(surnames:string[]):void{
    let output:string = surnames.join(" ");
    console.log(output);
}

let workers = getAllworkers();
let type:Category = Category.Business_analyst;
let surnames = getWorkersNamesByCategory(workers, type);

logWorkersNames(surnames);
