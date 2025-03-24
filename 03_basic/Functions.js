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
// console.log(loginusermess("priyal"))
// console.log(loginusermess())

function calculateprice(val1,val2,...num1){   //rest operator sari vlaue pack krke mujhe de do 
  return num1     // age dot ko hata dege to sird 1 value aayegi 
    
}
console.log(calculateprice(1,333,4444,222))

const user={
  un:"priyal",
  prices:44
}
function handleobj(anyobejct){
  console.log(`username is ${anyobejct.un} and proce is ${anyobejct.price}`)
}
handleobj(user)
const myarr=[200,300,100,500]
function returnsecond(getarr){
  return getarr[1]
}
// console.log(returnsecond(myarr))
console.log(returnsecond([200,400,500,1000]))