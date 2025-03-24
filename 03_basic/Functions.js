function saymyName(){
    console.log("h")
    console.log("i")
    console.log("i")
}// /saymyName()
// function addtwonum(num1,num2){
// // console.log(num1+num2)
// }
function addtwonum(num1,num2){
  let result=num1+num2
//   console.log("Hitesh")
  return result
//   console.log("Hitesh") //yeh vali value print nhi hogi because return k bad koi bhi value print nhi hogi
    }
// addtwonum(2,2)
const result=addtwonum(3,5)
// console.log("Result",result)

function loginusermess(un="sam"){
    if(un===undefined){
        console.log("please enter a UNSENAME")
        return 
    }
    return `${un}just logged in`
}
console.log(loginusermess("priyal"))
console.log(loginusermess())