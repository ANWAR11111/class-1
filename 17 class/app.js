// // setInerval => repeatively running
// //setTimeout => after some time

// // function timer(){
// //     console.log("running..")
// // }
// // setInterval(timer,1000) 


// // function timeOut(){
// //     console.log("stop..")
// // }
// // setTimeout(timeOut,3000) 





// function ruin(){
//     console.log("runnnn")
// }
// // setInterval(ruin,1000)
// setTimeout(ruin,6000)


// var count = 0;
// var interval;
// function countt(){
//     count++
//     console.log(count)
// }
 
// interval = setInterval(countt,1000)

// setTimeout(function() {
//     clearInterval(interval)
// }, 5000);



// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }
// interval = setInterval(timer,1000) 
// setTimeout(function() {
//     clearInterval(interval)
// },5000)






var msec = 0;
var sec = 0;
var min = 0;
var msecHeading = document.getElementById('msec');
var secHeading = document.getElementById('msec');
var minHeading = document.getElementById('msec');
var interval;
function timer(){
    msec++
    if(msec = 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
}
























// //TO MAKE STOP WATCH
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
if(msec >=100){
    sec++
    secHeading.innerHTML = sec;
    msec = 0;
}else if(sec >=60){
    min++
    sec = 0
    minHeading.innerHTML = min
    sec = 0;
}
}
function start(){
     interval = setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}










// console.log(document.childNodes[1].childNodes[1].childNodes[0])



// var a = document.getElementById('papa')
// console.log(a.childNodes[1])







// var a = document.getElementById('papa')
// console.log(a.firstChild)






// var a = document.getElementById('papa')
// console.log(a.nextSibling)








// var a = document.getElementById('secoundson')
// console.log(a.parentNode)




// // agr node type element ho to 1 ae ga agr junk text hoga to 3 ae ga

// var a = document.getElementById('firstson')
// console.log(a.nodeType) // nodename b maloom ker skty hn






// var a = document.getElementById('secoundson')
// console.log(a.childNodes[0].nodeValue)
