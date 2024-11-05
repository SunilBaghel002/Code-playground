const head = document.createElement("h1")
head.innerText = "Learn Javascript"
document.body.append(head)

document.body.style.margin = "0px"
document.body.style.padding = "0px"

head.addEventListener("mouseover", () => {
    document.body.classList.add("red")
})

head.addEventListener("mouseout", () => {
    document.body.classList.remove("red")
})

const imgElement = document.createElement("img")
imgElement.innerHTML = `<img src="">`

// function sunil() {
//     var name = "sunil"
//     function display() {
//         console.log(name)
//     }
//     display()
// }
// sunil()

function sunil() {
    var name = "sunil"
    function display() {
        console.log(name)
    }
    return display
}
const name=sunil()
name()