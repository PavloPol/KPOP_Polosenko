var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReferenceItem = /** @class */ (function () {
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, newEdition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = newEdition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log(this.title + " title was published in year " + this.year + ", department " + ReferenceItem.department);
        console.log("Edition: edition (" + this.year + ")");
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia("Title1", 2056, 6);
refBook.printItem();
