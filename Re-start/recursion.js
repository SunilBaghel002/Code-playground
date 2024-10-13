function recursion() {
    console.log("this is a recursion function")
    // recursion()
}
recursion()

function coding(num) {
    if (num===0) {
        console.log("coding has been done!")
        return
    } else {
        console.log("i'm doing coding")
        coding(num-1)
    }
}
coding(7)

function factorial(n) {
    if (n=== 1) {
        return 1
    }
    let fact= n*factorial(n-1)
    return fact
}
console.log(factorial(8))