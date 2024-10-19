// let container=document.querySelector(".container")
// const para=document.createElement("p")
// container.appendChild(para)
// para.innerHTML="this is paragraph"
// const para2=document.createElement("article")
// container.append(para2)
// para2.innerHTML="this is a article"

// const para3=document.createElement("anchor")
// container.prepend(para3)
// para3.textContent="djias"

// const para4=document.createElement("input")
// container.before(para4)
// para4.style.backgroundColor="white"
// para4.placeholder="this is a placeholder"

// const para5=document.createElement("button")
// container.after(para5)
// para5.textContent="this is a button"
// para.remove()
// para2.remove()
// para3.remove()
// para4.remove()
// para5.remove()

const grand=document.querySelector(".grand-parent")
// console.log(grand.children[0])
grand.children[0].style.backgroundColor="red"

const child=document.querySelector(".child3")
child.parentElement.style.backgroundColor="green"
child.closest(".grand-parent").style.padding=10+"px"
child.closest(".grand-parent").style.backgroundColor="blue"
child.nextElementSibling.style.backgroundColor="orange"
child.previousElementSibling.style.backgroundColor="aqua"