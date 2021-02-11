// var a = prompt("Enter your age","your age is:");
// alert(a)






// PROMPT hamesha by defaut string value leti he

// var a = prompt("Enter value","value is")
// var b = a + 10;
// console.log("the output is",+ " " + b)







// var a = 5;
// var c = a+26;
// console.log(c)







// var b = 10 % 3;
// console.log(b)








// var x = 5;
// var y = x++ ++x + --x + x-- -x;
// console.log(y)





// var a = +prompt("Enter value","value after addition is:");
// var b = a + 26;
// alert(b);





// var x = "Enter value";
// var y = "your val is:";
// var a = +prompt(x,y);
// var b = 30+a;
// document.write("The output is"+ " " +b);  // SCREEN PR PRINT K LIYE




//CONDITION STATEMENT

// var age = 16;
// if(age == 16){
//     document.write("Yor are not eligible")
// }
// else{
//     document.write("you are eligible")
// }








// var age = +prompt("enter your age");
// if(age == 17){
//     document.write("You are not eligible");
// }
// else if(age < 17){ // ELSE IF tb hoga jb multiple statement hon
//     alert("Warning");
// }   
// else{
//     document.write("You are eligible");
// }







// var age = +prompt("Enter your age");
// var genfer = prompt("Enter your gender");
// if(age>18 && genfer=="male"){
//     alert("Welcome");
// }
// else{
//     alert("you are not Allowed");
// }





// var age = +prompt("Enter your age");
// var genfer = prompt("Enter your gender");
// if(age>18 && genfer||"male"){
//     alert("Welcome");
// }
// else{
//     alert("you are not Allowed");
// }







// var a = "5";
// if(a==5){    // Double equal to type check ni kerta ye true h
//     alert("True")
// }
// else{              /// Triple Equal to type b check kre aga
//     alert("Fales")
// }









// var a = 10;
// if(a !== 15){
//     document.write("Correct")
// }
// else{
//     document.write("Incorrect")
// }









// var percent = +prompt("Enter your %");
// if(percent>=80 && percent<=100){
//     document.write("A+");
// }
// else if(percent>=70 && percent<=80){
//     document.write("A");
// }
// else{
//     document.write("Please enter correct %")
// }








// var name = "acs";
// var name = "ac\ss";
// var name = "acfess";
// console.log(name);

// //          OR YOU CAN WRITE


// var students = ["ali","basit","mughul"]
// console.log(students[0])







var students = [];
students[0] = "ali";
students[2] = "aluu";
students[1] = "alim";
console.log(students)



// FOR REMOVE FROM LIST

students.pop()
console.log(students)



// // FOR ADD In The  LIST
// students.push("Bilal")





// FOR REMOVE FROM START OF LIST
students.shift()




// FOR ADD FROM START OF LIST
students.unshift("bilal","zubair")
console.log(students);





// FOR split FROM LIST or Remove some element
students.splice(0,2,"bilal k");





// SLICE FOR SOME ELEMENTS COPY
var copyStudents = students.slice(0,3);
console.log(copyStudents)
