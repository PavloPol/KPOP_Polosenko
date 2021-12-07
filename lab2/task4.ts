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

class UniversityLibrarian implements Librarian{
    name: string;
    email: string;
    numBooksPublished: number;
    department: string;
    assistCustomer(custName:string): void{
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favoriteAuthor: Author = {
    name: "name",
    email: "email",
    numBooksPublished: 1
}

let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Mark";
favoriteLibrarian.assistCustomer("NotMark");

/*let favoriteLibrarian: Librarian = {
    name: favoriteAuthor.name,
    email: favoriteAuthor.email,
    numBooksPublished: favoriteAuthor.numBooksPublished,
    department: "department",
    assistCustomer: (custName:string) => console.log(custName)
};*/

