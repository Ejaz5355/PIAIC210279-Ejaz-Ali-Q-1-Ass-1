var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function cust(c) {
    var d = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        d[_i - 1] = arguments[_i];
    }
    var arr = __spreadArray(__spreadArray([], pname, true), d, true);
    arr.forEach(function (a) {
        console.log(" ".concat(a, " Ordered"));
    });
}
var pname = ["Ali", "Ejaz", "Butt"];
var name2 = "Hammad";
var name3 = "Tayyab";
cust(pname);
cust(name2, name3);
cust(pname, name2, name3);
