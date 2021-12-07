var ReferenceItem = /** @class */ (function () {
    //title: string;
    //year: number;
    /*constructor(newTitle: string, newYear: number){
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }*/
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " title was published in year " + this.year + ", department " + ReferenceItem.department);
    };
    ReferenceItem.department = "department1";
    return ReferenceItem;
}());
var ref = new ReferenceItem("TitleName", 2056);
ref.printItem();
ref.publisher = "hello";
console.log(ref.publisher);
