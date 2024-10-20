const outerBox = document.querySelector(".outer")
const button = document.querySelector(".btn")
const body = document.body
const googleElement = document.getElementById("google")

button.addEventListener("click", (e) => {
    console.log("you click on button")
    e.stopPropagation()
}, false)

outerBox.addEventListener("click", () => {
    console.log("you click on Outer box")

}, false)

body.addEventListener("click", () => {
    console.log("you click on body")
}, false)

googleElement.addEventListener("click", (e) => {
    console.log("you clicked on google link")
    e.preventDefault()
})

try {
    console.log(sunil)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("drfccchgghukjkqwertyuiopllllllllllllllllkjhgfdsazxcvbnm")

    // qwertyuioplkjhgfdsazxcvbnm
}