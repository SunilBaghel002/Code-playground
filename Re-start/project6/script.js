const hourHand=document.querySelector(".hour")
const minHand=document.querySelector(".minute")
const secHand=document.querySelector(".second")

setInterval(() => {
    let date= new Date()

    hour=date.getHours()*30
    min=date.getMinutes()*6
    sec=date.getSeconds()*6

    hourHand.style.transform= `rotateZ(${(hour)+min/12}deg)`
    minHand.style.transform= `rotateZ(${(min)}deg)`
    secHand.style.transform= `rotateZ(${(sec)}deg)`
});