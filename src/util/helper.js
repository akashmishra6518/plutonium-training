const date=new Date()
const month=date.getMonth()
const d=function printDate(){
    console.log(date);
}
let m=function printMonth(){
    console.log(month)
}
let gbi=function getBasicInfo(){
console.log("Plutonium ,W3D3,the topic for today is Nodejs module system")
}
module.exports.D=d
module.exports.M=m
module.exports.GBI=gbi