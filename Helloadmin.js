var arr = ["Ejaz", "Ali", "Ahmad", "admin", "Rana"];
arr.forEach(function (A) {
    if (A == "admin") {
        console.log("Hello admin would you like to see status report");
    }
    else {
        console.log("Hi ".concat(A, " thankyou for loggin in again"));
    }
});
