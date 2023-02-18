function car(manf, modelno) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var carobj = {};
    carobj["manfecturer"] = manf;
    carobj["Model"] = modelno;
    carobj["optional"] = arg;
    console.log(carobj);
}
var manf = "Ejaz";
var modelno = 2023;
var namevalue = { "Honda": "White" };
car(manf, modelno, namevalue);
