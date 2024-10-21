

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