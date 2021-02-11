let obj = {
    name : "ghous",
    email : "hsdgfhg",
}
let name = obj.name;
let email = obj.email;
console.log(name)








// let obj = {
//     name : "ghous"
//     email : "hsdgfhg"
// }
// let {name,email}= obj;
// console.log(email)







// ////Array Destucturing

// /////WithOut ES6
// let arr = ['ghous','basit']
// let name1 = arr[0];
// let name2 = arr[1];
// console.log(name2)







// ////Array destructuring
// /////ES6
// let arr = ['ghous','basit']
// let [name1,name2] = arr;
// console.log(name1)







// ///Function in ES6
// var foo = function(){
//     console.log('hello');
// }
// foo()







// ////Arrow Function
// let hello = () => {
//     console.log("I am arrow function")
// }
// hello()















// let hello = (name1,name2) => {
//     console.log(`Hello ${name1} and ${name2}`)
// }
// hello('muzamil','basit')















// let hello = () => {
//     return "muzamil"
// }
// console.log(hello())

   


// ///SAME AS ABOVE
// let hello = () =>  "muzamil" //// kuch b return krny k liye direct likh skty hen
// console.log(hello())







// //// ARROW FUNC parent ka this leta he normal func me us element se leta he


// //// short function
// var () => "Muzamil"
// console.log(())





// ////Call Back func
// setInterval(() => console.log("hello"),1000)







// ////CallBACK func
// ////TO GET DATA FROM FIRE BASE
// let getData = (render)=>{
//     firebase.database().ref('/').on("child_added",(data)=>{
//         render(data.val())
//     })
// }
// getData(render)
// let render = (data)=>{
//     console.log(data)
// }












// // ////higher order func jo func apny parameter me dusra func call kr raaha ho



// // let getData = (render)=>{
// //     setTimeout(() => {
// //         render("muzamil")
// //     }, 3000);
// // }
// // getData(render)
// // let render = (name)=>{
// //     console.log(name)
// // }
// // getData(render)














// ////Higher-order func
// let arr = [{name: "muzamil", age: 20}, {name: "muzail", age: 25}]
// let filter = arr.filter(a)=> console.log((a))
// console.log(filter)




// let arr = [{name: "muzamil", age: 20}, {name: "muzail", age: 25}]
// let filter = arr.filter(a)= (function(a){
//     return true         ///// jb return true kren gy too array k andr k puri value show kre ga
// })
// console.log(filter)







// let arr = [{name: "muzamil", age: 20}, {name: "muzail", age: 25}]
// let filter = arr.filter(function(a){
//     return a.age === 20
// })
// console.log(filter)













// let arr = [{name: "muzamil", age: 20}, {name: "muzail", age: 25}]
// let filter = arr.filter(a =>a.age=== 20)
// console.log(filter)












// ////Searching Method
// let name = "Muzamil"
// let Search  = "Mu"
// if(name.startsWith(search)){
//     console.log(name)
// }




// let name = "Muzamil"
// let Search  = "l"
// if(name.endsWith(search)){
//     console.log(name)
// }









// ////ARRAY MAP
// ///// purani error ko update kr k new array bnata he
// let arr = [2,3,4,5];
// let multi = arr.map(a => a*2) ////puri array ko 2 se multiply krwa de ga
// console.log(multi)





// let arr = [{name: "anwar"},{name: "anwar"}];
// let multi = arr.map(a => a.name = 'umair')
// console.log(multi)









// ////To enetr data in table using map

// let arr = [{name: "anwar"},{name: "anwar"}];
// let multi = arr.map(a =>{ 
//     document.getElementById('table').innerHTML = a.name
// })
// console.log(multi)












// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("Result=", data))
//   .catch(err => console.log("error=", err))








// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//     console.log(data)
// }













// ///// ES6 CLASSES

// /////This is constructor

// function Student(){
//     this.name = name;
//     this.email = email;
// }
// let student1 = new Student("ghous","email@.com")
// console.log(student1)















// //// From ES6 classes Constructoer
// class Student{
//     constructor(){
//         this.name = name;
//         this.name = email;
//     }
// }
// class School extends Student{
//     constructor(name, email, school){
//         super(name,email)
//         this.school = school
//     }
// }
// let student1 = new School('anwar','muzamil@gamial,com',"school")
// console.log(student1)

















// fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(function(result){
//          console.log("result = ",result)
// })
// .catch(function (erro) {
//     console.log("error=", error)
    
// })





















// function getData(){    
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(function(result){
//     example(result)
// })
// .catch(function (erro) {
// console.log("error=", error)

// })
// ////UPER  WALY FUNC KA DATA NECHY KESY GET KREN
// getData()
// function example(data){
//     console.log("data",data)
// }
// }










// ////BY PROMISE

// // function getData(){
// //     let promise = new Promise(function(resolve, reject){
// //         fetch('https://jsonplaceholder.typicode.com/todos/1')
// //              .then(response => response.json())
// //              .then(function(result){
// //                  resolve(result)
// //              })
// //              .catch(function(error){
// //                  reject(error)
// //     })
// // promise
// // .then(function(result){
// //     console.log("result", result)
// // })
// // .catch(function(error){
// //     console.log("error", error)
// // })
// //     }
// // getData()















// // 
// () => {
//     let promise = new Promise(function (resolve, reject) {
//         fetch('https')
//             .then(response => response.json())
//             .then(function (data) {
//                 resolve(data);
//             })
//             .catch(function (error) {
//                 reject(error);
//             });
//     });
//     promise
//         .then(function (data) {
//             console.log("data =>", data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }













// async function getData(){
//     let promise = new Promise(function(resolve,reject){
//         fetch('https')
//         .then(response => response.json())
//         .then(function(data){
//              resolve(data);
//     })
//     .catch(function(error){
//              reject(error)
//     })
// })
// let data = await promise;
// console.log(data)
// }














// //// ADD TO CART FunctionALITY
// function add_to_cart(){
//     var imgage = document.getElementById('image');
//     var price = document.getElementById('price');
// var product = {
//     imgage,
//     price
// }
// var arr = [];
// arr.push(product)
// localStorage.setItem("cart",arr)
// }















function sign() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    // Signed in
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage)

  });
}









function login(){
    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');
    // console.log(email.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    // Signed in 
    // ...
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)

  });
}