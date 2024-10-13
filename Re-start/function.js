function name() {
    console.log("hii,there is sunil")
}
name()
function simple(p, r, t) {
    console.log(p*r*t/100)
}
simple(30000, 2, 12)

let arrowfun=(username)=>{
    console.log(`my name is ${username}`)
}
arrowfun("js ka king")
// (function(){
//     console.log("wtfsqvajwbjkxj")
// })();
function outer(){
    console.log("which one is better")
    function inner() {
        console.log("inner or outer")
    }
    inner()
}
outer()

// Questions 1-
function swapNums(a, b) {
    console.log("before swapping")
    console.log("a:",a)
    console.log("b:",b)

    let temp= a
    a=b
    b=temp

    console.log("after swapping")
    console.log("a:",a)
    console.log("b:",b)
}
swapNums(45, 21)

// Question 2-
function countVowels(str) {
    const vowels="aeiouAEIOU"
    let count=0

    for(let char of str){
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
console.log(countVowels("hdiuwgedgwieywbffbqiowqwquuAsnnsdn"))