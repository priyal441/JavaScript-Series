const user={
username:"priyal",
price:999,

welcomemessage:function(){
    console.log(`${this.username },welcome to website`)
    // console.log(this);
}
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
