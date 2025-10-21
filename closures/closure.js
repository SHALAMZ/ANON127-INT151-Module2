//  function makeAdder(x) {
//     // let y = 6
//     // console.log(y)
//   return function(y) {
//     return x + y
//   }
//  }
//  const add5 = makeAdder(5)
//  const add10 = makeAdder(10)
//  console.log(add5(3))  
//  console.log(add10(3)) 

// function outerFunction() {
//     let outerVariable = "I'm from the outer scope!"
//     function innerFunction() {
//         console.log("hello")
//     }
//     console.log(outerVariable)
//     return innerFunction
// }
// const myClosure = outerFunction()
// myClosure() // Output: "I'm from the outer scope!"

// const getScoringPass = function (scores) {
//     //bind and store "scores" argument to use in the nested "cuttingPoint" function
//     function cuttingPoint(cuttingScore) {
//         return scores.filter((score) => score >= cuttingScore)
//     }
//     return cuttingPoint
// }
// //fn_cuttingPoint1 and fn_cuttingPoint2 are instance closure functions
// //that bind to each their outer parameter "scores"
// let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100])
// console.log(fn_cuttingPoint1(50)) //[ 50, 80, 100 ]
// let fn_cuttingPoint2 = getScoringPass([-10, -15, -53, -97, -32])
// console.log(fn_cuttingPoint2(-30)) //[ -10, -15 ]

function test(){
    console.log("hi im 1 st floor")
    return function test2(){
        console.log('hi im 2 nd floor')
    }
}
const t1 = test()
