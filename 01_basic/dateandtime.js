let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let mycreatedate=new Date(2025,0,23) //0 se start hote h month h js m 
//  let mycreatedate =new Date(2025,0,23,5,3)
// let mycreatedate =new Date("2025-01-01")
let mycreatedate =new Date("01-14-2025")
// console.log(mycreatedate.toLocaleString())

let myTimestamp=Date.now()
// console.log(myTimestamp) 
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));
 let newdate=new Date()
 console.log(newdate.getMonth()+1) //js me index 0 s hoti h or ham 0 +1 kr skte h
 console.log(newdate.getDay())
 console.log(newdate.toLocaleString('default',{
     weekday:"long"
 }))