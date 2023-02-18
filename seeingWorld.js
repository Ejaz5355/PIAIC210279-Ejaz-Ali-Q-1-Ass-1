var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = ["Isb", "Lhr", "Wah", "Taxila"];
console.log("Original Array");
console.log(arr);
var sorted = __spreadArray([], arr, true).sort();
console.log("Sorted Array");
console.log(sorted);
console.log("Original Array");
console.log(arr);
var rev = __spreadArray([], arr, true).reverse();
console.log("Reverse Array");
console.log(rev);
console.log("Original Array");
console.log(arr);
var rev2 = __spreadArray([], rev, true).reverse();
console.log("again reverse Array");
console.log(rev2);
arr.sort();
console.log("Sorted Array");
console.log(arr);
