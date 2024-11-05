const obj = {
    name: "Sunil",
    rollNo: 136,

    printDetail: function (state) {
        console.log(this.name + " " + this.rollNo+ " "+ state)
    }
}
obj.printDetail()

const obj2={
    name: "vanshaj",
    rollNo: 147
}

obj.printDetail.call(obj2,"delhi")

obj.printDetail.apply(obj2,["london"])