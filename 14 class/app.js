//  var a = new Date();
// console.log(a)
// a.toString()






// var b = a.toString();
// var c = b.slice(0,3)
// console.log(c)

// var c = b.toString();
// var b = a.slice(0,3)


// var dob = new Date("July 31,1997")
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili-dobmili
// var diffyear = diff/(1000*60*60*24*30*12)
// var acc = Math.floor(diffyear)
// document.write(acc)


// var d = a.getDay(); ////sunday ka index 0 ae ga
// var d = a.getMonth();
// var d = a.getTime();n //// from 1 jan 1970
// var d = a.getMilliseconds();
// var d = a.getFullYear();
// var d = a.getSeconds();
// var d = a.getHours();


// var dob = new Date(prompt("Enter your date of birth"," july 31,1995"))
// var dobmili = dob.getTime()
// console.log(dobmili)
// var today = new Date();
// var todaymili = today.getTime();
// console.log(todaymili)
// var diff = tpdaymili - dobmili
// console.log(diff)




// var diffyear = diff/(1000*60*6024*30*12)
// console.log(diffyear)



// var accuage = Math.floor(diffyear)
// console.log(accuage)




// To make function

// function greet(){
//     alert("Hello Boss")
// }


// greet();   // to call rthe func




// function add(a,b,c){
//     alert(a+b+c)
// }

// add(5,6,99);




// function foo(a,b){
//     return a+b
// }
// foo(console.log(2,3));
// foo(console.log(4,3));
// foo(console.log(5,3));






// function add(a,b,c){
//     var z = a+b+c
//     return z;
// }
// add(4,5,6);

// local variable srf func k ander chalta h bhr ni chala skty



// var  h = 15;
// function add(a,b,c){
//  //   var f = 15;   // ye f local var he jo func me h
//     alert(h);
//     var z = a+b+c
//     return z;
// }
// // return jb lety hn to variable se save krty hn 
// var g = add(5,8,4);
// alert(g);






// function ageCal(){
// var dob = new Date(prompt("Enter your date of birth"," july 31,1995"))
// var dobmili = dob.getTime()
// console.log(dobmili)
// var today = new Date();
// var todaymili = today.getTime();
// console.log(todaymili)
// var diff = tpdaymili - dobmili
// console.log(diff)
// }

// ageCal();




// function first(){
//     alert("hello world")
// }

// first();
// first();
// first();
// first();



// // Parameters
// function first(a,b){
//     alert(a + b)
// }
// // arguments 
// first(2,3)





// function add(a,b){
//     return a+b
// }
// document.write(add(3,5) +"<br>")
// document.write(add(6,5) +"<br>")
// document.write(add(3,5))








// function foo(){
//     var a  = "ALI"
// }
// console.log(a)


// / Parameters
// function first(a,b){
//     return b+a
// }
// // arguments 
// console.log(first(2,3))

// console.log(first(4,8))

// console.log(first(5,9))





// function foo(){
//     var a = "mizz";
//     console.log(a);
// }




// var a = "mizz";
// function foo(){
//     a = "ahmed"    
// }
// console.log(a); // function jb call hoga to chaly ga







// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }else{
//         return "Incorrect Operator"
//     }
// }
// var result   = calc(5,"-",5);
// var result1  = calc(5,"+",5);
// var result2  = calc(5,"$",5);
// console.log(result)
// console.log(result1)
// console.log(result2)







// function faa(a,b=5){
//     return a + b;
// }
// console.log(faa(2))





// function faa(a,b=5){
//     return a + b;
// }
// console.log(faa(2,5))












// function foo(a,b){
//     return a + b 
// }
// console.log(foo(1))



// function foo(a,b = 3){ // its called default parameter
//     return a + b 
// }
// console.log(foo(1))




// function foo(a,b = 3){ // its called default parameter
//     return a + b 
// }
// console.log(foo(1,5)) //6





// function foo(){ // its called default parameter
  
// }
// console.log(foo(1,5)) // undefined






/// SWITCH SAME AS FUNCTION AND WORK AS IF ELSE in this if is replace by case and else is replace by default and also used break
// var name = "Muzzi"

// switch(name)  {
//     case"Muzzi":
//         alert("Hello Muzzi")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:
//         alert("Helloooo")
// }