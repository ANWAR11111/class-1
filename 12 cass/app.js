// var a = ["cat",'dog','man']
// console.log(a[2]);






// var ar = new Array("cat","dog","tiger")
// console.log(ar[2]);






// // TO ADD ELEMENT IN ARRAY
// ar[4] = "jaami"
// console.log(ar[3])






// TO REMOVE ELEMENT FROM ARRAY
// ar.splice(2,1,"girffhe")
// // yaha 2 pr jo value h usy target kia or 1 means 1 value ko nikala or girrafe insert kra h






// var a;
// for(a=1; a<=10; a++){
//     document.write(a)
// }

// var a;
// for(a=1; a<=10; a+2){
//     document.write(a)
// }


// var a;
// for(initialization,condition,increment){
//     document.write(a)
// }



// for(var i = 0; i < 9; i++){
//     document.write("aya na tu "+" <br>");
// }







// for (var i = 0; i<=10; i++){
//     console.log("2" +"x"+i+ "="   i*2 + "<br>")
// }




// for(var i = 0 ; i<nam.length;i++){
//     console.log(nam[i])
// }





// var nam = ['basit','amir','ali','sufi']
// for(var i = 0; i<nam.length; i++){
//     document.write(nam[i])
// }





// for(var i=1; i<=10; i++){
//     document.write("2"+"x"+ i + "=" 2*i + "<br>")
// }






// for(var a = 1; a<=100; a=a+10){
//     for(var b = a; b<a+10; b++){
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }







// for(var i = 1; i>0;i++){
//     if(i===10){
//         break
//     }
//     console.log("hello jani")
// }







// var cities = ['kara','islam','lah','mul'];
// for(var i = 0; i<cities.length;i++){
//     if(cities[i]==="lah"){
//         alert("city"+ cities[i] + "found")
//     }
//     document.write(cities[i]+"<br>");
// }








// for(var i=0; i<5;i++){
//     for(var j=0; j<3;j++){
//         document.write(i + "Pakistan Zindabad" + "<br>")
//     }
// }






// var a = ["ghous","ali","basit"]
// var b = ["khan", "shah"]
// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length;j++){
//         document.write(a[i] + " "+b[j]+"<br>")
//     }
// }








// for(var i=0 ; i<10; i++){
//     for(var j=0; j < i ;  j++){
//         document.write("*")
        
//     }
//     document.write("<br>")
// }




// var names = "Ghouss"
// console.log(names[0],names[1],names[2])






// var word = prompt("Enter your name ");
// for(var i = word.length; i>=0;i--){
//     console.log(word[i])
// }











// var word = prompt("Enter any name");
// check = "";
// for(var i = word.length-1; i>=0;i--){
//     check += word[i];
// }
// if(check === word){
//     console.log(word + " "+ "is palindrom");

// }










// var name = "muzamil";
// name = name.toUpperCase();
// document.write(name)












// var name = "anwar";
// console.log(name.indexOf("w"))










// var val1 = +prompt("Enter 1 value");
// var val2 = +prompt("Enter 2 value");
// var sign = prompt("Enter operator");
// document.write(val1+sign+val2)
// if(sign === "+"){
//     alert(val1+val2)
// }
// else if(sign === "-"){
//     alert(val1-val2)
// }
// else if(sign === "*"){
//     alert(val1*val2)
// }











// var eq = prompt("Enter eq");
// var num = eq.length;
// for(var i= 0; i<=num;i++){
//     if(eq.slice(i,i+1) === '+' || eq.slice(i,i+1) === '-'){
//         alert("Sign is found")
//     }

// }








// var city = prompt('Enter your city name')
// city =  city.toUpperCase()
// var arr = ['Karachi','Islamabad','Lahore']
// for (var i = 0; i<arr.length; i++){
//     if (arr[i] === city){
//         alert('City Has found')
//     }else{alert('City not Found')}
// }





// var city = prompt('Enter your city name')
// var firstchar = city.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherChar = city.slice(1)
// otherChar = otherChar.toLowerCase()

// var city = firstchar + otherChar;
// console.log(city)

// var arr = ['Karachi','Islamabad','Lahore']
// for (var i = 0; i<arr.length; i++){
//     if (arr[i] === city){
//         alert('City Has found')
//     }else{alert('City not Found')}
// }





// var str = prompt('Enter text here');
// var numChars = str.length;
// for (var i = 0; i < numChars; i++){
//     if (str.slice(i, i + 2) === "  "){
//         alert("double spaces aew found");
//         break;
//     }
// }




// var text = 'affxyf world war II sayfdfgfag'
// var indxNum = text.indexOf('world war II');
// var firstText = text.slice(0,indxNum)
// var replacingText = 'The Secound World War';
// var thirdText = text.slice(indxNum+12)
// console.log(firstText + replacingText + thirdText)



// var a = "Muzamil";
// console.log(a.charAt(4))



// var para = "this is example";
// var para1 = para.replace("example","text");
// para1



// var num  = 1.4;
// var round  = Math.round(num)




// var num = 1.2;
// var round = Math.ceil(num)



// var num = 1.2;
// var round = Math.floor(num)




// var a = Math.random()





// var = prompt("enter heads user name");
// var tailsuer = prompt("enter tails user name");
// var toss = Math.random()*2;var floor(tossconsole.log(floor)
// if(floor ===0){
//     alert("Heads" + headsuser + " win the toss")
// }else{
//     alert("Tails" + tailsuser + " win the toss")

// }





// number to String
// Number("10")
// parseInt("10")




// number to String
// var num =10;
// console.log(num.toString())




// to control decimal Number
// var num = 10.676587575858;
// var cont = num.toFixed(4)