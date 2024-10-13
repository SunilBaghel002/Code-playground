let obj = {
    Myname: "Sunil",
    job: "web designer",
    hiried: false,
    salary: "47000/m"
}
console.log(obj)
console.log(obj.Myname)
obj.hiried = true
console.log(obj)
obj.lastName = "baghel"
console.log(obj)
delete obj.salary
console.log(obj)
for (let key in obj) {
    console.log(key, obj[key])
}