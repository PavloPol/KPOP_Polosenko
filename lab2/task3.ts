interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
    numBooksPublished: number;
}

interface Librarian extends Author{
    department: string;
    assistCustomer: (custName:string) => void;
}

let favoriteAuthor: Author = {
    name: "name",
    email: "email",
    numBooksPublished: 1
}

let favoriteLibrarian: Librarian = {
    name: "name2",
    email: "email2",
    numBooksPublished: 2,
    department: "department",
    assistCustomer: (custName:string) => console.log(custName)
};
console.log(`${favoriteAuthor.name} ${favoriteAuthor.email} ${favoriteAuthor.numBooksPublished}`);
console.log(`${favoriteLibrarian.name} ${favoriteLibrarian.email} ${favoriteLibrarian.numBooksPublished} ${favoriteLibrarian.department}`);
favoriteLibrarian.assistCustomer("custName");
