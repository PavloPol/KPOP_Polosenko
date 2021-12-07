function createCustomerID(name, id) {
    return name + " " + id;
}
var myID = createCustomerID('Ann', 10);
console.log(myID);
var idGenerator;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 10));
