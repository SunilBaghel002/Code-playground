const button=document.querySelector(".btn")
const body=document.body
const heading= document.querySelector("h1")
const para2=document.querySelector("p")


// button.onMouseover = function () {
//     alert("Hii I am Sunil baghel")
// }

button.addEventListener("click", ()=>{
    button.classList.add("btn1")
    body.before(para)
})
let para=document.createElement("p")
para.textContent="hey, this is a paragraph"

function color() {
    para2.style.color="red"
    body.style.backgroundColor="green"
    button.classList.add("btn2")
}

heading.addEventListener("mouseover", color)
heading.removeEventListener("mouseout", color)



