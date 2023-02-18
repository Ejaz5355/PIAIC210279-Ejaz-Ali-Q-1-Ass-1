function cust(c,...d){
var arr:string [] = [...pname, ...d]
arr.forEach(a => {
    console.log(  ` ${a} Ordered`)
})
}
var pname:string[] = ["Ali","Ejaz","Butt"]
var name2:string = "Hammad"
var name3:string = "Tayyab"
cust(pname)
cust(name2, name3)
cust(pname,name2,name3)

