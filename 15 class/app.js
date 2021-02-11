//for loop
// for(var a = 0; a<10 ; a++){
//     console.log(a);
// }




///while loop
// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }



//do while loop
// var c = 0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10);

// java script hum html ki file me b laga skty hn script ka tag use kr k
//or body me kahn b use kr skty hn






// function nami(){
//     var nam = document.getElementById("nam");
//     document.write(nam.value)
//     nam.value = ""
// }



// function setName(){
//     var namm = document.getElementById("nam")
//     nam.value = "Muzamil "
// }
// setName()







// function paraa(){
//     var para = document.getElementById("para")
//     para.innerHTML = "This is an example"  /// inner html se para me id lety hen 
// }
// paraa()




// function foo(){
//     alert("Hello World")
// }
// foo()



// function foo(){
//    var a=2+2;
//    alert(a)
// }


// function fooo(greet){
//     alert(greet)
// }




// function clicki(){
//     alert("Click")
// }


// background-color: red  //for CSS
// backgroundColor = 'red'  //for JavaScript


// function getName(){
//     var name = document.getElementById("xyz");
//     alert(name.value)

//     name.value=""
// }



// function setName(){
//     var name = document.getElementById('xyz');
//     name.value = "Muzamil"
// }

// setName()



function getNumber(num){
    var result = document.getElementById('result');
    result.value +=num; //// Yahan +=num concatinate krny k liye laga he taky val change na ho
}

function clearResult(){
    var result = document.getElementById('result');
    result.value = ""
}


function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}




// var a = "Z";
// alert.charCodeAt()