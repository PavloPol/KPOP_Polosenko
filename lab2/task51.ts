class ReferenceItem{
    //title: string;
    //year: number;
    /*constructor(newTitle: string, newYear: number){
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }*/
    constructor(public title:string, private year:number){}
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


let ref = new ReferenceItem("TitleName", 2056);
ref.printItem();
ref.publisher = "hello";
console.log(ref.publisher)
