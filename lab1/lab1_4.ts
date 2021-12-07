function createCustomerID(name:string, id:number){
    return name + " " + id;
}

let myID:string = createCustomerID('Ann', 10);

console.log(myID);

let idGenerator: (name:string, id:number) => string;

idGenerator = createCustomerID;

console.log(idGenerator('Ann', 10));
