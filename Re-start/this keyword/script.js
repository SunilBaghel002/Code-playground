

function sunil(){
    console.log(this)
}
window.sunil()

let obj={
    a:20,
    b:function(){
        console.log(this.b)
    }
}
obj.b()

// function 
const obj2={
    a:20,
    x: ()=>{
        console.log(this)
    }
}
obj2.x()