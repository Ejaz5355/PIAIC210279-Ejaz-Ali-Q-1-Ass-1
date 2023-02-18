var animal = ["cat", "Dog", "tiger"];
for (var i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
animal.forEach(function (A) {
    console.log("".concat(A, " have great pet"));
});
