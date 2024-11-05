// "use strict"

function sunil() {
    console.log(this)
}
window.sunil()

let obj = {
    a: 20,
    b: function () {
        console.log(this.b)
    }
}
obj.b()

// function 
const obj2 = {
    a: 20,
    x: () => {
        console.log(this)
    }
}
obj2.x()

const obj3={
    a: 20,
    x: function(){
        const y= ()=>{
            console.log(this)
        }
        y()
    }
}
obj3.x()