class ReferenceItem{
    title: string;
    year: number;
    constructor(newTitle: string, newYear: number){
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }
    printItem(){
        console.log(`${this.title} title was published in year ${this.year}`);
    }
}


let ref = new ReferenceItem("TitleName", 2056);
ref.printItem();

