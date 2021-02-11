// var obj ={
//     name : "ghous"
// }
// console.log("name")







// var obj={   // ye obj h
//     name :"muzamil"
// }
// console.log(obj.name)





// 
// var stud1 = {
//     name: "ghous",
//     roll: 123
// }

// var stud2 = {
//     name: "basit",
//     roll: 123
// }









// function Student(name,roll){
//     this.name = name; // Object constructor function jb b use kren gy to 1st word capital krengy to wo constructor func hoga
//     this.roll = roll
// }
// var student1 = new Student("ghous",123)
// var student1 = new Student("ghous",123)
// console.log("roll" in student2)














function saveData(){
    var name = document.getElementById('name')
    var roll = document.getElementById('roll')

    var student = {
        name : name.value,
        roll : roll.value,
        key : key,
    }
    
    console.log(student)
    firebase.database().ref('student/' + key).push(student)

}

function getFirebaseData(){
    firebase.database().ref('student').once('value',function(data){
    firebase.database().ref('student').on('child_added',function(data){
        console.log(data.val())
    })

 getFirebaseData()
















 function editFirebaseData(){
     firebase.database().ref('student/-MNESa_-3lVgyn5WwnEv').set({
         key : '-MNESa_-3lVgyn5WwnEv',
         name : 'Muzamil',
         roll : '123',
     })
 }

 editFirebaseData()










// function removeFirebaseData(){
//     firebase.database().ref('student/-MNESa_-3lVgyn5WwnEv').remove()
// }
// removeFirebaseData()










//Prototype
// var student2 = {
//     name : "basit",
//     roll : 321
// }
// for(var prop in student2){ // jo b prop hp gj la kr de ga or save jkrwae ga 
//     console.log("roll") to vh
// }


// hasOwnProperty



//Prototype
// var student2 = {
//     name : "basit",
//     roll : 321
// }
// for(var key in student2){ // jo b prop ho gj la kr de ga or value b save jkrwae ga 
//     console.log(student2[key])
// }





// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
//     this.getName = function(){
//         return this.name;

//     }

// }

// var student1 = new Student("ghous",123)
// Student.prototype.getName = function()
//{
//    return this.name
//}







// function saveData(){
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");

//     var student = {
//         name: name.value,
//         roll: roll.value
//     }
//     console.log(student)}
//     var key = firebase.database().ref('student').push().key

//     console.log(key)
//     firebase.database().ref('student').child().set(student) // set data store krny k liye h










// function saveData(){
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");

// var key = firebase.database().ref('student').push().key

//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key : key

//     }

//     firebase.database().ref('student/' + key).child().set(student) // set data store krny k liye h
// }



// function getFirebaseData(){
//     firebase.database().ref('student').once('value',function(data){
//         console.log(data.val()) // val for proper data
//     })
// }

// getFirebaseData()