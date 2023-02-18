function car(manf,modelno,...arg){
var carobj = {}
carobj["manfecturer"] = manf
carobj ["Model"] = modelno
carobj["optional"] = arg
console.log(carobj)
}
var manf:string = "Ejaz"
var modelno:(string | Number ) = 2023;
var namevalue = {"Honda" : "White"}
car(manf,modelno,namevalue)
