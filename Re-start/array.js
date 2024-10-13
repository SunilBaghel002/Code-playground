// // let arr=[1,83,3,3211]
// // console.log(arr)

// // let arr2=[2, "sunil", [387, 738, "ram", [829, 83]]]
// // console.log(arr2[2][3][1])
// // console.log(arr2.length)
// // console.log(typeof arr2)

// let arr=[4, 36, 2, 1]
// let arr1=[4, 24, 41,13,1]
// // let arr2=arr.concat(arr1)
// // console.log(arr2)
// // for(let i=0; i<arr2.length; i++){
// //     console.log(i, arr2[i])
// // }
// // for(let key of arr2){
// //     console.log(key)
// // }
// arr.push(23, 45) // at end of array
// console.log(arr)
// //at end of array
// arr.pop()
// console.log(arr)
// //at start
// arr.shift()
// console.log(arr)
// //at start
// arr.unshift(7, 3)
// console.log(arr)

// let eat=arr.indexOf(7)
// console.log(eat)

// let arr4=["rajkumar", 2501, 71, 71,6]
// let merge = [...arr, ...arr1, ...arr4]
// console.log(merge)
// merge.reverse()
// console.log(merge)
// merge.sort()
// console.log(merge)
// arr.sort()
// console.log(arr)

// let array=[46,8,3,1,2,9,288]
// // array.sort()
// console.log(array)

// array.splice(3, 4, 26,728,92,1)
// console.log(array)
// console.log(array.slice(2,5))

let nums=[2,4,76,41,9,8]

function double(nums) {
    return nums*2
}
let news= nums.map(double)
console.log(news)

let number=nums.filter((num)=>{
    if (num>8) {
        return num
    }
})
console.log(number)

let sum=nums.reduce((a,c)=>{
    a=a+c
    return a
},0)

console.log(sum)
let product=nums.reduce((acc,curr)=>{
    acc=acc*curr
    return acc
},1)
console.log(product)