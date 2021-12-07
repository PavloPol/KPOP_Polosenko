var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
;
var logPrize;
logPrize = function (str) {
    console.log(str);
};
var worker = {
    id: 1,
    name: "Ivan",
    surname: "Ivanenko",
    available: true,
    salary: Category.Developer,
    markPrize: logPrize
};
worker.markPrize("Hello");
