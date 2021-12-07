var favoriteAuthor = {
    name: "name",
    email: "email",
    numBooksPublished: 1
};
var favoriteLibrarian = {
    name: "name2",
    email: "email2",
    numBooksPublished: 2,
    department: "department",
    assistCustomer: function (custName) { return console.log(custName); }
};
console.log(favoriteAuthor.name + " " + favoriteAuthor.email + " " + favoriteAuthor.numBooksPublished);
console.log(favoriteLibrarian.name + " " + favoriteLibrarian.email + " " + favoriteLibrarian.numBooksPublished + " " + favoriteLibrarian.department);
favoriteLibrarian.assistCustomer("custName");
