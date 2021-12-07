var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " title was published in year " + this.year);
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("TitleName", 2056);
ref.printItem();
