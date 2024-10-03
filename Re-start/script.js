const color=document.querySelector(".color1")

color.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="aquamarine"
    document.querySelector(".box").innerHTML= "Hiii, how are you?   see you after a while"
})
color.addEventListener("mouseout",()=>{
    document.querySelector(".container").style.backgroundColor="white"
})

const color1=document.querySelector(".color2")
color1.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="orangered"
})
color1.addEventListener("mouseout",()=>{
    document.querySelector(".container").style.backgroundColor="white"
})

const color2=document.querySelector(".color3")
color2.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="grey"
})
color2.addEventListener("mouseout",()=>{
    document.querySelector(".container").style.backgroundColor="white"
})

const color3=document.querySelector(".color4")
color3.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="red"
})
color3.addEventListener("mouseout",()=>{
    document.querySelector(".container").style.backgroundColor="white"
})

const color4=document.querySelector(".color5")
color4.addEventListener("mouseover",()=>{
    document.querySelector(".container").style.backgroundColor="purple"
})
color4.addEventListener("mouseout",()=>{
    document.querySelector(".container").style.backgroundColor="white"
})

// const box=document.querySelector(".box2")
// box.addEventListener("mouseover",()=>{
//     document.querySelector(".container").style.backgroundColor="white"
// })