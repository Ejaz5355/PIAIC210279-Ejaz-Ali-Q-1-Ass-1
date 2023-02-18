var Name = "Ejaz";
var Cname = "ejaz";
var UName = Name.toLocaleUpperCase();
var LName = Name.toLocaleLowerCase();
function Title(Cname) {
    var Titlename = Cname.toLowerCase().split(' ');
    for (var i = 0; i < Titlename.length; i++) {
        Titlename[i] = Titlename[i].charAt(0).toUpperCase() + Titlename[i].slice(1);
    }
    console.log(Titlename.join(' '));
}
console.log(UName);
console.log(LName);
Title(Cname);
