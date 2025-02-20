const myarr=[0,1,2,3,4,5] //numk based array
const heros=["tonystark","hulk"]; //string based array
const myarr2=new Array(1,2,3,4)

// console.log(myarr[0]); 
// console.log(myarr2); 
//Array method
myarr.push(6)
// console.log(myarr) //value add in myarr
myarr.pop()
// console.log(myarr); 
myarr.unshift(18) //yeh start me add krta h 
// console.log(myarr); 
myarr.shift()
// console.log(myarr); 

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3)); 
const newarr=myarr.join()
// console.log(myarr);
// console.log( typeof newarr);   //string me convert ho gya h
// console.log("A",myarr);  
const myn1=myarr.slice(1,3); //yeh manipulite nhi krta h 
// console.log(myn1);   
// console.log("B",myarr);  

const myn2=myarr.splice(1,3);  //yeh original array ko manipuliate krta h 
// console.log("c",myarr);  
// console.log(myn2);  




