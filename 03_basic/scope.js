
// let a=300
// if(true){
// let a=10
// const b=20
// console.log(a)
// // var c=30
// }
// console.log(a)
// // console.log(c) // yeh isliye print ho rha h kuki isme var lga hua h jo scope bahr value de rha h jo problem hh 
// // console.log(b)

//nested  scope
function one(){
    const username="priyal"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}