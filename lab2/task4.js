var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteAuthor = {
    name: "name",
    email: "email",
    numBooksPublished: 1
};
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Mark";
favoriteLibrarian.assistCustomer("NotMark");
/*let favoriteLibrarian: Librarian = {
    name: favoriteAuthor.name,
    email: favoriteAuthor.email,
    numBooksPublished: favoriteAuthor.numBooksPublished,
    department: "department",
    assistCustomer: (custName:string) => console.log(custName)
};*/
