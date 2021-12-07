class ReferenceItem{
    constructor(public title:string, protected year:number){}
    private _publisher:string;
    static department:string = "department1";

    get publisher()
    {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher:string)
    {
        this._publisher = newPublisher;
    }

    printItem(){
        console.log(`${this.title} title was published in year ${this.year}, department ${ReferenceItem.department}`);
    }
}

class Encyclopedia extends ReferenceItem {
    public edition: number;
    constructor(newTitle: string, newYear: number, newEdition: number)
    {
        super(newTitle, newYear);
        this.edition = newEdition;
    }
    printItem(){
        console.log(`${this.title} title was published in year ${this.year}, department ${ReferenceItem.department}`);
        console.log(`Edition: edition (${this.year})`)
    }
}


let refBook = new Encyclopedia("Title1", 2056, 6);
refBook.printItem();
