const arr: string [] = ["Ejaz", "Ali", "Ahmad", "admin", "Rana"]
arr.forEach(A => {
    if(A == "admin"){
        console.log("Hello admin would you like to see status report")
    }else{
        console.log(`Hi ${A} thankyou for loggin in again`)
    }
})

