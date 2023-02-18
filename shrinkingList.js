var arr = [" Ali", "Butt", "Hammad"];
arr.forEach(function (A) { return console.log("".concat(A, " Come tonight at Dinner")); });
var Gname = arr.pop();
console.log("".concat(Gname, " Not Coming"));
var A = "Tayyab";
arr.push(A);
console.log("I found bigger dinner table");
arr.unshift("Moiz");
arr.splice(1, 0, "Abdul Basit");
arr.push("Dr. Zia");
arr.forEach(function (A) { return console.log("".concat(A, " Come tonight at Dinner")); });
console.log("I can invite only two perons");
while (arr.length > 2) {
    var Ep = arr.pop();
    console.log(" ".concat(Ep, " Sorry i can not invited you"));
}
arr.forEach(function (A) { return console.log("".concat(A, " Come tonight at Dinner")); });
arr.pop();
arr.pop();
console.log(arr);
