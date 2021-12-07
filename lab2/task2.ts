enum Category {Business_analyst, Developer, Designer, QA, Scrum_master};


interface PrizeLogger {
    (str:string): void;
}


interface Worker1 {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
    markPrize: PrizeLogger;
}

let logPrize: PrizeLogger;
logPrize = function(str:string) {
    console.log(str);
}

let worker: Worker1 = {
    id: 1,
    name: "Ivan",
    surname: "Ivanenko",
    available: true,
    salary: Category.Developer,
    markPrize: logPrize
}

worker.markPrize("Hello");
