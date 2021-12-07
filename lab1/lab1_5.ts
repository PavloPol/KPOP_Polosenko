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
    return num;
}

function getWorkersNamesByCategory(workers, type:Category = Category.Designer){
    let workerCategory:Array<string> = ["name"];
    for (const worker of workers)
    {
        if (worker.category === Category[type])
        {
            let newLength:number = workerCategory.push(worker.surname);
        }
    }
    let deleted:string = workerCategory.shift();
    return workerCategory;
}

function logWorkersNames(surnames:string[]):void{
    let output:string = surnames.join(" ");
    console.log(output);
}

function logFirstAvailable(workers = getAllworkers()):void{
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

function createCustomer(name: string, age?: number, city?: string){
    if(age && city)
    {
        console.log(`${name} ${age} ${city}`);
    }
    else if (age)
    {
        console.log(`${name} ${age}`);
    }
    else
    {
        console.log(`${name}`);
    }
}

function checkoutWorkers(customer: string, ...workerIDs: number []){
    let workers = getAllworkers();
    let result:string[] = [];
    for (const id of workerIDs)
    {
        let num = getWorkerByID(workers, id)
        if(num.available === true)
            result.push(`${num.name} ${num.surname}`);
    }
    console.log(customer);
    return result;
}

createCustomer('Ivan');
createCustomer('Ivan', 25);
createCustomer('Ivan', 25, 'Kyiv');

let workers = getAllworkers();
let surnames = getWorkersNamesByCategory(workers);
surnames.forEach(element => console.log(element));
logFirstAvailable();

let myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(element => console.log(element));
