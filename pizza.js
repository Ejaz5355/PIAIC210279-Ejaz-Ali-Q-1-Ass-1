var pizzas = ["CK", "FJ", "Sp"];
for (var i = 0; i <= pizzas.length; i++) {
    console.log(pizzas[i]);
}
pizzas.forEach(function (A) {
    console.log("i like ".concat(A, " pizza"));
});
