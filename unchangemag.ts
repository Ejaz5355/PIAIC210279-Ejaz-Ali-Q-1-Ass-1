const mag: string[] = ["Ejaz", "Ali", "Butt"]
var copy: string[] = [...mag]
function show(mag){
    var newarr:string[] = []
    mag.forEach(magi => {

        console.log("The Great",magi)
        
        newarr.push(mag)
    })
    return newarr
}
var separr:string[] = [...show(copy)]
console.log()
console.log(show(copy))

   

show(mag)