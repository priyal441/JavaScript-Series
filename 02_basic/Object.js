//singleton
//object literals
const mysum=Symbol("key1") //symbol declare kiya hh
const jsuser={
    name:"priyal",
    age:18,
    mysym:"mykey1",
    location:"mathura",
    email:"priyalgupta4441@gmail",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"]) //age ham jsuser k bad .laga k email likhe aur[ yeh lagye to error aa rhe h isliye hame . nhi lagana hh]
console.log(jsuser[mysym])
 //type iska string h agr sy,bol ki trh chahiye to [swaure bracket me likhoo]
// "fullnanme":"priyal gupta"
// console.log(jsuser.fullname) //wrong way

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());