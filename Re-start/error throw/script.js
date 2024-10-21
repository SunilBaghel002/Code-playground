const customErr=new Error("Sunil is not defined")
customErr.name="Sunil"

const err= new Error("Required")
err.name ="Error"
let name=prompt("enter your Name")
try {
    if (name==="") {
        throw err
    }
    console.log(name)
} catch (e) {
    console.log(e.name)
    console.log(e.message)
}