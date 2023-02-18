const Name: string = "Ejaz";
const Cname: string = "ejaz";
const UName: string = Name.toLocaleUpperCase();
const LName: string = Name.toLocaleLowerCase();

function Title(Cname:string){
    var Titlename = Cname.toLowerCase().split(' ');
    for(var i = 0; i < Titlename.length; i++)
    {
         Titlename[i] = Titlename[i].charAt(0).toUpperCase() + Titlename[i].slice(1);
    }
    console.log(Titlename.join(' '));

}

console.log(UName);
console.log(LName);
Title(Cname);

