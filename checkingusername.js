var current_user = ["a", "b", "c", "d", "e"];
var new_user = ["d", "e", "f", "g", "h"];
for (var i = 0; i < current_user.length; i++)
    if (current_user[i] == new_user[i]) {
        console.log("You need to enter new");
    }
    else {
        console.log("Name is available");
    }
