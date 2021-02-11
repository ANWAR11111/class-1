// cont school = "Saylani";

// var obj = {
//     schoolName : school
// }
// console.log(obj)





// ///// TEMPLATE LITERALS  (to remove + sign and do concatinatn)
// let first = "Anwar";
// let last = "Muzamil";
// console.log(`My name is ${first} ${last}`)
// firebase.database.ref(`karachi/





////SPREAD OPERATORS
var student1 = ["anwar","muzmu"]
var student2 = ["ahmed","basit"]
var merge = student1.concat(student2)
console.log(merge)







// SIMILAR TO ABOVE
var student1 = ["anwar","muzmu"]
var student2 = [...student,"ahmed","basit"]
console.log(student2)











////OBJECT DESTRUCTURING  (without ES)
var student = {
    name = "ghaous",
    school = "sylani",
    roll = 123
}
console.log(student.school)











////WITH ES6 /// array me ya obj me
var student = {
    name = "ghaous",
    school = "sylani",
    roll = 123
}

let {name,school,roll} = student;
console.log(name)
console.log(school)
console.log(name)








// TERNARY OPERATORS (Replace of the if else)
var age = 20;
var check = age > 30 ? '30 se bara  he' : '30 se chota he';
console.log(check)









///// AND AND CONDITION
var age = 20;
var check = age > 30 || age < 40 ? '30 se bara  he' : '30 se chota he';
console.log(check)





var bool = false;
var name = bool && "ghous";
console.log(name)






////Synchronous or Asynchronous
setTimeout(function(){     ////<=== this is async javascript
    console.log("number1")
}, 1000);
console.log("number2")
console.log("number3")












////PROMISE
var Promise = new Promise(function(resolve,reject){
    var zinger = "Available"
    if(zinger === "Available"){
        resolve('han bhai khila dia')
    }else{
        reject('ni khilaya')
    }
})
Promise.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)

})















/////REAL EXAMPLE OF PROMISE

var Promise = new Promise(function(resolve,reject){
    firebase.database().ref('users').on("child_added",function(data){
    if(data.val()){
        resolve(data.val())
    }else{
        reject('something went wrong')
    }
})
Promise.then(function(data){
    console.log("Resolve===>".data)
})
.catch(function(error){
    console.log("Error===>".error)
})